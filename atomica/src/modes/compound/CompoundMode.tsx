import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { CompoundSearch } from './CompoundSearch';
import { CompoundVisualizer } from './CompoundVisualizer';
import { CompoundInfo } from './CompoundInfo';

export function CompoundMode() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[52px] border-b border-border bg-panel flex items-center px-4 shrink-0 z-40">
        <CompoundSearch />
      </div>
      <div className="flex-1 min-h-0 relative">
        <ThreePanelLayout
          leftPanel={null}
          centerPanel={<CompoundVisualizer />}
          rightPanel={<CompoundInfo />}
        />
      </div>
    </div>
  );
}
