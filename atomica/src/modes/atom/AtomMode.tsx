import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { PeriodicTable } from './PeriodicTable';
import { AtomVisualizer } from './AtomVisualizer';
import { ElementInfo } from './ElementInfo';

export function AtomMode() {
  return (
    <ThreePanelLayout
      leftPanel={<PeriodicTable />}
      centerPanel={<AtomVisualizer />}
      rightPanel={<ElementInfo />}
    />
  );
}
