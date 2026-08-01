export type CuratedReactionType =
  | 'combustion'
  | 'synthesis'
  | 'decomposition'
  | 'acid-base'
  | 'hydrogenation'
  | 'esterification';

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
}
