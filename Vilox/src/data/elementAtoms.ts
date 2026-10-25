import { ELEMENTS } from './elements';
import { Molecule } from '../types/molecule';
import { ELEMENT_DEFAULT_MOLECULE } from './elementDefaults';

// Auto-generates a minimal single-atom "molecule" placeholder for every
// element that doesn't already have a curated multi-atom default (H2, O2,
// P4, S8, halogens as diatomics...). This lets the atom picker treat any
// element — including every metal — as a valid reactant, instead of
// hard-blocking anything outside the original 9-element diatomic set.
// These won't match any curated reaction (none of them use bare metal
// atoms as reactants), so picking one in Build mode will correctly show
// "No known reaction" rather than silently pretending something reacts.
export const ELEMENT_ATOM_MOLECULES: Molecule[] = ELEMENTS
  .filter((el) => !(el.symbol in ELEMENT_DEFAULT_MOLECULE))
  .map((el) => ({
    id: `atom-${el.symbol.toLowerCase()}`,
    name: el.name,
    iupacName: el.name.toLowerCase(),
    formula: el.symbol,
    hillFormula: el.symbol,
    molarMass: el.atomicMass,
    category: 'element (atomic)',
    bondType: 'none',
    geometry: 'atomic',
    hybridization: 'none',
    bondAngle: 'N/A',
    polarity: 'nonpolar',
    dipoleMoment: null,
    standardState: el.standardState,
    meltingPoint: el.meltingPoint,
    boilingPoint: el.boilingPoint,
    uses: `Elemental ${el.name} as a free atom.`,
    fact: el.funFact,
    atoms: [{ id: 1, element: el.symbol, x: 0, y: 0, z: 0 }],
    bonds: [],
  } as Molecule));