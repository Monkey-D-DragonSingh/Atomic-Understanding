import { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { Header } from './components/layout/Header';
import { OnboardingTour } from './components/ui/OnboardingTour';
import { HelpOverlay } from './components/ui/HelpOverlay';
import { AtomMode } from './modes/atom/AtomMode';
import { MoleculeMode } from './modes/molecule/MoleculeMode';
import { CompoundMode } from './modes/compound/CompoundMode';
import { ReactionMode } from './modes/reaction/ReactionMode';
import { QuizMode } from './modes/quiz/QuizMode';


function App() {
  const { mode, setMode, helpOpen, setHelpOpen } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case '1': setMode('atom'); break;
        case '2': setMode('molecule'); break;
        case '3': setMode('compound'); break;
        case '4': setMode('reaction'); break;
        case '?': 
          if (e.shiftKey) setHelpOpen(!helpOpen);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setMode, helpOpen, setHelpOpen]);

  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-bg text-text font-sans">
      <Header />
      
      <main className="h-full w-full">
        <ErrorBoundary>
          {mode === 'atom' && <AtomMode />}
          {mode === 'molecule' && <MoleculeMode />}
          {mode === 'compound' && <CompoundMode />}
          {mode === 'reaction' && <ReactionMode />}
          {mode === 'quiz' && <QuizMode />}
          
        </ErrorBoundary>
      </main>
      
      <OnboardingTour />
      <HelpOverlay />
    </div>
  );
}

export default App;
