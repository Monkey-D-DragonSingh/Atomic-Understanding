import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { ALL_REACTANTS } from '../../data/allReactants';
import { ELEMENTS } from '../../data/elements';
import { CATEGORY_COLORS } from '../../data/constants';
import { ELEMENT_DEFAULT_MOLECULE } from '../../data/elementDefaults';
import { useAppStore } from '../../store/useAppStore';
import { SearchInput } from '../../components/ui/SearchInput';
import { SegmentedControl } from '../../components/ui/SegmentedControl';

type PickerView = 'atoms' | 'molecules';

export function ReactantTray() {
  const [view, setView] = useState<PickerView>('molecules');
  const [search, setSearch] = useState('');
  const { selectedReactantIds, addReactant, removeReactant } = useAppStore();

  const filteredMolecules = ALL_REACTANTS.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.formula.toLowerCase().includes(search.toLowerCase())
  );

  const filteredElements = ELEMENTS.filter(
    (el) =>
      el.name.toLowerCase().includes(search.toLowerCase()) ||
      el.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Every element now resolves to a molecule id: the curated diatomic/
  // allotrope default if one exists, otherwise the auto-generated single
  // atom entry from ELEMENT_ATOM_MOLECULES (id pattern: atom-<symbol>).
  const getMoleculeIdForElement = (symbol: string) =>
    ELEMENT_DEFAULT_MOLECULE[symbol] ?? `atom-${symbol.toLowerCase()}`;

  const handleElementClick = (symbol: string) => {
    const moleculeId = getMoleculeIdForElement(symbol);
    if (selectedReactantIds.includes(moleculeId)) {
      removeReactant(moleculeId);
    } else {
      addReactant(moleculeId);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border shrink-0">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Reactants</h2>
        <p className="text-xs text-text-dim mb-3">Pick molecules to react together</p>

        <SegmentedControl
          options={[
            { label: 'Molecules', value: 'molecules' },
            { label: 'Atoms', value: 'atoms' },
          ]}
          value={view}
          onChange={setView}
          size="sm"
          className="mb-3"
        />

        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder={view === 'atoms' ? 'Search elements...' : 'Search molecules...'}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {view === 'molecules' ? (
          <div className="flex flex-col gap-2">
            {filteredMolecules.map((mol) => {
              const isSelected = selectedReactantIds.includes(mol.id);
              return (
                <button
                  key={mol.id}
                  onClick={() => (isSelected ? removeReactant(mol.id) : addReactant(mol.id))}
                  className={`text-left p-3 rounded-lg border transition-all flex items-center justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-accent/10 border-accent shadow-[inset_0_0_10px_rgba(79,195,247,0.1)]'
                      : 'bg-panel border-border hover:border-accent/50 hover:bg-white/5'
                  }`}
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-bold text-text truncate">{mol.name}</span>
                    <span className="font-mono text-xs text-text-dim">{mol.formula}</span>
                  </div>
                  <div
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-accent text-bg' : 'bg-white/5 text-text-dim'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 content-start">
            {filteredElements.map((el) => {
              const moleculeId = getMoleculeIdForElement(el.symbol);
              const isSelected = selectedReactantIds.includes(moleculeId);
              const color = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['unknown'];

              return (
                <button
                  key={el.atomicNumber}
                  onClick={() => handleElementClick(el.symbol)}
                  className={`relative aspect-square flex flex-col items-center justify-center rounded-lg border transition-all select-none cursor-pointer hover:scale-105 ${
                    isSelected ? 'bg-accent/10' : 'bg-black/40'
                  }`}
                  style={{
                    borderColor: isSelected ? 'var(--accent, #4FC3F7)' : `${color}55`,
                    boxShadow: isSelected
                      ? 'inset 0 0 10px rgba(79,195,247,0.15)'
                      : `inset 0 0 10px ${color}15`,
                  }}
                >
                  <div className="absolute top-1 left-1.5 text-[10px] text-text-dim font-mono">
                    {el.atomicNumber}
                  </div>
                  <div className="text-xl font-bold" style={{ color }}>
                    {el.symbol}
                  </div>
                  {isSelected && (
                    <div className="absolute bottom-1 right-1.5 w-4 h-4 rounded-full bg-accent text-bg flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}