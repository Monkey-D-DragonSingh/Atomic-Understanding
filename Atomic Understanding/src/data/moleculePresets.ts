import { MOLECULES } from './molecules';
import type { PlacedAtom, PlacedBond } from '../store/useAppStore';
import type { Molecule, MoleculeBond } from '../types/molecule';

export const QUICK_ADD_GROUPS = ['Essentials', 'Elements', 'Small Compounds', 'Organic', 'Acids'] as const;

interface MoleculePreset {
  group: typeof QUICK_ADD_GROUPS[number];
  positions: Readonly<Record<number, readonly [x: number, y: number]>>;
}

// Deliberate 2D diagrams keyed by registry atom ID, not projections of 3D coordinates.
// Elements, bonds, names and formulas remain owned by the molecule registry.
export const MOLECULE_PRESETS = {
  water: { group: 'Essentials', positions: { 1: [200, 150], 2: [130, 230], 3: [270, 230] } },
  'carbon-dioxide': { group: 'Essentials', positions: { 1: [100, 200], 2: [300, 200], 3: [200, 200] } },
  oxygen: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  'sodium-chloride': { group: 'Essentials', positions: { 1: [250, 200], 2: [150, 200] } },
  ozone: { group: 'Elements', positions: { 1: [200, 150], 2: [130, 230], 3: [270, 230] } },
  'hydrogen-peroxide': { group: 'Essentials', positions: { 1: [160, 200], 2: [250, 200], 3: [90, 280], 4: [320, 120] } },
  ammonia: { group: 'Essentials', positions: { 1: [200, 170], 2: [110, 230], 3: [200, 270], 4: [290, 230] } },
  methane: { group: 'Organic', positions: { 1: [200, 190], 2: [200, 90], 3: [200, 290], 4: [100, 190], 5: [300, 190] } },
  nitrogen: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  hydrogen: { group: 'Elements', positions: { 1: [160, 200], 2: [240, 200] } },
  'hydrogen-chloride': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
  'carbon-monoxide': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
  'sulfur-dioxide': { group: 'Small Compounds', positions: { 1: [200, 150], 2: [130, 230], 3: [270, 230] } },
  'sulfur-trioxide': { group: 'Small Compounds', positions: { 1: [200, 190], 2: [200, 90], 3: [110, 250], 4: [290, 250] } },
  'nitrogen-dioxide': { group: 'Small Compounds', positions: { 1: [130, 230], 2: [270, 230], 3: [200, 150] } },
  'hydrogen-fluoride': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
  ethene: { group: 'Organic', positions: { 1: [150, 200], 2: [250, 200], 3: [80, 120], 4: [80, 280], 5: [320, 120], 6: [320, 280] } },
  ethyne: { group: 'Organic', positions: { 1: [150, 200], 2: [250, 200], 3: [70, 200], 4: [330, 200] } },
  ethane: { group: 'Organic', positions: { 1: [150, 200], 2: [250, 200], 3: [70, 140], 4: [70, 260], 5: [150, 300], 6: [330, 140], 7: [330, 260], 8: [250, 300] } },
  methanol: { group: 'Organic', positions: { 1: [250, 190], 2: [150, 220], 3: [70, 150], 4: [70, 280], 5: [150, 320], 6: [320, 110] } },
  'sodium-hydroxide': { group: 'Essentials', positions: { 1: [120, 200], 2: [220, 200], 3: [290, 120] } },
  ethanol: {
    group: 'Organic',
    positions: { 1: [310, 220], 2: [220, 220], 3: [120, 220], 4: [220, 120], 5: [220, 320], 6: [40, 220], 7: [120, 120], 8: [120, 320], 9: [370, 140] },
  },
  'acetic-acid': {
    group: 'Acids',
    positions: { 1: [310, 240], 2: [230, 100], 3: [120, 200], 4: [230, 200], 5: [40, 200], 6: [120, 100], 7: [120, 300], 8: [370, 160] },
  },
  formaldehyde: { group: 'Organic', positions: { 1: [290, 200], 2: [190, 200], 3: [110, 120], 4: [110, 280] } },
  acetone: {
    group: 'Organic',
    positions: { 1: [210, 100], 2: [210, 200], 3: [310, 250], 4: [110, 250], 5: [310, 150], 6: [310, 350], 7: [390, 250], 8: [30, 250], 9: [110, 150], 10: [110, 350] },
  },
  benzene: {
    group: 'Organic',
    positions: { 1: [110, 210], 2: [110, 310], 3: [200, 160], 4: [200, 360], 5: [290, 210], 6: [290, 310], 7: [40, 170], 8: [40, 350], 9: [200, 80], 10: [200, 440], 11: [360, 170], 12: [360, 350] },
  },
  propane: {
    group: 'Organic',
    positions: { 1: [210, 220], 2: [110, 220], 3: [310, 220], 4: [210, 120], 5: [210, 320], 6: [110, 120], 7: [110, 320], 8: [30, 220], 9: [390, 220], 10: [310, 120], 11: [310, 320] },
  },
  'hydrogen-sulfide': { group: 'Small Compounds', positions: { 1: [200, 150], 2: [130, 230], 3: [270, 230] } },
  'nitric-oxide': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
  'nitrous-oxide': { group: 'Small Compounds', positions: { 1: [300, 200], 2: [200, 200], 3: [100, 200] } },
  chlorine: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  bromine: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  iodine: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  'hydrogen-bromide': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
  'carbonic-acid': {
    group: 'Acids',
    positions: { 1: [130, 240], 2: [270, 240], 3: [200, 90], 4: [200, 180], 5: [60, 310], 6: [340, 310] },
  },
  'sulfuric-acid': {
    group: 'Acids',
    positions: { 1: [200, 220], 2: [100, 220], 3: [300, 220], 4: [200, 120], 5: [200, 320], 6: [40, 140], 7: [360, 300] },
  },
  'nitric-acid': { group: 'Acids', positions: { 1: [290, 230], 2: [110, 230], 3: [200, 90], 4: [200, 180], 5: [360, 150] } },
  'phosphoric-acid': {
    group: 'Acids',
    positions: { 1: [200, 220], 2: [100, 220], 3: [300, 220], 4: [200, 320], 5: [200, 120], 6: [40, 140], 7: [360, 140], 8: [270, 400] },
  },
  fluorine: { group: 'Elements', positions: { 1: [150, 200], 2: [250, 200] } },
  'hydrogen-iodide': { group: 'Small Compounds', positions: { 1: [250, 200], 2: [150, 200] } },
} as const satisfies Record<string, MoleculePreset>;

