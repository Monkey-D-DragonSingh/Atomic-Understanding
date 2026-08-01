import {
  MADELUNG_ORDER,
  ELECTRON_CONFIG_EXCEPTIONS,
  NOBLE_GASES,
} from '../data/electronConfig';

// Helper to derive shells and configurations dynamically
export function deriveElectronConfig(atomicNumber: number): {
  shells: number[];
  full: string;
  semantic: string;
} {
  const exception = ELECTRON_CONFIG_EXCEPTIONS[atomicNumber];

  let remaining = atomicNumber;
  const configObj: Record<string, number> = {};

  // A more robust approach for exceptions:
  for (const sub of MADELUNG_ORDER) {
    if (remaining <= 0 && (!exception || exception[sub.subshell] === undefined))
      continue;

    let capacity = sub.max;
    if (exception && exception[sub.subshell] !== undefined) {
      capacity = exception[sub.subshell] as number;
    }

    const count = Math.min(remaining, capacity);
    if (count > 0 || (exception && exception[sub.subshell] !== undefined)) {
      configObj[sub.subshell] = count;
      remaining -= count;
    }
  }

  // Format into shells (array of electrons per n)
  const shells: number[] = [];
  for (const [sub, count] of Object.entries(configObj)) {
    const n = parseInt(sub.charAt(0));
    shells[n - 1] = (shells[n - 1] || 0) + count;
  }
  // Fill any undefined gaps with 0
  for (let i = 0; i < shells.length; i++) {
    if (shells[i] === undefined) shells[i] = 0;
  }

  // Format full config string, ordered by n then l
  const orderedSubshells = Object.keys(configObj).sort((a, b) => {
    const nA = parseInt(a.charAt(0));
    const nB = parseInt(b.charAt(0));
    if (nA !== nB) return nA - nB;
    const lOrder = { s: 0, p: 1, d: 2, f: 3 } as Record<string, number>;
    return lOrder[a.charAt(1)]! - lOrder[b.charAt(1)]!;
  });

  const toSuperscript = (num: number) =>
    num
      .toString()
      .split('')
      .map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[parseInt(d)])
      .join('');

  const full = orderedSubshells
    .filter((sub) => (configObj[sub] || 0) > 0)
    .map((sub) => `${sub}${toSuperscript(configObj[sub] || 0)}`)
    .join(' ');

  // Format semantic (noble gas shorthand)
  let nobleGas = NOBLE_GASES.slice()
    .reverse()
    .find((ng) => ng.z < atomicNumber);
  let semantic = full;

  if (nobleGas) {
    // Simple replacement won't always work perfectly if sorting changes,
    // so we rebuild it by taking the ordered subshells and removing the ones present in the noble gas.
    const ngConfigObj = deriveElectronConfigObj(nobleGas.z);
    const semanticSubshells = orderedSubshells.filter((sub) => {
      return (configObj[sub] || 0) > (ngConfigObj[sub] || 0);
    });

    // Some exceptions might have *fewer* electrons in an inner shell than the noble gas
    // (e.g. Pd 4d10 vs Kr ...), but Kr has 4d0. This simple diff works for all known cases.

    const semanticParts = semanticSubshells
      .map((sub) => `${sub}${toSuperscript(configObj[sub] || 0)}`)
      .join(' ');

    semantic = `[${nobleGas.symbol}] ${semanticParts}`;
  }

  return { shells, full, semantic };
}

function deriveElectronConfigObj(atomicNumber: number): Record<string, number> {
  const exception = ELECTRON_CONFIG_EXCEPTIONS[atomicNumber];
  let remaining = atomicNumber;
  const configObj: Record<string, number> = {};

  for (const sub of MADELUNG_ORDER) {
    if (remaining <= 0 && (!exception || exception[sub.subshell] === undefined))
      continue;
    let capacity = sub.max;
    if (exception && exception[sub.subshell] !== undefined) {
      capacity = exception[sub.subshell] as number;
    }
    const count = Math.min(remaining, capacity);
    if (count > 0 || (exception && exception[sub.subshell] !== undefined)) {
      configObj[sub.subshell] = count;
      remaining -= count;
    }
  }
  return configObj;
}

