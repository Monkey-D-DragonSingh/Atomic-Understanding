import fs from 'fs';
import path from 'path';
import { fetch3DRecord, fetch2DRecord, fetchProperties, searchCidByName } from '../src/lib/pubchem';
import { Molecule, MoleculeGeometry, Hybridization, Polarity } from '../src/types/molecule';
import { StandardState } from '../src/types/element';
import { MOLECULES } from '../src/data/molecules';

interface CuratedEntry {
  name: string;
  slug: string;
  formula: string;
  searchName?: string; // PubChem search name if different from display name
  cid?: number; // explicit CID override when name search is ambiguous
  category: string;
  geometry: MoleculeGeometry;
  hybridization: Hybridization;
  bondAngle: string;
  polarity: Polarity;
  dipoleMoment: number | null;
  standardState: StandardState;
  meltingPoint: number | null; // K
  boilingPoint: number | null; // K
  uses: string;
  fact: string;
  isSpecial?: boolean;
}

const NEW_MOLECULES: CuratedEntry[] = [
  // ============ Elements & allotropes ============
  {
    name: 'Bromine', slug: 'bromine', formula: 'Br₂', searchName: 'molecular bromine',
    category: 'element (diatomic)', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'nonpolar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 265.8, boilingPoint: 332.0,
    uses: 'Used in flame retardants and water treatment.',
    fact: 'Bromine is one of only two elements that are liquid at room temperature.'
  },
  {
    name: 'Iodine', slug: 'iodine', formula: 'I₂', searchName: 'molecular iodine',
    category: 'element (diatomic)', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'nonpolar', dipoleMoment: null, standardState: 'solid', meltingPoint: 386.85, boilingPoint: 457.4,
    uses: 'Essential nutrient added to table salt; used as an antiseptic.',
    fact: 'Solid iodine sublimes into a striking violet vapor when gently heated.'
  },
  {
    name: 'White Phosphorus', slug: 'white-phosphorus', formula: 'P₄', cid: 123286,
    category: 'element (allotrope)', geometry: 'tetrahedral', hybridization: 'sp3', bondAngle: '60°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'solid', meltingPoint: 317.3, boilingPoint: 553.7,
    uses: 'Precursor to phosphoric acid and phosphorus compounds.',
    fact: 'White phosphorus glows in the dark and ignites spontaneously in air at about 30 °C.',
    isSpecial: true
  },
  {
    name: 'Sulfur (S₈)', slug: 'octasulfur', formula: 'S₈', cid: 66348,
    category: 'element (allotrope)', geometry: 'none', hybridization: 'sp3', bondAngle: '108°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'solid', meltingPoint: 388.36, boilingPoint: 717.8,
    uses: 'Used in vulcanizing rubber and producing sulfuric acid.',
    fact: 'Elemental sulfur naturally forms puckered eight-membered crown-shaped rings.',
    isSpecial: true
  },

  // ============ Inorganic covalent molecules ============
  {
    name: 'Sulfur Hexafluoride', slug: 'sulfur-hexafluoride', formula: 'SF₆',
    category: 'binary compound', geometry: 'octahedral', hybridization: 'sp3d2', bondAngle: '90°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'gas', meltingPoint: 209.3, boilingPoint: 209.3,
    uses: 'Used as an electrical insulator in high-voltage equipment.',
    fact: 'Inhaling sulfur hexafluoride makes your voice deeper — the opposite of helium.',
    isSpecial: true
  },
  {
    name: 'Phosphorus Trichloride', slug: 'phosphorus-trichloride', formula: 'PCl₃',
    category: 'binary compound', geometry: 'trigonal-pyramidal', hybridization: 'sp3', bondAngle: '100.1°',
    polarity: 'polar', dipoleMoment: 0.97, standardState: 'liquid', meltingPoint: 179.9, boilingPoint: 349.3,
    uses: 'Key intermediate for making pesticides and flame retardants.',
    fact: 'Phosphorus trichloride fumes violently on contact with moist air.'
  },
  {
    name: 'Phosphorus Pentachloride', slug: 'phosphorus-pentachloride', formula: 'PCl₅',
    category: 'binary compound', geometry: 'trigonal-bipyramidal', hybridization: 'sp3d', bondAngle: '90° / 120°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'solid', meltingPoint: 433.9, boilingPoint: 440,
    uses: 'Powerful chlorinating agent in organic synthesis.',
    fact: 'A classic textbook example of a trigonal-bipyramidal molecule with an expanded octet.',
    isSpecial: true
  },
  {
    name: 'Boron Trifluoride', slug: 'boron-trifluoride', formula: 'BF₃',
    category: 'binary compound', geometry: 'trigonal-planar', hybridization: 'sp2', bondAngle: '120°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'gas', meltingPoint: 146.4, boilingPoint: 172.0,
    uses: 'Used as a catalyst in organic synthesis.',
    fact: 'Boron trifluoride is a textbook electron-deficient molecule — boron has only six valence electrons.',
    isSpecial: true
  },
  {
    name: 'Xenon Tetrafluoride', slug: 'xenon-tetrafluoride', formula: 'XeF₄', cid: 123324,
    category: 'binary compound', geometry: 'square-planar', hybridization: 'sp3d2', bondAngle: '90°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'solid', meltingPoint: 390, boilingPoint: 388.9,
    uses: 'Used in research on noble gas chemistry.',
    fact: 'Xenon tetrafluoride shattered the belief that noble gases could not form compounds.',
    isSpecial: true
  },
  {
    name: 'Carbon Disulfide', slug: 'carbon-disulfide', formula: 'CS₂',
    category: 'binary compound', geometry: 'linear', hybridization: 'sp', bondAngle: '180°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'liquid', meltingPoint: 161.6, boilingPoint: 319.4,
    uses: 'Used to manufacture rayon and cellophane.',
    fact: 'Carbon disulfide is so flammable it can be ignited by the heat of a steam pipe.'
  },
  {
    name: 'Phosgene', slug: 'phosgene', formula: 'COCl₂',
    category: 'compound', geometry: 'trigonal-planar', hybridization: 'sp2', bondAngle: '~120°',
    polarity: 'polar', dipoleMoment: 1.17, standardState: 'gas', meltingPoint: 155, boilingPoint: 281.3,
    uses: 'Industrial precursor for polyurethanes and polycarbonates.',
    fact: 'Phosgene smells faintly of freshly cut hay despite being extremely toxic.'
  },
  {
    name: 'Hydrazine', slug: 'hydrazine', formula: 'N₂H₄',
    category: 'compound', geometry: 'none', hybridization: 'sp3', bondAngle: '~107°',
    polarity: 'polar', dipoleMoment: 1.85, standardState: 'liquid', meltingPoint: 275.1, boilingPoint: 387.0,
    uses: 'Used as rocket and spacecraft thruster fuel.',
    fact: 'Hydrazine powered the maneuvering thrusters of the Space Shuttle and many satellites.'
  },
  {
    name: 'Silane', slug: 'silane', formula: 'SiH₄',
    category: 'binary compound', geometry: 'tetrahedral', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'gas', meltingPoint: 88, boilingPoint: 161,
    uses: 'Used to deposit silicon layers in semiconductor manufacturing.',
    fact: 'Silane ignites spontaneously on contact with air.'
  },

  // ============ Ionic salts & minerals ============
  {
    name: 'Sodium Carbonate', slug: 'sodium-carbonate', formula: 'Na₂CO₃',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1124, boilingPoint: null,
    uses: 'Washing soda — used in glassmaking and as a water softener.',
    fact: 'Sodium carbonate has been harvested from dry lake beds since ancient Egyptian times.'
  },
  {
    name: 'Sodium Sulfate', slug: 'sodium-sulfate', formula: 'Na₂SO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1157, boilingPoint: 1702,
    uses: 'Used in powdered detergents and papermaking.',
    fact: 'Known as Glauber\'s salt, it was one of the first laxatives in medicine.'
  },
  {
    name: 'Sodium Nitrate', slug: 'sodium-nitrate', formula: 'NaNO₃',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 581, boilingPoint: 653,
    uses: 'Fertilizer and food preservative for cured meats.',
    fact: 'Called Chile saltpeter, vast natural deposits in the Atacama Desert were once fought over in war.'
  },
  {
    name: 'Sodium Fluoride', slug: 'sodium-fluoride', formula: 'NaF',
    category: 'ionic salt', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1266, boilingPoint: 1977,
    uses: 'Added to toothpaste and drinking water to prevent tooth decay.',
    fact: 'Fluoride ions strengthen tooth enamel by converting it into acid-resistant fluorapatite.'
  },
  {
    name: 'Ammonium Chloride', slug: 'ammonium-chloride', formula: 'NH₄Cl',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 611, boilingPoint: null,
    uses: 'Used in dry cell batteries and as a flavoring in salty licorice.',
    fact: 'Ammonium chloride sublimes when heated — it turns directly from solid to vapor and back.'
  },
  {
    name: 'Ammonium Nitrate', slug: 'ammonium-nitrate', formula: 'NH₄NO₃',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 442.8, boilingPoint: null,
    uses: 'One of the world\'s most widely used nitrogen fertilizers.',
    fact: 'Dissolving ammonium nitrate in water absorbs heat — the principle behind instant cold packs.'
  },
  {
    name: 'Ammonium Sulfate', slug: 'ammonium-sulfate', formula: '(NH₄)₂SO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 508, boilingPoint: null,
    uses: 'Fertilizer that supplies both nitrogen and sulfur to crops.',
    fact: 'Ammonium sulfate is also used in laboratories to precipitate and purify proteins.'
  },
  {
    name: 'Potassium Permanganate', slug: 'potassium-permanganate', formula: 'KMnO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 513, boilingPoint: null,
    uses: 'Powerful oxidizer used for water treatment and disinfection.',
    fact: 'A few crystals turn an entire glass of water an intense royal purple.'
  },
  {
    name: 'Potassium Dichromate', slug: 'potassium-dichromate', formula: 'K₂Cr₂O₇',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 671, boilingPoint: 773,
    uses: 'Oxidizing agent used in laboratory analysis and leather tanning.',
    fact: 'Its vivid orange color changes to green as it oxidizes other substances — the basis of old breathalyzer tests.'
  },
  {
    name: 'Potassium Chlorate', slug: 'potassium-chlorate', formula: 'KClO₃',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 629, boilingPoint: 673,
    uses: 'Oxidizer in safety matches and fireworks.',
    fact: 'The striking surface of a match box and the match head together contain the full recipe for fire.'
  },
  {
    name: 'Potassium Iodide', slug: 'potassium-iodide', formula: 'KI',
    category: 'ionic salt', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 954, boilingPoint: 1600,
    uses: 'Protects the thyroid gland from radioactive iodine exposure.',
    fact: 'Potassium iodide tablets are stockpiled around nuclear plants for emergency use.'
  },
  {
    name: 'Silver Nitrate', slug: 'silver-nitrate', formula: 'AgNO₃',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 483, boilingPoint: 713,
    uses: 'Used in chemistry labs to test for halide ions.',
    fact: 'Silver nitrate stains skin black on contact — early chemists called it "lunar caustic".'
  },
  {
    name: 'Silver Chloride', slug: 'silver-chloride', formula: 'AgCl',
    category: 'ionic salt', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 728, boilingPoint: 1820,
    uses: 'Light-sensitive compound used in photographic film and paper.',
    fact: 'Silver chloride darkens in sunlight — the chemistry behind the first photographs.'
  },
  {
    name: 'Barium Chloride', slug: 'barium-chloride', formula: 'BaCl₂',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1235, boilingPoint: 1833,
    uses: 'Laboratory reagent for testing sulfate ions.',
    fact: 'Barium salts burn with a brilliant green flame used in fireworks.'
  },
  {
    name: 'Barium Sulfate', slug: 'barium-sulfate', formula: 'BaSO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1858, boilingPoint: null,
    uses: 'Swallowed as a "barium meal" to make the gut visible in X-rays.',
    fact: 'Though barium is toxic, barium sulfate is so insoluble it passes through the body harmlessly.'
  },
  {
    name: 'Calcium Sulfate', slug: 'calcium-sulfate', formula: 'CaSO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1733, boilingPoint: null,
    uses: 'The main component of plaster of Paris and drywall.',
    fact: 'Gypsum (hydrated calcium sulfate) forms the world\'s largest natural crystals — up to 12 meters long.'
  },
  {
    name: 'Magnesium Sulfate', slug: 'magnesium-sulfate', formula: 'MgSO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1397, boilingPoint: null,
    uses: 'Epsom salt — used in bath soaks and as a laxative.',
    fact: 'Named after a bitter saline spring in Epsom, England, where it was discovered in 1618.'
  },
  {
    name: 'Magnesium Hydroxide', slug: 'magnesium-hydroxide', formula: 'Mg(OH)₂',
    category: 'base', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 623, boilingPoint: null,
    uses: 'The active ingredient in milk of magnesia antacid.',
    fact: 'Its low solubility makes it a safe antacid — only a little dissolves at a time.'
  },
  {
    name: 'Zinc Oxide', slug: 'zinc-oxide', formula: 'ZnO',
    category: 'binary compound', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 2247, boilingPoint: null,
    uses: 'Active ingredient in sunscreen and diaper rash cream.',
    fact: 'Zinc oxide blocks both UVA and UVB rays by physically reflecting sunlight.'
  },
  {
    name: 'Zinc Sulfate', slug: 'zinc-sulfate', formula: 'ZnSO₄',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 953, boilingPoint: null,
    uses: 'Dietary zinc supplement and agricultural micronutrient.',
    fact: 'Historically called "white vitriol" by alchemists.'
  },
  {
    name: 'Copper(II) Oxide', slug: 'copper-ii-oxide', formula: 'CuO', searchName: 'copper(ii) oxide',
    category: 'binary compound', geometry: 'diatomic', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 1599, boilingPoint: null,
    uses: 'Used to give glass and ceramics blue-green colors.',
    fact: 'The classic black powder formed when copper is heated in air.'
  },
  {
    name: 'Aluminum Oxide', slug: 'aluminum-oxide', formula: 'Al₂O₃',
    category: 'binary compound', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 2345, boilingPoint: 3250,
    uses: 'Abrasive in sandpaper and the source ore of aluminum metal.',
    fact: 'Rubies and sapphires are simply aluminum oxide crystals with trace impurities.'
  },
  {
    name: 'Iron(II) Sulfate', slug: 'iron-ii-sulfate', formula: 'FeSO₄', searchName: 'ferrous sulfate',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 953, boilingPoint: null,
    uses: 'The most common treatment for iron-deficiency anemia.',
    fact: 'Known as "green vitriol", it was used to make iron gall ink for a thousand years of manuscripts.'
  },
  {
    name: 'Iron(III) Chloride', slug: 'iron-iii-chloride', formula: 'FeCl₃', searchName: 'ferric chloride',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 580, boilingPoint: 589,
    uses: 'Used to etch copper circuit boards and treat sewage.',
    fact: 'Hobbyists use ferric chloride solution to etch custom printed circuit boards at home.'
  },
  {
    name: 'Lead(II) Nitrate', slug: 'lead-ii-nitrate', formula: 'Pb(NO₃)₂', searchName: 'lead nitrate',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 743, boilingPoint: null,
    uses: 'Laboratory source of lead ions for demonstrations.',
    fact: 'One of the few lead salts that dissolves readily in water.'
  },
  {
    name: 'Lead(II) Iodide', slug: 'lead-ii-iodide', formula: 'PbI₂', searchName: 'lead iodide',
    category: 'ionic salt', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 675, boilingPoint: 1145,
    uses: 'Used in modern perovskite solar cell research.',
    fact: 'Its brilliant golden crystals falling through solution create the famous "golden rain" demonstration.'
  },
  {
    name: 'Titanium Dioxide', slug: 'titanium-dioxide', formula: 'TiO₂', cid: 26042,
    category: 'binary compound', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'ionic', dipoleMoment: null, standardState: 'solid', meltingPoint: 2116, boilingPoint: 3245,
    uses: 'The world\'s most-used white pigment — in paint, paper, and sunscreen.',
    fact: 'Titanium dioxide makes white paint white, and once whitened toothpaste and powdered donuts too.'
  },

  // ============ Acids ============
  {
    name: 'Boric Acid', slug: 'boric-acid', formula: 'H₃BO₃',
    category: 'acid', geometry: 'trigonal-planar', hybridization: 'sp2', bondAngle: '120°',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 443.8, boilingPoint: null,
    uses: 'Mild antiseptic, insecticide, and eye-wash ingredient.',
    fact: 'Boric acid is used in nuclear power plants to control the rate of fission.'
  },
  {
    name: 'Formic Acid', slug: 'formic-acid', formula: 'HCOOH',
    category: 'acid', geometry: 'none', hybridization: 'sp2', bondAngle: '~120°',
    polarity: 'polar', dipoleMoment: 1.41, standardState: 'liquid', meltingPoint: 281.6, boilingPoint: 373.9,
    uses: 'Used in leather tanning and as a livestock feed preservative.',
    fact: 'Formic acid is the sting in ant bites — its name comes from formica, Latin for ant.'
  },
  {
    name: 'Oxalic Acid', slug: 'oxalic-acid', formula: 'C₂H₂O₄',
    category: 'acid', geometry: 'none', hybridization: 'sp2', bondAngle: '~120°',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 462.7, boilingPoint: null,
    uses: 'Rust remover and wood bleaching agent.',
    fact: 'Spinach and rhubarb leaves are rich in oxalic acid, which is why rhubarb leaves are toxic.'
  },
  {
    name: 'Citric Acid', slug: 'citric-acid', formula: 'C₆H₈O₇',
    category: 'acid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 429, boilingPoint: null,
    uses: 'Gives citrus fruits their sourness; a ubiquitous food additive (E330).',
    fact: 'Nearly all commercial citric acid is made by fermenting sugar with a mold, not from lemons.'
  },
  {
    name: 'Lactic Acid', slug: 'lactic-acid', formula: 'C₃H₆O₃',
    category: 'acid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 291, boilingPoint: 395,
    uses: 'Produced in muscles during exercise; ferments milk into yogurt.',
    fact: 'The sour taste of yogurt and sourdough comes from bacteria producing lactic acid.'
  },
  {
    name: 'Benzoic Acid', slug: 'benzoic-acid', formula: 'C₆H₅COOH',
    category: 'acid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 395.5, boilingPoint: 522.4,
    uses: 'Food preservative (E210) that stops mold and yeast growth.',
    fact: 'First isolated in the 16th century from gum benzoin, a fragrant tree resin.'
  },

  // ============ Hydrocarbons & organics ============
  {
    name: 'Pentane', slug: 'pentane', formula: 'C₅H₁₂',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'liquid', meltingPoint: 143.5, boilingPoint: 309.2,
    uses: 'Blowing agent for polystyrene foam and a laboratory solvent.',
    fact: 'Pentane boils at just 36 °C — warm hands can make it boil.'
  },
  {
    name: 'Hexane', slug: 'hexane', formula: 'C₆H₁₄',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'liquid', meltingPoint: 178, boilingPoint: 342,
    uses: 'Solvent used to extract vegetable oils from seeds.',
    fact: 'Most cooking oil is extracted from seeds using hexane, which is then evaporated away.'
  },
  {
    name: 'Octane', slug: 'octane', formula: 'C₈H₁₈',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'liquid', meltingPoint: 216.3, boilingPoint: 398.8,
    uses: 'A key component of gasoline.',
    fact: 'The "octane rating" at gas pumps is named after this molecule\'s branched isomer, isooctane.'
  },
  {
    name: 'Cyclohexane', slug: 'cyclohexane', formula: 'C₆H₁₂',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp3', bondAngle: '111°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'liquid', meltingPoint: 279.6, boilingPoint: 353.9,
    uses: 'Mostly converted into nylon precursors.',
    fact: 'Cyclohexane rings flip between "chair" and "boat" shapes billions of times per second.'
  },
  {
    name: 'Propene', slug: 'propene', formula: 'C₃H₆',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'none', bondAngle: '~120°',
    polarity: 'nonpolar', dipoleMoment: null, standardState: 'gas', meltingPoint: 87.9, boilingPoint: 225.5,
    uses: 'Polymerized into polypropylene for containers, ropes, and car parts.',
    fact: 'Propene is the second most produced building block of the plastics industry after ethene.'
  },
  {
    name: '1,3-Butadiene', slug: 'butadiene', formula: 'C₄H₆', searchName: '1,3-butadiene',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp2', bondAngle: '~120°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'gas', meltingPoint: 164.3, boilingPoint: 268.7,
    uses: 'Polymerized into synthetic rubber for car tires.',
    fact: 'Most of the world\'s car tires are built from butadiene-based synthetic rubber.'
  },
  {
    name: 'Toluene', slug: 'toluene', formula: 'C₇H₈',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'none', bondAngle: '120°',
    polarity: 'nonpolar', dipoleMoment: 0.36, standardState: 'liquid', meltingPoint: 178, boilingPoint: 383.8,
    uses: 'Solvent in paints, glues, and nail polish.',
    fact: 'Toluene is benzene\'s safer cousin — one methyl group makes it far less carcinogenic.'
  },
  {
    name: 'Naphthalene', slug: 'naphthalene', formula: 'C₁₀H₈',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp2', bondAngle: '120°',
    polarity: 'nonpolar', dipoleMoment: 0, standardState: 'solid', meltingPoint: 353.4, boilingPoint: 491,
    uses: 'The classic ingredient of mothballs.',
    fact: 'Naphthalene\'s two fused benzene rings sublime directly from solid to vapor — the source of mothball smell.'
  },
  {
    name: 'Phenol', slug: 'phenol', formula: 'C₆H₅OH',
    category: 'compound', geometry: 'none', hybridization: 'none', bondAngle: '120°',
    polarity: 'polar', dipoleMoment: 1.22, standardState: 'solid', meltingPoint: 314, boilingPoint: 455,
    uses: 'Precursor to plastics, aspirin, and disinfectants.',
    fact: 'Joseph Lister used phenol as the first surgical antiseptic in 1867, revolutionizing surgery.'
  },
  {
    name: 'Styrene', slug: 'styrene', formula: 'C₈H₈',
    category: 'hydrocarbon', geometry: 'none', hybridization: 'sp2', bondAngle: '120°',
    polarity: 'nonpolar', dipoleMoment: 0.13, standardState: 'liquid', meltingPoint: 242.5, boilingPoint: 418.3,
    uses: 'Polymerized into polystyrene for foam cups and packaging.',
    fact: 'Styrofoam is about 95% air trapped in a polystyrene web.'
  },
  {
    name: 'Isopropanol', slug: 'isopropanol', formula: 'C₃H₇OH', searchName: 'isopropyl alcohol',
    category: 'compound', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'polar', dipoleMoment: 1.66, standardState: 'liquid', meltingPoint: 184, boilingPoint: 355.8,
    uses: 'The main ingredient of rubbing alcohol and hand sanitizers.',
    fact: 'Isopropanol kills germs by dissolving their protective membranes in seconds.'
  },
  {
    name: 'Ethylene Glycol', slug: 'ethylene-glycol', formula: 'C₂H₆O₂',
    category: 'compound', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'polar', dipoleMoment: 2.36, standardState: 'liquid', meltingPoint: 260.2, boilingPoint: 470.4,
    uses: 'The main ingredient of automotive antifreeze.',
    fact: 'Its sweet taste makes antifreeze dangerously attractive to pets — bittering agents are now added.'
  },
  {
    name: 'Glycerol', slug: 'glycerol', formula: 'C₃H₈O₃',
    category: 'compound', geometry: 'none', hybridization: 'sp3', bondAngle: '109.5°',
    polarity: 'polar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 291.3, boilingPoint: 563,
    uses: 'Moisturizer in soaps and cosmetics; sweetener in foods.',
    fact: 'Glycerol forms the backbone of every fat molecule in your body.'
  },
  {
    name: 'Acetaldehyde', slug: 'acetaldehyde', formula: 'CH₃CHO',
    category: 'compound', geometry: 'none', hybridization: 'none', bondAngle: '~120°',
    polarity: 'polar', dipoleMoment: 2.75, standardState: 'gas', meltingPoint: 150, boilingPoint: 293.3,
    uses: 'Industrial intermediate for acetic acid and perfumes.',
    fact: 'Acetaldehyde is what your liver makes from alcohol — and the main cause of hangovers.'
  },
  {
    name: 'Ethyl Acetate', slug: 'ethyl-acetate', formula: 'CH₃COOC₂H₅',
    category: 'ester', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: 1.78, standardState: 'liquid', meltingPoint: 189.6, boilingPoint: 350.3,
    uses: 'Solvent in nail polish remover and decaffeinating coffee.',
    fact: 'The fruity smell of pears and some wines comes partly from ethyl acetate.'
  },
  {
    name: 'Diethyl Ether', slug: 'diethyl-ether', formula: 'C₄H₁₀O', searchName: 'diethyl ether',
    category: 'ether', geometry: 'none', hybridization: 'sp3', bondAngle: '110°',
    polarity: 'polar', dipoleMoment: 1.15, standardState: 'liquid', meltingPoint: 156.8, boilingPoint: 307.6,
    uses: 'Historic surgical anesthetic; laboratory solvent.',
    fact: 'The first public surgery under ether anesthesia in 1846 ended the era of surgery without pain relief.'
  },
  {
    name: 'Methylamine', slug: 'methylamine', formula: 'CH₃NH₂',
    category: 'amine', geometry: 'none', hybridization: 'sp3', bondAngle: '~107°',
    polarity: 'polar', dipoleMoment: 1.31, standardState: 'gas', meltingPoint: 179.9, boilingPoint: 266.8,
    uses: 'Building block for pharmaceuticals and pesticides.',
    fact: 'Methylamine is ammonia\'s simplest organic cousin and smells strongly of rotting fish.'
  },
  {
    name: 'Aniline', slug: 'aniline', formula: 'C₆H₅NH₂',
    category: 'amine', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: 1.53, standardState: 'liquid', meltingPoint: 267, boilingPoint: 457.3,
    uses: 'Parent compound of thousands of synthetic dyes.',
    fact: 'The accidental discovery of mauve dye from aniline in 1856 launched the entire synthetic chemical industry.'
  },
  {
    name: 'Vinyl Chloride', slug: 'vinyl-chloride', formula: 'C₂H₃Cl',
    category: 'compound', geometry: 'none', hybridization: 'sp2', bondAngle: '~120°',
    polarity: 'polar', dipoleMoment: 1.45, standardState: 'gas', meltingPoint: 119.4, boilingPoint: 259.8,
    uses: 'Polymerized into PVC for pipes, window frames, and flooring.',
    fact: 'PVC is the world\'s third most-produced plastic, all built from this small gas molecule.'
  },

  // ============ Famous & biological molecules ============
  {
    name: 'Aspirin', slug: 'aspirin', formula: 'C₉H₈O₄', cid: 2244,
    category: 'pharmaceutical', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 408, boilingPoint: null,
    uses: 'Pain reliever, fever reducer, and blood thinner.',
    fact: 'Aspirin\'s ancestor, willow bark, was prescribed for pain by Hippocrates 2,400 years ago.',
    isSpecial: true
  },
  {
    name: 'Paracetamol', slug: 'paracetamol', formula: 'C₈H₉NO₂', cid: 1983,
    category: 'pharmaceutical', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 442, boilingPoint: null,
    uses: 'One of the most widely used pain and fever medicines in the world.',
    fact: 'Known as acetaminophen in the US — the active ingredient of Tylenol and Crocin.'
  },
  {
    name: 'Ibuprofen', slug: 'ibuprofen', formula: 'C₁₃H₁₈O₂', cid: 3672,
    category: 'pharmaceutical', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 349, boilingPoint: null,
    uses: 'Anti-inflammatory painkiller for headaches, sprains, and arthritis.',
    fact: 'Ibuprofen exists as two mirror-image forms, but only one of them actually relieves pain.'
  },
  {
    name: 'Vitamin C', slug: 'vitamin-c', formula: 'C₆H₈O₆', searchName: 'ascorbic acid',
    category: 'vitamin', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 463, boilingPoint: null,
    uses: 'Essential nutrient for collagen production and immune function.',
    fact: 'Humans are among the few animals that cannot make their own vitamin C — hence scurvy on old sailing ships.',
    isSpecial: true
  },
  {
    name: 'Nicotine', slug: 'nicotine', formula: 'C₁₀H₁₄N₂', cid: 89594,
    category: 'alkaloid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 194, boilingPoint: 520,
    uses: 'The addictive stimulant in tobacco; also used as an insecticide.',
    fact: 'Tobacco plants make nicotine as a natural insecticide to poison insects that eat their leaves.'
  },
  {
    name: 'TNT', slug: 'tnt', formula: 'C₇H₅N₃O₆', searchName: '2,4,6-trinitrotoluene',
    category: 'explosive', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 353.5, boilingPoint: null,
    uses: 'Military explosive and the reference standard for explosive power.',
    fact: 'The energy of asteroid impacts and earthquakes is measured in "tons of TNT equivalent".',
    isSpecial: true
  },
  {
    name: 'Nitroglycerin', slug: 'nitroglycerin', formula: 'C₃H₅N₃O₉', cid: 4510,
    category: 'explosive', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 286.2, boilingPoint: null,
    uses: 'The explosive in dynamite — and a life-saving heart medication.',
    fact: 'Alfred Nobel tamed nitroglycerin into dynamite, and its fortune now funds the Nobel Prizes.',
    isSpecial: true
  },
  {
    name: 'Sucrose', slug: 'sucrose', formula: 'C₁₂H₂₂O₁₁', cid: 5988,
    category: 'carbohydrate', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 459, boilingPoint: null,
    uses: 'Common table sugar from sugarcane and sugar beets.',
    fact: 'Sucrose is one glucose and one fructose molecule joined together.'
  },
  {
    name: 'Fructose', slug: 'fructose', formula: 'C₆H₁₂O₆', cid: 2723872,
    category: 'carbohydrate', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 376, boilingPoint: null,
    uses: 'The natural sugar of fruits and honey.',
    fact: 'Fructose is the sweetest natural sugar — about 1.7 times sweeter than table sugar.'
  },
  {
    name: 'Cholesterol', slug: 'cholesterol', formula: 'C₂₇H₄₆O', cid: 5997,
    category: 'lipid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'nonpolar', dipoleMoment: null, standardState: 'solid', meltingPoint: 421.2, boilingPoint: 633,
    uses: 'Essential building block of cell membranes and hormones.',
    fact: 'Despite its bad reputation, your body makes about 1 gram of cholesterol every day because you need it.'
  },
  {
    name: 'Dopamine', slug: 'dopamine', formula: 'C₈H₁₁NO₂', cid: 681,
    category: 'neurotransmitter', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 401, boilingPoint: null,
    uses: 'Brain chemical central to motivation, reward, and movement.',
    fact: 'Every "like" notification triggers a small pulse of dopamine in your brain.',
    isSpecial: true
  },
  {
    name: 'Serotonin', slug: 'serotonin', formula: 'C₁₀H₁₂N₂O', cid: 5202,
    category: 'neurotransmitter', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 440.6, boilingPoint: null,
    uses: 'Neurotransmitter regulating mood, sleep, and appetite.',
    fact: 'About 90% of your body\'s serotonin is made in your gut, not your brain.'
  },
  {
    name: 'Adrenaline', slug: 'adrenaline', formula: 'C₉H₁₃NO₃', searchName: 'epinephrine',
    category: 'hormone', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 484.7, boilingPoint: null,
    uses: 'The fight-or-flight hormone; emergency treatment for severe allergies.',
    fact: 'An adrenaline surge can make people briefly stronger and faster — the science behind "hysterical strength".'
  },
  {
    name: 'Glycine', slug: 'glycine', formula: 'C₂H₅NO₂', cid: 750,
    category: 'amino acid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 506, boilingPoint: null,
    uses: 'The simplest amino acid, a building block of all proteins.',
    fact: 'Glycine has been detected in comets — amino acids exist in outer space.'
  },
  {
    name: 'Menthol', slug: 'menthol', formula: 'C₁₀H₂₀O', cid: 1254,
    category: 'terpenoid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 309.5, boilingPoint: 487.4,
    uses: 'Gives mint products their cooling sensation.',
    fact: 'Menthol doesn\'t lower temperature — it tricks the same nerve receptors that sense cold.'
  },
  {
    name: 'Vanillin', slug: 'vanillin', formula: 'C₈H₈O₃', cid: 1183,
    category: 'flavor compound', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 354.5, boilingPoint: 558,
    uses: 'The primary flavor compound of vanilla.',
    fact: 'Less than 1% of the world\'s vanillin comes from actual vanilla orchids — the rest is synthesized.'
  },
  {
    name: 'Capsaicin', slug: 'capsaicin', formula: 'C₁₈H₂₇NO₃', cid: 1548943,
    category: 'alkaloid', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 335, boilingPoint: 483,
    uses: 'The heat of chili peppers; used in pain-relief creams.',
    fact: 'Birds cannot feel capsaicin\'s burn — chilies evolved it to deter mammals but welcome seed-spreading birds.'
  },
  {
    name: 'Limonene', slug: 'limonene', formula: 'C₁₀H₁₆', cid: 22311,
    category: 'terpene', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'nonpolar', dipoleMoment: null, standardState: 'liquid', meltingPoint: 199, boilingPoint: 449.6,
    uses: 'Citrus-scented solvent in cleaners and cosmetics.',
    fact: 'The smell of orange peel is almost pure limonene.'
  },
  {
    name: 'Adenine', slug: 'adenine', formula: 'C₅H₅N₅', cid: 190,
    category: 'nucleobase', geometry: 'none', hybridization: 'none', bondAngle: 'N/A',
    polarity: 'polar', dipoleMoment: null, standardState: 'solid', meltingPoint: 633, boilingPoint: null,
    uses: 'The "A" of DNA\'s genetic code; part of ATP, the cell\'s energy currency.',
    fact: 'Adenine appears in both your DNA and ATP — it stores your genes and powers your muscles.',
    isSpecial: true
  }
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function withRetry<T>(fn: () => Promise<T>, label: string, attempts = 4): Promise<T | null> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      console.warn(`  retry ${i + 1}/${attempts} for ${label}: ${(err as Error).message}`);
      await sleep(1500 * (i + 1));
    }
  }
  return null;
}

