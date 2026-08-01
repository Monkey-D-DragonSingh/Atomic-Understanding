import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { MOLECULES } from '../../data/molecules';
import { useAppStore } from '../../store/useAppStore';
import { SearchInput } from '../../components/ui/SearchInput';

export function ReactantTray() {
  const [search, setSearch] = useState('');
  const { selectedReactantIds, addReactant, removeReactant } = useAppStore();

  const filtered = MOLECULES.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.formula.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border shrink-0">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Reactants</h2>
        <p className="text-xs text-text-dim mb-3">Pick molecules to react together</p>
        <SearchInput value={search} onChange={setSearch} placeholder="Search molecules..." />
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="flex flex-col gap-2">
          {filtered.map((mol) => {
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
      </div>
    </div>
  );
}
