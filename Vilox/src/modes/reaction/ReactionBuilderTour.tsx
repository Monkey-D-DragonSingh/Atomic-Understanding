import { useState, useEffect, useCallback } from 'react';
import { useAppStore } from '../../store/useAppStore';
import {
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  FlaskConical,
  Layers,
  Flame,
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react';

interface TourStep {
  title: string;
  badge: string;
  subtitle: string;
  content: string;
  icon: React.ReactNode;
  hint?: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    badge: 'Introduction',
    title: 'Reaction Builder Guide',
    subtitle: 'Simulate real chemical transformations',
    content:
      'Welcome to the Reaction Builder! In this interactive chemistry sandbox, you can choose reactants from our chemical database, supply thermal or catalytic conditions, and discover what products form according to actual thermodynamic and stoichiometric laws.',
    icon: <FlaskConical className="w-8 h-8 text-accent" />,
    hint: 'From simple water synthesis to Haber ammonia production and organic hydrogenations, dozens of reactions are supported.',
  },
  {
    badge: 'Step 1',
    title: 'Pick Your Reactants',
    subtitle: 'Select from molecules or elemental atoms',
    content:
      'Use the Left Panel to find your starting materials. Toggle between pre-formed Molecules (e.g. H₂, O₂, N₂, Ethene) and pure elemental Atoms (e.g. Na, Fe, Cl). Click any card or the "+" button to add it to your reaction vessel.',
    icon: <Layers className="w-8 h-8 text-sky-400" />,
    hint: 'Tip: You can search by molecule name or chemical formula in the search bar.',
  },
  {
    badge: 'Step 2',
    title: 'Equation Stage & Workspace',
    subtitle: 'Review and adjust your starting materials',
    content:
      'The Center Stage displays your chosen reagents as equation chips (e.g., A + B → ?). If you change your mind or want to adjust the stoichiometry, click the red "✕" on any chip to remove it, or hit "Clear" to wipe the vessel clean.',
    icon: <ArrowRight className="w-8 h-8 text-emerald-400" />,
    hint: 'The question mark (?) placeholder indicates that the reaction engine is ready to simulate product formation.',
  },
  {
    badge: 'Step 3',
    title: 'Choose Catalyst & Conditions',
    subtitle: 'Overcome activation energy barriers',
    content:
      'Many reactions require specific conditions to proceed! Choose from Thermal Energy (Δ), Transition Metal Catalysts (Fe, Ni, Pt, Pd, Raney Ni, Wilkinson\'s, Grubbs), Acid Catalysts (H₂SO₄, AlCl₃, FeCl₃), Solid Beds (Al₂O₃, Zeolite ZSM-5), or Biological Enzymes (Catalase, Yeast, Lipase, DNA Pol). Select "None" for spontaneous reactions.',
    icon: <Flame className="w-8 h-8 text-amber-400" />,
    hint: 'Each catalyst button displays its chemical symbol, and hovering over it shows its real-world mechanism.',
  },
  {
    badge: 'Step 4',
    title: 'Hit "React" & Inspect Results',
    subtitle: 'Explore 3D products and reaction enthalpy',
    content:
      'Press the glowing "React" button. The engine evaluates chemical validity and immediately reveals the balanced equation, reaction classification (synthesis, combustion, redox, etc.), enthalpy change (ΔH), and an interactive 3D ball-and-stick viewer of the synthesized product on the Right Panel!',
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    hint: 'If a required catalyst was missing or incorrect, the panel gives you exact hints on which catalyst to select.',
  },
];

const PRESET_REACTIONS = [
  {
    name: 'Water Formation',
    reactants: ['hydrogen', 'oxygen'],
    catalyst: 'heat',
    label: '2H₂ + O₂ → 2H₂O',
  },
  {
    name: 'Haber Ammonia',
    reactants: ['nitrogen', 'hydrogen'],
    catalyst: 'iron-catalyst',
    label: 'N₂ + 3H₂ → 2NH₃',
  },
  {
    name: 'Peroxide Decomposition',
    reactants: ['hydrogen-peroxide'],
    catalyst: 'manganese-dioxide',
    label: '2H₂O₂ → 2H₂O + O₂',
  },
];

