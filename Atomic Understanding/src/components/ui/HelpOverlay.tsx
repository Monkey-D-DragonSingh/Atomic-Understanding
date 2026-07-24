import { useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { X, Keyboard, MousePointer2, FlaskConical } from 'lucide-react';

export function HelpOverlay() {
  const { helpOpen, setHelpOpen } = useAppStore();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && helpOpen) {
        setHelpOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [helpOpen, setHelpOpen]);

  if (!helpOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-panel border border-border shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up">
        
        <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-bg/50">
          <h2 className="text-lg font-bold text-text flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl">?</span>
            Atomic Understanding Guide
          </h2>
          <button 
            onClick={() => setHelpOpen(false)}
            className="p-2 text-text-dim hover:text-text rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          
          <section>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <Keyboard className="w-4 h-4" /> Keyboard Shortcuts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Shortcut keyCombo={['1']} desc="Atom Mode" />
              <Shortcut keyCombo={['2']} desc="Molecule Mode" />
              <Shortcut keyCombo={['3']} desc="Compound Mode" />
              <Shortcut keyCombo={['4']} desc="Reaction Mode" />
              <Shortcut keyCombo={['←', '→']} desc="Cycle Elements (Atom Mode)" />
              <Shortcut keyCombo={['Esc']} desc="Close Overlays / Clear" />
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <MousePointer2 className="w-4 h-4" /> Interactions
            </h3>
            <ul className="space-y-3 text-sm text-text-dim">
              <li><strong className="text-text">Periodic Table:</strong> Click/Tap elements to view details. Hover for quick stats.</li>
              <li><strong className="text-text">3D Viewer:</strong> Drag to rotate, scroll/pinch to zoom. Auto-fits bounds on load.</li>
              <li><strong className="text-text">Molecule Builder:</strong> Drag elements from the tray. Move them close to form bonds automatically. Drag apart to break bonds.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <FlaskConical className="w-4 h-4" /> View Modes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <strong className="text-text block mb-1">Atom Mode</strong>
                <p className="text-text-dim mb-1"><span className="text-text">Bohr:</span> Classic planetary model.</p>
                <p className="text-text-dim mb-1"><span className="text-text">Cloud:</span> Probabilistic electron density.</p>
                <p className="text-text-dim"><span className="text-text">Orbital:</span> Schematic s, p, d, f subshells.</p>
              </div>
              <div>
                <strong className="text-text block mb-1">Compound Mode</strong>
                <p className="text-text-dim mb-1"><span className="text-text">Skeletal:</span> 2D structural formula (C/H hidden).</p>
                <p className="text-text-dim mb-1"><span className="text-text">Ball-Stick:</span> 3D covalent geometry.</p>
                <p className="text-text-dim"><span className="text-text">Space-Fill:</span> 3D Van der Waals radii.</p>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}

function Shortcut({ keyCombo, desc }: { keyCombo: string[], desc: string }) {
  return (
    <div className="flex items-center justify-between bg-black/20 p-2 rounded-lg border border-border">
      <span className="text-sm text-text-dim">{desc}</span>
      <div className="flex gap-1">
        {keyCombo.map((k, i) => (
          <kbd key={i} className="px-2 py-1 bg-panel border border-border rounded text-xs font-mono text-text shadow-sm">
            {k}
          </kbd>
        ))}
      </div>
    </div>
  );
}
