import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { PeriodicTable } from './PeriodicTable';
import { AtomDetailPanel } from './AtomDetailPanel';

export function AtomMode() {
  return (
    <ThreePanelLayout
      leftPanel={null}
      centerPanel={<PeriodicTable />}
      rightPanel={<AtomDetailPanel />}
    />
  );
}
