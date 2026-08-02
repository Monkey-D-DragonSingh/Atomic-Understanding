import { CheckCircle2, XCircle, AlertTriangle, FlaskConical, Flame, Snowflake } from 'lucide-react';
import { MOLECULES } from '../../data/molecules';
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
    const { reaction, neededSymbol } = reactionResult;
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-3">
        <AlertTriangle className="w-10 h-10 text-yellow-400" />
        <p className="text-sm font-semibold text-text">
          {reactionResult.status === 'catalyst-missing' ? 'Catalyst needed' : 'Wrong catalyst'}
        </p>
        <p className="text-xs text-text-dim">
          <span className="font-semibold text-text">{reaction.name}</span> needs{' '}
          <span className="font-mono text-accent">{neededSymbol}</span> to proceed.
        </p>
      </div>
    );
  }

  // valid
  const { reaction } = reactionResult;
  const firstProduct = MOLECULES.find((m) => m.formula === reaction.products[0]?.formula);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent" className="flex items-center gap-1 w-fit">
            <CheckCircle2 className="w-3 h-3" /> Valid
          </Badge>
          {reaction.isExothermic !== null && (
            <Badge variant={reaction.isExothermic ? 'warning' : 'default'} className="flex items-center gap-1 w-fit">
              {reaction.isExothermic ? (
                <Flame className="w-3 h-3" />
              ) : (
                <Snowflake className="w-3 h-3" />
              )}
              {reaction.isExothermic ? 'Exothermic' : 'Endothermic'}
            </Badge>
          )}
        </div>
        <h2 className="text-lg font-bold text-text">{reaction.name}</h2>
        <p className="font-mono text-sm text-accent mt-1">{reaction.balancedEquation}</p>
        {reaction.enthalpy !== null && (
          <p className="text-xs text-text-dim mt-1">ΔH = {reaction.enthalpy} kJ/mol</p>
        )}
        <p className="text-xs text-text-dim mt-2">{reaction.description}</p>
      </div>

      <div className="flex-1 min-h-[220px] relative">
        {firstProduct && (
          <MoleculeViewer
            atoms={firstProduct.atoms}
            bonds={firstProduct.bonds}
            viewMode="ball-stick"
          />
        )}
      </div>

      <div className="p-4 border-t border-border shrink-0 flex flex-col gap-3 max-h-[45%] overflow-y-auto">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">
            Products
          </h3>
          <div className="flex flex-col gap-1.5">
            {reaction.products.map((p) => {
              const mol = MOLECULES.find((m) => m.formula === p.formula);
              return (
                <div key={p.formula} className="flex justify-between items-center text-sm">
                  <span className="text-text">{mol?.name ?? p.formula}</span>
                  <span className="font-mono text-xs text-text-dim">{p.formula}</span>
                </div>
              );
            })}
          </div>
        </div>

        {reaction.realWorldContext && (
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-1">
              Real World
            </h3>
            <p className="text-xs text-text-dim leading-relaxed">{reaction.realWorldContext}</p>
          </div>
        )}
      </div>
    </div>
  );
}
