import { MOLECULES } from './molecules';
import { ELEMENT_ATOM_MOLECULES } from './elementAtoms';

// Combined lookup list for the Reaction Builder only. The Molecule Gallery
// and Compound modes should keep using MOLECULES directly — this merged
// list exists so the reaction builder's atom picker can resolve every
// element symbol to *some* valid molecule id, not just the 9 that have
// real diatomic/allotrope defaults.
export const ALL_REACTANTS = [...MOLECULES, ...ELEMENT_ATOM_MOLECULES];