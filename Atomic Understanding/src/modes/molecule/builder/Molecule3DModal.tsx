import { useAppStore } from '../../../store/useAppStore';
import { MoleculeViewer } from '../../../components/three/MoleculeViewer';
import { X } from 'lucide-react';

export function Molecule3DModal() {
  const { show3DModal, setShow3DModal, activeCompound, compoundView } = useAppStore();

  if (!show3DModal || !activeCompound) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-[80vh] bg-panel border border-border rounded-xl overflow-hidden shadow-2xl">
        <button
          onClick={() => setShow3DModal(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-text transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute top-4 left-4 z-10">
          <h2 className="text-xl font-bold text-text">{activeCompound.name}</h2>
          <div className="text-sm font-mono text-accent">{activeCompound.formula}</div>
        </div>

        <MoleculeViewer
          atoms={activeCompound.atoms}
          bonds={activeCompound.bonds}
          viewMode={compoundView}
        />
      </div>
    </div>
  );
}