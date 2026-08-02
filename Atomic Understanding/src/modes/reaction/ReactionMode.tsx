import { useState } from 'react';
import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { ReactantTray } from './ReactantTray';
import { ReactionWorkspace } from './ReactionWorkspace';
import { ReactionResultPanel } from './ReactionResultPanel';
import { ReactionPicker } from './ReactionPicker';
import { ReactionStage } from './ReactionStage';
import { CuratedReactionDetails } from './CuratedReactionDetails';

type ReactionSubMode = 'browse' | 'build';

export function ReactionMode() {
  const [subMode, setSubMode] = useState<ReactionSubMode>('browse');

  const switcher = (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
      <SegmentedControl
        options={[
          { label: 'Browse Reactions', value: 'browse' },
          { label: 'Build Reaction', value: 'build' },
        ]}
        value={subMode}
        onChange={(v) => setSubMode(v as ReactionSubMode)}
      />
    </div>
  );

  if (subMode === 'browse') {
    return (
      <ThreePanelLayout
        leftPanel={<ReactionPicker />}
        centerPanel={
          <>
            {switcher}
            <ReactionStage />
          </>
        }
        rightPanel={<CuratedReactionDetails />}
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