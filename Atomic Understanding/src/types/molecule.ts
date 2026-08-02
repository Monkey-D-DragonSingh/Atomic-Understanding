import { StandardState } from './element';

export type Hybridization = 'sp' | 'sp2' | 'sp3' | 'sp3d' | 'sp3d2' | 'none';
export type Polarity = 'polar' | 'nonpolar' | 'ionic';
export type MoleculeGeometry =
  | 'linear'
  | 'bent'
  | 'trigonal-planar'
  | 'trigonal-pyramidal'
  | 'tetrahedral'
  | 'trigonal-bipyramidal'
  | 'octahedral'
  | 'see-saw'
  | 't-shaped'
  | 'square-planar'
  | 'diatomic'
  | 'atomic'
  | 'none';

export interface MoleculeAtom {
  id: number; // local id within molecule
  element: string; // symbol
  x: number;
  y: number;
  z: number; // 3D coords in Angstrom (real geometry)
  charge?: number; // formal charge
}

export interface MoleculeBond {
  from: number; // atom id
  to: number; // atom id
  order: number; // single/double/triple/aromatic
  type: 'covalent' | 'polar-covalent' | 'ionic' | 'coordinate';
}

export interface Molecule {
  id: string; // slug, e.g. "water"
  name: string; // "Water"
  iupacName?: string;
  commonName?: string;
  formula: string; // "H₂O" (with subscripts)
  hillFormula: string; // "H2O" (plain, for matching)
  smiles?: string;
  molarMass: number; // g/mol
  category: string; // e.g. "oxide", "acid", "hydrocarbon"
  bondType: string; // human-readable summary
  geometry: MoleculeGeometry;
  hybridization: Hybridization;
  bondAngle: string; // "104.5°" or "N/A"
  polarity: Polarity;
  dipoleMoment: number | null; // Debye
  standardState: StandardState;
  meltingPoint: number | null; // Kelvin
  boilingPoint: number | null; // Kelvin
  uses: string; // one sentence, real
  fact: string; // accurate, engaging
  isSpecial?: boolean; // true for O₃, H₂O₂, etc.
  has3DCoords?: boolean; // false = coordinates are a schematic 2D layout, not real geometry (mainly ionic salts). Ball & Stick / Space Fill should be disabled for these. Undefined/true = real geometry.
  atoms: MoleculeAtom[]; // real 3D geometry (see §5 accuracy rule)
  bonds: MoleculeBond[];
}