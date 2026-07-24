export interface PubChemProperties {
  CID: number;
  MolecularFormula: string;
  MolecularWeight: string;
  IUPACName: string;
  CanonicalSMILES: string;
  XLogP: number;
  HBondDonorCount: number;
  HBondAcceptorCount: number;
  RotatableBondCount: number;
  TPSA: number;
  Charge: number;
  Complexity: number;
}

export interface ParsedAtom {
  id: number;
  element: string;
  x: number;
  y: number;
  z: number;
}

export interface ParsedBond {
  from: number;
  to: number;
  order: 1 | 2 | 3;
}

export interface ParsedStructure {
  atoms: ParsedAtom[];
  bonds: ParsedBond[];
}

export class PubChemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PubChemError';
  }
}

const BASE_URL = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug';

// Map Z to Symbol
const Z_TO_SYMBOL: Record<number, string> = {
  1: 'H', 2: 'He', 3: 'Li', 4: 'Be', 5: 'B', 6: 'C', 7: 'N', 8: 'O', 9: 'F', 10: 'Ne',
  11: 'Na', 12: 'Mg', 13: 'Al', 14: 'Si', 15: 'P', 16: 'S', 17: 'Cl', 18: 'Ar', 19: 'K', 20: 'Ca',
  21: 'Sc', 22: 'Ti', 23: 'V', 24: 'Cr', 25: 'Mn', 26: 'Fe', 27: 'Co', 28: 'Ni', 29: 'Cu', 30: 'Zn',
  31: 'Ga', 32: 'Ge', 33: 'As', 34: 'Se', 35: 'Br', 36: 'Kr', 37: 'Rb', 38: 'Sr', 39: 'Y', 40: 'Zr',
  41: 'Nb', 42: 'Mo', 43: 'Tc', 44: 'Ru', 45: 'Rh', 46: 'Pd', 47: 'Ag', 48: 'Cd', 49: 'In', 50: 'Sn',
  51: 'Sb', 52: 'Te', 53: 'I', 54: 'Xe', 55: 'Cs', 56: 'Ba', 57: 'La', 58: 'Ce', 59: 'Pr', 60: 'Nd',
  61: 'Pm', 62: 'Sm', 63: 'Eu', 64: 'Gd', 65: 'Tb', 66: 'Dy', 67: 'Ho', 68: 'Er', 69: 'Tm', 70: 'Yb',
  71: 'Lu', 72: 'Hf', 73: 'Ta', 74: 'W', 75: 'Re', 76: 'Os', 77: 'Ir', 78: 'Pt', 79: 'Au', 80: 'Hg',
  81: 'Tl', 82: 'Pb', 83: 'Bi', 84: 'Po', 85: 'At', 86: 'Rn', 87: 'Fr', 88: 'Ra', 89: 'Ac', 90: 'Th',
  91: 'Pa', 92: 'U', 93: 'Np', 94: 'Pu', 95: 'Am', 96: 'Cm', 97: 'Bk', 98: 'Cf', 99: 'Es', 100: 'Fm',
  101: 'Md', 102: 'No', 103: 'Lr', 104: 'Rf', 105: 'Db', 106: 'Sg', 107: 'Bh', 108: 'Hs', 109: 'Mt',
  110: 'Ds', 111: 'Rg', 112: 'Cn', 113: 'Nh', 114: 'Fl', 115: 'Mc', 116: 'Lv', 117: 'Ts', 118: 'Og'
};

export async function searchCidByName(name: string): Promise<number | null> {
  try {
    const res = await fetch(`${BASE_URL}/compound/name/${encodeURIComponent(name)}/cids/JSON`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new PubChemError(`Failed to fetch CID for ${name}`);
    }
    const data = await res.json();
    return data.IdentifierList?.CID?.[0] || null;
  } catch (err) {
    if (err instanceof PubChemError) throw err;
    return null;
  }
}

export async function fetchProperties(cid: number): Promise<PubChemProperties> {
  try {
    const props = 'MolecularFormula,MolecularWeight,IUPACName,CanonicalSMILES,XLogP,HBondDonorCount,HBondAcceptorCount,RotatableBondCount,TPSA,Charge,Complexity';
    const res = await fetch(`${BASE_URL}/compound/cid/${cid}/property/${props}/JSON`);
    if (!res.ok) throw new PubChemError(`Failed to fetch properties for CID ${cid}`);
    const data = await res.json();
    return data.PropertyTable?.Properties?.[0] as PubChemProperties;
  } catch (err) {
    throw err instanceof PubChemError ? err : new PubChemError(`Network error fetching properties for CID ${cid}`);
  }
}

export async function fetch3DRecord(cid: number): Promise<ParsedStructure | null> {
  try {
    const res = await fetch(`${BASE_URL}/compound/cid/${cid}/record/JSON?record_type=3d`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new PubChemError(`Failed to fetch 3D record for CID ${cid}`);
    }
    const data = await res.json();
    return parseRecord(data);
  } catch (err) {
    if (err instanceof PubChemError) throw err;
    return null;
  }
}

export async function fetch2DRecord(cid: number): Promise<ParsedStructure | null> {
  try {
    const res = await fetch(`${BASE_URL}/compound/cid/${cid}/record/JSON?record_type=2d`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new PubChemError(`Failed to fetch 2D record for CID ${cid}`);
    }
    const data = await res.json();
    return parseRecord(data);
  } catch (err) {
    if (err instanceof PubChemError) throw err;
    return null;
  }
}

export function parseRecord(record: any): ParsedStructure {
  const structure: ParsedStructure = { atoms: [], bonds: [] };
  const pcCompound = record?.PC_Compounds?.[0];
  if (!pcCompound) return structure;

  const atoms = pcCompound.atoms;
  const coords = pcCompound.coords?.[0]?.conformers?.[0];
  const bonds = pcCompound.bonds;

  if (atoms && coords) {
    const elementIds = atoms.element;
    for (let i = 0; i < elementIds.length; i++) {
      const z = elementIds[i];
      structure.atoms.push({
        id: i + 1, // 1-indexed for local molecule logic
        element: Z_TO_SYMBOL[z] || 'Unknown',
        x: coords.x?.[i] || 0,
        y: coords.y?.[i] || 0,
        z: coords.z?.[i] || 0,
      });
    }
  }

  if (bonds) {
    const aid1 = bonds.aid1;
    const aid2 = bonds.aid2;
    const order = bonds.order;
    for (let i = 0; i < aid1.length; i++) {
      structure.bonds.push({
        from: aid1[i],
        to: aid2[i],
        order: (order[i] as 1 | 2 | 3) || 1,
      });
    }
  }

  return structure;
}
