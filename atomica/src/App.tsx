import { useAppStore } from './store/useAppStore';
import { Header } from './components/layout/Header';
import { AtomMode } from './modes/atom/AtomMode';
import { MoleculeMode } from './modes/molecule/MoleculeMode';
import { CompoundMode } from './modes/compound/CompoundMode';

// Placeholder for Reaction mode
function ReactionModeStub() {
  return (
    <div className="flex-1 flex items-center justify-center h-full">
      <div className="text-center p-8 bg-panel border border-border rounded-xl">
        <h2 className="text-2xl font-bold text-accent mb-2">Reaction Simulator</h2>
        <p className="text-text-dim">Coming in Part 3.</p>
      </div>
    </div>
  );
}

function App() {
  const { mode } = useAppStore();

  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-text font-sans">
      <Header />
      
      <main className="h-full w-full">
        {mode === 'atom' && <AtomMode />}
        {mode === 'molecule' && <MoleculeMode />}
        {mode === 'compound' && <CompoundMode />}
        {mode === 'reaction' && <ReactionModeStub />}
      </main>
    </div>
  );
}

export default App;
