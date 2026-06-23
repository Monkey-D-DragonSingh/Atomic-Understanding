import { ELEMENTS } from '../src/data/elements';
import { MOLECULES } from '../src/data/molecules';

console.log('--- ELEMENTS NULL REPORT ---');
const elNulls: Record<string, number> = { electronegativity: 0, atomicRadius: 0, covalentRadius: 0, vanDerWaalsRadius: 0, meltingPoint: 0, boilingPoint: 0, funFact: 0 };
for (const el of ELEMENTS) {
  if (el.electronegativity === null) elNulls.electronegativity++;
  if (el.atomicRadius === null) elNulls.atomicRadius++;
  if (el.covalentRadius === null) elNulls.covalentRadius++;
  if (el.vanDerWaalsRadius === null) elNulls.vanDerWaalsRadius++;
  if (el.meltingPoint === null) elNulls.meltingPoint++;
  if (el.boilingPoint === null) elNulls.boilingPoint++;
  if (el.funFact === null) elNulls.funFact++;
}
console.log(elNulls);

console.log('--- MOLECULES NULL REPORT ---');
const molNulls: Record<string, number> = { uses: 0, fact: 0, bondAngle: 0, meltingPoint: 0, boilingPoint: 0 };
for (const mol of MOLECULES) {
  if (mol.uses === null) molNulls.uses++;
  if (mol.fact === null) molNulls.fact++;
  if (mol.bondAngle === null || mol.bondAngle === 'N/A') molNulls.bondAngle++;
  if (mol.meltingPoint === null) molNulls.meltingPoint++;
  if (mol.boilingPoint === null) molNulls.boilingPoint++;
}
console.log(molNulls);
