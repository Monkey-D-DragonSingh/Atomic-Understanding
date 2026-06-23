import { useAppStore } from './store/useAppStore';
import { ThreePanelLayout } from './components/layout/ThreePanelLayout';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { Header } from './components/layout/Header';
import { AtomMode } from './modes/atom/AtomMode';
import { MoleculeMode } from './modes/molecule/MoleculeMode';
import { CompoundMode } from './modes/compound/CompoundMode';

function App() {
  const { mode } = useAppStore();

  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-text font-sans">
      <Header />
      
      <main className="h-full w-full">
        <ThreePanelLayout>
          <ErrorBoundary>
            {mode === 'atom' && <AtomMode />}
            {mode === 'molecule' && <MoleculeMode />}
            {mode === 'compound' && <CompoundMode />}
            {mode === 'reaction' && (
              <div className="flex items-center justify-center h-full text-text-dim text-lg">
                Reaction Simulator (Part 3)
              </div>
            )}
          </ErrorBoundary>
        </ThreePanelLayout>
      </main>
    </div>
  );
}

export default App;
