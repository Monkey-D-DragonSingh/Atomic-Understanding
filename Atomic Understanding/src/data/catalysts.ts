import { Catalyst } from '../types/reaction';

export const CATALYSTS: Catalyst[] = [
  {
    id: 'heat',
    name: 'Heat',
    symbol: 'Δ',
    type: 'heat',
    description: 'Thermal energy — the classic triangle symbol used above a reaction arrow to show a reaction needs heating to proceed.',
  },
  {
    id: 'iron-catalyst',
    name: 'Iron Catalyst',
    symbol: 'Fe',
    type: 'metal-catalyst',
    description: 'Finely divided iron, used in the industrial Haber process to synthesize ammonia from nitrogen and hydrogen.',
  },
  {
    id: 'nickel-catalyst',
    name: 'Nickel Catalyst',
    symbol: 'Ni',
    type: 'metal-catalyst',
    description: 'A hydrogenation catalyst — lets H₂ add across carbon-carbon double/triple bonds without being consumed itself.',
  },
  {
    id: 'platinum-catalyst',
    name: 'Platinum Catalyst',
    symbol: 'Pt',
    type: 'metal-catalyst',
    description: 'Used in catalytic converters to speed up the oxidation of toxic gases like carbon monoxide.',
  },
  {
    id: 'manganese-dioxide',
    name: 'Manganese Dioxide',
    symbol: 'MnO₂',
    type: 'metal-catalyst',
    description: 'A common lab catalyst that speeds up the decomposition of hydrogen peroxide and potassium chlorate.',
  },
  {
    id: 'vanadium-pentoxide',
    name: 'Vanadium Pentoxide',
    symbol: 'V₂O₅',
    type: 'metal-catalyst',
    description: 'The industrial catalyst for the Contact Process, converting sulfur dioxide into sulfur trioxide.',
  },
  {
    id: 'sulfuric-acid-catalyst',
    name: 'Sulfuric Acid (catalyst)',
    symbol: 'H₂SO₄',
    type: 'metal-catalyst',
    description: 'Acts as a catalyst (not a reactant) in esterification reactions, speeding up ester formation.',
  },
];
