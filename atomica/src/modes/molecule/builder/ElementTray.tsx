import { useState } from 'react';
import { ELEMENTS } from '../../../data/elements';
import { CATEGORY_COLORS } from '../../../data/constants';

export function ElementTray() {
  const [expanded, setExpanded] = useState(false);
  
  // Show first 36 (H to Kr) by default
  const displayedElements = expanded ? ELEMENTS : ELEMENTS.slice(0, 36);

  const handlePointerDown = (e: React.PointerEvent, el: typeof ELEMENTS[0]) => {
    // Prevent default scroll
    e.preventDefault();
    
    // We will fire a custom event or let the workspace listen globally,
    // but the easiest way in React without deep prop drilling is to dispatch a custom event
    // with the element data, so the BuilderWorkspace can catch it and start a drag.
    // Since we are dragging FROM the tray TO the canvas, we need to spawn a 'ghost' atom.
    
    const event = new CustomEvent('atom-drag-start', {
      detail: {
        element: el,
        clientX: e.clientX,
        clientY: e.clientY,
        pointerId: e.pointerId
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="h-full flex flex-col bg-panel border-r border-border">
      <div className="p-4 border-b border-border bg-black/20">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Elements</h2>
        <p className="text-xs text-text-dim mt-1">Drag onto canvas to build</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 content-start grid grid-cols-3 gap-2">
        {displayedElements.map(el => {
          const color = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['unknown'];
          return (
            <div
              key={el.atomicNumber}
              onPointerDown={(e) => handlePointerDown(e, el)}
              className="relative aspect-square flex flex-col items-center justify-center rounded-lg border border-border/50 cursor-grab hover:scale-105 transition-transform select-none touch-none bg-black/40"
              style={{ 
                borderColor: color,
                boxShadow: `inset 0 0 10px ${color}15`
              }}
            >
              <div className="absolute top-1 left-1.5 text-[10px] text-text-dim font-mono">{el.atomicNumber}</div>
              <div className="text-xl font-bold" style={{ color }}>{el.symbol}</div>
              <div className="absolute bottom-1 right-1.5 text-[9px] bg-black/50 px-1 rounded text-text-dim font-mono">
                v:{el.valenceElectrons}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 border-t border-border bg-black/20">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-text-dim transition-colors"
        >
          {expanded ? 'Show Basic (1-36)' : 'Show Full Table (1-118)'}
        </button>
      </div>
    </div>
  );
}
