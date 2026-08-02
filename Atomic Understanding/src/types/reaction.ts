import { CuratedReaction } from './curatedReaction';

export type Reaction = CuratedReaction;

export type CatalystKind = 'heat' | 'metal-catalyst' | 'enzyme' | 'light' | 'pressure';

// UI-only list of selectable catalysts for the reaction builder. CuratedReaction
// doesn't store a structured catalyst field (it's embedded as text in
// balancedEquation, e.g. "→(Δ)"), so this is purely for the picker UI + display;
// see lib/reactionMatcher.ts for how the required catalyst is detected.
export interface Catalyst {
  id: string;
  name: string;
  symbol: string;      // must match the text used inside CuratedReaction.balancedEquation, e.g. "Δ", "Pt", "Fe"
  type: CatalystKind;
  description: string;
}

// Result of trying to react a chosen set of reactants (+ optional catalyst)
// against the curated reaction database.
export type ReactionMatchResult =
  | { status: 'valid'; reaction: CuratedReaction }
  | { status: 'catalyst-missing'; reaction: CuratedReaction; neededSymbol: string }
  | { status: 'wrong-catalyst'; reaction: CuratedReaction; neededSymbol: string }
  | { status: 'invalid' }
  | { status: 'empty' };
