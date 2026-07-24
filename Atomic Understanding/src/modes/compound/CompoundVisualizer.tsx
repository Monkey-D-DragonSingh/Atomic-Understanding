import { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { MoleculeViewer } from '../../components/three/MoleculeViewer';
import { SkeletalView } from '../../components/two/SkeletalView';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { Badge } from '../../components/ui/Badge';

export function CompoundVisualizer() {
  const { compoundView, setCompoundView, activeCompound } = useAppStore();
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  if (!activeCompound) return null;

  return (
    <div className="relative w-full h-full flex flex-col bg-bg/50 overflow-hidden">
      
      {/* Top Bar Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">
          <Badge variant={(activeCompound as any).has3DCoords ? 'accent' : 'warning'}>
            {(activeCompound as any).has3DCoords ? '✓ Real 3D geometry' : '⚠ 2D projection only'}
          </Badge>
        </div>
        
        <div className="w-[340px] max-w-[60vw] pointer-events-auto">
          <SegmentedControl
            options={[
              { label: 'Skeletal', value: 'skeletal' },
              { label: 'Ball & Stick', value: 'ball-stick' },
              { label: 'Space Fill', value: 'space-fill' },
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
