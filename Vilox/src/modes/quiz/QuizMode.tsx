import { useState, useEffect, useCallback } from 'react';
import {
  QuizQuestion, QuizCategory, QuizDifficulty,
  QUIZ_CATEGORIES, QUIZ_DIFFICULTIES, getQuestions,
} from './quizData';
import { RotateCcw, Clock, CheckCircle2, XCircle, BookOpen, Zap, Target } from 'lucide-react';

type Screen = 'setup' | 'quiz' | 'results';

const QUESTION_TIME = 30; // seconds per question

// ─── Difficulty badge colour ──────────────────────────────────────────────────
function diffBg(d: QuizDifficulty) {
  return d === 'easy'
    ? 'bg-emerald-400/10 border-emerald-400/25 text-emerald-400'
    : d === 'medium'
    ? 'bg-amber-400/10 border-amber-400/25 text-amber-400'
    : 'bg-red-400/10 border-red-400/25 text-red-400';
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────
function SetupScreen({ onStart }: { onStart: (cat: QuizCategory, diff: QuizDifficulty | 'all', count: number) => void }) {
  const [category, setCategory] = useState<QuizCategory>('mixed');
  const [difficulty, setDifficulty] = useState<QuizDifficulty | 'all'>('all');
  const [count, setCount] = useState(10);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-8 gap-8">
      {/* Hero */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-2">
          <BookOpen className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text">Chemistry Quiz</h2>
        <p className="text-text-dim text-sm max-w-xs">
          Test your knowledge across elements, reactions and compounds.
        </p>
      </div>

      {/* Config card */}
      <div className="glass-strong rounded-2xl p-6 w-full max-w-md space-y-6 border border-border">
        {/* Category */}
        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.14em] text-text-dim font-semibold">Category</label>
          <div className="grid grid-cols-2 gap-2">
            {QUIZ_CATEGORIES.map(c => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150
                  ${category === c.value
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-border bg-surface/40 text-text-dim hover:text-text hover:border-border-strong'}`}
              >
                <span>{c.emoji}</span>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.14em] text-text-dim font-semibold">Difficulty</label>
          <div className="grid grid-cols-4 gap-2">
            {[{ value: 'all', label: 'All', color: 'text-text-dim' }, ...QUIZ_DIFFICULTIES].map(d => (
              <button
                key={d.value}
                onClick={() => setDifficulty(d.value as QuizDifficulty | 'all')}
                className={`px-2 py-2 rounded-xl border text-xs font-medium transition-all duration-150
                  ${difficulty === d.value
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-border bg-surface/40 text-text-dim hover:text-text hover:border-border-strong'}`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question count */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] uppercase tracking-[0.14em] text-text-dim font-semibold">Questions</label>
            <span className="text-accent font-semibold text-sm">{count}</span>
          </div>
          <input
            type="range" min={5} max={20} step={5} value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full accent-[var(--accent)] h-1.5 rounded-full"
          />
          <div className="flex justify-between text-[10px] text-text-dim">
            <span>5</span><span>10</span><span>15</span><span>20</span>
          </div>
        </div>

        {/* Start */}
        <button
          onClick={() => onStart(category, difficulty, count)}
          className="w-full py-3 rounded-xl bg-accent text-bg font-semibold text-sm tracking-wide
            hover:bg-accent/90 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Start Quiz
        </button>
      </div>
    </div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────
function QuestionScreen({
  questions, onFinish,
}: {
  questions: QuizQuestion[];
  onFinish: (answers: (number | null)[]) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const current = questions[idx];

  const advance = useCallback((chosenIdx: number | null) => {
    const newAnswers = [...answers, chosenIdx];
    setAnswers(newAnswers);
    if (idx + 1 >= questions.length) {
      onFinish(newAnswers);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(QUESTION_TIME);
    }
  }, [answers, idx, questions.length, onFinish]);

  // Timer
  useEffect(() => {
    if (revealed) return;
    if (timeLeft <= 0) { setRevealed(true); setTimeout(() => advance(null), 1200); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, revealed, advance]);

  const handleSelect = (optIdx: number) => {
    if (revealed) return;
    setSelected(optIdx);
    setRevealed(true);
    setTimeout(() => advance(optIdx), 1200);
  };

  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft > 15 ? 'bg-emerald-400' : timeLeft > 7 ? 'bg-amber-400' : 'bg-red-400';

  if (!current) return null;

  return (
    <div className="flex flex-col h-full px-4 py-6 max-w-2xl mx-auto w-full gap-5">
      {/* Progress bar + meta */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-text-dim">
          <span>Question {idx + 1} of {questions.length}</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span className={timeLeft <= 7 ? 'text-red-400 font-semibold' : ''}>{timeLeft}s</span>
          </div>
        </div>
        <div className="h-1 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((idx) / questions.length) * 100}%` }}
          />
        </div>
        <div className="h-1 bg-surface rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${timerColor}`}
            style={{ width: `${timerPct}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="glass-strong rounded-2xl p-5 border border-border space-y-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border ${diffBg(current.difficulty)}`}>
            {current.difficulty}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-text-dim">{current.category}</span>
        </div>
        <p className="text-text font-medium text-base leading-snug">{current.question}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2.5 flex-1">
        {current.options.map((opt, i) => {
          const isCorrect = i === current.correctIndex;
          const isSelected = i === selected;

          let cls = 'border-border bg-surface/30 text-text hover:border-border-strong hover:bg-surface/60';
          if (revealed) {
            if (isCorrect) cls = 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300';
            else if (isSelected) cls = 'border-red-400/50 bg-red-400/10 text-red-300';
            else cls = 'border-border bg-surface/20 text-text-dim opacity-50';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left
                transition-all duration-200 ${cls}`}
            >
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[11px] flex-shrink-0">
                {revealed
                  ? isCorrect ? <CheckCircle2 className="w-4 h-4" />
                    : isSelected ? <XCircle className="w-4 h-4" /> : String.fromCharCode(65 + i)
                  : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer) */}
      {revealed && (
        <div className="glass rounded-xl px-4 py-3 border border-border text-xs text-text-dim leading-relaxed">
          <span className="text-accent font-semibold">Explanation: </span>
          {current.explanation}
        </div>
      )}
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({
  questions, answers, onRetry, onSetup,
}: {
  questions: QuizQuestion[];
  answers: (number | null)[];
  onRetry: () => void;
  onSetup: () => void;
}) {
  const correct = answers.filter((a, i) => a === questions[i]?.correctIndex).length;
  const pct = Math.round((correct / questions.length) * 100);

  const grade =
    pct >= 90 ? { label: 'Excellent!', color: 'text-emerald-400', emoji: '🏆' }
    : pct >= 70 ? { label: 'Good Job!', color: 'text-accent', emoji: '🎯' }
    : pct >= 50 ? { label: 'Keep Practicing', color: 'text-amber-400', emoji: '📚' }
    : { label: 'Needs Work', color: 'text-red-400', emoji: '💪' };

  return (
    <div className="flex flex-col items-center h-full px-4 py-8 max-w-2xl mx-auto w-full gap-6 overflow-y-auto custom-scrollbar">
      {/* Score card */}
      <div className="glass-strong rounded-2xl p-8 w-full border border-border text-center space-y-3">
        <div className="text-4xl">{grade.emoji}</div>
        <div className={`text-2xl font-bold ${grade.color}`}>{grade.label}</div>
        <div className="text-5xl font-bold text-text tracking-tight">{pct}%</div>
        <div className="text-text-dim text-sm">{correct} / {questions.length} correct</div>

        {/* Mini bar */}
        <div className="h-2 bg-surface rounded-full overflow-hidden mt-2">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {[
          { label: 'Correct', value: correct, color: 'text-emerald-400', icon: <CheckCircle2 className="w-4 h-4" /> },
          { label: 'Wrong', value: questions.length - correct - answers.filter(a => a === null).length, color: 'text-red-400', icon: <XCircle className="w-4 h-4" /> },
          { label: 'Skipped', value: answers.filter(a => a === null).length, color: 'text-text-dim', icon: <Clock className="w-4 h-4" /> },
        ].map(s => (
          <div key={s.label} className="glass rounded-xl p-3 border border-border text-center space-y-1">
            <div className={`flex justify-center ${s.color}`}>{s.icon}</div>
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[10px] text-text-dim uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Review list */}
      <div className="w-full space-y-2">
        <div className="text-[11px] uppercase tracking-[0.14em] text-text-dim font-semibold px-1">Review</div>
        {questions.map((q, i) => {
          const ans = answers[i];
          const isCorrect = ans === q.correctIndex;
          const skipped = ans === null;
          return (
            <div key={q.id} className="glass rounded-xl p-3.5 border border-border space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">
                  {isCorrect
                    ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    : skipped
                    ? <Clock className="w-4 h-4 text-text-dim" />
                    : <XCircle className="w-4 h-4 text-red-400" />}
                </span>
                <p className="text-sm text-text leading-snug">{q.question}</p>
              </div>
              {!isCorrect && (
                <div className="pl-6 space-y-0.5">
                  {!skipped && (
                    <p className="text-xs text-red-400">Your answer: {q.options[ans!]}</p>
                  )}
                  <p className="text-xs text-emerald-400">Correct: {q.options[q.correctIndex]}</p>
                  <p className="text-xs text-text-dim mt-1">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 w-full pb-4">
        <button
          onClick={onRetry}
          className="flex-1 py-3 rounded-xl border border-border bg-surface/30 text-text text-sm font-medium
            hover:border-border-strong hover:bg-surface/60 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Retry
        </button>
        <button
          onClick={onSetup}
          className="flex-1 py-3 rounded-xl bg-accent text-bg text-sm font-semibold
            hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
        >
          <Target className="w-4 h-4" />
          New Quiz
        </button>
      </div>
    </div>
  );
}

// ─── Main QuizMode ────────────────────────────────────────────────────────────
export function QuizMode() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [config, setConfig] = useState<{ cat: QuizCategory; diff: QuizDifficulty | 'all'; count: number } | null>(null);

  const handleStart = (cat: QuizCategory, diff: QuizDifficulty | 'all', count: number) => {
    const qs = getQuestions(cat, diff, count);
    if (qs.length === 0) return;
    setConfig({ cat, diff, count });
    setQuestions(qs);
    setAnswers([]);
    setScreen('quiz');
  };

  const handleFinish = (ans: (number | null)[]) => {
    setAnswers(ans);
    setScreen('results');
  };

  const handleRetry = () => {
    if (!config) return;
    handleStart(config.cat, config.diff, config.count);
  };

  return (
    <div className="h-full w-full overflow-hidden flex flex-col pt-[56px]">
      {screen === 'setup' && <SetupScreen onStart={handleStart} />}
      {screen === 'quiz' && questions.length > 0 && (
        <QuestionScreen questions={questions} onFinish={handleFinish} />
      )}
      {screen === 'results' && (
        <ResultsScreen
          questions={questions}
          answers={answers}
          onRetry={handleRetry}
          onSetup={() => setScreen('setup')}
        />
      )}
    </div>
  );
}
