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
    <header className="h-[56px] glass-strong flex items-center justify-between px-4 md:px-5 fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent/20 blur-md" />
            <Atom className="relative w-5 h-5 text-accent" strokeWidth={2} />
          </div>
          <div className="flex items-baseline gap-2.5 min-w-0">
            <h1 className="font-bold text-[15px] tracking-[0.22em] text-text">ATOMICA</h1>
            <span className="text-[10px] text-text-dim uppercase tracking-[0.16em] hidden lg:inline-block truncate">
              Interactive Chemistry Explorer
            </span>
          </div>
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

      <div className="w-28 md:w-32 flex justify-end">
        <div className="glass px-3.5 py-1.5 rounded-full text-sm font-mono text-accent whitespace-nowrap overflow-hidden text-ellipsis min-w-[3rem] text-center">
          {readout}
        </div>
      </div>
    </header>
  );
}
