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

export function bondsNeeded(symbol: string): number {
  const needs: Record<string, number> = {
    H: 1,
    C: 4,
    N: 3,
    O: 2,
    F: 1,
    Cl: 1,
    Br: 1,
    I: 1,
    S: 2, // or 6 depending on hypervalence, but default to 2
    P: 3, // or 5
    He: 0,
    Ne: 0,
    Ar: 0,
    Kr: 0,
    Xe: 0,
    Rn: 0,
  };
  return needs[symbol] !== undefined ? needs[symbol] : 0;
}

export function classifyBond(en1: number | null, en2: number | null): string {
  if (en1 === null || en2 === null) return 'unknown';
  const diff = Math.abs(en1 - en2);
  if (diff < 0.4) return 'nonpolar-covalent';
  if (diff <= 1.7) return 'polar-covalent';
  return 'ionic';
}
