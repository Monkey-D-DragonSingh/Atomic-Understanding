import { X, ArrowRight, FlaskConical, RotateCcw } from 'lucide-react';
import { MOLECULES } from '../../data/molecules';
import { CATALYSTS } from '../../data/catalysts';
import { useAppStore } from '../../store/useAppStore';
import { matchReaction } from '../../lib/reactionMatcher';
import { CatalystSelector } from './CatalystSelector';

export function ReactionWorkspace() {
  const {
    selectedReactantIds,
    removeReactant,
    clearReactants,
    selectedCatalystId,
    setReactionResult,
  } = useAppStore();

  const reactantMolecules = selectedReactantIds
    .map((id) => MOLECULES.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => !!m);

  const catalyst = CATALYSTS.find((c) => c.id === selectedCatalystId) ?? null;

  const handleReact = () => {
    const result = matchReaction(selectedReactantIds, selectedCatalystId);
    setReactionResult(result);
  };

  return (
    <div className="flex-1 relative bg-bg overflow-y-auto">
      <div className="max-w-2xl mx-auto p-6 pt-20 flex flex-col gap-8">
        {/* Reactant chips + arrow */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {reactantMolecules.length === 0 && (
            <div className="text-center py-10 text-text-dim text-sm">
              Pick molecules from the left panel to start a reaction.
            </div>
          )}

          {reactantMolecules.map((mol, i) => (
            <div key={mol.id} className="flex items-center gap-3">
              {i > 0 && <span className="text-text-dim text-lg font-bold">+</span>}
              <div className="relative bg-panel border border-border rounded-xl px-4 py-3 flex flex-col items-center gap-1">
                <button
                  onClick={() => removeReactant(mol.id)}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
                <span className="font-mono text-lg text-accent">{mol.formula}</span>
                <span className="text-[10px] text-text-dim">{mol.name}</span>
              </div>
            </div>
          ))}

          {reactantMolecules.length > 0 && (
            <div className="flex flex-col items-center gap-1 mx-2">
              {catalyst && (
                <span className="font-mono text-xs text-accent">{catalyst.symbol}</span>
              )}
              <ArrowRight className="w-8 h-8 text-text-dim" />
            </div>
          )}

          {reactantMolecules.length > 0 && (
            <div className="bg-panel border border-dashed border-border rounded-xl px-4 py-3 flex flex-col items-center gap-1 text-text-dim">
              <span className="font-mono text-lg">?</span>
              <span className="text-[10px]">Product</span>
            </div>
          )}
        </div>

        {reactantMolecules.length > 0 && (
          <>
            <CatalystSelector />

            <div className="flex justify-center gap-3">
              <button
                onClick={handleReact}
                className="px-6 py-3 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(79,195,247,0.4)]"
              >
                <FlaskConical className="w-4 h-4" /> React
              </button>
              <button
                onClick={clearReactants}
                className="px-4 py-3 border border-border text-text-dim hover:text-text hover:border-accent/50 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Clear
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}