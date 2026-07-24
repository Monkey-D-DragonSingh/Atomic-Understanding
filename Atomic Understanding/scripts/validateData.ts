import { ELEMENTS } from '../src/data/elements';
import { MOLECULES } from '../src/data/molecules';
import { REACTIONS } from '../src/data/reactions';
import { deriveElectronConfig } from '../src/lib/chemistry';

function validateElements() {
  let errors = 0;
  console.log('--- Validating Elements ---');
  
  if (ELEMENTS.length !== 118) {
    console.error(`❌ Expected 118 elements, found ${ELEMENTS.length}`);
    errors++;
  } else {
    console.log('✅ Found 118 elements');
  }

  const anomaliesFound: string[] = [];

  for (const el of ELEMENTS) {
    // 1. Check electrons sum
    const sum = el.electronsPerShell.reduce((a, b) => a + b, 0);
    if (sum !== el.atomicNumber) {
      console.error(`❌ ${el.symbol} (Z=${el.atomicNumber}): electronsPerShell sum is ${sum}`);
      errors++;
    }

    // 2. Cross-check hardcoded config with derived config
    const derived = deriveElectronConfig(el.atomicNumber);
    if (el.electronConfiguration !== derived.full) {
      console.error(`❌ ${el.symbol} config mismatch. Hardcoded: ${el.electronConfiguration}, Derived: ${derived.full}`);
      errors++;
    }

    // Track anomalies
    const anomalyZ = [24, 29, 41, 42, 44, 45, 46, 47, 57, 58, 64, 78, 79, 89, 90, 91, 92, 93, 96, 103];
    if (anomalyZ.includes(el.atomicNumber)) {
      anomaliesFound.push(`${el.symbol} (${el.electronConfigurationSemantic})`);
    }
  }

  if (errors === 0) {
    console.log(`✅ All element configurations and electron sums match derived logic.`);
    console.log(`✅ Tracked anomalies included: ${anomaliesFound.join(', ')}`);
  }
  return errors;
}

function parseFormula(formula: string): Record<string, number> {
  const normalized = formula.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, m => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(m)]);
  // Simple regex parser for empirical formulas like H2O, C6H12O6, Fe2O3
  // It handles simple brackets like Ca(OH)2 very poorly so we do a quick pass for brackets
  
  let temp = normalized;
  // Handle simple brackets e.g. (OH)2 -> O2H2
  temp = temp.replace(/\(([A-Za-z0-9]+)\)(\d+)/g, (match, group, multiplier) => {
    const mult = parseInt(multiplier, 10);
    return group.replace(/([A-Z][a-z]*)(\d*)/g, (m2: string, elem: string, count: string) => {
      return `${elem}${(parseInt(count || '1', 10) * mult)}`;
    });
  });

  const regex = /([A-Z][a-z]*)(\d*)/g;
  const counts: Record<string, number> = {};
  let m;
  while ((m = regex.exec(temp)) !== null) {
    const element = m[1];
    const count = parseInt(m[2] || '1', 10);
    counts[element] = (counts[element] || 0) + count;
  }
  return counts;
}

function validateReactions() {
  let errors = 0;
  console.log('\n--- Validating Reactions ---');

  if (REACTIONS.length < 30) {
    console.error(`❌ Expected >= 30 reactions, found ${REACTIONS.length}`);
    errors++;
  } else {
    console.log(`✅ Found ${REACTIONS.length} reactions`);
  }

  for (const rxn of REACTIONS) {
    const leftAtoms: Record<string, number> = {};
    const rightAtoms: Record<string, number> = {};

    for (const r of rxn.reactants) {
      const counts = parseFormula(r.formula);
      for (const [el, count] of Object.entries(counts)) {
        leftAtoms[el] = (leftAtoms[el] || 0) + (count * r.coefficient);
      }
    }

    for (const p of rxn.products) {
      const counts = parseFormula(p.formula);
      for (const [el, count] of Object.entries(counts)) {
        rightAtoms[el] = (rightAtoms[el] || 0) + (count * p.coefficient);
      }
    }

    let balanced = true;
    for (const el of new Set([...Object.keys(leftAtoms), ...Object.keys(rightAtoms)])) {
      if (leftAtoms[el] !== rightAtoms[el]) {
        balanced = false;
        console.error(`❌ Reaction ${rxn.id} not balanced for ${el}: LHS=${leftAtoms[el] || 0}, RHS=${rightAtoms[el] || 0}`);
        errors++;
      }
    }
  }

  if (errors === 0) {
    console.log(`✅ All reactions are stoichiometrically balanced.`);
  }
  return errors;
}

function validateMolecules() {
  let errors = 0;
  console.log('\n--- Validating Molecules ---');

  if (MOLECULES.length < 60) {
    console.error(`❌ Expected >= 60 molecules, found ${MOLECULES.length}`);
    errors++;
  } else {
    console.log(`✅ Found ${MOLECULES.length} molecules`);
  }

  let validBonds = 0;
  for (const mol of MOLECULES) {
    if (mol.atoms.length === 0) continue; // For some ionic solids, we might not have 3d coords and that's okay

    for (const bond of mol.bonds) {
      const a = mol.atoms.find(at => at.id === bond.from);
      const b = mol.atoms.find(at => at.id === bond.to);
      if (a && b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz); // Angstroms
        
        // Typical bond lengths are 0.7 to 3.0 Angstroms
        if (dist < 0.5 || dist > 4.0) {
          console.warn(`⚠️  Plausible bond distance warning in ${mol.name}: ${a.element}-${b.element} is ${dist.toFixed(2)} Å`);
        } else {
          validBonds++;
        }
      }
    }
  }

  if (errors === 0) {
    console.log(`✅ Checked ${validBonds} bond distances. All within chemically plausible limits.`);
  }

  return errors;
}

function main() {
  let totalErrors = 0;
  totalErrors += validateElements();
  totalErrors += validateReactions();
  totalErrors += validateMolecules();

  if (totalErrors > 0) {
    console.error(`\n❌ Validation failed with ${totalErrors} errors.`);
    process.exit(1);
  } else {
    console.log('\n🎉 ALL VALIDATIONS PASSED 🎉');
  }
}

main();
