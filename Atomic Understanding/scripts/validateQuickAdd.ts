import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MOLECULES } from '../src/data/molecules';
import { ELEMENTS } from '../src/data/elements';
import {
  canvasBondOrder, createMoleculePreset, matchesMoleculeGraph, MOLECULE_PRESETS,
  nextCanvasId, QUICK_ADD_GROUPS, QUICK_ADD_MOLECULES,
} from '../src/data/moleculePresets';
import { BuilderInfoPanel } from '../src/modes/molecule/builder/BuilderInfoPanel';
import type { PlacedAtom, PlacedBond } from '../src/store/useAppStore';

const originalIds = [
  'water', 'carbon-dioxide', 'oxygen', 'sodium-chloride', 'ozone', 'hydrogen-peroxide',
  'ammonia', 'methane', 'nitrogen', 'hydrogen', 'hydrogen-chloride', 'carbon-monoxide',
  'sulfur-dioxide', 'sulfur-trioxide', 'nitrogen-dioxide', 'hydrogen-fluoride',
  'ethene', 'ethyne', 'ethane', 'methanol', 'sodium-hydroxide',
];
const addedIds = [
  'ethanol', 'acetic-acid', 'formaldehyde', 'acetone', 'benzene', 'propane',
  'hydrogen-sulfide', 'nitric-oxide', 'nitrous-oxide', 'chlorine', 'bromine', 'iodine',
  'hydrogen-bromide', 'carbonic-acid', 'sulfuric-acid', 'nitric-acid', 'phosphoric-acid',
  'fluorine', 'hydrogen-iodide',
];
assert.equal(QUICK_ADD_MOLECULES.length, 40);
assert.deepEqual(new Set(QUICK_ADD_MOLECULES.map(p => p.id)), new Set([...originalIds, ...addedIds]));
assert.equal(nextCanvasId([]), 1);
assert.equal(nextCanvasId([{ id: 9 }, { id: 2 }, { id: 5 }]), 10);

function assertBookkeeping(atoms: PlacedAtom[], bonds: PlacedBond[]) {
  assert.equal(new Set(atoms.map(a => a.id)).size, atoms.length, 'unique atom IDs');
  assert.equal(new Set(bonds.map(b => b.id)).size, bonds.length, 'unique bond IDs');
  const edges = new Set<string>();
  for (const bond of bonds) {
    assert(atoms.some(a => a.id === bond.from) && atoms.some(a => a.id === bond.to), 'valid endpoints');
    assert.notEqual(bond.from, bond.to, 'no self bonds');
    const key = [bond.from, bond.to].sort((a, b) => a - b).join(':');
    assert(!edges.has(key), 'no duplicate edges');
    edges.add(key);
  }
  for (const atom of atoms) {
    const incident = bonds.filter(b => b.from === atom.id || b.to === atom.id);
    assert.deepEqual([...atom.bonds].sort((a, b) => a - b), incident.map(b => b.id).sort((a, b) => a - b));
    assert.equal(atom.bondsUsed, incident.reduce((sum, b) => sum + b.order, 0));
  }
}

