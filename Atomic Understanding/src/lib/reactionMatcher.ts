import { CURATED_REACTIONS } from '../data/curatedReactions';
import { CATALYSTS } from '../data/catalysts';
import { ALL_REACTANTS } from '../data/allReactants';
import { ReactionMatchResult } from '../types/reaction';

function normalize(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[\u2080-\u2089]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x2080 + 0x30))
    .replace(/[^a-z0-9]/g, '');
}

function matchReactantItem(
  candidateRec: { formula: string; moleculeId?: string },
  selectedIdOrFormula: string
): boolean {
  const normCandFormula = normalize(candidateRec.formula);
  const normSelected = normalize(selectedIdOrFormula);

  if (normCandFormula === normSelected) return true;
  if (
    candidateRec.moleculeId &&
    candidateRec.moleculeId.toLowerCase() === selectedIdOrFormula.toLowerCase()
  ) {
    return true;
  }

  const found = ALL_REACTANTS.find(
    (m) =>
      m.id.toLowerCase() === selectedIdOrFormula.toLowerCase() ||
      normalize(m.formula) === normSelected
  );
  if (found) {
    if (normalize(found.formula) === normCandFormula) return true;
    if (candidateRec.moleculeId && candidateRec.moleculeId === found.id) return true;
  }

  return false;
}

function sameReactantSet(
  candidateReactants: { formula: string; moleculeId?: string }[],
  selectedIdsOrFormulas: string[]
): boolean {
  if (candidateReactants.length !== selectedIdsOrFormulas.length) return false;

  const unmatchedSelected = [...selectedIdsOrFormulas];

  for (const candRec of candidateReactants) {
    const idx = unmatchedSelected.findIndex((sel) => matchReactantItem(candRec, sel));
    if (idx === -1) return false;
    unmatchedSelected.splice(idx, 1);
  }

  return unmatchedSelected.length === 0;
}

function extractRequiredSymbols(balancedEquation: string, conditions?: string): string[] {
  const symbols = new Set<string>();

  const match = balancedEquation.match(/→\(([^)]+)\)/);
  if (match && match[1]) {
    match[1].split(',').forEach((s) => {
      const trimmed = s.trim();
      if (trimmed) symbols.add(trimmed);
    });
  }

  const cond = (conditions || '').toLowerCase();
  if (
    cond.includes('heat') ||
    cond.includes('spark') ||
    cond.includes('combustion') ||
    cond.includes('ignition') ||
    cond.includes('Δ') ||
    cond.includes('reflux') ||
    cond.includes('roasting') ||
    cond.includes('°c') ||
    cond.includes('high temp')
  ) {
    symbols.add('Δ');
  }

  if (cond.includes('fe ') || cond.includes('iron')) symbols.add('Fe');
  if (cond.includes('ni ') || cond.includes('nickel')) symbols.add('Ni');
  if (cond.includes('pt ') || cond.includes('platinum')) symbols.add('Pt');
  if (cond.includes('mno₂') || cond.includes('mno2') || cond.includes('manganese')) symbols.add('MnO₂');
  if (cond.includes('v₂o₅') || cond.includes('v2o5') || cond.includes('vanadium')) symbols.add('V₂O₅');
  if (cond.includes('h₂so₄') || cond.includes('h2so4') || cond.includes('sulfuric')) symbols.add('H₂SO₄');

  return Array.from(symbols);
}

/**
 * Given the reactant IDs or formulas the user picked, and the catalyst id
 * they (optionally) selected, find the matching curated reaction and report
 * whether it's valid, missing/wrong catalyst, or simply not a known reaction.
 */
export function matchReaction(
  selectedReactantIdsOrFormulas: string[],
  selectedCatalystId: string | null
): ReactionMatchResult {
  if (selectedReactantIdsOrFormulas.length === 0) {
    return { status: 'empty' };
  }

  const candidate = CURATED_REACTIONS.find((reaction) =>
    sameReactantSet(reaction.reactants, selectedReactantIdsOrFormulas)
  );

  if (!candidate) {
    return { status: 'invalid' };
  }

  const requiredSymbols = extractRequiredSymbols(candidate.balancedEquation, candidate.conditions);

  // No catalyst/condition symbol required — any pick (or none) is fine.
  if (requiredSymbols.length === 0) {
    return { status: 'valid', reaction: candidate };
  }

  const neededSymbol = requiredSymbols.join(', ');
  const selectedSymbol = selectedCatalystId
    ? CATALYSTS.find((c) => c.id === selectedCatalystId)?.symbol
    : null;

  if (!selectedSymbol) {
    return { status: 'catalyst-missing', reaction: candidate, neededSymbol };
  }

  if (!requiredSymbols.includes(selectedSymbol)) {
    return { status: 'wrong-catalyst', reaction: candidate, neededSymbol };
  }

  return { status: 'valid', reaction: candidate };
}

