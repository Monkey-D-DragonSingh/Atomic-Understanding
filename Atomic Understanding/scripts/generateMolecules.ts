import fs from 'fs';
import path from 'path';
import { fetch3DRecord, fetch2DRecord, fetchProperties, searchCidByName } from '../src/lib/pubchem';
import { Molecule, StandardState } from '../src/types/molecule';

const moleculesList = [
  // Diatomic & simple gases
  { name: 'Hydrogen', slug: 'hydrogen', formula: 'H₂', type: 'diatomic' },
  { name: 'Oxygen', slug: 'oxygen', formula: 'O₂', type: 'diatomic' },
  { name: 'Nitrogen', slug: 'nitrogen', formula: 'N₂', type: 'diatomic' },
  { name: 'Fluorine', slug: 'fluorine', formula: 'F₂', type: 'diatomic' },
  { name: 'Chlorine', slug: 'chlorine', formula: 'Cl₂', type: 'diatomic' },
  { name: 'Carbon Monoxide', slug: 'carbon-monoxide', formula: 'CO', type: 'linear' },
  { name: 'Nitric Oxide', slug: 'nitric-oxide', formula: 'NO', type: 'linear' },
  { name: 'Hydrogen Chloride', slug: 'hydrogen-chloride', formula: 'HCl', type: 'linear' },
  { name: 'Hydrogen Fluoride', slug: 'hydrogen-fluoride', formula: 'HF', type: 'linear' },
  { name: 'Hydrogen Bromide', slug: 'hydrogen-bromide', formula: 'HBr', type: 'linear' },
  { name: 'Hydrogen Iodide', slug: 'hydrogen-iodide', formula: 'HI', type: 'linear' },

  // Special / commonly-asked molecules
  { name: 'Ozone', slug: 'ozone', formula: 'O₃', type: 'bent', isSpecial: true },
  { name: 'Hydrogen Peroxide', slug: 'hydrogen-peroxide', formula: 'H₂O₂', type: 'bent', isSpecial: true },
  { name: 'Nitrous Oxide', slug: 'nitrous-oxide', formula: 'N₂O', type: 'linear', isSpecial: true },
  { name: 'Nitrogen Dioxide', slug: 'nitrogen-dioxide', formula: 'NO₂', type: 'bent', isSpecial: true },
  { name: 'Dinitrogen Tetroxide', slug: 'dinitrogen-tetroxide', formula: 'N₂O₄', type: 'trigonal-planar', isSpecial: true },
  { name: 'Sulfur Dioxide', slug: 'sulfur-dioxide', formula: 'SO₂', type: 'bent', isSpecial: true },
  { name: 'Sulfur Trioxide', slug: 'sulfur-trioxide', formula: 'SO₃', type: 'trigonal-planar', isSpecial: true },
  { name: 'Ammonia', slug: 'ammonia', formula: 'NH₃', type: 'trigonal-pyramidal', isSpecial: true },
  { name: 'Phosphine', slug: 'phosphine', formula: 'PH₃', type: 'trigonal-pyramidal', isSpecial: true },
  { name: 'Hydrogen Sulfide', slug: 'hydrogen-sulfide', formula: 'H₂S', type: 'bent', isSpecial: true },

  // Water & oxides
  { name: 'Water', slug: 'water', formula: 'H₂O', type: 'bent' },
  { name: 'Carbon Dioxide', slug: 'carbon-dioxide', formula: 'CO₂', type: 'linear' },
  { name: 'Silicon Dioxide', slug: 'silicon-dioxide', formula: 'SiO₂', type: 'linear' }, // representative unit
  { name: 'Iron(III) Oxide', slug: 'iron-iii-oxide', formula: 'Fe₂O₃', type: 'none' }, // ionic representation
  { name: 'Magnesium Oxide', slug: 'magnesium-oxide', formula: 'MgO', type: 'linear' }, // ionic
  { name: 'Calcium Oxide', slug: 'calcium-oxide', formula: 'CaO', type: 'linear' }, // ionic

  // Acids & bases
  { name: 'Nitric Acid', slug: 'nitric-acid', formula: 'HNO₃', type: 'trigonal-planar' },
  { name: 'Sulfuric Acid', slug: 'sulfuric-acid', formula: 'H₂SO₄', type: 'tetrahedral' },
  { name: 'Phosphoric Acid', slug: 'phosphoric-acid', formula: 'H₃PO₄', type: 'tetrahedral' },
  { name: 'Carbonic Acid', slug: 'carbonic-acid', formula: 'H₂CO₃', type: 'trigonal-planar' },
  { name: 'Perchloric Acid', slug: 'perchloric-acid', formula: 'HClO₄', type: 'tetrahedral' },
  { name: 'Sodium Hydroxide', slug: 'sodium-hydroxide', formula: 'NaOH', type: 'linear' },
  { name: 'Potassium Hydroxide', slug: 'potassium-hydroxide', formula: 'KOH', type: 'linear' },
  { name: 'Calcium Hydroxide', slug: 'calcium-hydroxide', formula: 'Ca(OH)₂', type: 'none' },
  { name: 'Ammonium Hydroxide', slug: 'ammonium-hydroxide', formula: 'NH₄OH', type: 'none' },

  // Ionic compounds (formula units)
  { name: 'Sodium Chloride', slug: 'sodium-chloride', formula: 'NaCl', type: 'diatomic' },
  { name: 'Potassium Chloride', slug: 'potassium-chloride', formula: 'KCl', type: 'diatomic' },
  { name: 'Calcium Chloride', slug: 'calcium-chloride', formula: 'CaCl₂', type: 'none' },
  { name: 'Magnesium Chloride', slug: 'magnesium-chloride', formula: 'MgCl₂', type: 'none' },
  { name: 'Aluminum Chloride', slug: 'aluminum-chloride', formula: 'AlCl₃', type: 'trigonal-planar' },
  { name: 'Calcium Carbonate', slug: 'calcium-carbonate', formula: 'CaCO₃', type: 'none' },
  { name: 'Sodium Bicarbonate', slug: 'sodium-bicarbonate', formula: 'NaHCO₃', type: 'none' },
  { name: 'Potassium Nitrate', slug: 'potassium-nitrate', formula: 'KNO₃', type: 'none' },
  { name: 'Copper(II) Sulfate', slug: 'copper-ii-sulfate', formula: 'CuSO₄', type: 'none' },

  // Hydrocarbons & organics
  { name: 'Methane', slug: 'methane', formula: 'CH₄', type: 'tetrahedral' },
  { name: 'Ethane', slug: 'ethane', formula: 'C₂H₆', type: 'none' },
  { name: 'Ethene', slug: 'ethene', formula: 'C₂H₄', type: 'none' }, // ethylene
  { name: 'Ethyne', slug: 'ethyne', formula: 'C₂H₂', type: 'linear' }, // acetylene
  { name: 'Propane', slug: 'propane', formula: 'C₃H₈', type: 'none' },
  { name: 'Butane', slug: 'butane', formula: 'C₄H₁₀', type: 'none' },
  { name: 'Benzene', slug: 'benzene', formula: 'C₆H₆', type: 'none' },
  { name: 'Methanol', slug: 'methanol', formula: 'CH₃OH', type: 'none' },
  { name: 'Ethanol', slug: 'ethanol', formula: 'C₂H₅OH', type: 'none' },
  { name: 'Acetic Acid', slug: 'acetic-acid', formula: 'CH₃COOH', type: 'none' },
  { name: 'Acetone', slug: 'acetone', formula: 'CH₃COCH₃', type: 'none' },
  { name: 'Formaldehyde', slug: 'formaldehyde', formula: 'CH₂O', type: 'trigonal-planar' },
  { name: 'Chloroform', slug: 'chloroform', formula: 'CHCl₃', type: 'tetrahedral' },
  { name: 'Carbon Tetrachloride', slug: 'carbon-tetrachloride', formula: 'CCl₄', type: 'tetrahedral' },
  { name: 'Glucose', slug: 'glucose', formula: 'C₆H₁₂O₆', type: 'none' },

  // Biologically/industrially notable
  { name: 'Urea', slug: 'urea', formula: 'CO(NH₂)₂', type: 'none' },
  { name: 'Caffeine', slug: 'caffeine', formula: 'C₈H₁₀N₄O₂', type: 'none' },
  { name: 'Acetonitrile', slug: 'acetonitrile', formula: 'CH₃CN', type: 'none' },
  { name: 'Hydrogen Cyanide', slug: 'hydrogen-cyanide', formula: 'HCN', type: 'linear' },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateMolecules() {
  const result: Molecule[] = [];
  
  for (let i = 0; i < moleculesList.length; i++) {
    const item = moleculesList[i];
    console.log(`Processing ${item.name} (${i + 1}/${moleculesList.length})...`);
    
    // We fetch CID
    const cid = await searchCidByName(item.name);
    await sleep(200); // rate limiting
    
    let structure = { atoms: [], bonds: [] };
    let props: any = {};
    
    if (cid) {
      props = await fetchProperties(cid).catch(() => ({}));
      await sleep(200);
      structure = await fetch3DRecord(cid).catch(() => null) || { atoms: [], bonds: [] };
      if (!structure || structure.atoms.length === 0) {
        structure = await fetch2DRecord(cid).catch(() => null) || { atoms: [], bonds: [] };
      }
      await sleep(200);
    } else {
      console.warn(`CID not found for ${item.name}`);
    }

    // fallback mapping if it's ionic or unresolvable
    const formulaPlain = item.formula.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, m => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(m)]);

    result.push({
      id: item.slug,
      name: item.name,
      iupacName: props.IUPACName || item.name,
      formula: item.formula,
      hillFormula: props.MolecularFormula || formulaPlain,
      molarMass: parseFloat(props.MolecularWeight) || 0,
      category: item.name.includes('Acid') ? 'acid' : item.name.includes('ide') ? 'binary compound' : 'compound',
      bondType: 'covalent', // default, to be corrected in validation script if needed
      geometry: item.type as any,
      hybridization: 'none',
      bondAngle: 'N/A',
      polarity: 'nonpolar',
      dipoleMoment: null,
      standardState: 'gas',
      meltingPoint: null,
      boilingPoint: null,
      uses: `${item.name} is used in various industrial and chemical processes.`,
      fact: `${item.name} has a molecular weight of ${props.MolecularWeight || '?'} g/mol.`,
      isSpecial: item.isSpecial,
      atoms: structure.atoms,
      bonds: structure.bonds.map(b => ({ ...b, type: 'covalent' })),
    });
  }

  const outPath = path.resolve('src/data/molecules.ts');
  fs.writeFileSync(outPath, `import { Molecule } from '../types';\n\nexport const MOLECULES: Molecule[] = ${JSON.stringify(result, null, 2)};\n`);
  console.log(`Wrote ${result.length} molecules to src/data/molecules.ts`);
}

generateMolecules().catch(console.error);
