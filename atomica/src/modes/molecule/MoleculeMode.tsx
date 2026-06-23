import React from 'react';
import { ThreePanelLayout } from '../../components/layout/ThreePanelLayout';

export function MoleculeMode() {
  return (
    <ThreePanelLayout
      leftPanel={<div className="p-4 text-text-dim">Molecule Gallery</div>}
      centerPanel={<div className="flex-1 flex items-center justify-center text-text-dim">Molecule Viewer Placeholder</div>}
      rightPanel={<div className="p-4 text-text-dim">Molecule Info</div>}
    />
  );
}