// Bonding capacity: how many total bonds (counting order) an atom can form.
// Main-group values follow standard valence. Transition/lanthanide/actinide metals
// use their most common oxidation state. N, P, S, Cl, I, Xe are raised above the
// "ideal" Lewis value so expanded-octet molecules already in MOLECULES.ts
// (SF6, PCl5, HNO3, KClO3, XeF4, KMnO4, etc.) remain buildable by hand in the canvas.
const BOND_CAPACITY: Record<string, number> = {
  // Period 1
  H: 1, He: 0,
  // Period 2
  Li: 1, Be: 2, B: 3, C: 4, N: 4, O: 2, F: 1, Ne: 0,
  // Period 3
  Na: 1, Mg: 2, Al: 3, Si: 4, P: 5, S: 6, Cl: 7, Ar: 0,
  // Period 4
  K: 1, Ca: 2,
  Sc: 3, Ti: 4, V: 5, Cr: 3, Mn: 7, Fe: 3, Co: 2, Ni: 2, Cu: 2, Zn: 2,
  Ga: 3, Ge: 4, As: 3, Se: 2, Br: 1, Kr: 0,
  // Period 5
  Rb: 1, Sr: 2,
  Y: 3, Zr: 4, Nb: 5, Mo: 6, Tc: 7, Ru: 3, Rh: 3, Pd: 2, Ag: 1, Cd: 2,
  In: 3, Sn: 4, Sb: 3, Te: 2, I: 7, Xe: 4,
  // Period 6
  Cs: 1, Ba: 2,
  La: 3, Ce: 3, Pr: 3, Nd: 3, Pm: 3, Sm: 3, Eu: 3, Gd: 3, Tb: 3,
  Dy: 3, Ho: 3, Er: 3, Tm: 3, Yb: 3, Lu: 3,
  Hf: 4, Ta: 5, W: 6, Re: 7, Os: 4, Ir: 3, Pt: 2, Au: 3, Hg: 2,
  Tl: 3, Pb: 4, Bi: 3, Po: 2, At: 1, Rn: 0,
  // Period 7
  Fr: 1, Ra: 2,
  Ac: 3, Th: 4, Pa: 5, U: 6, Np: 5, Pu: 4, Am: 3, Cm: 3,
  Bk: 3, Cf: 3, Es: 3, Fm: 3, Md: 3, No: 2, Lr: 3,
  Rf: 4, Db: 5, Sg: 6, Bh: 7, Hs: 4, Mt: 3, Ds: 2, Rg: 1, Cn: 2,
  Nh: 3, Fl: 4, Mc: 3, Lv: 2, Ts: 1, Og: 0,
};

export function bondsNeeded(symbol: string): number {
  // Fallback of 2 instead of 0 — 0 silently made every unlisted atom impossible
  // to bond at all, which was the root cause of unbuildable metal-based molecules.
  return BOND_CAPACITY[symbol] ?? 2;
}

export function classifyBond(
  en1: number | null,
  en2: number | null,
  cat1?: string,
  cat2?: string
): string {
  if (en1 !== null && en2 !== null) {
    const diff = Math.abs(en1 - en2);
    if (diff < 0.4) return 'nonpolar-covalent';
    if (diff <= 1.7) return 'polar-covalent';
    return 'ionic';
  }
  // Fallback when electronegativity data is missing: coarse metal/nonmetal rule.
  if (cat1 && cat2) {
    const isMetal = (c: string) => c.includes('metal') && !c.includes('metalloid');
    if (isMetal(cat1) !== isMetal(cat2)) return 'ionic';
    return 'polar-covalent';
  }
  return 'unknown';
}

// Approximate neutron count using the most abundant/longest-lived isotope's mass number.
// atomicMass in your data is a decimal isotopic average for stable elements (e.g. Cl = 35.45)
// and the longest-lived isotope's mass number for elements with no stable isotope
// (e.g. Tc = 98), so rounding works as a reasonable approximation in both cases.
export function neutronCount(atomicNumber: number, atomicMass: number): number {
  return Math.max(0, Math.round(atomicMass) - atomicNumber);
}