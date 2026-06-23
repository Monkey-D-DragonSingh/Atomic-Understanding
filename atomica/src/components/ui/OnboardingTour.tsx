import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { X, ChevronRight, Check } from 'lucide-react';

const TOUR_STEPS = [
  {
    title: 'Welcome to ATOMICA',
    content: 'An interactive chemistry platform. Discover elements, build molecules, and simulate reactions.',
  },
  {
    title: 'Explore Elements',
    content: 'Click any element on the Periodic Table to see its atomic structure and properties.',
  },
  {
    title: 'Build Molecules',
    content: 'Switch to Molecule mode to drag and drop atoms, forming real chemical bonds.',
  },
  {
    title: 'Simulate Reactions',
    content: 'Watch balanced chemical equations play out in real-time in Reaction mode.',
  }
];

export function OnboardingTour() {
  const { onboardingSeen, setOnboardingSeen } = useAppStore();
  const [step, setStep] = useState(0);

  // Small delay to let the app render before showing
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!onboardingSeen) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [onboardingSeen]);

  if (onboardingSeen || !visible) return null;

  const handleNext = () => {
    if (step < TOUR_STEPS.length - 1) {
      setStep(s => s + 1);
    } else {
      setOnboardingSeen(true);
    }
  };

  const handleSkip = () => {
    setOnboardingSeen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-panel border border-border shadow-2xl rounded-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-br from-accent/20 to-bg flex items-center justify-center border-b border-border">
          <div className="absolute top-2 right-2">
            <button onClick={handleSkip} className="p-2 text-text-dim hover:text-text transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-3xl">⚛️</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-1 mb-4 justify-center">
            {TOUR_STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-6 bg-accent' : i < step ? 'w-2 bg-accent/50' : 'w-2 bg-border'}`} 
              />
            ))}
          </div>

          <h2 className="text-xl font-bold text-text mb-2 text-center">
            {TOUR_STEPS[step]?.title}
          </h2>
          <p className="text-text-dim text-center min-h-[60px]">
            {TOUR_STEPS[step]?.content}
          </p>

          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={handleSkip}
              className="text-sm text-text-dim hover:text-text transition-colors px-3 py-2"
            >
              Skip Tour
            </button>
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              {step === TOUR_STEPS.length - 1 ? (
                <>Get Started <Check className="w-4 h-4" /></>
              ) : (
                <>Next <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
