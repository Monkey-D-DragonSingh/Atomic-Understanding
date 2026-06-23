// src/data/electronConfig.ts

// The standard Madelung rule order
export const MADELUNG_ORDER = [
  { n: 1, l: 0, subshell: '1s', max: 2 },
  { n: 2, l: 0, subshell: '2s', max: 2 },
  { n: 2, l: 1, subshell: '2p', max: 6 },
  { n: 3, l: 0, subshell: '3s', max: 2 },
  { n: 3, l: 1, subshell: '3p', max: 6 },
  { n: 4, l: 0, subshell: '4s', max: 2 },
  { n: 3, l: 2, subshell: '3d', max: 10 },
  { n: 4, l: 1, subshell: '4p', max: 6 },
  { n: 5, l: 0, subshell: '5s', max: 2 },
  { n: 4, l: 2, subshell: '4d', max: 10 },
  { n: 5, l: 1, subshell: '5p', max: 6 },
  { n: 6, l: 0, subshell: '6s', max: 2 },
  { n: 4, l: 3, subshell: '4f', max: 14 },
  { n: 5, l: 2, subshell: '5d', max: 10 },
  { n: 6, l: 1, subshell: '6p', max: 6 },
  { n: 7, l: 0, subshell: '7s', max: 2 },
  { n: 5, l: 3, subshell: '5f', max: 14 },
  { n: 6, l: 2, subshell: '6d', max: 10 },
  { n: 7, l: 1, subshell: '7p', max: 6 },
];

// Exceptions to the Madelung rule
// Maps atomic number to an array of subshell capacities that override the standard filling
export const ELECTRON_CONFIG_EXCEPTIONS: Record<
  number,
  Record<string, number>
> = {
  24: { '4s': 1, '3d': 5 }, // Chromium
  29: { '4s': 1, '3d': 10 }, // Copper
  41: { '5s': 1, '4d': 4 }, // Niobium
  42: { '5s': 1, '4d': 5 }, // Molybdenum
  44: { '5s': 1, '4d': 7 }, // Ruthenium
  45: { '5s': 1, '4d': 8 }, // Rhodium
  46: { '5s': 0, '4d': 10 }, // Palladium
  47: { '5s': 1, '4d': 10 }, // Silver
  57: { '6s': 2, '5d': 1, '4f': 0 }, // Lanthanum
  58: { '6s': 2, '4f': 1, '5d': 1 }, // Cerium
  64: { '6s': 2, '4f': 7, '5d': 1 }, // Gadolinium
  78: { '6s': 1, '5d': 9 }, // Platinum
  79: { '6s': 1, '5d': 10 }, // Gold
  89: { '7s': 2, '6d': 1, '5f': 0 }, // Actinium
  90: { '7s': 2, '6d': 2, '5f': 0 }, // Thorium
  91: { '7s': 2, '5f': 2, '6d': 1 }, // Protactinium
  92: { '7s': 2, '5f': 3, '6d': 1 }, // Uranium
  93: { '7s': 2, '5f': 4, '6d': 1 }, // Neptunium
  96: { '7s': 2, '5f': 7, '6d': 1 }, // Curium
  103: { '7s': 2, '5f': 14, '6d': 0, '7p': 1 }, // Lawrencium
};

export const NOBLE_GASES = [
  { z: 2, symbol: 'He' },
  { z: 10, symbol: 'Ne' },
  { z: 18, symbol: 'Ar' },
  { z: 36, symbol: 'Kr' },
  { z: 54, symbol: 'Xe' },
  { z: 86, symbol: 'Rn' },
  { z: 118, symbol: 'Og' },
];
