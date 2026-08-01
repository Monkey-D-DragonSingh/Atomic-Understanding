import { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { CURATED_REACTIONS } from '../../data/curatedReactions';
import { CuratedReactionType } from '../../types/curatedReaction';
import { SearchInput } from '../../components/ui/SearchInput';
import { Panel } from '../../components/ui/Panel';

export function ReactionPicker() {
  const [search, setSearch] = useState('');
  const { activeCuratedReaction, setActiveCuratedReaction } = useAppStore();

  const filtered = CURATED_REACTIONS.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.balancedEquation.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type].push(r);
    return acc;
  }, {} as Record<CuratedReactionType, typeof CURATED_REACTIONS>);

  return (
    <Panel className="h-full border-0 md:border-r rounded-none flex flex-col">
      <div className="p-4 border-b border-border bg-black/20">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Reactions</h2>
        <SearchInput value={search} onChange={setSearch} placeholder="Search reactions..." />
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {Object.entries(grouped).map(([type, list]) => (
          <div key={type} className="mb-4">
            <h3 className="px-2 py-1 text-xs font-bold text-text-dim uppercase tracking-wider mb-1 sticky top-0 bg-bg/95 backdrop-blur z-10">
              {type.replace('-', ' ')}
            </h3>
            <ul className="space-y-1">
              {list.map(r => {
                const isActive = activeCuratedReaction?.id === r.id;
                return (
                  <li key={r.id}>
                    <button
                      onClick={() => setActiveCuratedReaction(r)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        isActive 
                          ? 'bg-accent/20 border border-accent/40 shadow-[0_0_10px_rgba(79,195,247,0.15)]' 
                          : 'border border-transparent hover:bg-white/5'
                      }`}
                    >
                      <div className={`font-semibold text-sm ${isActive ? 'text-accent' : 'text-text'}`}>
                        {r.name}
                      </div>
                      <div className="text-xs text-text-dim mt-0.5 font-mono truncate">
                        {r.balancedEquation}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center p-4 text-text-dim text-sm">No reactions found.</div>
        )}
      </div>
    </Panel>
  );
}