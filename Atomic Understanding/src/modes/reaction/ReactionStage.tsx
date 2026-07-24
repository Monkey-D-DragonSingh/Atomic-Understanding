import { useEffect, useRef, useState, useMemo } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Play, Pause, RotateCcw } from 'lucide-react';
// MOLECULES removed since unused

// Helper to parse "H₂O" into {H: 2, O: 1}
function parseFormula(formula: string): Record<string, number> {
  const counts: Record<string, number> = {};
  const normalized = formula
    .replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5')
    .replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8');
  
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  while ((match = regex.exec(normalized)) !== null) {
    const sym = match[1];
    if (!sym) continue;
    const count = match[2] ? parseInt(match[2]) : 1;
    counts[sym] = (counts[sym] || 0) + count;
  }
  return counts;
}

export function ReactionStage() {
  const { activeReaction } = useAppStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const rafRef = useRef<number>();

  // Reset animation when reaction changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, [activeReaction]);

  useEffect(() => {
    if (!isPlaying) return;

    let startTime = performance.now() - progress * 2000;
    
    const animate = (time: number) => {
      let p = (time - startTime) / 2000;
      if (p > 1) p = 1;
      setProgress(p);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, progress]);

  // Compute Conservation Banner
  const conservation = useMemo(() => {
    if (!activeReaction) return null;

    const left: Record<string, number> = {};
    const right: Record<string, number> = {};

    activeReaction.reactants.forEach(r => {
      const parts = parseFormula(r.formula);
      for (const [sym, count] of Object.entries(parts)) {
        left[sym] = (left[sym] || 0) + count * r.coefficient;
      }
    });

    activeReaction.products.forEach(p => {
      const parts = parseFormula(p.formula);
      for (const [sym, count] of Object.entries(parts)) {
        right[sym] = (right[sym] || 0) + count * p.coefficient;
      }
    });

    const formatCounts = (record: Record<string, number>) => 
      Object.entries(record)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([sym, count]) => `${count}${sym}`)
        .join(' ');

    const leftStr = formatCounts(left);
    const rightStr = formatCounts(right);
    const isBalanced = leftStr === rightStr;

    return { leftStr, rightStr, isBalanced };
  }, [activeReaction]);

  if (!activeReaction) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-bg relative">
        <div className="text-6xl mb-4 opacity-50">⚖️</div>
        <h2 className="text-xl font-bold text-text-dim">Select a Reaction</h2>
        <p className="text-text-dim text-sm text-center max-w-sm mt-2">
          Choose a reaction from the left panel to simulate its molecular rearrangement.
        </p>
      </div>
    );
  }

  // Generate participant cards
  const renderParticipant = (p: typeof activeReaction.reactants[0], i: number, isProduct: boolean) => {
    const opacity = isProduct ? Math.pow(progress, 2) : Math.pow(1 - progress, 2);
    const scale = isProduct ? 0.8 + progress * 0.2 : 1 - progress * 0.2;
    const tx = isProduct ? (1 - progress) * -50 : progress * 50;

    return (
      <div 
        key={i} 
        className="flex items-center gap-2 transition-transform duration-75"
        style={{ 
          opacity, 
          transform: `scale(${scale}) translateX(${tx}px)` 
        }}
      >
        {p.coefficient > 1 && <span className="text-2xl font-bold text-accent">{p.coefficient}</span>}
        <div className="relative w-20 h-20 bg-panel border border-border rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-xl font-mono font-bold text-text">{p.formula}</span>
          <span className="absolute -bottom-2 -right-2 text-[10px] bg-black/60 px-1 rounded border border-border/50 text-text-dim">
            ({p.state})
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-bg relative overflow-hidden">
      {/* Header / Equation */}
      <div className="p-6 text-center z-10 bg-gradient-to-b from-bg to-transparent">
        <div className="inline-block px-6 py-3 bg-black/40 border border-border rounded-2xl backdrop-blur">
          <h2 className="text-2xl font-mono font-bold text-text tracking-wider">
            {activeReaction.balancedEquation}
          </h2>
        </div>
      </div>

      {/* Conservation Banner */}
      {conservation && (
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur z-20 flex gap-4 ${
          conservation.isBalanced 
            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
            : 'bg-red-500/10 border-red-500/30 text-red-400'
        }`}>
          <span>Left: {conservation.leftStr}</span>
          <span>Right: {conservation.rightStr}</span>
        </div>
      )}

      {/* Stage Area */}
      <div className="flex-1 flex items-center justify-center relative px-8">
        {/* Schematic layout */}
        <div className="flex items-center gap-8 w-full max-w-3xl justify-between">
          
          {/* Reactants */}
          <div className="flex gap-4 flex-wrap justify-center flex-1">
            {activeReaction.reactants.map((r, i) => (
              <div key={`r-${i}`} className="flex items-center gap-4">
                {i > 0 && <span className="text-2xl font-bold text-text-dim" style={{ opacity: 1 - progress }}>+</span>}
                {renderParticipant(r, i, false)}
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="text-4xl text-accent font-bold px-4">→</div>

          {/* Products */}
          <div className="flex gap-4 flex-wrap justify-center flex-1">
            {activeReaction.products.map((p, i) => (
              <div key={`p-${i}`} className="flex items-center gap-4">
                {i > 0 && <span className="text-2xl font-bold text-text-dim" style={{ opacity: progress }}>+</span>}
                {renderParticipant(p, i, true)}
              </div>
            ))}
          </div>

        </div>

        {/* Progress Bar background effect */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-accent/20 transition-all duration-75" 
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Controls */}
      <div className="p-6 flex justify-center gap-4 bg-gradient-to-t from-bg to-transparent z-10">
        <button
          onClick={() => {
            if (progress >= 1) setProgress(0);
            setIsPlaying(!isPlaying);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-bg rounded-xl font-bold hover:bg-accent/90 transition-transform active:scale-95 shadow-[0_0_20px_rgba(79,195,247,0.3)]"
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          {isPlaying ? 'Pause' : progress >= 1 ? 'Replay' : 'Play'}
        </button>
        <button
          onClick={() => {
            setIsPlaying(false);
            setProgress(0);
          }}
          className="p-3 bg-panel border border-border text-text hover:text-accent rounded-xl transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
