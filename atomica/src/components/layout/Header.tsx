import React from 'react';
import { useAppStore, AppMode } from '../../store/useAppStore';
import { SegmentedControl } from '../ui/SegmentedControl';
import { Atom, Droplets, FlaskConical, TestTube2 } from 'lucide-react';

export function Header() {
  const { mode, setMode, selectedElement, activeCompound } = useAppStore();

  const handleModeChange = (newMode: AppMode) => {
    setMode(newMode);
  };

  const modeOptions: { label: React.ReactNode; value: AppMode }[] = [
    { label: <div className="flex items-center gap-2"><Atom className="w-4 h-4" /> Atom</div>, value: 'atom' },
    { label: <div className="flex items-center gap-2"><Droplets className="w-4 h-4" /> Molecule</div>, value: 'molecule' },
    { label: <div className="flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Compound</div>, value: 'compound' },
    { label: <div className="flex items-center gap-2"><TestTube2 className="w-4 h-4" /> Reaction</div>, value: 'reaction' },
  ];

  let readout = '—';
  if (mode === 'atom' && selectedElement) {
    readout = selectedElement.symbol;
  } else if (mode === 'compound' && activeCompound) {
    readout = activeCompound.formula;
  } else if (mode === 'molecule') {
    readout = '—'; // Placeholder for molecule mode active item
  }

  return (
    <header className="h-[52px] border-b border-border bg-panel flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-baseline gap-2">
          <h1 className="text-accent font-bold text-lg tracking-[0.2em] drop-shadow-[0_0_8px_var(--accent-glow)]">
            ⚛ ATOMICA
          </h1>
          <span className="text-[10px] text-text-dim uppercase tracking-wider hidden md:inline-block">
            Interactive Chemistry Explorer
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-4 flex justify-center">
        <SegmentedControl
          value={mode}
          onChange={handleModeChange}
          options={modeOptions}
          size="sm"
          className="w-full"
        />
      </div>

      <div className="w-32 flex justify-end">
        <div className="bg-black/30 border border-border px-3 py-1 rounded-md text-sm font-mono text-accent whitespace-nowrap overflow-hidden text-ellipsis shadow-[inset_0_0_10px_rgba(79,195,247,0.05)]">
          {readout}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </header>
  );
}
