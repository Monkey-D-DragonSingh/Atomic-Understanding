import React, { useState } from 'react';
import { MOLECULES } from '../../data/molecules';
import { useAppStore } from '../../store/useAppStore';
import { Badge } from '../../ui/Badge';
import { SearchInput } from '../../ui/SearchInput';
import { Molecule } from '../../types/molecule';

export function MoleculeGallery() {
  const [search, setSearch] = useState('');
  const { setActiveCompound, activeCompound } = useAppStore();

  const filtered = MOLECULES.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.formula.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-bg">
      <div className="p-4 border-b border-border shrink-0">
        <SearchInput value={search} onChange={setSearch} placeholder="Filter gallery..." />
      </div>
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="flex flex-col gap-2">
          {filtered.map(mol => {
            const isSelected = activeCompound?.id === mol.id;
            // Mark some as special
            const isSpecial = ['O3', 'H2O2', 'H2O', 'CO2'].includes(mol.formula);
            
            return (
              <button
                key={mol.id}
                onClick={() => setActiveCompound(mol as any)}
                className={`text-left p-3 rounded-lg border transition-all flex flex-col gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected 
                    ? 'bg-accent/10 border-accent shadow-[inset_0_0_10px_rgba(79,195,247,0.1)]' 
                    : 'bg-panel border-border hover:border-accent/50 hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text">{mol.name}</span>
                  <span className="font-mono text-xs text-text-dim">{mol.formula}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-text-dim">{mol.geometry}</span>
                  {isSpecial && <Badge variant="warning" style={{ fontSize: '8px', padding: '0px 4px' }}>★ Special</Badge>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