export type MoleculePresetId = keyof typeof MOLECULE_PRESETS;

export const QUICK_ADD_MOLECULES = (Object.keys(MOLECULE_PRESETS) as MoleculePresetId[]).map(id => {
  const molecule = MOLECULES.find(m => m.id === id);
  if (!molecule) throw new Error(`Missing Quick Add molecule: ${id}`);
  return { id, molecule, group: MOLECULE_PRESETS[id].group };
});

export function nextCanvasId(items: readonly { id: number }[]): number {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

export function canvasBondOrder(bond: MoleculeBond): number {
  // The shipped registry uses PubChem's order 7 for ionic contacts, not seven bonds.
  return bond.order === 7 ? 1 : bond.order;
}

export function createMoleculePreset(id: MoleculePresetId): {
  canvasAtoms: PlacedAtom[];
  canvasBonds: PlacedBond[];
  activeCompound: Molecule;
} {
  const activeCompound = QUICK_ADD_MOLECULES.find(preset => preset.id === id)!.molecule;
  const { positions }: MoleculePreset = MOLECULE_PRESETS[id];
  const canvasAtoms: PlacedAtom[] = activeCompound.atoms.map(atom => {
    const position = positions[atom.id];
    if (!position) throw new Error(`Missing Quick Add position: ${id}/${atom.id}`);
    return { id: atom.id, symbol: atom.element, x: position[0], y: position[1], bonds: [], bondsUsed: 0 };
  });
  const canvasBonds = activeCompound.bonds.map((bond, index) => ({
    id: index + 1, from: bond.from, to: bond.to, order: canvasBondOrder(bond),
  }));
  for (const bond of canvasBonds) {
    for (const endpoint of [bond.from, bond.to]) {
      const atom = canvasAtoms.find(a => a.id === endpoint);
      if (!atom) throw new Error(`Invalid Quick Add bond endpoint: ${id}/${endpoint}`);
      atom.bonds.push(bond.id);
      atom.bondsUsed += bond.order;
    }
  }
  return { canvasAtoms, canvasBonds, activeCompound };
}

export function matchesMoleculeGraph(atoms: readonly PlacedAtom[], bonds: readonly PlacedBond[], molecule: Molecule): boolean {
  if (atoms.length !== molecule.atoms.length || bonds.length !== molecule.bonds.length || !atoms.length) return false;
  const signature = (id: number, edges: readonly { from: number; to: number; order: number }[]) =>
    edges.filter(b => b.from === id || b.to === id).map(b => b.order).sort().join(',');
  const registryBonds = molecule.bonds.map(b => ({ ...b, order: canvasBondOrder(b) }));
  const candidates = atoms.map(atom => ({
    atom,
    matches: molecule.atoms.filter(target => target.element === atom.symbol &&
      signature(atom.id, bonds) === signature(target.id, registryBonds)),
  })).sort((a, b) => a.matches.length - b.matches.length);
  const mapping = new Map<number, number>();
  const used = new Set<number>();
  const edgeOrder = (edges: readonly { from: number; to: number; order: number }[], from: number, to: number) =>
    edges.find(b => (b.from === from && b.to === to) || (b.from === to && b.to === from))?.order ?? 0;

  // Match topology and bond orders, not just formula (e.g. ethanol vs dimethyl ether).
  const match = (index: number): boolean => {
    const candidate = candidates[index];
    if (!candidate) return true;
    for (const target of candidate.matches) {
      if (used.has(target.id)) continue;
      if ([...mapping].some(([sourceId, targetId]) =>
        edgeOrder(bonds, candidate.atom.id, sourceId) !== edgeOrder(registryBonds, target.id, targetId))) continue;
      mapping.set(candidate.atom.id, target.id);
      used.add(target.id);
      if (match(index + 1)) return true;
      mapping.delete(candidate.atom.id);
      used.delete(target.id);
    }
    return false;
  };
  return match(0);
}
