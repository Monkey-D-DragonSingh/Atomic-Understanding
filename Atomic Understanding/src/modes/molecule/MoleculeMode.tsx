import { useState } from 'react';
import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';
import { MoleculeGallery } from './MoleculeGallery';
import { MoleculeInfo } from './MoleculeInfo';
import { CompoundVisualizer } from '../compound/CompoundVisualizer';
import { ElementTray } from './builder/ElementTray';
import { BuilderWorkspace } from './builder/BuilderWorkspace';
import { BuilderInfoPanel } from './builder/BuilderInfoPanel';
import { SegmentedControl } from '../../components/ui/SegmentedControl';
import { Molecule3DModal } from './builder/Molecule3DModal';

export function MoleculeMode() {
  const [subMode, setSubMode] = useState<'gallery' | 'builder'>('builder');

  const switcher = (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
      <SegmentedControl
        options={[
          { label: 'Gallery', value: 'gallery' },
          { label: 'Interactive Builder', value: 'builder' }
        ]}
        value={subMode}
        onChange={setSubMode}
      />
    </div>
  );

  if (subMode === 'gallery') {
    return (
      <>
        <ThreePanelLayout
          leftPanel={<MoleculeGallery />}
          centerPanel={
            <>
              {switcher}
              <CompoundVisualizer />
            </>
          }
          rightPanel={<MoleculeInfo />}
        />
        <Molecule3DModal />
      </>
    );
  }

  return (
    <>
      <ThreePanelLayout
        leftPanel={<ElementTray />}
        centerPanel={
          <>
            {switcher}
            <BuilderWorkspace />
          </>
        }
        rightPanel={<BuilderInfoPanel />}
      />
      <Molecule3DModal />
    </>
  );
}