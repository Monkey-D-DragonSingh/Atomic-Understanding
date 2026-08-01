import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { MoleculeViewer } from '../../components/three/MoleculeViewer';
import { SkeletalView } from '../../components/two/SkeletalView';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { Badge } from '../../components/ui/Badge';

export function CompoundVisualizer() {
  const { compoundView, setCompoundView, activeCompound } = useAppStore();
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Safe even when activeCompound is null (undefined = real geometry, default)
  const has3DCoords = !activeCompound || activeCompound.has3DCoords !== false;

  useEffect(() => {
    if (activeCompound && !has3DCoords && compoundView !== 'skeletal') {
      setCompoundView('skeletal');
    }
  }, [activeCompound, has3DCoords, compoundView, setCompoundView]);

  // ✅ Early return moved AFTER all hooks
  if (!activeCompound) return null;

  return (
    <div className="relative w-full h-full flex flex-col bg-bg/50 overflow-hidden">
      
      {/* Top Bar Overlay — moved from top-4 to top-16 so it sits below the
          Gallery/Interactive Builder switcher rendered above this component
          in MoleculeMode.tsx, instead of overlapping it on the same row. */}
      <div className="absolute top-16 left-4 right-4 z-10 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">
          <Badge variant={has3DCoords ? 'accent' : 'warning'}>
            {has3DCoords ? '✓ Real 3D geometry' : '⚠ Schematic layout only'}
          </Badge>
        </div>
        
        <div className="w-[340px] max-w-[60vw] pointer-events-auto">
          <SegmentedControl
            options={[
              { label: 'Skeletal', value: 'skeletal' },
              { label: 'Ball & Stick', value: 'ball-stick', disabled: !has3DCoords },
              { label: 'Space Fill', value: 'space-fill', disabled: !has3DCoords },
            ]}
            value={compoundView}
            onChange={setCompoundView}
            size="sm"
          />
        </div>
      </div>

      {/* Viewport */}
      <div className="flex-1 w-full h-full" onClick={() => setHighlightId(null)}>
        {compoundView === 'skeletal' ? (
          <SkeletalView atoms={activeCompound.atoms} bonds={activeCompound.bonds} />
        ) : (
          <MoleculeViewer 
            atoms={activeCompound.atoms} 
            bonds={activeCompound.bonds} 
            viewMode={compoundView} 
            highlightId={highlightId}
            onAtomClick={setHighlightId}
            resetTrigger={resetTrigger}
          />
        )}
      </div>

      {/* Bottom Controls */}
      {compoundView !== 'skeletal' && (
        <div className="absolute bottom-4 right-4 z-10">
          <button 
            onClick={() => setResetTrigger(t => t + 1)}
            className="px-3 py-1.5 bg-black/60 border border-white/10 rounded hover:bg-black/80 transition-colors text-xs text-text-dim backdrop-blur"
          >
            Reset View
          </button>
        </div>
      )}
    </div>
  );
}