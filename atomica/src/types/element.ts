export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'halogen'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type Block = 's' | 'p' | 'd' | 'f';
export type StandardState = 'solid' | 'liquid' | 'gas' | 'unknown';

export interface Element {
  atomicNumber: number; // 1–118
  symbol: string; // "H"
  name: string; // "Hydrogen"
  atomicMass: number; // standard atomic weight (u)
  category: ElementCategory;
  block: Block;
  period: number; // 1–7
  group: number | null; // 1–18; null for lanthanides/actinides
  xpos: number; // grid column 1–18 (for table layout)
  ypos: number; // grid row 1–10 (8/9 = f-block rows)
  electronConfiguration: string; // full, e.g. "1s² 2s² 2p⁶"
  electronConfigurationSemantic: string; // noble-gas shorthand, e.g. "[Ne] 3s¹"
  electronsPerShell: number[]; // e.g. [2, 8, 1]
  valenceElectrons: number;
  electronegativity: number | null; // Pauling scale
  electronAffinity: number | null; // kJ/mol
  ionizationEnergy: number | null; // first, kJ/mol
  atomicRadius: number | null; // pm (empirical)
  covalentRadius: number | null; // pm
  vanDerWaalsRadius: number | null; // pm
  meltingPoint: number | null; // Kelvin (store in K; convert in UI)
  boilingPoint: number | null; // Kelvin
  density: number | null; // g/cm³ (at STP)
  standardState: StandardState;
  oxidationStates: number[]; // common oxidation states
  yearDiscovered: number | string | null; // number or "Ancient"
  discoveredBy: string | null;
  cpkColor: string; // hex, standard CPK
  funFact: string; // one engaging sentence, accurate
  group_name?: string; // e.g. "Chalcogens", optional
}
