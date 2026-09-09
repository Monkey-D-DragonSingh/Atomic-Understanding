import { CuratedReaction } from './curatedReaction';

export type Reaction = CuratedReaction;

export type CatalystKind = 'heat' | 'metal-catalyst' | 'acid-catalyst' | 'solid-catalyst' | 'enzyme' | 'light' | 'pressure' | 'electricity';

// IDs are referenced by CuratedReaction.builderOptions; symbols are display-only.
export interface Catalyst {
  id: string;
  name: string;
  symbol: string;
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