export function ReactionBuilderTour() {
  const {
    reactionTourSeen,
    setReactionTourSeen,
    reactionTourOpen,
    setReactionTourOpen,
    addReactant,
    clearReactants,
    setCatalystId,
  } = useAppStore();

  const [step, setStep] = useState(0);

  // Auto-show on first visit
  useEffect(() => {
    if (!reactionTourSeen && !reactionTourOpen) {
      const timer = setTimeout(() => {
        setReactionTourOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [reactionTourSeen, reactionTourOpen, setReactionTourOpen]);

  const handleClose = useCallback(() => {
    setReactionTourOpen(false);
    setReactionTourSeen(true);
  }, [setReactionTourOpen, setReactionTourSeen]);

  const handleNext = useCallback(() => {
    setStep((s) => {
      if (s < TOUR_STEPS.length - 1) return s + 1;
      handleClose();
      return s;
    });
  }, [handleClose]);

  const handlePrev = useCallback(() => {
    setStep((s) => (s > 0 ? s - 1 : s));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!reactionTourOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reactionTourOpen, handleNext, handlePrev, handleClose]);

  if (!reactionTourOpen) return null;

  const handleLoadPreset = (preset: typeof PRESET_REACTIONS[0]) => {
    clearReactants();
    preset.reactants.forEach((r) => addReactant(r));
    setCatalystId(preset.catalyst);
    handleClose();
  };

  const current: TourStep = TOUR_STEPS[step] ?? (TOUR_STEPS[0] as TourStep);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-panel border border-border shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden animate-fade-in-up flex flex-col">
        {/* Top Header Banner */}
        <div className="relative h-28 bg-gradient-to-br from-accent/20 via-panel to-bg flex items-center justify-between px-6 border-b border-border">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shadow-[0_0_20px_rgba(79,195,247,0.2)]">
              {current.icon}
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                {current.badge} • Step {step + 1} of {TOUR_STEPS.length}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-text leading-tight">
                {current.title}
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close Tour"
            className="p-1.5 rounded-lg text-text-dim hover:text-text hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 flex flex-col gap-5">
          {/* Progress Indicator */}
          <div className="flex gap-1.5 justify-center">
            {TOUR_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-8 bg-accent'
                    : i < step
                    ? 'w-3 bg-accent/50'
                    : 'w-2 bg-border hover:bg-text-dim'
                }`}
              />
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-accent/90 mb-1.5">
              {current.subtitle}
            </h3>
            <p className="text-sm text-text-dim leading-relaxed">
              {current.content}
            </p>
          </div>

          {current.hint && (
            <div className="p-3 rounded-lg bg-white/5 border border-border/80 text-xs text-text-dim/90 flex items-start gap-2">
              <span className="text-accent shrink-0">💡</span>
              <span>{current.hint}</span>
            </div>
          )}

          {/* Quick Start Presets (Shown on final step) */}
          {step === TOUR_STEPS.length - 1 && (
            <div className="pt-2 border-t border-border">
              <span className="text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-2">
                Or Try an Example Reaction:
              </span>
              <div className="flex flex-col gap-1.5">
                {PRESET_REACTIONS.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => handleLoadPreset(p)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-panel border border-border hover:border-accent/60 hover:bg-accent/10 transition-colors text-xs group"
                  >
                    <span className="font-semibold text-text group-hover:text-accent">
                      {p.name}
                    </span>
                    <div className="flex items-center gap-1 font-mono text-accent">
                      <span>{p.label}</span>
                      <Play className="w-3 h-3 fill-accent" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-2 flex justify-between items-center pt-3 border-t border-border">
            <button
              onClick={handleClose}
              className="text-xs text-text-dim hover:text-text px-2 py-1.5 rounded transition-colors"
            >
              Skip Tour
            </button>

            <div className="flex items-center gap-2">
              {step > 0 && (
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border border-border text-text-dim hover:text-text hover:bg-white/5 transition-colors font-medium"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 bg-accent text-bg px-4 py-2 rounded-lg text-xs font-bold hover:bg-accent/90 transition-all shadow-[0_0_12px_rgba(79,195,247,0.3)]"
              >
                {step === TOUR_STEPS.length - 1 ? (
                  <>
                    <span>Start Building</span> <Check className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Next</span> <ChevronRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
