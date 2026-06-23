import { useEffect, useRef, useState, useCallback } from 'react';
import { useAppStore, PlacedAtom, PlacedBond } from '../../../store/useAppStore';
import { ELEMENTS } from '../../../data/elements';
import { MOLECULES } from '../../../data/molecules';
import { bondsNeeded, classifyBond } from '../../../lib/chemistry';
import { CPK_COLORS } from '../../../data/constants';

const BOND_DISTANCE = 110; // pixels
const BREAK_DISTANCE = 180; // pixels
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

  const [warningMessage, setWarningMessage] = useState<{ text: string, x: number, y: number, id: number } | null>(null);

  // Recognition logic
  const attemptRecognition = useCallback(() => {
    // For every change, if graph is connected, compute empirical formula and structure
    if (canvasAtoms.length === 0) {
      setActiveCompound(null);
      return;
    }
    
    // Create connection graph
    const graph = new Map<number, number[]>();
    canvasAtoms.forEach(a => graph.set(a.id, []));
    canvasBonds.forEach(b => {
      graph.get(b.from)?.push(b.to);
      graph.get(b.to)?.push(b.from);
    });

    // Simple BFS to check if connected component includes all atoms
    const visited = new Set<number>();
    const queue = [canvasAtoms[0].id];
    visited.add(canvasAtoms[0].id);
    while(queue.length > 0) {
      const curr = queue.shift()!;
      for (const neighbor of graph.get(curr) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    if (visited.size !== canvasAtoms.length) {
      setActiveCompound(null);
      return; // not a single connected molecule
    }

    // Sort element counts to generate formula for matching
    const elementCounts: Record<string, number> = {};
    canvasAtoms.forEach(a => {
      elementCounts[a.symbol] = (elementCounts[a.symbol] || 0) + 1;
    });

    // Rough formula generation. This won't perfectly match Hill system but is good enough for our curated 60 set
    const formulaStrs: string[] = [];
    if (elementCounts['C']) {
      formulaStrs.push(`C${elementCounts['C'] > 1 ? elementCounts['C'] : ''}`);
      delete elementCounts['C'];
      if (elementCounts['H']) {
        formulaStrs.push(`H${elementCounts['H'] > 1 ? elementCounts['H'] : ''}`);
        delete elementCounts['H'];
      }
    }
    for (const [sym, count] of Object.entries(elementCounts).sort((a,b) => a[0].localeCompare(b[0]))) {
      formulaStrs.push(`${sym}${count > 1 ? count : ''}`);
    }
    const derivedHill = formulaStrs.join('');
    
    const matched = MOLECULES.find(m => m.hillFormula === derivedHill);
    if (matched) {
      setActiveCompound(matched);
    } else {
      setActiveCompound(null);
    }
  }, [canvasAtoms, canvasBonds, setActiveCompound]);

  useEffect(() => {
    attemptRecognition();
  }, [canvasAtoms, canvasBonds, attemptRecognition]);

  // Handle Tray Drags
  useEffect(() => {
    const handleTrayDrag = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const el = detail.element as typeof ELEMENTS[0];
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const clientX = detail?.clientX || 0;
      const clientY = detail?.clientY || 0;

      const newAtom: PlacedAtom = {
        id: nextAtomId,
        symbol: el.symbol,
        x: clientX - rect.left,
        y: clientY - rect.top,
        bonds: [],
        bondsUsed: 0
      };

      setCanvasAtoms([...useAppStore.getState().canvasAtoms, newAtom]);
      setNextAtomId(n => n + 1);
      
      setDragState({
        atomId: newAtom.id,
        offsetX: 0,
        offsetY: 0,
        isNewFromTray: true
      });
    };

    window.addEventListener('atom-drag-start', handleTrayDrag);
    return () => window.removeEventListener('atom-drag-start', handleTrayDrag);
  }, [nextAtomId, setCanvasAtoms]);

  // Bonding Engine
  const executeBondingLogic = (movingId: number, x: number, y: number) => {
    const state = useAppStore.getState();
    const atoms = [...state.canvasAtoms];
    const bonds = [...state.canvasBonds];
    
    let stateChanged = false;
    let nextBId = nextBondId;
    let currentWarning = null;

    const movingAtom = atoms.find(a => a.id === movingId);
    if (!movingAtom) return;
    
    // Update moving atom position locally first for calculations
    movingAtom.x = x;
    movingAtom.y = y;

    for (const targetAtom of atoms) {
      if (targetAtom.id === movingId) continue;
      
      const dx = movingAtom.x - targetAtom.x;
      const dy = movingAtom.y - targetAtom.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Are they currently bonded?
      const existingBondIdx = bonds.findIndex(b => 
        (b.from === movingId && b.to === targetAtom.id) || 
        (b.to === movingId && b.from === targetAtom.id)
      );

      if (existingBondIdx !== -1) {
        // BREAK BOND?
        if (dist > BREAK_DISTANCE) {
          const removedBond = bonds[existingBondIdx];
          if (removedBond) {
            bonds.splice(existingBondIdx, 1);
            movingAtom.bonds = movingAtom.bonds.filter(id => id !== removedBond.id);
            targetAtom.bonds = targetAtom.bonds.filter(id => id !== removedBond.id);
            movingAtom.bondsUsed -= removedBond.order;
            targetAtom.bondsUsed -= removedBond.order;
            stateChanged = true;
          }
        }
      } else {
        // FORM NEW BOND?
        if (dist < BOND_DISTANCE) {
          const capM = bondsNeeded(movingAtom.symbol);
          const capT = bondsNeeded(targetAtom.symbol);
          const freeM = capM - movingAtom.bondsUsed;
          const freeT = capT - targetAtom.bondsUsed;
          
          if (freeM > 0 && freeT > 0) {
            // Auto resolve bond order
            const order = Math.min(freeM, freeT, 3);
            const newBond: PlacedBond = {
              id: nextBId++,
              from: movingId,
              to: targetAtom.id,
              order
            };
            bonds.push(newBond);
            movingAtom.bonds.push(newBond.id);
            targetAtom.bonds.push(newBond.id);
            movingAtom.bondsUsed += order;
            targetAtom.bondsUsed += order;
            stateChanged = true;
          } else if (freeM <= 0 || freeT <= 0) {
            // Overbonding rejection
            const culprit = freeM <= 0 ? movingAtom : targetAtom;
            const msg = `${culprit.symbol} can only form ${bondsNeeded(culprit.symbol)} bond${bondsNeeded(culprit.symbol) === 1 ? '' : 's'}`;
            currentWarning = { text: msg, x: culprit.x, y: culprit.y, id: Date.now() };
          }
        }
      }
    }

    if (currentWarning) {
      setWarningMessage(currentWarning);
      setTimeout(() => {
        setWarningMessage(w => w?.id === currentWarning!.id ? null : w);
      }, 2000);
    }

    if (stateChanged) {
      setNextBondId(nextBId);
      setCanvasBonds(bonds);
    }
    // Always update positions
    setCanvasAtoms(atoms);
  };

  // Pointer Events
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const atoms = useAppStore.getState().canvasAtoms;
    for (let i = atoms.length - 1; i >= 0; i--) {
      const atom = atoms[i];
      if (!atom) continue;
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
    const x = e.clientX - rect.left - dragState.offsetX;
    const y = e.clientY - rect.top - dragState.offsetY;

    executeBondingLogic(dragState.atomId, x, y);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragState) {
      try { (e.target as Element).releasePointerCapture(e.pointerId); } catch {}
      setDragState(null);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const atoms = useAppStore.getState().canvasAtoms;
    for (let i = atoms.length - 1; i >= 0; i--) {
      const atom = atoms[i];
      if (!atom) continue;
      const dx = x - atom.x;
      const dy = y - atom.y;
      if (Math.sqrt(dx * dx + dy * dy) <= ATOM_BASE_RADIUS) {
        // Remove atom
        const newAtoms = atoms.filter(a => a.id !== atom.id);
        const newBonds = useAppStore.getState().canvasBonds.filter(b => b.from !== atom.id && b.to !== atom.id);
        // We also need to fix bondsUsed for atoms that were connected to it!
        const removedBonds = useAppStore.getState().canvasBonds.filter(b => b.from === atom.id || b.to === atom.id);
        
        newAtoms.forEach(na => {
          const removed = removedBonds.filter(b => b.from === na.id || b.to === na.id);
          removed.forEach(rb => {
            na.bondsUsed -= rb.order;
            na.bonds = na.bonds.filter(bid => bid !== rb.id);
          });
        });

        setCanvasAtoms(newAtoms);
        setCanvasBonds(newBonds);
        return;
      }
    }
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

      const store = useAppStore.getState();

      // Draw Bonds
      store.canvasBonds.forEach(bond => {
        const from = store.canvasAtoms.find(a => a.id === bond.from);
        const to = store.canvasAtoms.find(a => a.id === bond.to);
        if (!from || !to) return;

        const en1 = ELEMENTS.find(e => e.symbol === from.symbol)?.electronegativity || null;
        const en2 = ELEMENTS.find(e => e.symbol === to.symbol)?.electronegativity || null;
        const type = classifyBond(en1, en2);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.lineWidth = 4 * bond.order;
        
        if (type === 'ionic') {
          ctx.strokeStyle = '#818cf8'; // indigo-400
          ctx.setLineDash([10, 10]);
        } else {
          ctx.strokeStyle = '#4B5563'; // gray-600
          ctx.setLineDash([]);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Animate Electrons
        if (type !== 'ionic') {
          // Covalent oscillating dots
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const len = Math.sqrt(dx*dx + dy*dy);
          const nx = dx / len;
          const ny = dy / len;
          const midX = from.x + dx * 0.5;
          const midY = from.y + dy * 0.5;

          const offset = Math.sin(time * 2) * 15;
          
          ctx.beginPath();
          ctx.arc(midX + nx * offset, midY + ny * offset, 3, 0, Math.PI * 2);
          ctx.arc(midX - nx * offset + ny*8, midY - ny * offset - nx*8, 3, 0, Math.PI * 2); // pair
          ctx.fillStyle = '#4FC3F7';
          ctx.fill();
        }
      });

      // Draw Atoms
      store.canvasAtoms.forEach(atom => {
        const el = ELEMENTS.find(e => e.symbol === atom.symbol);
        const color = el ? (CPK_COLORS[el.symbol] || '#FF1493') : '#888';
        const isWarning = warningMessage && Math.abs(warningMessage.x - atom.x) < 5 && Math.abs(warningMessage.y - atom.y) < 5;
        
        if (isWarning) {
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, ATOM_BASE_RADIUS + 10 + Math.sin(time*10)*5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(atom.x, atom.y, ATOM_BASE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = '#1A1D24';
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = isWarning ? '#ef4444' : color;
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.font = 'bold 20px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(atom.symbol, atom.x, atom.y);

        const capacity = bondsNeeded(atom.symbol);
        ctx.fillStyle = '#9CA3AF';
        ctx.font = '10px monospace';
        ctx.fillText(`${atom.bondsUsed}/${capacity}`, atom.x, atom.y + 35);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [warningMessage]);

  // Window pointer move/up for tray drags
  useEffect(() => {
    const handleWinMove = (e: PointerEvent) => {
      if (dragState?.isNewFromTray && dragState.atomId && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        executeBondingLogic(dragState.atomId, e.clientX - rect.left, e.clientY - rect.top);
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
  }, [dragState]);

  return (
    <div className="flex-1 relative bg-bg" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="w-full h-full touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTIwMCAyMDBoMnYyaC0yem01MC01MGgydjJoLTJ6bS0xMDAtMTBoMnYyaC0yeiIvPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none" />
      
      {warningMessage && (
        <div 
          className="absolute bg-red-500/20 border border-red-500/50 text-red-200 text-xs px-2 py-1 rounded animate-fade-in pointer-events-none z-10 whitespace-nowrap"
          style={{ left: warningMessage.x, top: warningMessage.y - 60, transform: 'translateX(-50%)' }}
        >
          {warningMessage.text}
        </div>
      )}

      {useAppStore.getState().activeCompound && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none">
           <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(250,204,21,0.3)] animate-pulse" />
        </div>
      )}
    </div>
  );
}
