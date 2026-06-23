import React, { useState, useEffect } from 'react';
import { ELEMENTS } from '../../../data/elements';
import { CATEGORY_COLORS } from '../../../data/constants';
import { useAppStore } from '../../../store/useAppStore';
import { SearchInput } from '../../ui/SearchInput';
import { Tooltip } from '../../ui/Tooltip';
import { fmt } from '../../../lib/format';

export function PeriodicTable() {
  const { selectedElement, selectElement } = useAppStore();
  const [search, setSearch] = useState('');
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        selectElement(null);
        setSearch('');
      } else if (e.key === 'ArrowRight' && selectedElement) {
        if (selectedElement.atomicNumber < 118) {
          selectElement(ELEMENTS[selectedElement.atomicNumber]); // index is Z-1
        }
      } else if (e.key === 'ArrowLeft' && selectedElement) {
        if (selectedElement.atomicNumber > 1) {
          selectElement(ELEMENTS[selectedElement.atomicNumber - 2]);
        }
      } else if (e.key === 'Enter' && search) {
        const matches = ELEMENTS.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase()) ||
            el.symbol.toLowerCase().includes(search.toLowerCase()) ||
            el.atomicNumber.toString() === search
        );
        if (matches.length === 1) {
          selectElement(matches[0]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElement, search, selectElement]);

  const categories = Object.keys(CATEGORY_COLORS);

  return (
    <div className="flex flex-col h-full overflow-y-auto p-4 custom-scrollbar">
      <div className="mb-4 shrink-0">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Filter elements (e.g. Iron, Fe, 26)"
        />
      </div>

      <div className="flex-1 min-h-[500px] flex justify-center pb-8">
        <div 
          className="grid gap-[2px] w-full max-w-full" 
          style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridAutoRows: 'minmax(24px, 4.5vw)' }}
        >
          {ELEMENTS.map((el, index) => {
            const isMatch =
              !search ||
              el.name.toLowerCase().includes(search.toLowerCase()) ||
              el.symbol.toLowerCase().includes(search.toLowerCase()) ||
              el.atomicNumber.toString() === search;

            const isCategoryMatch = !hoverCategory || el.category === hoverCategory;
            const isDimmed = !isMatch || !isCategoryMatch;
            const isSelected = selectedElement?.id === el.id;

            const categoryColor = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['unknown'];

            // Tooltip Content
            const tooltipContent = (
              <div className="flex flex-col gap-1 p-1">
                <div className="font-bold text-accent">{el.name}</div>
                <div className="text-text-dim text-xs">Atomic No: {el.atomicNumber}</div>
                <div className="text-text-dim text-xs">Mass: {fmt(el.atomicMass, ' u')}</div>
                <div className="text-text-dim text-xs font-mono">{el.electronConfigurationSemantic}</div>
              </div>
            );

            return (
              <Tooltip key={el.id} content={tooltipContent}>
                <button
                  onClick={() => selectElement(el)}
                  className={`relative flex flex-col items-center justify-center border transition-all animate-fade-in-up origin-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10`}
                  style={{
                    gridColumn: el.xpos,
                    gridRow: el.ypos,
                    backgroundColor: `${categoryColor}20`,
                    borderColor: isSelected ? 'var(--accent)' : `${categoryColor}40`,
                    color: categoryColor,
                    opacity: isDimmed ? 0.15 : 1,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    zIndex: isSelected ? 10 : 1,
                    // Pass index as custom property for staggered animation if added in CSS
                    ['--cell-index' as any]: index,
                    animationDelay: `${index * 5}ms`,
                  }}
                >
                  {/* Subtle inner glow and hover state */}
                  <div className={`absolute inset-0 transition-opacity ${isSelected ? 'opacity-100 bg-white/10' : 'opacity-0 group-hover:opacity-100 bg-white/5'} pointer-events-none`} />
                  
                  {isSelected && (
                    <div className="absolute inset-[-2px] border-2 border-accent rounded-sm shadow-[0_0_10px_var(--accent-glow)] pointer-events-none" />
                  )}

                  <span className="absolute top-0.5 left-1 text-[8px] md:text-[9px] font-medium opacity-80 leading-none">
                    {el.atomicNumber}
                  </span>
                  <span className="text-xs md:text-sm font-bold tracking-tight">
                    {el.symbol}
                  </span>
                  <span className="absolute bottom-0.5 text-[6px] md:text-[7px] opacity-60 leading-none truncate w-full text-center px-0.5">
                    {el.atomicMass ? el.atomicMass.toFixed(2) : ''}
                  </span>
                </button>
              </Tooltip>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 pt-4 border-t border-border mt-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onMouseEnter={() => setHoverCategory(cat)}
              onMouseLeave={() => setHoverCategory(null)}
              onClick={() => {
                 if (hoverCategory === cat) setHoverCategory(null);
                 else setHoverCategory(cat);
              }}
              className="text-[9px] uppercase tracking-wider px-2 py-1 rounded border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              style={{
                borderColor: `${CATEGORY_COLORS[cat]}40`,
                backgroundColor: hoverCategory === cat ? `${CATEGORY_COLORS[cat]}20` : 'transparent',
                color: hoverCategory === cat ? CATEGORY_COLORS[cat] : 'var(--text-dim)',
              }}
            >
              {cat.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
