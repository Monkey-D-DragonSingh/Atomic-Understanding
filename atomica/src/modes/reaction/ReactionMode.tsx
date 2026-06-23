import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { ReactionPicker } from './ReactionPicker';
import { ReactionStage } from './ReactionStage';
import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../../components/ui/Panel';
import { PropertyGrid } from '../../components/ui/PropertyGrid';
import { Badge } from '../../components/ui/Badge';
import { EnergyDiagram } from './EnergyDiagram';

export function ReactionMode() {
  const { activeReaction } = useAppStore();

  const rightPanel = (
    <Panel className="h-full border-0 lg:border-l rounded-none flex flex-col">
      <div className="p-4 border-b border-border bg-black/20">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Reaction Details</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {!activeReaction ? (
          <div className="text-center py-8 text-text-dim text-sm">
            Select a reaction to view details.
          </div>
        ) : (
          <>
            <div>
              <div className="flex gap-2 mb-3">
                <Badge variant="accent">{activeReaction.type.replace('-', ' ')}</Badge>
                {activeReaction.isExothermic && <Badge variant="default" className="bg-blue-500/10 text-blue-400">Exothermic</Badge>}
                {activeReaction.isExothermic === false && <Badge variant="default" className="bg-red-500/10 text-red-400">Endothermic</Badge>}
              </div>
              <h3 className="text-xl font-bold text-text mb-2">{activeReaction.name}</h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {activeReaction.description}
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-lg border border-border">
              <PropertyGrid items={[
                { label: 'Conditions', value: activeReaction.conditions || 'Standard' },
                { label: 'Enthalpy (ΔH)', value: activeReaction.enthalpy !== null ? `${activeReaction.enthalpy} kJ/mol` : 'Unknown' }
              ]} />
            </div>

            <EnergyDiagram enthalpy={activeReaction.enthalpy} />

            <div>
              <h4 className="text-xs uppercase font-bold text-text-dim mb-2 tracking-wider">Real World Context</h4>
              <p className="text-sm text-text-dim p-3 bg-white/5 border border-border rounded-lg leading-relaxed">
                {activeReaction.realWorldContext}
              </p>
            </div>
          </>
        )}
      </div>
    </Panel>
  );

  return (
    <ThreePanelLayout
      leftPanel={<ReactionPicker />}
      centerPanel={<ReactionStage />}
      rightPanel={rightPanel}
    />
  );
}
