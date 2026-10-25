import { CURATED_REACTIONS } from '../data/curatedReactions';
import { CATALYSTS } from '../data/catalysts';
import { ALL_REACTANTS } from '../data/allReactants';
import type { ReactionMatchResult } from '../types/reaction';
import type { ReactionParticipant } from '../types/curatedReaction';

function normalizeFormula(formula: string): string {
  // Element case is significant: Co (cobalt) is not CO (carbon monoxide).
  return formula.trim().replace(/[\u2080-\u2089]/g, char =>
    String.fromCharCode(char.charCodeAt(0) - 0x2080 + 0x30));
}

function matchReactantItem(candidate: ReactionParticipant, selected: string): boolean {
  const molecule = ALL_REACTANTS.find(m => m.id === selected);
  if (molecule) {
    if (candidate.moleculeId) return candidate.moleculeId === molecule.id;
    return normalizeFormula(candidate.formula) === normalizeFormula(molecule.formula);
  }
  return normalizeFormula(candidate.formula) === normalizeFormula(selected);
}

function sameReactantSet(reactants: ReactionParticipant[], selected: string[]): boolean {
  if (reactants.length !== selected.length) return false;
  const remaining = [...selected];
  return reactants.every(reactant => {
    const index = remaining.findIndex(item => matchReactantItem(reactant, item));
    if (index === -1) return false;
    remaining.splice(index, 1);
    return true;
  });
}

export function matchReaction(selectedReactants: string[], selectedOption: string | null): ReactionMatchResult {
  if (selectedReactants.length === 0) return { status: 'empty' };

  const candidates = CURATED_REACTIONS.filter(reaction => sameReactantSet(reaction.reactants, selectedReactants));
  const first = candidates[0];
  if (!first) return { status: 'invalid' };

  // Match the setup as well as the species, so alternate pathways remain reachable.
  const reaction = candidates.find(candidate => selectedOption === null
    ? candidate.builderOptions.length === 0
    : candidate.builderOptions.includes(selectedOption));
  if (reaction) return { status: 'valid', reaction };

  const options = new Set(candidates.flatMap(candidate => candidate.builderOptions));
  const labels = [...options].map(id => CATALYSTS.find(option => option.id === id)?.name ?? id);
  if (candidates.some(candidate => candidate.builderOptions.length === 0)) labels.unshift('None');
  return {
    status: selectedOption === null ? 'catalyst-missing' : 'wrong-catalyst',
    reaction: first,
    neededSymbol: labels.join(' or '),
  };
}
