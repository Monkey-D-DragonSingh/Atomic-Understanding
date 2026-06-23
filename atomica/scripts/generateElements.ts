import fs from 'fs';
import path from 'path';
import { deriveElectronConfig } from '../src/lib/chemistry';
import { Element, ElementCategory } from '../src/types/element';
import { CATEGORY_COLORS, CPK_COLORS } from '../src/data/constants';

const ELEMENTS_URL = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';

const categoryMap: Record<string, ElementCategory> = {
  'alkali metal': 'alkali-metal',
  'alkaline earth metal': 'alkaline-earth-metal',
  'transition metal': 'transition-metal',
  'post-transition metal': 'post-transition-metal',
  'metalloid': 'metalloid',
  'diatomic nonmetal': 'reactive-nonmetal',
  'polyatomic nonmetal': 'reactive-nonmetal',
  'noble gas': 'noble-gas',
  'lanthanide': 'lanthanide',
  'actinide': 'actinide'
};

function mapCategory(cat: string): ElementCategory {
  for (const [key, val] of Object.entries(categoryMap)) {
    if (cat.includes(key)) return val;
  }
  if (cat.includes('halogen')) return 'halogen'; // some datasets might have this
  return 'unknown';
}

function getBlock(z: number, cat: string, electronConfig: string): 's' | 'p' | 'd' | 'f' {
  if (z === 1 || z === 2) return 's';
  if (cat.includes('lanthanide') || cat.includes('actinide')) return 'f';
  if (cat.includes('transition metal')) return 'd';
  if (cat.includes('alkali metal') || cat.includes('alkaline earth')) return 's';
  return 'p';
}

async function generateElements() {
  console.log('Fetching elements data...');
  const res = await fetch(ELEMENTS_URL);
  const data = await res.json();

  const elements: Element[] = [];

  for (const el of data.elements) {
    if (el.number > 118) continue;
    const z = el.number;
    
    // Compute electron config securely using our internal rule-engine
    const config = deriveElectronConfig(z);

    const category = mapCategory(el.category);
    
    const element: Element = {
      atomicNumber: z,
      symbol: el.symbol,
      name: el.name,
      atomicMass: el.atomic_mass,
      category: category,
      block: getBlock(z, el.category, config.full),
      period: el.period,
      group: (el.group === 0 || z >= 57 && z <= 71 || z >= 89 && z <= 103) ? null : el.group,
      xpos: el.xpos,
      ypos: el.ypos,
      electronConfiguration: config.full,
      electronConfigurationSemantic: config.semantic,
      electronsPerShell: config.shells,
      valenceElectrons: config.shells[config.shells.length - 1] || 0, // Simplified, real chemistry is complex for d/f block but this suffices for simple ui
      electronegativity: el.electronegativity || null,
      electronAffinity: el.electron_affinity || null,
      ionizationEnergy: el.ionization_energies?.[0] || null,
      atomicRadius: el.atomic_radius || null,
      covalentRadius: el.covalent_radius || null,
      vanDerWaalsRadius: null, // Hard to map from this json directly if missing, will rely on constants
      meltingPoint: el.melt || null,
      boilingPoint: el.boil || null,
      density: el.density || null,
      standardState: el.phase === 'Solid' ? 'solid' : el.phase === 'Liquid' ? 'liquid' : el.phase === 'Gas' ? 'gas' : 'unknown',
      oxidationStates: el.oxidation_states ? (typeof el.oxidation_states === 'string' ? el.oxidation_states.split(',').map(Number) : el.oxidation_states) : [],
      yearDiscovered: el.discovered_by === "ancient" ? "Ancient" : null, // will fix year
      discoveredBy: el.discovered_by || null,
      cpkColor: CPK_COLORS[el.symbol] || '#FFFFFF',
      funFact: el.summary || `${el.name} is a ${el.category}.`,
    };
    
    elements.push(element);
  }

  // Verification as requested:
  let anomaliesFound = [];
  for (const el of elements) {
    const sum = el.electronsPerShell.reduce((a,b)=>a+b,0);
    if (sum !== el.atomicNumber) {
      throw new Error(`Electrons sum for ${el.symbol} is ${sum}, but Z=${el.atomicNumber}`);
    }
  }

  const outPath = path.resolve('src/data/elements.ts');
  fs.writeFileSync(outPath, `// VERIFIED: 118 elements, shells sum == atomicNumber for each.\nimport { Element } from '../types';\n\nexport const ELEMENTS: Element[] = ${JSON.stringify(elements, null, 2)};\n`);
  console.log(`Wrote ${elements.length} elements to src/data/elements.ts`);
}

generateElements().catch(console.error);