for (const { id, molecule, group } of QUICK_ADD_MOLECULES) {
  assert.equal(MOLECULES.filter(m => m.id === id).length, 1, `${id}: unique registry reference`);
  assert(QUICK_ADD_GROUPS.includes(group));
  const registryBefore = JSON.stringify(molecule);
  const preset = createMoleculePreset(id);
  const { canvasAtoms: atoms, canvasBonds: bonds, activeCompound } = preset;
  assert.strictEqual(activeCompound, molecule, `${id}: exact active compound / 3D source`);
  assert.deepEqual(Object.keys(MOLECULE_PRESETS[id].positions).map(Number).sort((a, b) => a - b),
    molecule.atoms.map(a => a.id).sort((a, b) => a - b), `${id}: exact position coverage`);
  assertBookkeeping(atoms, bonds);
  const connected = new Set([atoms[0]!.id]);
  for (let pass = 0; pass < atoms.length; pass++) {
    for (const bond of bonds) {
      if (connected.has(bond.from) || connected.has(bond.to)) {
        connected.add(bond.from);
        connected.add(bond.to);
      }
    }
  }
  assert.equal(connected.size, atoms.length, `${id}: connected for workspace recognition`);
  assert.deepEqual(bonds.map(({ from, to, order }) => ({ from, to, order })),
    molecule.bonds.map(b => ({ from: b.from, to: b.to, order: canvasBondOrder(b) })), `${id}: registry topology`);

  const actualCounts: Record<string, number> = {};
  for (const atom of atoms) {
    assert(ELEMENTS.some(el => el.symbol === atom.symbol));
    actualCounts[atom.symbol] = (actualCounts[atom.symbol] ?? 0) + 1;
    assert(Number.isFinite(atom.x) && Number.isFinite(atom.y));
    assert(atom.x >= 30 && atom.x <= 410 && atom.y >= 70 && atom.y <= 460, `${id}: fits scrollable canvas`);
    for (const other of atoms) {
      if (other.id === atom.id) continue;
      assert(Math.hypot(atom.x - other.x, atom.y - other.y) >= 65, `${id}: readable spacing ${atom.id}/${other.id}`);
    }
  }
  for (const formula of [molecule.hillFormula, molecule.formula.normalize('NFKC')]) {
    const tokens = [...formula.matchAll(/([A-Z][a-z]?)(\d*)/g)];
    assert.equal(tokens.map(token => token[0]).join(''), formula, `${id}: supported formula`);
    const expectedCounts: Record<string, number> = {};
    for (const [, symbol, count] of tokens) expectedCounts[symbol!] = (expectedCounts[symbol!] ?? 0) + Number(count || 1);
    assert.deepEqual(actualCounts, expectedCounts, `${id}: formula atom counts`);
  }
  for (const bond of bonds) {
    const from = atoms.find(a => a.id === bond.from)!;
    const to = atoms.find(a => a.id === bond.to)!;
    assert(Math.hypot(from.x - to.x, from.y - to.y) < 180, `${id}: bonds below break distance`);
    for (const atom of atoms) {
      if (atom === from || atom === to) continue;
      const vx = to.x - from.x;
      const vy = to.y - from.y;
      const t = Math.max(0, Math.min(1, ((atom.x - from.x) * vx + (atom.y - from.y) * vy) / (vx * vx + vy * vy)));
      assert(Math.hypot(atom.x - from.x - t * vx, atom.y - from.y - t * vy) > 30, `${id}: bonds avoid unrelated atoms`);
    }
  }
  assert(matchesMoleculeGraph(atoms, bonds, molecule), `${id}: recognized`);
  const renumberedAtoms = [...atoms].reverse().map(a => ({ ...a, id: a.id + 100, x: a.x + 5 }));
  const renumberedBonds = [...bonds].reverse().map(b => ({ ...b, id: b.id + 200, from: b.from + 100, to: b.to + 100 }));
  assert(matchesMoleculeGraph(renumberedAtoms, renumberedBonds, molecule), `${id}: recognition after movement / reordering / remount`);
  assert(!matchesMoleculeGraph(atoms, bonds.slice(1), molecule), `${id}: broken graph not recognized`);
  assert(!matchesMoleculeGraph(atoms, bonds.map((b, i) => i ? b : { ...b, order: b.order === 1 ? 2 : 1 }), molecule), `${id}: changed order not recognized`);

  // Exercise the same stateless allocator as tray drag and bonding, including gaps and repeated Quick Add.
  const fresh = createMoleculePreset(id);
  for (let i = 0; i < 3; i++) {
    const atomId = nextCanvasId(atoms);
    atoms.push({ id: atomId, symbol: 'H', x: 0, y: 0, bonds: [], bondsUsed: 0 });
  }
  const appended = atoms.slice(-3);
  for (let i = 1; i < appended.length; i++) {
    const from = appended[i - 1]!;
    const to = appended[i]!;
    const bond = { id: nextCanvasId(bonds), from: from.id, to: to.id, order: 1 };
    bonds.push(bond);
    from.bonds.push(bond.id);
    to.bonds.push(bond.id);
    from.bondsUsed++;
    to.bondsUsed++;
  }
  assertBookkeeping(atoms, bonds);
  assert(!matchesMoleculeGraph(atoms, bonds, molecule), `${id}: added atoms invalidate match`);
  assert.deepEqual(createMoleculePreset(id), fresh, `${id}: edits never mutate templates`);
  assert.equal(JSON.stringify(molecule), registryBefore, `${id}: edits never mutate registry / 3D`);
  assert(!atoms.some(a => a.id === nextCanvasId(atoms.filter(a => a.id !== appended[0]!.id))));
  assert(!bonds.some(b => b.id === nextCanvasId(bonds.filter(b => b.id !== bonds[0]!.id))));
}

const ethanol = createMoleculePreset('ethanol');
// Test-only dimethyl ether: move the O-H and C-C bonds to O-C and C-H.
const ether = {
  ...ethanol.activeCompound,
  id: 'test-dimethyl-ether',
  bonds: ethanol.activeCompound.bonds.map(b => {
    if (b.from === 1 && b.to === 9) return { ...b, to: 3 };
    if (b.from === 2 && b.to === 3) return { ...b, to: 9 };
    return { ...b };
  }),
};
assert.equal(ether.hillFormula, ethanol.activeCompound.hillFormula);
assert(!matchesMoleculeGraph(ethanol.canvasAtoms, ethanol.canvasBonds, ether), 'ethanol must not match dimethyl ether');

const markup = renderToStaticMarkup(createElement(BuilderInfoPanel));
assert.equal((markup.match(/aria-label="Quick Add /g) ?? []).length, 40, 'all presets have accessible buttons');
assert.equal((markup.match(/title="/g) ?? []).length, 40, 'all presets have tooltips');
assert(markup.includes('type="search"'), 'search is rendered');
console.log('Quick Add validation passed: 40 presets (21 retained + 19 added), registry/formula/topology/layout/bookkeeping/ID/recognition/SSR assertions.');
