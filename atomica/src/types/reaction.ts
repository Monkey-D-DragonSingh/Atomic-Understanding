export type ReactionType =
  | 'synthesis'
  | 'decomposition'
  | 'single-displacement'
  | 'double-displacement'
  | 'combustion'
  | 'acid-base'
  | 'redox'
  | 'precipitation';

export interface ReactionParticipant {
  moleculeId?: string; // link to molecules.ts if available
  formula: string; // "H₂"
  coefficient: number; // stoichiometric coefficient
  state: 's' | 'l' | 'g' | 'aq';
}

export interface Reaction {
  id: string;
  name: string; // "Formation of Water"
  type: ReactionType;
  reactants: ReactionParticipant[];
  products: ReactionParticipant[];
  balancedEquation: string; // "2H₂ + O₂ → 2H₂O"
  enthalpy: number | null; // ΔH kJ/mol (negative = exothermic)
  isExothermic: boolean | null;
  conditions: string; // "spark / combustion", "room temp", etc.
  description: string; // what happens, accurate
  realWorldContext: string; // where this matters in real life
}
