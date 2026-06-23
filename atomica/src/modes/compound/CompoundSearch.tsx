import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchInput } from '../../components/ui/SearchInput';
import * as PubChem from '../../lib/pubchem';
import { useAppStore } from '../../store/useAppStore';
import { MOLECULES } from '../../data/molecules';

export function CompoundSearch() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const { setActiveCompound, searchHistory, addSearchHistory } = useAppStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setDebouncedQuery(query.trim());
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const { isFetching, error } = useQuery({
    queryKey: ['compound', debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery) return null;
      
      // 1. Check local progressive render
      const localMatch = MOLECULES.find(m => m.name.toLowerCase() === debouncedQuery.toLowerCase());
      if (localMatch) {
        setActiveCompound(localMatch); // Instantly set while PubChem fetches properties
      }

      // 2. Fetch from PubChem
      try {
        const cid = await PubChem.searchCidByName(debouncedQuery);
        if (!cid) {
          throw new Error('Compound not found');
        }
        const [props, structure] = await Promise.all([
          PubChem.fetchProperties(cid),
          PubChem.fetch3DRecord(cid).catch(() => PubChem.fetch2DRecord(cid))
        ]);

        const parsed = PubChem.parseRecord(structure);
        const compound = {
          id: `pubchem-${cid}`,
          name: debouncedQuery,
          pubchemCid: cid,
          formula: props.MolecularFormula || '',
          atoms: parsed.atoms,
          bonds: parsed.bonds,
          has3DCoords: !!parsed.atoms.some(a => a.z !== 0),
          properties: props
        };

        setActiveCompound(compound as any);
        addSearchHistory(debouncedQuery);
        return compound;
      } catch (err) {
        console.error(err);
        if (!localMatch) {
          setActiveCompound(null);
        }
        throw err;
      }
    },
    enabled: !!debouncedQuery,
    retry: false
  });

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <SearchInput
        value={query}
        onChange={setQuery}
        onFocus={() => setIsFocused(true)}
        placeholder="Search any compound… (glucose, caffeine, aspirin, ozone)"
        className="w-full"
      />
      {isFetching && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* History Dropdown */}
      {isFocused && !query && searchHistory.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-panel border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="px-3 py-2 border-b border-border text-xs text-text-dim flex justify-between">
            <span>Recent Searches</span>
            <button onClick={() => useAppStore.getState().clearSearchHistory()} className="hover:text-text">Clear</button>
          </div>
          <ul>
            {searchHistory.map((h, i) => (
              <li key={i}>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-text hover:bg-white/5 transition-colors"
                  onClick={() => {
                    setQuery(h);
                    setIsFocused(false);
                  }}
                >
                  {h}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && !isFetching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-red-500/10 border border-red-500/30 text-red-400 p-2 rounded text-sm z-50 shadow-lg">
          ❌ Could not find compound. Try: glucose, caffeine, ozone.
        </div>
      )}
    </div>
  );
}
