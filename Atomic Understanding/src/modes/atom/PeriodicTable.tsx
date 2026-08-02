import { useState, useEffect } from 'react';
import { ELEMENTS } from '../../data/elements';
import { CATEGORY_COLORS } from '../../data/constants';
import { useAppStore } from '../../store/useAppStore';
import { SearchInput } from '../../components/ui/SearchInput';
import { Tooltip } from '../../components/ui/Tooltip';
import { fmt } from '../../lib/format';

const CHECKBOX_CATEGORIES = [
  { key: 'alkali-metal', label: 'Alkali Metals', color: CATEGORY_COLORS['alkali-metal'] },
  { key: 'alkaline-earth-metal', label: 'Alkaline Earth Metals', color: CATEGORY_COLORS['alkaline-earth-metal'] },
  { key: 'transition-metal', label: 'Transition Metals', color: CATEGORY_COLORS['transition-metal'] },
  { key: 'post-transition-metal', label: 'Post-Transition Metals', color: CATEGORY_COLORS['post-transition-metal'] },
  { key: 'metalloid', label: 'Metalloids', color: CATEGORY_COLORS['metalloid'] },
  { key: 'reactive-nonmetal', label: 'Reactive Nonmetals', color: CATEGORY_COLORS['reactive-nonmetal'] },
  { key: 'noble-gas', label: 'Noble Gases', color: CATEGORY_COLORS['noble-gas'] },
  { key: 'halogen', label: 'Halogens', color: CATEGORY_COLORS['halogen'] },
  { key: 'lanthanide', label: 'Lanthanides', color: CATEGORY_COLORS['lanthanide'] },
  { key: 'actinide', label: 'Actinides', color: CATEGORY_COLORS['actinide'] },
];

// Elements whose classification is genuinely disputed across periodic tables and
// should therefore glow/match under more than one category filter.
// Polonium (Po) is commonly classified as either a post-transition metal or a metalloid
// depending on the source, so it belongs to both for filtering purposes.
const DUAL_CATEGORY_OVERRIDES: Record<string, string[]> = {
  Po: ['post-transition-metal', 'metalloid'],
};

