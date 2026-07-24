import { ELEMENTS } from '../src/data/elements';
import { MOLECULES } from '../src/data/molecules';
import { REACTIONS } from '../src/data/reactions';
import { deriveElectronConfig } from '../src/lib/chemistry';

function parseSubscripts(formula: string): Record<string, number> {
  // Convert subscripts ₀₁₂₃₄₅₆₇₈₉ to regular numbers
  const subscriptMap: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
  };
  const normalized = formula.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, m => subscriptMap[m]);
  
  let temp = normalized;
  // Handle parenthesis e.g. Ca(OH)2 -> CaO2H2
  temp = temp.replace(/\(([A-Za-z0-9]+)\)(\d+)/g, (match, group, multiplier) => {
    const mult = parseInt(multiplier, 10);
    return group.replace(/([A-Z][a-z]*)(\d*)/g, (m2, elem, count) => {
      const c = parseInt(count || '1', 10);
      return `${elem}${c * mult}`;
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

interface ValidationReport {
  elements: {
    total: number;
    errors: string[];
    warnings: string[];
  };
  molecules: {
    total: number;
    errors: string[];
    warnings: string[];
  };
  reactions: {
    total: number;
    errors: string[];
    warnings: string[];
  };
}

const report: ValidationReport = {
  elements: { total: ELEMENTS.length, errors: [], warnings: [] },
  molecules: { total: MOLECULES.length, errors: [], warnings: [] },
  reactions: { total: REACTIONS.length, errors: [], warnings: [] }
};

// ----------------------------------------------------
// 1. Elements Verification
// ----------------------------------------------------
console.log('Verifying elements...');
const elementMap = new Map<string, typeof ELEMENTS[0]>();
for (const el of ELEMENTS) {
  elementMap.set(el.symbol, el);
}

for (const el of ELEMENTS) {
  const prefix = `[Element ${el.symbol} - ${el.name}]`;

  // Check protons/electrons/atomicNumber
  if (el.atomicNumber <= 0) {
    report.elements.errors.push(`${prefix} Invalid atomic number: ${el.atomicNumber}`);
  }

  // Shells sum
  const shellSum = el.electronsPerShell.reduce((a, b) => a + b, 0);
  if (shellSum !== el.atomicNumber) {
    report.elements.errors.push(`${prefix} electronsPerShell sum (${shellSum}) does not match atomic number (${el.atomicNumber})`);
  }

  // Neutrons check
  const neutrons = Math.round(el.atomicMass) - el.atomicNumber;
  if (neutrons < 0) {
    report.elements.errors.push(`${prefix} Negative neutron count derived: mass=${el.atomicMass}, neutrons=${neutrons}`);
  }

  // Valence electrons check
  const lastShell = el.electronsPerShell[el.electronsPerShell.length - 1] || 0;
  // Note: transition metals and lanthanides/actinides have complex valence structures.
  // We can warn if valence electrons is highly unusual.
  if (el.valenceElectrons < 0 || el.valenceElectrons > 8) {
    report.elements.errors.push(`${prefix} Unusual valence electrons count: ${el.valenceElectrons}`);
  }

  // Electron config
  const derived = deriveElectronConfig(el.atomicNumber);
  if (el.electronConfiguration !== derived.full) {
    report.elements.errors.push(`${prefix} Electron configuration mismatch. Hardcoded: "${el.electronConfiguration}", Derived: "${derived.full}"`);
  }

  // Basic physical values
  if (el.atomicMass <= 0) {
    report.elements.errors.push(`${prefix} Invalid atomic mass: ${el.atomicMass}`);
  }
}

// ----------------------------------------------------
// 2. Molecules Verification
// ----------------------------------------------------
console.log('Verifying molecules...');
const moleculeMap = new Map<string, typeof MOLECULES[0]>();
for (const mol of MOLECULES) {
  moleculeMap.set(mol.id, mol);
}

for (const mol of MOLECULES) {
  const prefix = `[Molecule ${mol.id} - ${mol.name}]`;

  // Parse formula and calculate expected mass
  const parsedAtoms = parseSubscripts(mol.formula);
  let calculatedMass = 0;
  let missingElement = false;

  for (const [symbol, count] of Object.entries(parsedAtoms)) {
    const el = elementMap.get(symbol);
    if (!el) {
      report.molecules.errors.push(`${prefix} Formula references unknown element: ${symbol}`);
      missingElement = true;
    } else {
      calculatedMass += el.atomicMass * count;
    }
  }

  // Compare molar mass
  if (!missingElement) {
    const diff = Math.abs(calculatedMass - mol.molarMass);
    if (diff > 1.0) {
      report.molecules.errors.push(`${prefix} Molar mass mismatch. Hardcoded: ${mol.molarMass}, Calculated from formula: ${calculatedMass.toFixed(4)} (diff: ${diff.toFixed(4)})`);
    } else if (diff > 0.05) {
      report.molecules.warnings.push(`${prefix} Molar mass slight difference. Hardcoded: ${mol.molarMass}, Calculated: ${calculatedMass.toFixed(4)}`);
    }
  }

  // Verify internal atoms list matches formula (if 3D coords are present)
  if (mol.atoms.length > 0) {
    const atomsCount: Record<string, number> = {};
    for (const at of mol.atoms) {
      atomsCount[at.element] = (atomsCount[at.element] || 0) + 1;
      // Check that atom element is valid
      if (!elementMap.has(at.element)) {
        report.molecules.errors.push(`${prefix} Atoms array references unknown element: ${at.element}`);
      }
    }

    // Check matching counts
    for (const [sym, count] of Object.entries(parsedAtoms)) {
      if ((atomsCount[sym] || 0) !== count) {
        report.molecules.errors.push(`${prefix} Atom count mismatch for ${sym}. Formula says ${count}, Atoms array has ${atomsCount[sym] || 0}`);
      }
    }
    for (const sym of Object.keys(atomsCount)) {
      if (!parsedAtoms[sym]) {
        report.molecules.errors.push(`${prefix} Atoms array has element ${sym} not present in formula ${mol.formula}`);
      }
    }

    // Check bond references and distance
    for (const bond of mol.bonds) {
      const fromAt = mol.atoms.find(at => at.id === bond.from);
      const toAt = mol.atoms.find(at => at.id === bond.to);
      if (!fromAt) {
        report.molecules.errors.push(`${prefix} Bond references invalid from-atom id: ${bond.from}`);
      }
      if (!toAt) {
        report.molecules.errors.push(`${prefix} Bond references invalid to-atom id: ${bond.to}`);
      }

      if (fromAt && toAt) {
        const dx = fromAt.x - toAt.x;
        const dy = fromAt.y - toAt.y;
        const dz = fromAt.z - toAt.z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < 0.5 || dist > 4.0) {
          report.molecules.warnings.push(`${prefix} Implausible bond length between atom ${bond.from} (${fromAt.element}) and ${bond.to} (${toAt.element}): ${dist.toFixed(3)} Å`);
        }
      }
    }
  } else {
    // Some ionic solids or complexes might have 0 atoms coordinates but should have valid formula
    report.molecules.warnings.push(`${prefix} Has empty 3D atoms coordinates (standard for complex ionic solids)`);
  }
}

// ----------------------------------------------------
// 3. Reactions Verification
// ----------------------------------------------------
console.log('Verifying reactions...');
for (const rxn of REACTIONS) {
  const prefix = `[Reaction ${rxn.id} - ${rxn.name}]`;

  // Enthalpy sign check
  if (rxn.isExothermic && rxn.enthalpy > 0) {
    report.reactions.errors.push(`${prefix} Marked as exothermic, but Enthalpy is positive: ${rxn.enthalpy} kJ/mol`);
  }
  if (!rxn.isExothermic && rxn.enthalpy < 0) {
    report.reactions.errors.push(`${prefix} Marked as endothermic, but Enthalpy is negative: ${rxn.enthalpy} kJ/mol`);
  }

  // Reactants and products check
  let lhsMass = 0;
  let rhsMass = 0;

  const leftAtoms: Record<string, number> = {};
  const rightAtoms: Record<string, number> = {};

  // Check LHS
  for (const r of rxn.reactants) {
    // 1. Get molecular weight
    let reactantMass = 0;
    if (r.moleculeId) {
      const mol = moleculeMap.get(r.moleculeId);
      const el = elementMap.get(r.moleculeId); // Some reactants might be single elements named like 'hydrogen' (H2 is molecule, but what about 'iron' Fe?)
      if (mol) {
        reactantMass = mol.molarMass;
      } else if (el) {
        reactantMass = el.atomicMass;
      } else {
        // Let's try to map moleculeId to element symbol
        const elBySym = elementMap.get(r.formula);
        if (elBySym) {
          reactantMass = elBySym.atomicMass;
        } else {
          report.reactions.errors.push(`${prefix} Reactant moleculeId "${r.moleculeId}" not found in molecules or elements`);
        }
      }
    } else {
      // Try formula directly
      const elBySym = elementMap.get(r.formula);
      if (elBySym) {
        reactantMass = elBySym.atomicMass;
      } else {
        // Try parsing formula to calculate mass
        const parsed = parseSubscripts(r.formula);
        for (const [sym, count] of Object.entries(parsed)) {
          const el = elementMap.get(sym);
          if (el) reactantMass += el.atomicMass * count;
        }
      }
    }
    lhsMass += reactantMass * r.coefficient;

    // 2. Count atoms for balancing
    const counts = parseSubscripts(r.formula);
    for (const [el, count] of Object.entries(counts)) {
      leftAtoms[el] = (leftAtoms[el] || 0) + (count * r.coefficient);
    }
  }

  // Check RHS
  for (const p of rxn.products) {
    // 1. Get molecular weight
    let productMass = 0;
    if (p.moleculeId) {
      const mol = moleculeMap.get(p.moleculeId);
      const el = elementMap.get(p.moleculeId);
      if (mol) {
        productMass = mol.molarMass;
      } else if (el) {
        productMass = el.atomicMass;
      } else {
        const elBySym = elementMap.get(p.formula);
        if (elBySym) {
          productMass = elBySym.atomicMass;
        } else {
          report.reactions.errors.push(`${prefix} Product moleculeId "${p.moleculeId}" not found in molecules or elements`);
        }
      }
    } else {
      const elBySym = elementMap.get(p.formula);
      if (elBySym) {
        productMass = elBySym.atomicMass;
      } else {
        const parsed = parseSubscripts(p.formula);
        for (const [sym, count] of Object.entries(parsed)) {
          const el = elementMap.get(sym);
          if (el) productMass += el.atomicMass * count;
        }
      }
    }
    rhsMass += productMass * p.coefficient;

    // 2. Count atoms for balancing
    const counts = parseSubscripts(p.formula);
    for (const [el, count] of Object.entries(counts)) {
      rightAtoms[el] = (rightAtoms[el] || 0) + (count * p.coefficient);
    }
  }

  // Balance verify
  let balanced = true;
  for (const el of new Set([...Object.keys(leftAtoms), ...Object.keys(rightAtoms)])) {
    if (leftAtoms[el] !== rightAtoms[el]) {
      balanced = false;
      report.reactions.errors.push(`${prefix} Stoichiometric imbalance for ${el}: LHS has ${leftAtoms[el] || 0}, RHS has ${rightAtoms[el] || 0}`);
    }
  }

  // Mass conservation check (dynamic)
  const massDiff = Math.abs(lhsMass - rhsMass);
  if (balanced && massDiff > 1.0) {
    report.reactions.errors.push(`${prefix} Mass conservation violation. LHS total weight: ${lhsMass.toFixed(4)} g/mol, RHS total weight: ${rhsMass.toFixed(4)} g/mol (diff: ${massDiff.toFixed(4)} g/mol)`);
  } else if (balanced && massDiff > 0.05) {
    report.reactions.warnings.push(`${prefix} Mass conservation slight floating point variance. LHS: ${lhsMass.toFixed(4)}, RHS: ${rhsMass.toFixed(4)} (diff: ${massDiff.toFixed(4)})`);
  }
}

// Write the output report
console.log('\n--- Deep Verification Completed ---');
console.log(`Elements: Checked ${report.elements.total}, Errors: ${report.elements.errors.length}, Warnings: ${report.elements.warnings.length}`);
console.log(`Molecules: Checked ${report.molecules.total}, Errors: ${report.molecules.errors.length}, Warnings: ${report.molecules.warnings.length}`);
console.log(`Reactions: Checked ${report.reactions.total}, Errors: ${report.reactions.errors.length}, Warnings: ${report.reactions.warnings.length}`);

if (report.elements.errors.length > 0) {
  console.log('\n❌ ELEMENT ERRORS:');
  report.elements.errors.forEach(e => console.log('  ' + e));
}
if (report.molecules.errors.length > 0) {
  console.log('\n❌ MOLECULE ERRORS:');
  report.molecules.errors.forEach(e => console.log('  ' + e));
}
if (report.reactions.errors.length > 0) {
  console.log('\n❌ REACTION ERRORS:');
  report.reactions.errors.forEach(e => console.log('  ' + e));
}

if (report.elements.warnings.length > 0) {
  console.log('\n⚠️ ELEMENT WARNINGS:');
  report.elements.warnings.slice(0, 10).forEach(e => console.log('  ' + e));
  if (report.elements.warnings.length > 10) console.log(`  ... and ${report.elements.warnings.length - 10} more warnings.`);
}
if (report.molecules.warnings.length > 0) {
  console.log('\n⚠️ MOLECULE WARNINGS:');
  report.molecules.warnings.slice(0, 10).forEach(e => console.log('  ' + e));
  if (report.molecules.warnings.length > 10) console.log(`  ... and ${report.molecules.warnings.length - 10} more warnings.`);
}
if (report.reactions.warnings.length > 0) {
  console.log('\n⚠️ REACTION WARNINGS:');
  report.reactions.warnings.slice(0, 10).forEach(e => console.log('  ' + e));
  if (report.reactions.warnings.length > 10) console.log(`  ... and ${report.reactions.warnings.length - 10} more warnings.`);
}

import * as fs from 'fs';
import * as path from 'path';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mdReportPath = path.join(__dirname, 'deep_validation_report.md');
let mdContent = `# Deep Chemical Database Validation Report\n\n`;
mdContent += `Generated at: ${new Date().toISOString()}\n\n`;

mdContent += `## Summary\n\n`;
mdContent += `| Domain | Checked | Errors | Warnings |\n`;
mdContent += `| :--- | :---: | :---: | :---: |\n`;
mdContent += `| **Elements** | ${report.elements.total} | ${report.elements.errors.length} | ${report.elements.warnings.length} |\n`;
mdContent += `| **Molecules** | ${report.molecules.total} | ${report.molecules.errors.length} | ${report.molecules.warnings.length} |\n`;
mdContent += `| **Reactions** | ${report.reactions.total} | ${report.reactions.errors.length} | ${report.reactions.warnings.length} |\n\n`;

if (report.elements.errors.length + report.molecules.errors.length + report.reactions.errors.length === 0) {
  mdContent += `> [!NOTE]\n> 🎉 **All tests passed!** No errors found in elements, molecules, or reactions database. The database is stoichiometrically balanced and mass-conserved.\n\n`;
} else {
  mdContent += `> [!WARNING]\n> ⚠️ **Errors Found!** Please review the details below.\n\n`;
}

if (report.elements.errors.length > 0) {
  mdContent += `### Element Errors\n\n`;
  report.elements.errors.forEach(e => mdContent += `* ❌ ${e}\n`);
  mdContent += `\n`;
}
if (report.molecules.errors.length > 0) {
  mdContent += `### Molecule Errors\n\n`;
  report.molecules.errors.forEach(e => mdContent += `* ❌ ${e}\n`);
  mdContent += `\n`;
}
if (report.reactions.errors.length > 0) {
  mdContent += `### Reaction Errors\n\n`;
  report.reactions.errors.forEach(e => mdContent += `* ❌ ${e}\n`);
  mdContent += `\n`;
}

if (report.elements.warnings.length > 0) {
  mdContent += `### Element Warnings\n\n`;
  report.elements.warnings.forEach(e => mdContent += `* ⚠️ ${e}\n`);
  mdContent += `\n`;
}
if (report.molecules.warnings.length > 0) {
  mdContent += `### Molecule Warnings\n\n`;
  report.molecules.warnings.forEach(e => mdContent += `* ⚠️ ${e}\n`);
  mdContent += `\n`;
}
if (report.reactions.warnings.length > 0) {
  mdContent += `### Reaction Warnings\n\n`;
  report.reactions.warnings.forEach(e => mdContent += `* ⚠️ ${e}\n`);
  mdContent += `\n`;
}

fs.writeFileSync(mdReportPath, mdContent);
console.log(`\nMarkdown report written to: ${mdReportPath}`);
