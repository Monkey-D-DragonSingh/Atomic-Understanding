import { CheckCircle2, XCircle, AlertTriangle, FlaskConical } from 'lucide-react';
import { MOLECULES } from '../../data/molecules';
import { CATALYSTS } from '../../data/catalysts';
import { useAppStore } from '../../store/useAppStore';
import { MoleculeViewer } from '../../components/three/MoleculeViewer';
import { Badge } from '../../components/ui/Badge';

export function ReactionResultPanel() {
  const { reactionResult } = useAppStore();

  // Idle state — nothing reacted yet
  if (!reactionResult || reactionResult.status === 'empty') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-3">
        <FlaskConical className="w-10 h-10 text-text-dim" />
        <p className="text-sm text-text-dim">
          Select reactants and hit <span className="text-accent font-semibold">React</span> to
          see if a known product forms.
        </p>
      </div>
    );
  }

  if (reactionResult.status === 'invalid') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-3">
        <XCircle className="w-10 h-10 text-red-400" />
        <p className="text-sm font-semibold text-text">No known reaction</p>
        <p className="text-xs text-text-dim">
          This combination of reactants doesn't match any reaction in the database. Try a
          different set of molecules.
        </p>
      </div>
    );
  }

  if (reactionResult.status === 'catalyst-missing' || reactionResult.status === 'wrong-catalyst') {
    const neededCatalyst = CATALYSTS.find((c) => c.id === reactionResult.neededCatalystId);
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-3">
        <AlertTriangle className="w-10 h-10 text-yellow-400" />
        <p className="text-sm font-semibold text-text">
          {reactionResult.status === 'catalyst-missing' ? 'Catalyst needed' : 'Wrong catalyst'}
        </p>
        <p className="text-xs text-text-dim">
          <span className="font-semibold text-text">{reactionResult.reaction.name}</span> needs{' '}
          <span className="font-mono text-accent">
            {neededCatalyst?.symbol} ({neededCatalyst?.name})
          </span>{' '}
          to proceed.
        </p>
        {neededCatalyst && (
          <p className="text-[11px] text-text-dim italic max-w-[220px]">
            {neededCatalyst.description}
          </p>
        )}
      </div>
    );
  }

  // valid
  const { reaction } = reactionResult;
  const firstProduct = MOLECULES.find((m) => m.id === reaction.products[0]?.moleculeId);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border shrink-0">
        <Badge variant="accent" className="mb-2 flex items-center gap-1 w-fit">
          <CheckCircle2 className="w-3 h-3" /> Reaction Valid
        </Badge>
        <h2 className="text-lg font-bold text-text">{reaction.name}</h2>
        <p className="font-mono text-sm text-accent mt-1">{reaction.balancedEquation}</p>
        {reaction.conditions && (
          <p className="text-xs text-text-dim mt-2">{reaction.conditions}</p>
        )}
      </div>

      <div className="flex-1 min-h-[240px] relative">
        {firstProduct && (
          <MoleculeViewer
            atoms={firstProduct.atoms}
            bonds={firstProduct.bonds}
            viewMode="ball-stick"
          />
        )}
      </div>

      <div className="p-4 border-t border-border shrink-0">
        <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">
          Products
        </h3>
        <div className="flex flex-col gap-1.5">
          {reaction.products.map((p) => {
            const mol = MOLECULES.find((m) => m.id === p.moleculeId);
            if (!mol) return null;
            return (
              <div key={p.moleculeId} className="flex justify-between items-center text-sm">
                <span className="text-text">{mol.name}</span>
                <span className="font-mono text-xs text-text-dim">{mol.formula}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
