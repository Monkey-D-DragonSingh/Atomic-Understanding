import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../../components/ui/Panel';
import { Badge } from '../../components/ui/Badge';
import { EnergyDiagram } from './EnergyDiagram';

export function CuratedReactionDetails() {
  const { activeCuratedReaction } = useAppStore();

  return (
    <Panel className="h-full border-0 md:border-l rounded-none flex flex-col">
      <div className="p-4 border-b border-border bg-black/20">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Reaction Details</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {!activeCuratedReaction ? (
          <p className="text-sm text-text-dim">Select a reaction to view details.</p>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <Badge variant="accent" className="capitalize">
                {activeCuratedReaction.type.replace('-', ' ')}
              </Badge>
              {activeCuratedReaction.isExothermic !== null && (
                <Badge variant={activeCuratedReaction.isExothermic ? 'warning' : 'accent'}>
                  {activeCuratedReaction.isExothermic ? 'Exothermic' : 'Endothermic'}
                </Badge>
              )}
            </div>

            <h3 className="text-lg font-bold text-text -mt-2">{activeCuratedReaction.name}</h3>

            <p className="text-sm text-text leading-relaxed">
              {activeCuratedReaction.description}
            </p>

            {activeCuratedReaction.conditions && (
              <div>
                <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider mb-1">
                  Conditions
                </h3>
                <p className="text-sm text-text-dim leading-relaxed">
                  {activeCuratedReaction.conditions}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider mb-1">
                Enthalpy Change
              </h3>
              <p className="text-sm text-text-dim">
                {activeCuratedReaction.enthalpy !== null
                  ? `ΔH = ${activeCuratedReaction.enthalpy} kJ/mol (${activeCuratedReaction.isExothermic ? 'exothermic' : 'endothermic'})`
                  : 'Not available for this reaction.'}
              </p>
            </div>

            <EnergyDiagram enthalpy={activeCuratedReaction.enthalpy} />

            <div>
              <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider mb-1">
                Real-World Context
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {activeCuratedReaction.realWorldContext}
              </p>
            </div>
          </div>
        )}
      </div>
    </Panel>
  );
}