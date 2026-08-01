import { CATALYSTS } from '../../data/catalysts';
import { useAppStore } from '../../store/useAppStore';

export function CatalystSelector() {
  const { selectedCatalystId, setCatalystId } = useAppStore();

  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">
        Catalyst / Conditions
      </h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCatalystId(null)}
          className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
            selectedCatalystId === null
              ? 'bg-accent/10 border-accent text-accent'
              : 'bg-panel border-border text-text-dim hover:border-accent/50'
          }`}
        >
          None
        </button>
        {CATALYSTS.map((cat) => {
          const isSelected = selectedCatalystId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCatalystId(isSelected ? null : cat.id)}
              title={cat.description}
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
  );
}
