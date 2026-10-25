import { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { createMoleculePreset, QUICK_ADD_GROUPS, QUICK_ADD_MOLECULES } from '../../../data/moleculePresets';
import type { MoleculePresetId } from '../../../data/moleculePresets';
import { Panel } from '../../../components/ui/Panel';
import { Badge } from '../../../components/ui/Badge';
import { Play } from 'lucide-react';
import { PropertyGrid, PropertyItem } from '../../../components/ui/PropertyGrid';

export function BuilderInfoPanel() {
  const { canvasAtoms, canvasBonds, activeCompound, clearBuilder, setShow3DModal } = useAppStore();
  const [search, setSearch] = useState('');

  const handleQuickAdd = (id: MoleculePresetId) => {
    // Publish the graph and its exact registry identity together, without an empty intermediate canvas.
    useAppStore.setState({ ...createMoleculePreset(id), show3DModal: false });
  };

  const query = search.normalize('NFKC').trim().toLowerCase();
  const visiblePresets = QUICK_ADD_MOLECULES.filter(({ id, molecule, group }) =>
    [id, molecule.name, molecule.iupacName, molecule.commonName, molecule.formula, molecule.hillFormula, group]
      .some(value => value?.normalize('NFKC').toLowerCase().includes(query))
  );
  const isRecognized = !!activeCompound;

  const elementCounts: Record<string, number> = {};
  canvasAtoms.forEach(a => {
    elementCounts[a.symbol] = (elementCounts[a.symbol] || 0) + 1;
  });
  const customFormula = Object.entries(elementCounts)
    .sort((a, b) => {
      if (a[0] === 'C') return -1;
      if (b[0] === 'C') return 1;
      if (a[0] === 'H') return -1;
      if (b[0] === 'H') return 1;
      return a[0].localeCompare(b[0]);
    })
    .map(([sym, count]) => count > 1 ? `${sym}${String(count).replace(/\d/g, digit => '₀₁₂₃₄₅₆₇₈₉'[Number(digit)]!)}` : sym)
    .join('');

  const properties: PropertyItem[] = isRecognized ? [
    { label: 'Category', value: activeCompound.category },
    { label: 'Molar Mass', value: activeCompound.molarMass, suffix: ' g/mol' },
    { label: 'Geometry', value: activeCompound.geometry },
    { label: 'Polarity', value: activeCompound.polarity },
  ] : [
    { label: 'Atoms', value: canvasAtoms.length },
    { label: 'Bonds', value: canvasBonds.length },
  ];

  return (
    <Panel className="h-full border-0 lg:border-l rounded-none flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
        <div className={`p-4 rounded-xl border ${isRecognized ? 'bg-accent/10 border-accent/30 shadow-[0_0_15px_rgba(79,195,247,0.2)]' : 'bg-black/30 border-border'}`}>
          {isRecognized ? (
            <>
              <Badge variant="accent" className="mb-2">Recognized Molecule</Badge>
              <h2 className="text-2xl font-bold text-text mb-1">{activeCompound.name}</h2>
              <div className="text-xl font-mono text-accent">{activeCompound.formula}</div>
            </>
          ) : canvasAtoms.length > 0 ? (
            <>
              <Badge variant="default" className="mb-2">Custom Structure</Badge>
              <h2 className="text-lg font-bold text-text-dim mb-1">Unknown Molecule</h2>
              <div className="text-xl font-mono text-text">{customFormula || '---'}</div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">🧪</div>
              <p className="text-text-dim text-sm">Drag elements onto the canvas to start building.</p>
            </div>
          )}
        </div>

        {(canvasAtoms.length > 0 || isRecognized) && (
          <div className="bg-black/30 p-4 rounded-lg border border-border">
            <PropertyGrid items={properties} />
          </div>
        )}

        {isRecognized && (
          <button
            onClick={() => setShow3DModal(true)}
            className="w-full py-3 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-colors flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(79,195,247,0.4)]"
          >
            <Play className="w-4 h-4 fill-current" /> View Real 3D Model
          </button>
        )}

        <hr className="border-border" />

        <div>
          <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">Quick Add ({QUICK_ADD_MOLECULES.length})</h3>
          <input
            type="search"
            aria-label="Search Quick Add by molecule name or formula"
            placeholder="Search name or formula"
            value={search}
            onChange={event => setSearch(event.target.value)}
            className="w-full mb-3 px-3 py-2 bg-black/30 border border-border rounded text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-accent"
          />
          <div className="flex flex-col gap-3">
            {QUICK_ADD_GROUPS.map(group => {
              const presets = visiblePresets.filter(preset => preset.group === group);
              if (!presets.length) return null;
              return (
                <div key={group}>
                  <h4 className="text-xs text-text-dim mb-2">{group}</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2">
                    {presets.map(({ id, molecule }) => (
                      <button
                        key={id}
                        onClick={() => handleQuickAdd(id)}
                        title={`${molecule.name} (${molecule.formula})`}
                        aria-label={`Quick Add ${molecule.name} (${molecule.formula})`}
                        className="min-w-0 px-1 py-2 bg-white/5 hover:bg-white/10 border border-border rounded text-sm font-mono transition-colors focus-visible:outline focus-visible:outline-accent"
                      >
                        {molecule.formula}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
            {visiblePresets.length === 0 && <p role="status" className="text-sm text-text-dim">No matching molecules.</p>}
          </div>
        </div>
      </div>

      <div className="shrink-0 p-4 border-t border-border bg-black/20">
        <button
          onClick={() => {
            clearBuilder();
            useAppStore.setState({ activeCompound: null, show3DModal: false });
          }}
          className="w-full py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-semibold transition-colors"
        >
          Clear Workspace
        </button>
      </div>
    </Panel>
  );
}
