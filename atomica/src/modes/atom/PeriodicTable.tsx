import { useState, useEffect } from 'react';
import { ELEMENTS } from '../../data/elements';
import { CATEGORY_COLORS } from '../../data/constants';
import { useAppStore } from '../../store/useAppStore';
import { SearchInput } from '../../components/ui/SearchInput';
import { Tooltip } from '../../components/ui/Tooltip';
import { fmt } from '../../lib/format';

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
          selectElement(ELEMENTS[selectedElement.atomicNumber] || null); // index is Z-1
        }
      } else if (e.key === 'ArrowLeft' && selectedElement) {
        if (selectedElement.atomicNumber > 1) {
          selectElement(ELEMENTS[selectedElement.atomicNumber - 2] || null);
        }
      } else if (e.key === 'Enter' && search) {
        const matches = ELEMENTS.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase()) ||
            el.symbol.toLowerCase().includes(search.toLowerCase()) ||
            el.atomicNumber.toString() === search
        );
        if (matches.length === 1) {
          selectElement(matches[0] || null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElement, search, selectElement]);

  const categories = Object.keys(CATEGORY_COLORS);

  return (
    <div className="flex flex-col h-full overflow-y-auto px-4 py-6 md:px-8 custom-scrollbar items-center">
      <div className="w-full max-w-[960px] flex flex-col items-center">
        <div className="w-full max-w-sm mb-6 shrink-0">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search element (Iron, Fe, 26)"
          />
        </div>

        <div className="w-full">
          <div
            className="grid gap-1.5 w-full mx-auto"
            style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridAutoRows: 'minmax(0, 1fr)' }}
          >
            {ELEMENTS.map((el, index) => {
              const isMatch =
                !search ||
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.symbol.toLowerCase().includes(search.toLowerCase()) ||
                el.atomicNumber.toString() === search;

              const isCategoryMatch = !hoverCategory || el.category === hoverCategory;
              const isDimmed = !isMatch || !isCategoryMatch;
              const isSelected = selectedElement?.atomicNumber === el.atomicNumber;

              const categoryColor = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['unknown'];

              const tooltipContent = (
                <div className="flex flex-col gap-1 p-1">
                  <div className="font-bold text-accent">{el.name}</div>
                  <div className="text-text-dim text-xs">Atomic No: {el.atomicNumber}</div>
                  <div className="text-text-dim text-xs">Mass: {fmt(el.atomicMass, ' u')}</div>
                  <div className="text-text-dim text-xs font-mono">{el.electronConfigurationSemantic}</div>
                </div>
              );

              return (
                <Tooltip key={el.atomicNumber} content={tooltipContent}>
                  <button
                    onClick={() => selectElement(el)}
                    className="relative flex flex-col items-center justify-center rounded-md border aspect-square transition-all duration-150 animate-fade-in-up origin-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:z-10 hover:z-10 hover:-translate-y-0.5"
                    style={{
                      gridColumn: el.xpos,
                      gridRow: el.ypos,
                      backgroundColor: isSelected ? `${categoryColor}33` : `${categoryColor}1A`,
                      borderColor: isSelected ? 'var(--accent)' : `${categoryColor}33`,
                      color: categoryColor,
                      opacity: isDimmed ? 0.12 : 1,
                      transform: isSelected ? 'scale(1.08)' : undefined,
                      zIndex: isSelected ? 10 : 1,
                      boxShadow: isSelected ? '0 0 0 1px var(--accent), 0 6px 20px -6px var(--accent-glow)' : undefined,
                      marginTop: el.ypos === 8 ? '14px' : undefined,
                      animationDelay: `${Math.min(index * 4, 500)}ms`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-md transition-opacity opacity-0 group-hover:opacity-100 bg-white/[0.06] pointer-events-none" />

                    <span className="absolute top-1 left-1.5 text-[9px] font-medium opacity-60 leading-none tabular-nums">
                      {el.atomicNumber}
                    </span>
                    <span className="font-bold tracking-tight leading-none text-[13px] sm:text-base lg:text-lg">
                      {el.symbol}
                    </span>
                    <span className="absolute bottom-1 text-[7px] sm:text-[8px] opacity-55 leading-none tabular-nums hidden sm:block">
                      {el.atomicMass ? el.atomicMass.toFixed(2) : ''}
                    </span>
                  </button>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <div className="shrink-0 pt-6 mt-6 w-full">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setHoverCategory(cat)}
                onMouseLeave={() => setHoverCategory(null)}
                onClick={() => setHoverCategory(hoverCategory === cat ? null : cat)}
                className="text-[10px] tracking-tight px-2.5 py-1 rounded-full border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent flex items-center gap-1.5"
                style={{
                  borderColor: `${CATEGORY_COLORS[cat]}33`,
                  backgroundColor: hoverCategory === cat ? `${CATEGORY_COLORS[cat]}22` : 'transparent',
                  color: hoverCategory === cat ? CATEGORY_COLORS[cat] : 'var(--text-dim)',
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[cat] }} />
                {cat.replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
