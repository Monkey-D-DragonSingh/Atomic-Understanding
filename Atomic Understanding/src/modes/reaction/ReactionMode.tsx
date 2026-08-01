import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { ReactionPicker } from './ReactionPicker';
import { ReactionStage } from './ReactionStage';
import { ReactantTray } from './ReactantTray';
import { ReactionWorkspace } from './ReactionWorkspace';
import { ReactionResultPanel } from './ReactionResultPanel';
import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../../components/ui/Panel';
import { PropertyGrid } from '../../components/ui/PropertyGrid';
import { Badge } from '../../components/ui/Badge';
import { EnergyDiagram } from './EnergyDiagram';
import { SegmentedControl } from '../../components/ui/SegmentedControl';

export function ReactionMode() {
  const { activeCuratedReaction, reactionSubMode, setReactionSubMode } = useAppStore();

  const switcher = (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
      <SegmentedControl
        options={[
          { label: 'Browse Reactions', value: 'browse' },
          { label: 'Build Reaction', value: 'build' },
        ]}
        value={reactionSubMode}
        onChange={setReactionSubMode}
      />
    </div>
  );

  const browseRightPanel = (
    <Panel className="h-full border-0 lg:border-l rounded-none flex flex-col">
      <div className="p-4 border-b border-border bg-black/20">
        <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Reaction Details</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {!activeCuratedReaction ? (
          <div className="text-center py-8 text-text-dim text-sm">
            Select a reaction to view details.
          </div>
        ) : (
          <>
            <div>
              <div className="flex gap-2 mb-3">
                <Badge variant="accent">{activeCuratedReaction.type.replace('-', ' ')}</Badge>
                {activeCuratedReaction.isExothermic && <Badge variant="default" className="bg-blue-500/10 text-blue-400">Exothermic</Badge>}
                {activeCuratedReaction.isExothermic === false && <Badge variant="default" className="bg-red-500/10 text-red-400">Endothermic</Badge>}
              </div>
              <h3 className="text-xl font-bold text-text mb-2">{activeCuratedReaction.name}</h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {activeCuratedReaction.description}
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-lg border border-border">
              <PropertyGrid items={[
                { label: 'Conditions', value: activeCuratedReaction.conditions || 'Standard' },
                { label: 'Enthalpy (ΔH)', value: activeCuratedReaction.enthalpy !== null ? `${activeCuratedReaction.enthalpy} kJ/mol` : 'Unknown' }
              ]} />
            </div>

            <EnergyDiagram enthalpy={activeCuratedReaction.enthalpy} />

            <div>
              <h4 className="text-xs uppercase font-bold text-text-dim mb-2 tracking-wider">Real World Context</h4>
              <p className="text-sm text-text-dim p-3 bg-white/5 border border-border rounded-lg leading-relaxed">
                {activeCuratedReaction.realWorldContext}
              </p>
            </div>
          </>
        )}
      </div>
    </Panel>
  );

  if (reactionSubMode === 'browse') {
    return (
      <ThreePanelLayout
        leftPanel={<ReactionPicker />}
        centerPanel={
          <>
            {switcher}
            <ReactionStage />
          </>
        }
        rightPanel={browseRightPanel}
      />
    );
  }

  return (
    <ThreePanelLayout
      leftPanel={<ReactantTray />}
      centerPanel={
        <>
          {switcher}
          <ReactionWorkspace />
        </>
      }
      rightPanel={<ReactionResultPanel />}
    />
  );
}