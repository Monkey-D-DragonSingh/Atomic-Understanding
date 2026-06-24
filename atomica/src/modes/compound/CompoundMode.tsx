import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { CompoundSearch } from './CompoundSearch';
import { CompoundVisualizer } from './CompoundVisualizer';
import { CompoundInfo } from './CompoundInfo';

export function CompoundMode() {
  return (
    <div className="flex flex-col h-full pt-[56px]">
      <div className="h-[56px] border-b border-border glass-strong flex items-center px-4 md:px-5 shrink-0 z-40">
        <CompoundSearch />
      </div>
      <div className="flex-1 min-h-0 relative">
        <ThreePanelLayout
          offsetTop={0}
          leftPanel={null}
          centerPanel={<CompoundVisualizer />}
          rightPanel={<CompoundInfo />}
        />
      </div>
    </div>
  );
}
