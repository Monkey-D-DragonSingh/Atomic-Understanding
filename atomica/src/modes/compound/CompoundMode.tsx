import React from 'react';
import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';

export function CompoundMode() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[52px] border-b border-border bg-panel flex items-center px-4 shrink-0">
        <div className="text-text-dim">Search Bar Placeholder</div>
      </div>
      <div className="flex-1 min-h-0 relative">
        <ThreePanelLayout
          leftPanel={null}
          centerPanel={<div className="flex-1 flex items-center justify-center text-text-dim">Compound Visualizer</div>}
          rightPanel={<div className="p-4 text-text-dim">Compound Info</div>}
        />
      </div>
    </div>
  );
}
