import { useAppStore } from '../../store/useAppStore';
import { AtomVisualizer } from './AtomVisualizer';
import { ElementInfo } from './ElementInfo';
import { EmptyState } from '../../components/ui/EmptyState';
import { Atom } from 'lucide-react';

export function AtomDetailPanel() {
  const { selectedElement } = useAppStore();

  if (!selectedElement) {
    return (
      <EmptyState
        icon={Atom}
        title="No element selected"
        description="Pick an element from the periodic table to explore its structure and properties."
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Compact 3D visualizer */}
      <div className="h-[300px] shrink-0 border-b border-border relative">
        <AtomVisualizer />
      </div>
      {/* Scrollable properties */}
      <div className="flex-1 min-h-0">
        <ElementInfo />
      </div>
    </div>
  );
}
