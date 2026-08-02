export type CuratedReactionType =
  | 'combustion'
  | 'synthesis'
  | 'decomposition'
  | 'acid-base'
  | 'hydrogenation'
  | 'esterification';

export interface ReactionParticipant {
  formula: string;
  coefficient: number;
  state: 's' | 'l' | 'g' | 'aq';
}

export interface CuratedReaction {
  id: string;
  name: string;
  type: CuratedReactionType;
  isExothermic: boolean | null;
  description: string;
  conditions?: string;
  enthalpy: number | null;
  realWorldContext: string;
  balancedEquation: string;
  reactants: ReactionParticipant[];
  products: ReactionParticipant[];
}
