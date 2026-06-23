import { useEffect, useRef, useState, useCallback } from 'react';
import { useAppStore, PlacedAtom, PlacedBond } from '../../../store/useAppStore';
import { ELEMENTS } from '../../../data/elements';
import { bondsNeeded, classifyBond } from '../../../lib/chemistry';
import { CPK_COLORS, COVALENT_RADII } from '../../../data/constants';
import { searchCidByName } from '../../../lib/pubchem'; // Using for recognition

const BOND_DISTANCE = 120; // pixels
const BREAK_DISTANCE = 160; // pixels
const ATOM_BASE_RADIUS = 25;

interface DragState {
  atomId: number | null;
  offsetX: number;
  offsetY: number;
  isNewFromTray?: boolean;
}

export function BuilderWorkspace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { canvasAtoms, setCanvasAtoms, canvasBonds, setCanvasBonds, setActiveCompound } = useAppStore();
  
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [nextAtomId, setNextAtomId] = useState(1);
  const [nextBondId, setNextBondId] = useState(1);

  const [warningMessage, setWarningMessage] = useState<{ text: string, x: number, y: number } | null>(null);

  // Recognition logic
  const attemptRecognition = useCallback(() => {
    // Complex molecule recognition will go here.
    // For now, simple matching.
  }, [canvasAtoms, canvasBonds, setActiveCompound]);

  useEffect(() => {
    attemptRecognition();
  }, [canvasAtoms, canvasBonds, attemptRecognition]);

  // Global event listener for tray drags
  useEffect(() => {
    const handleTrayDrag = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const el = detail.element as typeof ELEMENTS[0];
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const newAtom: PlacedAtom = {
        id: nextAtomId,
        symbol: el.symbol,
        x: detail.clientX - rect.left,
        y: detail.clientY - rect.top,
        bonds: [],
        bondsUsed: 0
      };

      setCanvasAtoms([...canvasAtoms, newAtom]);
      setNextAtomId(n => n + 1);
      
      setDragState({
        atomId: newAtom.id,
        offsetX: 0,
        offsetY: 0,
        isNewFromTray: true
      });
      
      // Auto-capture pointer for the window so we can drag immediately
      // Actually React synthetic events are hard to transfer capture, so we listen on window
    };

    window.addEventListener('atom-drag-start', handleTrayDrag);
    return () => window.removeEventListener('atom-drag-start', handleTrayDrag);
  }, [canvasAtoms, nextAtomId, setCanvasAtoms]);


  // Pointer Events on Canvas
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find clicked atom (reverse order for top-most)
    for (let i = canvasAtoms.length - 1; i >= 0; i--) {
      const atom = canvasAtoms[i];
      const dx = x - atom.x;
      const dy = y - atom.y;
      if (Math.sqrt(dx * dx + dy * dy) <= ATOM_BASE_RADIUS) {
        setDragState({ atomId: atom.id, offsetX: dx, offsetY: dy });
        (e.target as Element).setPointerCapture(e.pointerId);
        return;
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState || !dragState.atomId) return;
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCanvasAtoms(prev => prev.map(a => 
      a.id === dragState.atomId 
        ? { ...a, x: x - dragState.offsetX, y: y - dragState.offsetY }
        : a
    ));
    
    checkBonding(dragState.atomId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragState) {
      (e.target as Element).releasePointerCapture(e.pointerId);
      setDragState(null);
    }
  };

  const checkBonding = (movingId: number) => {
    // Bonding logic will be implemented here
  };

  // Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.05;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw Bonds
      canvasBonds.forEach(bond => {
        const from = canvasAtoms.find(a => a.id === bond.from);
        const to = canvasAtoms.find(a => a.id === bond.to);
        if (!from || !to) return;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.lineWidth = 4 * bond.order;
        ctx.strokeStyle = '#4B5563';
        ctx.stroke();
      });

      // Draw Atoms
      canvasAtoms.forEach(atom => {
        const el = ELEMENTS.find(e => e.symbol === atom.symbol);
        const color = el ? (CPK_COLORS[el.symbol] || '#FF1493') : '#888';
        
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, ATOM_BASE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = '#1A1D24'; // bg color
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.font = 'bold 20px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(atom.symbol, atom.x, atom.y);

        // Draw slots
        const capacity = bondsNeeded(atom.symbol);
        ctx.fillStyle = '#9CA3AF';
        ctx.font = '10px monospace';
        ctx.fillText(`${atom.bondsUsed}/${capacity}`, atom.x, atom.y + 35);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasAtoms, canvasBonds]);

  // Window pointer move/up for tray drags
  useEffect(() => {
    const handleWinMove = (e: PointerEvent) => {
      if (dragState?.isNewFromTray && dragState.atomId && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCanvasAtoms(prev => prev.map(a => 
          a.id === dragState.atomId 
            ? { ...a, x: e.clientX - rect.left, y: e.clientY - rect.top }
            : a
        ));
        checkBonding(dragState.atomId);
      }
    };
    const handleWinUp = () => {
      if (dragState?.isNewFromTray) {
        setDragState(null);
      }
    };

    if (dragState?.isNewFromTray) {
      window.addEventListener('pointermove', handleWinMove);
      window.addEventListener('pointerup', handleWinUp);
    }
    return () => {
      window.removeEventListener('pointermove', handleWinMove);
      window.removeEventListener('pointerup', handleWinUp);
    };
  }, [dragState, canvasAtoms]); // checkBonding needs latest state ideally, will refactor

  return (
    <div className="flex-1 relative bg-bg" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="w-full h-full touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTIwMCAyMDBoMnYyaC0yem01MC01MGgydjJoLTJ6bS0xMDAtMTBoMnYyaC0yeiIvPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none" />
      
      {warningMessage && (
        <div 
          className="absolute bg-red-500/20 border border-red-500/50 text-red-200 text-xs px-2 py-1 rounded animate-fade-in pointer-events-none"
          style={{ left: warningMessage.x, top: warningMessage.y - 40, transform: 'translateX(-50%)' }}
        >
          {warningMessage.text}
        </div>
      )}
    </div>
  );
}
