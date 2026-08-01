export type CatalystType = 'heat' | 'metal-catalyst' | 'enzyme' | 'light' | 'pressure';

export interface Catalyst {
  id: string;
  name: string;          // "Platinum", "Manganese Dioxide", "Heat"
  symbol: string;        // shown above the reaction arrow, e.g. "Δ", "Pt", "MnO₂"
  type: CatalystType;
  description: string;   // shown in a tooltip/info card
}

export interface ReactionParticipant {
  moleculeId: string;    // references Molecule.id in data/molecules.ts
  coefficient: number;   // stoichiometric coefficient, for display only
}

export interface Reaction {
  id: string;
  name: string;                       // "Combustion of Hydrogen"
  reactants: ReactionParticipant[];
  requiredCatalyst?: string | null;   // Catalyst.id, or null/undefined if none needed
  products: ReactionParticipant[];
  reactionType: string;               // "combustion", "synthesis", "acid-base", "decomposition", "hydrogenation", ...
  conditions?: string;                // short human-readable note, e.g. "Exothermic, requires a spark to start"
  balancedEquation: string;           // "2H₂ + O₂ →(Δ) 2H₂O" for direct display
}

// Result of trying to react a chosen set of reactants (+ optional catalyst)
export type ReactionMatchResult =
  | { status: 'valid'; reaction: Reaction }
  | { status: 'catalyst-missing'; reaction: Reaction; neededCatalystId: string }
  | { status: 'wrong-catalyst'; reaction: Reaction; neededCatalystId: string }
  | { status: 'invalid' }
  | { status: 'empty' };
