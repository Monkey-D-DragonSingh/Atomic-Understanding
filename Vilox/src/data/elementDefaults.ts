// Maps an element symbol to the molecule id that represents its standard,
// naturally-occurring reactive form (mostly diatomics), so picking "H" from
// the periodic table in the reaction builder adds H₂ — the actual chemical
// species that takes part in real reactions — rather than a lone atom that
// no curated reaction could ever match.
export const ELEMENT_DEFAULT_MOLECULE: Record<string, string> = {
  H: 'hydrogen',
  O: 'oxygen',
  N: 'nitrogen',
  F: 'fluorine',
  Cl: 'chlorine',
  Br: 'bromine',
  I: 'iodine',
  P: 'white-phosphorus',
  S: 'octasulfur',
};
