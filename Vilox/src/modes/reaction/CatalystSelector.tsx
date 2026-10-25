import { CATALYSTS } from '../../data/catalysts';
import { useAppStore } from '../../store/useAppStore';

const GROUPS = [
  { name: 'Catalysts', types: ['metal-catalyst', 'acid-catalyst', 'solid-catalyst'] },
  { name: 'Biological Systems', types: ['enzyme'] },
  { name: 'Energy & Conditions', types: ['heat', 'light', 'electricity', 'pressure'] },
];

export function CatalystSelector() {
  const { selectedCatalystId, setCatalystId } = useAppStore();
  const selectedOption = CATALYSTS.find(option => option.id === selectedCatalystId);

  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">
        Catalyst / Conditions
      </h3>
      <p className="text-xs text-text-dim mb-3">
        Choose one option to explore a known reaction setup. Its other listed conditions still apply.
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setCatalystId(null)}
          aria-pressed={selectedCatalystId === null}
          className={`self-start px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
            selectedCatalystId === null
              ? 'bg-accent/10 border-accent text-accent'
              : 'bg-panel border-border text-text-dim hover:border-accent/50'
          }`}
        >
          None
        </button>
        {GROUPS.map(group => (
          <div key={group.name}>
            <h4 className="text-[11px] text-text-dim mb-2">{group.name}</h4>
            <div className="flex flex-wrap gap-2">
              {CATALYSTS.filter(cat => group.types.includes(cat.type)).map((cat) => {
                const isSelected = selectedCatalystId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCatalystId(isSelected ? null : cat.id)}
                    title={cat.description}
                    aria-pressed={isSelected}
                    className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-accent/10 border-accent text-accent shadow-[inset_0_0_10px_rgba(79,195,247,0.1)]'
                        : 'bg-panel border-border text-text-dim hover:border-accent/50 hover:text-text'
                    }`}
                  >
                    <span className="font-mono text-sm">{cat.symbol}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {selectedOption && <p className="mt-3 text-xs text-text-dim leading-relaxed" role="status">{selectedOption.description}</p>}
    </div>
  );
}
