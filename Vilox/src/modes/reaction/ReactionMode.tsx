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
    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-5rem)] max-w-md px-1">
      <SegmentedControl<ReactionSubMode>
        options={[
          { label: 'Browse', value: 'browse' },
          { label: 'Build', value: 'build' },
        ]}
        value={subMode}
        onChange={setSubMode}
        size="sm"
        className="w-full"
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