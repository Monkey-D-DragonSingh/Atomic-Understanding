import React, { useEffect, useRef, useState } from 'react';
import { MoleculeAtom, MoleculeBond } from '../../types/molecule';
import { CPK_COLORS } from '../../data/constants';

interface SkeletalViewProps {
  atoms: MoleculeAtom[];
  bonds: MoleculeBond[];
}

export function SkeletalView({ atoms, bonds }: SkeletalViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  // 2D Canvas rendering logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas exactly to container
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // FIX: Always reset transform before scale(dpr,dpr) to prevent accumulation blur
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    
    // Clear
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (atoms.length === 0) return;

    // Determine 2D projection bounds (we only need x,y)
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    atoms.forEach(a => {
      if (a.x < minX) minX = a.x;
      if (a.x > maxX) maxX = a.x;
      if (a.y < minY) minY = a.y;
      if (a.y > maxY) maxY = a.y;
    });

    const molWidth = maxX - minX;
    const molHeight = maxY - minY;

    // Fit scale (pixels per Ångström) so the molecule fills the canvas with padding.
    const padding = 60;
    const fitScale = Math.min(
      (rect.width - padding * 2) / (molWidth || 1),
      (rect.height - padding * 2) / (molHeight || 1)
    );

    // Cap so tiny molecules (e.g. H2, O2) don't zoom to absurd sizes; allow user zoom on top.
    const finalScale = Math.min(fitScale, 90) * scale;

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;

    // Transform logic: center molecule, apply pan offset
    const project = (x: number, y: number) => {
      // Note: standard 2D chemistry coords often have Y inverted relative to screen
      const px = rect.width / 2 + (x - cx) * finalScale + offset.x;
      const py = rect.height / 2 - (y - cy) * finalScale + offset.y; // inverted Y
      return { px, py };
    };

    // Draw Bonds
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    bonds.forEach(bond => {
      const from = atoms.find(a => a.id === bond.from);
      const to = atoms.find(a => a.id === bond.to);
      if (!from || !to) return;

      const { px: x1, py: y1 } = project(from.x, from.y);
      const { px: x2, py: y2 } = project(to.x, to.y);

      ctx.strokeStyle = '#9CA3AF'; // dim grey for bonds
      ctx.lineWidth = Math.max(2, finalScale * 0.05);

      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.sqrt(dx*dx + dy*dy);
      const nx = -dy / len; // perpendicular unit vector
      const ny = dx / len;

      const order = Math.min(3, Math.max(1, Math.round(bond.order)));
      const gap = ctx.lineWidth * 2;

      ctx.beginPath();
      if (order === 1) {
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      } else if (order === 2) {
        ctx.moveTo(x1 + nx*gap/2, y1 + ny*gap/2); ctx.lineTo(x2 + nx*gap/2, y2 + ny*gap/2);
        ctx.moveTo(x1 - nx*gap/2, y1 - ny*gap/2); ctx.lineTo(x2 - nx*gap/2, y2 - ny*gap/2);
      } else if (order === 3) {
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.moveTo(x1 + nx*gap, y1 + ny*gap); ctx.lineTo(x2 + nx*gap, y2 + ny*gap);
        ctx.moveTo(x1 - nx*gap, y1 - ny*gap); ctx.lineTo(x2 - nx*gap, y2 - ny*gap);
      }
      ctx.stroke();
    });

    // Skeletal (line-angle) convention only makes sense for organic structures with a
    // carbon backbone. For inorganic molecules (H2, O2, H2O, NH3, ...) or anything with
    // no carbon, draw every atom labelled so diatomics/all-hydrogen species aren't blank.
    const hasCarbon = atoms.some(a => a.element === 'C');
    const isSkeletalOrganic = hasCarbon && atoms.length > 2;

    // Draw Atoms
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const fontSize = Math.max(12, finalScale * 0.3);
    ctx.font = `bold ${fontSize}px sans-serif`;

    const drawLabeledAtom = (px: number, py: number, element: string) => {
      // Clear background disc so the label overlaps bonds cleanly
      ctx.fillStyle = '#080B14';
      ctx.beginPath();
      ctx.arc(px, py, fontSize * 0.7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = CPK_COLORS[element] || '#ffffff';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeText(element, px, py);
      ctx.fillText(element, px, py);
    };

    atoms.forEach(atom => {
      const { px, py } = project(atom.x, atom.y);
      const isCarbon = atom.element === 'C';
      const isHydrogen = atom.element === 'H';

      if (!isSkeletalOrganic) {
        // Inorganic / diatomic / tiny molecule: label every atom (incl. H and C)
        drawLabeledAtom(px, py, atom.element);
        return;
      }

      // Organic skeletal convention: show heteroatoms, imply carbons as vertices, hide H.
      if (!isCarbon && !isHydrogen) {
        drawLabeledAtom(px, py, atom.element);
      } else if (isCarbon) {
        // Implicit carbon vertex — a faint dot keeps lone/terminal carbons visible.
        ctx.fillStyle = '#6B7280';
        ctx.beginPath();
        ctx.arc(px, py, Math.max(3, finalScale * 0.08), 0, Math.PI * 2);
        ctx.fill();
      }
      // hydrogens on carbon are hidden (standard skeletal style)
    });

  }, [atoms, bonds, scale, offset]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(s => Math.max(0.1, Math.min(10, s - e.deltaY * 0.001)));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setOffset(o => ({
      x: o.x + (e.clientX - lastPos.x),
      y: o.y + (e.clientY - lastPos.y)
    }));
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.02) 0%, transparent 70%)' }}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <canvas ref={canvasRef} className="absolute inset-0 touch-none" />
      <div className="absolute bottom-4 left-4 text-xs text-text-dim bg-black/40 px-2 py-1 rounded">
        Scroll to zoom · Drag to pan
      </div>
    </div>
  );
}
