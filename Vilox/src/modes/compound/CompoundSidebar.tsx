import { useState, useMemo } from 'react';
import { MOLECULES } from '../../data/molecules';
import { useAppStore } from '../../store/useAppStore';
import { SearchInput } from '../../components/ui/SearchInput';
import { Badge } from '../../components/ui/Badge';
import { FlaskConical, Dna, Pill, Leaf, Sparkles, Flame } from 'lucide-react';
import { toSubscript } from '../../lib/format';
import type { Molecule } from '../../types/molecule';

type CategoryFilter = 'all' | 'bio' | 'pharma' | 'organic' | 'inorganic' | 'acids-bases';

const CATEGORY_TABS: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All', icon: <FlaskConical className="w-3.5 h-3.5" /> },
  { id: 'bio', label: 'Biomolecules', icon: <Dna className="w-3.5 h-3.5" /> },
  { id: 'pharma', label: 'Medicinal', icon: <Pill className="w-3.5 h-3.5" /> },
  { id: 'organic', label: 'Organic', icon: <Leaf className="w-3.5 h-3.5" /> },
  { id: 'inorganic', label: 'Salts & Minerals', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'acids-bases', label: 'Acids & Bases', icon: <Flame className="w-3.5 h-3.5" /> },
];

function matchCategory(mol: Molecule, cat: CategoryFilter): boolean {
  if (cat === 'all') return true;
  const c = (mol.category || '').toLowerCase();
  if (cat === 'bio') {
    return c.includes('nucleobase') || c.includes('amino') || c.includes('hormone') || c.includes('neurotransmitter') || c.includes('sugar');
  }
  if (cat === 'pharma') {
    return c.includes('pharmaceutical') || c.includes('vitamin') || c.includes('stimulant') || c.includes('alkaloid');
  }
  if (cat === 'organic') {
    return c.includes('organic') || c.includes('hydrocarbon') || c.includes('alcohol') || c.includes('aromatic') || c.includes('alkene') || c.includes('alkyne') || c.includes('ketone') || c.includes('aldehyde') || c.includes('ester') || c.includes('ether') || c.includes('amine');
  }
  if (cat === 'inorganic') {
    return c.includes('salt') || c.includes('halide') || c.includes('carbonate') || c.includes('sulfate') || c.includes('oxide') || c.includes('phosphate');
  }
  if (cat === 'acids-bases') {
    return c.includes('acid') || c.includes('base') || c.includes('hydroxide');
  }
  return true;
}

export function CompoundSidebar() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<CategoryFilter>('all');
  const { activeCompound, setActiveCompound } = useAppStore();

  const filtered = useMemo(() => {
    return MOLECULES.filter((mol) => {
      const matchesSearch =
        mol.name.toLowerCase().includes(search.toLowerCase()) ||
        mol.formula.toLowerCase().includes(search.toLowerCase()) ||
        (mol.iupacName && mol.iupacName.toLowerCase().includes(search.toLowerCase()));

      const matchesCat = matchCategory(mol, selectedCat);
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCat]);

  return (
    <div className="flex flex-col h-full bg-panel/30 border-r border-border">
      {/* Header and Search */}
      <div className="p-3 sm:p-4 border-b border-border shrink-0 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-accent" />
            <h2 className="text-xs font-bold text-accent uppercase tracking-wider">Compound Library</h2>
          </div>
          <span className="text-[11px] font-mono text-text-dim px-2 py-0.5 rounded-full bg-white/5 border border-border">
            {filtered.length} / {MOLECULES.length}
          </span>
        </div>

        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Filter compounds..."
          className="w-full text-xs"
        />

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 custom-scrollbar scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const active = selectedCat === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCat(tab.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-accent text-bg shadow-sm font-semibold'
                    : 'bg-panel border border-border text-text-dim hover:text-text hover:border-accent/40'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Compound List */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-3 custom-scrollbar flex flex-col gap-1.5">
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-xs text-text-dim">
            No compounds match your filter.
          </div>
        ) : (
          filtered.map((mol) => {
            const isSelected = activeCompound?.id === mol.id || activeCompound?.name.toLowerCase() === mol.name.toLowerCase();

            return (
              <button
                key={mol.id}
                onClick={() => setActiveCompound(mol)}
                className={`text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? 'bg-accent/15 border-accent shadow-[inset_0_0_12px_rgba(79,195,247,0.15)] ring-1 ring-accent/30'
                    : 'bg-panel/70 border-border/80 hover:border-accent/40 hover:bg-white/5'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-text truncate">
                    {mol.name}
                  </span>
                  <span className="font-mono text-xs text-accent shrink-0 font-medium">
                    {toSubscript(mol.formula)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1 text-[10px] text-text-dim">
                  <span className="truncate capitalize">{mol.category || mol.bondType || 'Compound'}</span>
                  {mol.isSpecial && (
                    <Badge variant="warning" style={{ fontSize: '8px', padding: '0px 4px' }}>
                      ★ Key Compound
                    </Badge>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
