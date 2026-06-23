import { useAppStore } from './store/useAppStore';

function App() {
  const { mode, setMode } = useAppStore();

  return (
    <div className="min-h-screen bg-bg text-text p-8 font-sans">
      <header className="mb-8 border-b border-border pb-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-accent">ATOMICA</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setMode('atom')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mode === 'atom' ? 'bg-accent text-bg font-bold' : 'bg-panel hover:bg-border'
            }`}
          >
            Elements
          </button>
          <button
            onClick={() => setMode('molecule')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mode === 'molecule' ? 'bg-accent text-bg font-bold' : 'bg-panel hover:bg-border'
            }`}
          >
            Molecules
          </button>
          <button
            onClick={() => setMode('compound')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mode === 'compound' ? 'bg-accent text-bg font-bold' : 'bg-panel hover:bg-border'
            }`}
          >
            Compounds
          </button>
          <button
            onClick={() => setMode('reaction')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mode === 'reaction' ? 'bg-accent text-bg font-bold' : 'bg-panel hover:bg-border'
            }`}
          >
            Reactions
          </button>
        </div>
      </header>
      
      <main className="bg-panel rounded-xl border border-border p-8 min-h-[60vh] flex items-center justify-center shadow-[0_0_40px_var(--accent-glow)]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-text">Welcome to {mode.toUpperCase()} Mode</h2>
          <p className="text-text-dim max-w-md">
            This is Part 1 of the Atomica build. 3D rendering and mode-specific UI components will be implemented in Part 2 and Part 3.
          </p>
          {/* TODO (Part 2): Render specific 3D canvases and UI components based on the active mode */}
        </div>
      </main>
    </div>
  );
}

export default App;