export function PeriodicTable() {
  const { selectedElement, selectElement } = useAppStore();
  const [search, setSearch] = useState('');
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);
  const [showNormalColors, setShowNormalColors] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState<Record<string, boolean>>({});

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

  const handleCategoryChange = (catKey: string, checked: boolean) => {
    setCheckedCategories((prev) => ({
      ...prev,
      [catKey]: checked,
    }));
    if (checked) {
      setShowNormalColors(false);
    }
  };

  const handleNormalColorsChange = (checked: boolean) => {
    setShowNormalColors(checked);
    if (checked) {
      setCheckedCategories({});
    }
  };

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

              // Group 17 is treated as Halogens. Some elements (e.g. Polonium) are
              // genuinely classified under more than one category depending on source,
              // so they get a list of categories instead of a single one.
              const baseCategory = el.group === 17 ? 'halogen' : el.category;
              const elCategories = DUAL_CATEGORY_OVERRIDES[el.symbol] || [baseCategory];
              // Primary category still drives the default (non-filtered) display color.
              const elCategory = elCategories[0];
              const categoryColor = (CATEGORY_COLORS[elCategory] || CATEGORY_COLORS['unknown'] || '#9CA3AF') as string;

              // Check if ANY of this element's categories is active (checked or hovered)
              // when not showing normal colors.
              const activeMatchedCategory = !showNormalColors
                ? elCategories.find((c) => checkedCategories[c] || hoverCategory === c)
                : undefined;
              const isActiveCategory = !!activeMatchedCategory;
              // Use the color of whichever matched category so hovering/checking
              // "Metalloids" glows Po in metalloid color, and "Post-Transition Metals" glows it in that color.
              const activeCategoryColor = activeMatchedCategory
                ? ((CATEGORY_COLORS[activeMatchedCategory] || categoryColor) as string)
                : categoryColor;

              // Dim elements if they don't match the search filter.
              // Also, if search is empty and any filter is active, dim non-matching categories.
              const isAnyFilterActive = Object.values(checkedCategories).some(v => v) || hoverCategory !== null;

              let isCategoryMatch = true;
              if (showNormalColors) {
                isCategoryMatch = !hoverCategory || elCategories.includes(hoverCategory);
              } else {
                isCategoryMatch = !isAnyFilterActive || isActiveCategory;
              }

              const isDimmed = !isMatch || !isCategoryMatch;
              const isSelected = selectedElement?.atomicNumber === el.atomicNumber;

              const tooltipContent = (
                <div className="flex flex-col gap-1 p-1">
                  <div className="font-bold text-accent">{el.name}</div>
                  <div className="text-text-dim text-xs">Atomic No: {el.atomicNumber}</div>
                  <div className="text-text-dim text-xs">Mass: {fmt(el.atomicMass, ' u')}</div>
                  <div className="text-text-dim text-xs font-mono">{el.electronConfigurationSemantic}</div>
                </div>
              );

              // Determine button styling based on mode
              let btnBg = '';
              let btnBorder = '';
              let btnColor = '';
              let btnShadow: string | undefined = undefined;

              if (showNormalColors) {
                // Default colorful representation
                btnBg = isSelected ? `${categoryColor}33` : `${categoryColor}1A`;
                btnBorder = isSelected ? 'var(--accent)' : `${categoryColor}33`;
                btnColor = categoryColor;
                btnShadow = isSelected ? '0 0 0 1px var(--accent), 0 6px 20px -6px var(--accent-glow)' : undefined;
              } else if (isActiveCategory) {
                // Glowing colored representation for filtered/hovered category
                btnBg = isSelected ? `${activeCategoryColor}4D` : `${activeCategoryColor}26`;
                btnBorder = isSelected ? 'var(--accent)' : activeCategoryColor;
                btnColor = activeCategoryColor;
                btnShadow = isSelected
                  ? `0 0 0 1px var(--accent), 0 6px 20px -6px var(--accent-glow), 0 0 14px ${activeCategoryColor}B3, inset 0 0 4px ${activeCategoryColor}66`
                  : `0 0 14px ${activeCategoryColor}B3, inset 0 0 4px ${activeCategoryColor}4D`;
              } else {
                // White representation (default state)
                btnBg = isSelected ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.04)';
                btnBorder = isSelected ? 'var(--accent)' : 'rgba(255, 255, 255, 0.15)';
                btnColor = '#ffffff';
                btnShadow = isSelected ? '0 0 0 1px var(--accent), 0 6px 20px -6px var(--accent-glow)' : undefined;
              }

              return (
                <Tooltip
                  key={el.atomicNumber}
                  content={tooltipContent}
                  className="aspect-square animate-fade-in-up"
                  style={{
                    gridColumn: el.xpos,
                    gridRow: el.ypos,
                    marginTop: el.ypos === 8 ? '14px' : undefined,
                    opacity: isDimmed ? 0.12 : 1,
                    zIndex: isSelected ? 10 : 1,
                    animationDelay: `${Math.min(index * 4, 500)}ms`,
                  }}
                >
                  <button
                    onClick={() => selectElement(el)}
                    className="relative w-full h-full flex flex-col items-center justify-center rounded-md border transition-all duration-150 origin-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:-translate-y-0.5"
                    style={{
                      backgroundColor: btnBg,
                      borderColor: btnBorder,
                      color: btnColor,
                      transform: isSelected ? 'scale(1.08)' : undefined,
                      boxShadow: btnShadow,
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

        {/* Interactive Checkbox Dashboard */}
        <div className="shrink-0 w-full mt-10 p-5 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md shadow-2xl relative overflow-hidden group/dashboard">
          {/* Subtle background glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-accent/5 to-accent-2/5 opacity-0 group-hover/dashboard:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
          
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-sm font-semibold text-text tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Element Group Filters
              </h3>

            </div>
            
            {/* Normal Colors Checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer group/normal select-none py-1.5 px-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-98 border border-white/5 transition-all">
              <input
                type="checkbox"
                checked={showNormalColors}
                onChange={(e) => handleNormalColorsChange(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                showNormalColors 
                  ? 'bg-accent border-accent text-white scale-105 shadow-[0_0_8px_var(--accent-glow)]' 
                  : 'border-white/30 bg-transparent group-hover/normal:border-white/50'
              }`}>
                {showNormalColors && (
                  <svg className="w-2.5 h-2.5 stroke-current stroke-[3.5] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-xs font-semibold text-text tracking-wide">Normal Colors</span>
            </label>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {CHECKBOX_CATEGORIES.map((cat) => {
              const isChecked = checkedCategories[cat.key] || false;
              return (
                <label
                  key={cat.key}
                  onMouseEnter={() => setHoverCategory(cat.key)}
                  onMouseLeave={() => setHoverCategory(null)}
                  className={`flex items-center gap-2.5 cursor-pointer group select-none p-2 rounded-lg border transition-all ${
                    isChecked 
                      ? 'bg-white/[0.04] border-white/10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.5)]' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleCategoryChange(cat.key, e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0"
                    style={{
                      backgroundColor: isChecked ? cat.color : 'transparent',
                      borderColor: isChecked ? cat.color : 'rgba(255,255,255,0.3)',
                      boxShadow: isChecked ? `0 0 8px ${cat.color}66` : undefined,
                    }}
                  >
                    {isChecked && (
                      <svg className="w-2.5 h-2.5 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-medium text-text-dim group-hover:text-text transition-colors flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    {cat.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
