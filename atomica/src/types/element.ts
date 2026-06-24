// Element type definitions. Data lives in src/data/elements.ts.

export type StandardState = 'solid' | 'liquid' | 'gas';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory | string;
  block: ElementBlock;
  period: number;
  group: number | null;
  xpos: number;
  ypos: number;
  electronConfiguration: string;
  electronConfigurationSemantic: string;
  electronsPerShell: number[];
  valenceElectrons: number;
  electronegativity: number | null;
  electronAffinity: number | null;
  ionizationEnergy: number | null;
  atomicRadius: number | null;
  covalentRadius: number | null;
  vanDerWaalsRadius: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  density: number | null;
  standardState: StandardState;
  oxidationStates: number[];
  yearDiscovered: number | null;
  discoveredBy: string | null;
  cpkColor: string;
  funFact: string;
}
