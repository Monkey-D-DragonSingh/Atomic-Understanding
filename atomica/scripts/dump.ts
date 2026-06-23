import { MOLECULES } from '../src/data/molecules';
import fs from 'fs';
fs.writeFileSync('mols.json', JSON.stringify(MOLECULES.map(m => m.id)));
console.log('done');
