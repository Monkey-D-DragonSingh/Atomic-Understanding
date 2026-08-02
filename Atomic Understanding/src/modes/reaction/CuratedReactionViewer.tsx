import { Scale, Flame, Snowflake } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export function CuratedReactionViewer() {
  const { activeCuratedReaction } = useAppStore();

  if (!activeCuratedReaction) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full text-center px-6">
        <Scale className="w-16 h-16 text-text-dim mb-4" strokeWidth={1} />
        <h2 className="text-xl font-bold text-text mb-2">Select a Reaction</h2>
        <p className="text-sm text-text-dim max-w-sm">
          Choose a reaction from the left panel to simulate its molecular rearrangement.
        </p>
      </div>
    );
  }

  const r = activeCuratedReaction;

  return (
    <div className="flex-1 h-full overflow-y-auto p-6 pt-24 flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text mb-1">{r.name}</h2>
        {r.isExothermic !== null && (
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
              r.isExothermic
                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
            }`}
          >
            {r.isExothermic ? <Flame className="w-3 h-3" /> : <Snowflake className="w-3 h-3" />}
            {r.isExothermic ? 'Exothermic' : 'Endothermic'}
            {r.enthalpy !== null && (
              <span className="opacity-70">· ΔH = {r.enthalpy} kJ/mol</span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {r.reactants.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="text-text-dim text-lg font-bold">+</span>}
            <div className="bg-panel border border-border rounded-xl px-4 py-3 flex flex-col items-center gap-1">
              <span className="font-mono text-lg text-accent">
                {p.coefficient > 1 ? p.coefficient : ''}{p.formula}
              </span>
              <span className="text-[10px] text-text-dim uppercase">({p.state})</span>
            </div>
          </div>
        ))}

        <div className="mx-2 text-text-dim text-2xl">→</div>

        {r.products.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="text-text-dim text-lg font-bold">+</span>}
            <div className="bg-accent/10 border border-accent/40 rounded-xl px-4 py-3 flex flex-col items-center gap-1">
              <span className="font-mono text-lg text-accent">
                {p.coefficient > 1 ? p.coefficient : ''}{p.formula}
              </span>
              <span className="text-[10px] text-text-dim uppercase">({p.state})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-sm text-text-dim bg-black/30 border border-border rounded-lg px-4 py-2">
        {r.balancedEquation}
      </div>
    </div>
  );
}