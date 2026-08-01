import { REACTIONS } from '../data/reactions'; // 
import { ReactionMatchResult } from '../types/reaction';

// Compares two arrays of molecule ids as sets (order doesn't matter, duplicates collapse).
function sameIdSet(a: string[], b: string[]): boolean {
  const setA = new Set(a);
  const setB = new Set(b);
  if (setA.size !== setB.size) return false;
  for (const id of setA) {
    if (!setB.has(id)) return false;
  }
  return true;
}

/**
 * Given the molecule ids the user picked as reactants, and the catalyst id they
 * (optionally) selected, find the matching curated reaction and report whether
 * it's valid, missing a required catalyst, or simply not a known reaction.
 */
export function matchReaction(
  selectedReactantIds: string[],
  selectedCatalystId: string | null
): ReactionMatchResult {
  if (selectedReactantIds.length === 0) {
    return { status: 'empty' };
  }

  const candidate = REACTIONS.find((reaction) =>
    sameIdSet(
      reaction.reactants.map((r) => r.moleculeId),
      selectedReactantIds
    )
  );

  if (!candidate) {
    return { status: 'invalid' };
  }

  const needed = candidate.requiredCatalyst ?? null;

  // Reaction needs no catalyst — any catalyst choice (or none) is fine, ignore it.
  if (!needed) {
    return { status: 'valid', reaction: candidate };
  }

  // Reaction needs a specific catalyst but user picked none.
  if (!selectedCatalystId) {
    return { status: 'catalyst-missing', reaction: candidate, neededCatalystId: needed };
  }

  // Reaction needs a specific catalyst and user picked the wrong one.
  if (selectedCatalystId !== needed) {
    return { status: 'wrong-catalyst', reaction: candidate, neededCatalystId: needed };
  }

  return { status: 'valid', reaction: candidate };
}
