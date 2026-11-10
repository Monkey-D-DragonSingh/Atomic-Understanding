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
    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-5rem)] max-w-md px-1">
      <SegmentedControl
        options={[
          { label: 'Gallery', value: 'gallery' },
          { label: 'Builder', value: 'builder' }
        ]}
        value={subMode}
        onChange={setSubMode}
        size="sm"
        className="w-full"
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