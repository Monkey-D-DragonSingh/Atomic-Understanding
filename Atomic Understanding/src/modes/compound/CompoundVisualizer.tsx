import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { MOLECULES } from '../../data/molecules';
import { MoleculeViewer } from '../../components/three/MoleculeViewer';
import { SkeletalView } from '../../components/two/SkeletalView';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { Badge } from '../../components/ui/Badge';
import { FlaskConical, Sparkles } from 'lucide-react';
import { toSubscript } from '../../lib/format';

export function CompoundVisualizer() {
  const { compoundView, setCompoundView, activeCompound, setActiveCompound } = useAppStore();
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Safe even when activeCompound is null (undefined = real geometry, default)
  const has3DCoords = !activeCompound || activeCompound.has3DCoords !== false;

  useEffect(() => {
    if (activeCompound && !has3DCoords && compoundView !== 'skeletal') {
      setCompoundView('skeletal');
    }
  }, [activeCompound, has3DCoords, compoundView, setCompoundView]);

  if (!activeCompound) {
    const featuredIds = ['caffeine', 'guanine', 'aspirin', 'melatonin', 'sodium-hypochlorite', 'glucose', 'adenine', 'retinol'];
    const featured = featuredIds
      .map((id) => MOLECULES.find((m) => m.id === id))
      .filter((m): m is (typeof MOLECULES)[0] => Boolean(m));

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-bg/50 overflow-y-auto custom-scrollbar">
        <div className="max-w-2xl w-full flex flex-col items-center text-center gap-6 py-8">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shadow-[0_0_25px_rgba(79,195,247,0.2)]">
            <FlaskConical className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text mb-2">Compound Explorer</h2>
            <p className="text-sm text-text-dim max-w-md mx-auto">
              Select any compound from the left library or pick a featured molecule below to view interactive 3D ball-and-stick, space-fill, or skeletal representations.
            </p>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs uppercase font-bold tracking-wider text-text-dim flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" /> Featured Compounds
              </span>
              <span className="text-xs text-text-dim font-mono">{MOLECULES.length} Available</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              {featured.map((mol) => (
                <button
                  key={mol.id}
                  onClick={() => setActiveCompound(mol as any)}
                  className="p-3.5 rounded-xl border border-border bg-panel/60 hover:bg-white/5 hover:border-accent/60 transition-all group flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="font-semibold text-xs sm:text-sm text-text group-hover:text-accent transition-colors truncate">
                    {mol.name}
                  </span>
                  <span className="font-mono text-xs text-accent">
                    {toSubscript(mol.formula)}
                  </span>
                  <span className="text-[10px] text-text-dim capitalize truncate">
                    {mol.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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