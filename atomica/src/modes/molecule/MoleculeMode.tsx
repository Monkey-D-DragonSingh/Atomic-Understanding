import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { MoleculeGallery } from './MoleculeGallery';
import { MoleculeInfo } from './MoleculeInfo';
import { CompoundVisualizer } from '../compound/CompoundVisualizer'; // Reusing visualizer structure

export function MoleculeMode() {
  return (
    <ThreePanelLayout
      leftPanel={<MoleculeGallery />}
      centerPanel={<CompoundVisualizer />}
      rightPanel={<MoleculeInfo />}
    />
  );
}