async function generateAdditionalMolecules() {
  const existingIds = new Set(MOLECULES.map(m => m.id));
  const result: Molecule[] = [...MOLECULES];
  let added = 0;
  const failures: string[] = [];

  for (let i = 0; i < NEW_MOLECULES.length; i++) {
    const item = NEW_MOLECULES[i];
    if (existingIds.has(item.slug)) {
      console.log(`Skipping ${item.name} — already exists.`);
      continue;
    }
    console.log(`Processing ${item.name} (${i + 1}/${NEW_MOLECULES.length})...`);

    let cid = item.cid ?? null;
    if (!cid) {
      cid = await withRetry(() => searchCidByName(item.searchName || item.name), item.name);
      await sleep(120);
    }

    let structure: { atoms: any[]; bonds: any[] } = { atoms: [], bonds: [] };
    let props: any = {};

    if (cid) {
      props = (await withRetry(() => fetchProperties(cid!), `${item.name} props`)) || {};
      await sleep(120);
      structure = (await withRetry(() => fetch3DRecord(cid!), `${item.name} 3d`)) || { atoms: [], bonds: [] };
      if (!structure || structure.atoms.length === 0) {
        await sleep(120);
        structure = (await withRetry(() => fetch2DRecord(cid!), `${item.name} 2d`)) || { atoms: [], bonds: [] };
      }
      await sleep(120);
    } else {
      console.warn(`  ⚠️ CID not found for ${item.name}`);
      failures.push(item.name);
    }

    const formulaPlain = item.formula
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, m => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(m)])
      .replace(/[()]/g, '');

    result.push({
      id: item.slug,
      name: item.name,
      iupacName: props.IUPACName || item.name,
      formula: item.formula,
      hillFormula: props.MolecularFormula || formulaPlain,
      molarMass: parseFloat(props.MolecularWeight) || 0,
      category: item.category,
      bondType: item.polarity === 'ionic' ? 'ionic' : 'covalent',
      geometry: item.geometry,
      hybridization: item.hybridization,
      bondAngle: item.bondAngle,
      polarity: item.polarity,
      dipoleMoment: item.dipoleMoment,
      standardState: item.standardState,
      meltingPoint: item.meltingPoint,
      boilingPoint: item.boilingPoint,
      uses: item.uses,
      fact: item.fact,
      ...(item.isSpecial ? { isSpecial: true } : {}),
      atoms: structure.atoms,
      bonds: structure.bonds.map((b: any) => ({ ...b, type: 'covalent' as const })),
    });
    added++;
  }

  const outPath = path.resolve('src/data/molecules.ts');
  fs.writeFileSync(
    outPath,
    `import { Molecule } from '../types';\n\nexport const MOLECULES: Molecule[] = ${JSON.stringify(result, null, 2)};\n`
  );
  console.log(`\n✅ Added ${added} new molecules (total ${result.length}) to src/data/molecules.ts`);
  if (failures.length) {
    console.warn(`⚠️ No structure found for: ${failures.join(', ')}`);
  }
}

generateAdditionalMolecules().catch(console.error);
