import { Reaction } from '../types';

export const REACTIONS: Reaction[] = [
  {
    id: 'formation-of-water',
    name: 'Formation of Water',
    type: 'synthesis',
    reactants: [
      { formula: 'H₂', coefficient: 2, state: 'g', moleculeId: 'hydrogen' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: '2H₂ + O₂ → 2H₂O',
    enthalpy: -571.6, // kJ/mol for 2 moles, so approx -285.8 per mole of H2O
    isExothermic: true,
    conditions: 'spark / combustion',
    description: 'Hydrogen gas burns in the presence of oxygen to form liquid water, releasing a large amount of energy.',
    realWorldContext: 'This reaction is used in rocket propulsion systems, such as the Space Shuttle main engines.'
  },
  {
    id: 'combustion-of-methane',
    name: 'Combustion of Methane',
    type: 'combustion',
    reactants: [
      { formula: 'CH₄', coefficient: 1, state: 'g', moleculeId: 'methane' },
      { formula: 'O₂', coefficient: 2, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 2, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    enthalpy: -890.4,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Methane gas reacts with oxygen to produce carbon dioxide and water vapor.',
    realWorldContext: 'This is the primary reaction when burning natural gas for heating and cooking.'
  },
  {
    id: 'synthesis-of-nacl',
    name: 'Synthesis of Sodium Chloride',
    type: 'synthesis',
    reactants: [
      { formula: 'Na', coefficient: 2, state: 's' },
      { formula: 'Cl₂', coefficient: 1, state: 'g', moleculeId: 'chlorine' }
    ],
    products: [
      { formula: 'NaCl', coefficient: 2, state: 's', moleculeId: 'sodium-chloride' }
    ],
    balancedEquation: '2Na + Cl₂ → 2NaCl',
    enthalpy: -822.0, // For 2 moles
    isExothermic: true,
    conditions: 'room temp, highly reactive',
    description: 'Solid sodium metal reacts vigorously with chlorine gas to form solid sodium chloride.',
    realWorldContext: 'This highlights the violent nature of alkali metals and halogens forming stable ionic salts.'
  },
  {
    id: 'decomposition-of-calcium-carbonate',
    name: 'Decomposition of Calcium Carbonate',
    type: 'decomposition',
    reactants: [
      { formula: 'CaCO₃', coefficient: 1, state: 's', moleculeId: 'calcium-carbonate' }
    ],
    products: [
      { formula: 'CaO', coefficient: 1, state: 's', moleculeId: 'calcium-oxide' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: 'CaCO₃ → CaO + CO₂',
    enthalpy: 178.3,
    isExothermic: false,
    conditions: 'heating (>840 °C)',
    description: 'Calcium carbonate breaks down into calcium oxide (quicklime) and carbon dioxide gas when heated strongly.',
    realWorldContext: 'Crucial industrial process for manufacturing cement and treating acidic soils.'
  },
  {
    id: 'single-displacement-zn-hcl',
    name: 'Reaction of Zinc with Hydrochloric Acid',
    type: 'single-displacement',
    reactants: [
      { formula: 'Zn', coefficient: 1, state: 's' },
      { formula: 'HCl', coefficient: 2, state: 'aq', moleculeId: 'hydrogen-chloride' }
    ],
    products: [
      { formula: 'ZnCl₂', coefficient: 1, state: 'aq' },
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' }
    ],
    balancedEquation: 'Zn + 2HCl → ZnCl₂ + H₂',
    enthalpy: -153.0,
    isExothermic: true,
    conditions: 'room temp',
    description: 'Zinc metal displaces hydrogen from hydrochloric acid, bubbling off hydrogen gas.',
    realWorldContext: 'A common laboratory method for generating small amounts of hydrogen gas.'
  },
  {
    id: 'precipitation-agcl',
    name: 'Precipitation of Silver Chloride',
    type: 'precipitation',
    reactants: [
      { formula: 'AgNO₃', coefficient: 1, state: 'aq' },
      { formula: 'NaCl', coefficient: 1, state: 'aq', moleculeId: 'sodium-chloride' }
    ],
    products: [
      { formula: 'AgCl', coefficient: 1, state: 's' },
      { formula: 'NaNO₃', coefficient: 1, state: 'aq' }
    ],
    balancedEquation: 'AgNO₃ + NaCl → AgCl + NaNO₃',
    enthalpy: -65.5,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'Mixing aqueous solutions of silver nitrate and sodium chloride forms a white precipitate of silver chloride.',
    realWorldContext: 'Used in classic qualitative analysis to test for the presence of chloride ions.'
  },
  {
    id: 'neutralization-hcl-naoh',
    name: 'Neutralization of HCl and NaOH',
    type: 'acid-base',
    reactants: [
      { formula: 'HCl', coefficient: 1, state: 'aq', moleculeId: 'hydrogen-chloride' },
      { formula: 'NaOH', coefficient: 1, state: 'aq', moleculeId: 'sodium-hydroxide' }
    ],
    products: [
      { formula: 'NaCl', coefficient: 1, state: 'aq', moleculeId: 'sodium-chloride' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'HCl + NaOH → NaCl + H₂O',
    enthalpy: -57.7,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'A strong acid reacts with a strong base to produce a salt and water.',
    realWorldContext: 'The fundamental reaction behind antacids neutralizing stomach acid and industrial pH balancing.'
  },
  {
    id: 'decomposition-of-hydrogen-peroxide',
    name: 'Decomposition of Hydrogen Peroxide',
    type: 'decomposition',
    reactants: [
      { formula: 'H₂O₂', coefficient: 2, state: 'aq', moleculeId: 'hydrogen-peroxide' }
    ],
    products: [
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    balancedEquation: '2H₂O₂ → 2H₂O + O₂',
    enthalpy: -196.0,
    isExothermic: true,
    conditions: 'catalyst (e.g. MnO₂ or catalase)',
    description: 'Hydrogen peroxide naturally decomposes into water and oxygen gas, drastically sped up by catalysts.',
    realWorldContext: 'This is why peroxide bubbles when applied to a cut; blood contains the enzyme catalase.'
  },
  {
    id: 'formation-of-ozone',
    name: 'Formation of Ozone',
    type: 'synthesis',
    reactants: [
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'O₃', coefficient: 2, state: 'g', moleculeId: 'ozone' }
    ],
    balancedEquation: '3O₂ → 2O₃',
    enthalpy: 285.4,
    isExothermic: false,
    conditions: 'UV light or electrical discharge',
    description: 'Oxygen gas is converted to ozone through the absorption of high-energy UV radiation or an electric spark.',
    realWorldContext: 'Occurs in the stratosphere to form the ozone layer, protecting Earth from UV rays.'
  },
  {
    id: 'haber-process',
    name: 'Haber-Bosch Process',
    type: 'synthesis',
    reactants: [
      { formula: 'N₂', coefficient: 1, state: 'g', moleculeId: 'nitrogen' },
      { formula: 'H₂', coefficient: 3, state: 'g', moleculeId: 'hydrogen' }
    ],
    products: [
      { formula: 'NH₃', coefficient: 2, state: 'g', moleculeId: 'ammonia' }
    ],
    balancedEquation: 'N₂ + 3H₂ → 2NH₃',
    enthalpy: -92.4,
    isExothermic: true,
    conditions: '400-500 °C, 150-250 atm, iron catalyst',
    description: 'Nitrogen and hydrogen gases combine under high pressure and temperature to form ammonia.',
    realWorldContext: 'The most important industrial process for creating fertilizers, sustaining global agriculture.'
  },
  {
    id: 'photosynthesis',
    name: 'Photosynthesis',
    type: 'redox',
    reactants: [
      { formula: 'CO₂', coefficient: 6, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 6, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'C₆H₁₂O₆', coefficient: 1, state: 'aq', moleculeId: 'glucose' },
      { formula: 'O₂', coefficient: 6, state: 'g', moleculeId: 'oxygen' }
    ],
    balancedEquation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    enthalpy: 2803.0,
    isExothermic: false,
    conditions: 'sunlight, chlorophyll',
    description: 'Plants convert carbon dioxide and water into glucose and oxygen using energy from sunlight.',
    realWorldContext: 'The basis of almost all life on Earth, capturing solar energy into chemical bonds.'
  },
  {
    id: 'cellular-respiration',
    name: 'Cellular Respiration',
    type: 'combustion',
    reactants: [
      { formula: 'C₆H₁₂O₆', coefficient: 1, state: 'aq', moleculeId: 'glucose' },
      { formula: 'O₂', coefficient: 6, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 6, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 6, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
    enthalpy: -2803.0,
    isExothermic: true,
    conditions: 'enzymes in living cells',
    description: 'Glucose reacts with oxygen to release energy, carbon dioxide, and water.',
    realWorldContext: 'How animals and other organisms extract energy from food.'
  },
  {
    id: 'rusting-of-iron',
    name: 'Rusting of Iron',
    type: 'synthesis',
    reactants: [
      { formula: 'Fe', coefficient: 4, state: 's' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'Fe₂O₃', coefficient: 2, state: 's', moleculeId: 'iron-iii-oxide' }
    ],
    balancedEquation: '4Fe + 3O₂ → 2Fe₂O₃',
    enthalpy: -1648.4,
    isExothermic: true,
    conditions: 'presence of water and oxygen',
    description: 'Iron metal oxidizes in the presence of air and moisture to form iron(III) oxide (rust).',
    realWorldContext: 'Causes billions of dollars in structural damage to bridges, cars, and buildings annually.'
  },
  {
    id: 'combustion-of-propane',
    name: 'Combustion of Propane',
    type: 'combustion',
    reactants: [
      { formula: 'C₃H₈', coefficient: 1, state: 'g', moleculeId: 'propane' },
      { formula: 'O₂', coefficient: 5, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 3, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 4, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    enthalpy: -2219.2,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Propane burns completely in oxygen to produce carbon dioxide and water.',
    realWorldContext: 'Used commonly in BBQ grills and portable heating systems.'
  },
  {
    id: 'thermite-reaction',
    name: 'Thermite Reaction',
    type: 'single-displacement',
    reactants: [
      { formula: 'Fe₂O₃', coefficient: 1, state: 's', moleculeId: 'iron-iii-oxide' },
      { formula: 'Al', coefficient: 2, state: 's' }
    ],
    products: [
      { formula: 'Al₂O₃', coefficient: 1, state: 's' },
      { formula: 'Fe', coefficient: 2, state: 'l' }
    ],
    balancedEquation: 'Fe₂O₃ + 2Al → Al₂O₃ + 2Fe',
    enthalpy: -851.5,
    isExothermic: true,
    conditions: 'high temperature ignition (Mg ribbon)',
    description: 'Aluminum powder reduces iron(III) oxide to molten iron, releasing immense heat.',
    realWorldContext: 'Used for welding railway tracks directly in the field.'
  },
  {
    id: 'decomposition-of-water',
    name: 'Electrolysis of Water',
    type: 'decomposition',
    reactants: [
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'H₂', coefficient: 2, state: 'g', moleculeId: 'hydrogen' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    balancedEquation: '2H₂O → 2H₂ + O₂',
    enthalpy: 571.6,
    isExothermic: false,
    conditions: 'electrical current',
    description: 'Passing an electric current through water splits it into hydrogen and oxygen gases.',
    realWorldContext: 'A key method for generating green hydrogen for fuel cells.'
  },
  {
    id: 'combustion-of-ethanol',
    name: 'Combustion of Ethanol',
    type: 'combustion',
    reactants: [
      { formula: 'C₂H₅OH', coefficient: 1, state: 'l', moleculeId: 'ethanol' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 2, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 3, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
    enthalpy: -1366.8,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Ethanol burns cleanly to produce carbon dioxide and water.',
    realWorldContext: 'Ethanol is used as a biofuel additive in gasoline to reduce emissions.'
  },
  {
    id: 'formation-of-ammonia-nitrate',
    name: 'Formation of Ammonium Nitrate',
    type: 'acid-base',
    reactants: [
      { formula: 'NH₃', coefficient: 1, state: 'g', moleculeId: 'ammonia' },
      { formula: 'HNO₃', coefficient: 1, state: 'aq', moleculeId: 'nitric-acid' }
    ],
    products: [
      { formula: 'NH₄NO₃', coefficient: 1, state: 'aq' }
    ],
    balancedEquation: 'NH₃ + HNO₃ → NH₄NO₃',
    enthalpy: -146.0,
    isExothermic: true,
    conditions: 'room temp',
    description: 'Ammonia gas reacts with nitric acid to form ammonium nitrate.',
    realWorldContext: 'Produces one of the world\'s most common and effective agricultural fertilizers.'
  },
  {
    id: 'reaction-na-h2o',
    name: 'Sodium in Water',
    type: 'single-displacement',
    reactants: [
      { formula: 'Na', coefficient: 2, state: 's' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'NaOH', coefficient: 2, state: 'aq', moleculeId: 'sodium-hydroxide' },
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' }
    ],
    balancedEquation: '2Na + 2H₂O → 2NaOH + H₂',
    enthalpy: -368.4,
    isExothermic: true,
    conditions: 'room temp',
    description: 'Sodium metal reacts violently with water, melting into a sphere and propelling itself while releasing hydrogen.',
    realWorldContext: 'Demonstrates the extreme reactivity of group 1 alkali metals.'
  },
  {
    id: 'decomposition-of-potassium-chlorate',
    name: 'Decomposition of Potassium Chlorate',
    type: 'decomposition',
    reactants: [
      { formula: 'KClO₃', coefficient: 2, state: 's' }
    ],
    products: [
      { formula: 'KCl', coefficient: 2, state: 's', moleculeId: 'potassium-chloride' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    balancedEquation: '2KClO₃ → 2KCl + 3O₂',
    enthalpy: -89.4,
    isExothermic: true,
    conditions: 'heating with MnO₂ catalyst',
    description: 'When heated, potassium chlorate decomposes into potassium chloride and oxygen gas.',
    realWorldContext: 'A common laboratory method to generate pure oxygen gas.'
  },
  {
    id: 'contact-process-so3',
    name: 'Oxidation of Sulfur Dioxide',
    type: 'synthesis',
    reactants: [
      { formula: 'SO₂', coefficient: 2, state: 'g', moleculeId: 'sulfur-dioxide' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'SO₃', coefficient: 2, state: 'g', moleculeId: 'sulfur-trioxide' }
    ],
    balancedEquation: '2SO₂ + O₂ → 2SO₃',
    enthalpy: -198.4,
    isExothermic: true,
    conditions: 'V₂O₅ catalyst, 450 °C',
    description: 'Sulfur dioxide is oxidized to sulfur trioxide using a catalyst.',
    realWorldContext: 'The critical middle step in the Contact Process for making sulfuric acid.'
  },
  {
    id: 'synthesis-of-sulfuric-acid',
    name: 'Hydration of Sulfur Trioxide',
    type: 'synthesis',
    reactants: [
      { formula: 'SO₃', coefficient: 1, state: 'g', moleculeId: 'sulfur-trioxide' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'H₂SO₄', coefficient: 1, state: 'aq', moleculeId: 'sulfuric-acid' }
    ],
    balancedEquation: 'SO₃ + H₂O → H₂SO₄',
    enthalpy: -130.0,
    isExothermic: true,
    conditions: 'via oleum intermediate in industry',
    description: 'Sulfur trioxide reacts vigorously with water to form sulfuric acid.',
    realWorldContext: 'The final step in the industrial production of sulfuric acid, the most produced chemical in the world.'
  },
  {
    id: 'lead-nitrate-ki',
    name: 'Golden Rain Reaction',
    type: 'precipitation',
    reactants: [
      { formula: 'Pb(NO₃)₂', coefficient: 1, state: 'aq' },
      { formula: 'KI', coefficient: 2, state: 'aq' }
    ],
    products: [
      { formula: 'PbI₂', coefficient: 1, state: 's' },
      { formula: 'KNO₃', coefficient: 2, state: 'aq', moleculeId: 'potassium-nitrate' }
    ],
    balancedEquation: 'Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃',
    enthalpy: null,
    isExothermic: null,
    conditions: 'aqueous mixing',
    description: 'Mixing colorless solutions forms a brilliant yellow precipitate of lead(II) iodide.',
    realWorldContext: 'A visually striking reaction often used in chemistry demonstrations.'
  },
  {
    id: 'copper-nitric-acid',
    name: 'Copper and Nitric Acid',
    type: 'redox',
    reactants: [
      { formula: 'Cu', coefficient: 1, state: 's' },
      { formula: 'HNO₃', coefficient: 4, state: 'aq', moleculeId: 'nitric-acid' }
    ],
    products: [
      { formula: 'Cu(NO₃)₂', coefficient: 1, state: 'aq' },
      { formula: 'NO₂', coefficient: 2, state: 'g', moleculeId: 'nitrogen-dioxide' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O',
    enthalpy: null,
    isExothermic: true,
    conditions: 'concentrated acid',
    description: 'Copper dissolves in concentrated nitric acid, producing a toxic, brown nitrogen dioxide gas and a blue solution.',
    realWorldContext: 'An example of a metal reacting with an oxidizing acid rather than simply displacing hydrogen.'
  },
  {
    id: 'formation-of-carbonic-acid',
    name: 'Formation of Carbonic Acid',
    type: 'synthesis',
    reactants: [
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'H₂CO₃', coefficient: 1, state: 'aq', moleculeId: 'carbonic-acid' }
    ],
    balancedEquation: 'CO₂ + H₂O → H₂CO₃',
    enthalpy: null,
    isExothermic: true,
    conditions: 'dissolved under pressure',
    description: 'Carbon dioxide dissolves in water to form weak carbonic acid.',
    realWorldContext: 'This gives carbonated beverages their tangy taste and causes ocean acidification.'
  },
  {
    id: 'baking-soda-vinegar',
    name: 'Baking Soda and Vinegar',
    type: 'acid-base',
    reactants: [
      { formula: 'NaHCO₃', coefficient: 1, state: 's', moleculeId: 'sodium-bicarbonate' },
      { formula: 'CH₃COOH', coefficient: 1, state: 'aq', moleculeId: 'acetic-acid' }
    ],
    products: [
      { formula: 'CH₃COONa', coefficient: 1, state: 'aq' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂',
    enthalpy: null,
    isExothermic: false, // Actually endothermic
    conditions: 'room temp',
    description: 'Sodium bicarbonate reacts with acetic acid to release carbon dioxide gas.',
    realWorldContext: 'The classic volcano science fair experiment and a common household cleaning mixture.'
  },
  {
    id: 'combustion-of-magnesium',
    name: 'Combustion of Magnesium',
    type: 'combustion',
    reactants: [
      { formula: 'Mg', coefficient: 2, state: 's' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'MgO', coefficient: 2, state: 's', moleculeId: 'magnesium-oxide' }
    ],
    balancedEquation: '2Mg + O₂ → 2MgO',
    enthalpy: -1203.6,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Magnesium burns with a blinding white light to form magnesium oxide.',
    realWorldContext: 'Historically used in early photography flashbulbs and distress flares.'
  },
  {
    id: 'calcination-of-limestone',
    name: 'Calcination of Limestone',
    type: 'decomposition',
    reactants: [
      { formula: 'CaCO₃', coefficient: 1, state: 's', moleculeId: 'calcium-carbonate' }
    ],
    products: [
      { formula: 'CaO', coefficient: 1, state: 's', moleculeId: 'calcium-oxide' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: 'CaCO₃ → CaO + CO₂',
    enthalpy: 178.3,
    isExothermic: false,
    conditions: 'kiln firing',
    description: 'Thermal decomposition of limestone yields quicklime.',
    realWorldContext: 'Essential for making cement and mortar in the construction industry.'
  },
  {
    id: 'hydrogenation-of-ethene',
    name: 'Hydrogenation of Ethene',
    type: 'synthesis',
    reactants: [
      { formula: 'C₂H₄', coefficient: 1, state: 'g', moleculeId: 'ethene' },
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' }
    ],
    products: [
      { formula: 'C₂H₆', coefficient: 1, state: 'g', moleculeId: 'ethane' }
    ],
    balancedEquation: 'C₂H₄ + H₂ → C₂H₆',
    enthalpy: -137.0,
    isExothermic: true,
    conditions: 'Ni or Pt catalyst, 150 °C',
    description: 'Addition of hydrogen across the double bond of ethene forms ethane.',
    realWorldContext: 'The same process is used to turn liquid vegetable oils into solid margarine.'
  },
  {
    id: 'saponification-of-fat',
    name: 'Saponification (Simplified)',
    type: 'double-displacement',
    reactants: [
      { formula: 'C₃H₅(OOCCH₃)₃', coefficient: 1, state: 'l' }, // representing a triglyceride
      { formula: 'NaOH', coefficient: 3, state: 'aq', moleculeId: 'sodium-hydroxide' }
    ],
    products: [
      { formula: 'C₃H₅(OH)₃', coefficient: 1, state: 'aq' }, // glycerol
      { formula: 'CH₃COONa', coefficient: 3, state: 'aq' } // soap representation
    ],
    balancedEquation: 'C₃H₅(OOCCH₃)₃ + 3NaOH → C₃H₅(OH)₃ + 3CH₃COONa',
    enthalpy: null,
    isExothermic: true,
    conditions: 'heating',
    description: 'A fat or oil reacts with a strong base to produce glycerol and soap.',
    realWorldContext: 'The ancient and modern process for manufacturing soap.'
  },
  {
    id: 'combustion-of-butane',
    name: 'Combustion of Butane',
    type: 'combustion',
    reactants: [
      { formula: 'C₄H₁₀', coefficient: 2, state: 'g', moleculeId: 'butane' },
      { formula: 'O₂', coefficient: 13, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 8, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 10, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O',
    enthalpy: -5755.0,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Butane burns in oxygen to give carbon dioxide and water vapor.',
    realWorldContext: 'The flame of a pocket lighter is burning butane.'
  },
  {
    id: 'combustion-of-octane',
    name: 'Combustion of Octane',
    type: 'combustion',
    reactants: [
      { formula: 'C₈H₁₈', coefficient: 2, state: 'l', moleculeId: 'octane' },
      { formula: 'O₂', coefficient: 25, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 16, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 18, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O',
    enthalpy: -10940.0,
    isExothermic: true,
    conditions: 'spark ignition',
    description: 'Octane, a major component of gasoline, burns completely in oxygen.',
    realWorldContext: 'This reaction powers most of the world\'s car engines every day.'
  },
  {
    id: 'combustion-of-acetylene',
    name: 'Combustion of Acetylene',
    type: 'combustion',
    reactants: [
      { formula: 'C₂H₂', coefficient: 2, state: 'g', moleculeId: 'ethyne' },
      { formula: 'O₂', coefficient: 5, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 4, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂O', coefficient: 2, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O',
    enthalpy: -2511.0,
    isExothermic: true,
    conditions: 'ignition in pure oxygen',
    description: 'Acetylene burns in pure oxygen with an extremely hot flame around 3,150 °C.',
    realWorldContext: 'The oxy-acetylene torch cuts and welds steel in workshops worldwide.'
  },
  {
    id: 'combustion-of-sulfur',
    name: 'Combustion of Sulfur',
    type: 'combustion',
    reactants: [
      { formula: 'S₈', coefficient: 1, state: 's', moleculeId: 'octasulfur' },
      { formula: 'O₂', coefficient: 8, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'SO₂', coefficient: 8, state: 'g', moleculeId: 'sulfur-dioxide' }
    ],
    balancedEquation: 'S₈ + 8O₂ → 8SO₂',
    enthalpy: -2374.4,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Sulfur burns with a blue flame to give pungent sulfur dioxide gas.',
    realWorldContext: 'The first step of the Contact Process, and the source of volcanic smell.'
  },
  {
    id: 'neutralization-h2so4-koh',
    name: 'Neutralization of Sulfuric Acid',
    type: 'acid-base',
    reactants: [
      { formula: 'H₂SO₄', coefficient: 1, state: 'aq', moleculeId: 'sulfuric-acid' },
      { formula: 'KOH', coefficient: 2, state: 'aq', moleculeId: 'potassium-hydroxide' }
    ],
    products: [
      { formula: 'K₂SO₄', coefficient: 1, state: 'aq' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O',
    enthalpy: -114.0,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'A diprotic acid requires two moles of base for complete neutralization.',
    realWorldContext: 'Neutralization of battery acid spills uses exactly this chemistry.'
  },
  {
    id: 'neutralization-hno3-caoh2',
    name: 'Nitric Acid and Lime Water',
    type: 'acid-base',
    reactants: [
      { formula: 'HNO₃', coefficient: 2, state: 'aq', moleculeId: 'nitric-acid' },
      { formula: 'Ca(OH)₂', coefficient: 1, state: 'aq', moleculeId: 'calcium-hydroxide' }
    ],
    products: [
      { formula: 'Ca(NO₃)₂', coefficient: 1, state: 'aq' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: '2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O',
    enthalpy: -114.2,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'Nitric acid is neutralized by calcium hydroxide to form calcium nitrate.',
    realWorldContext: 'Farmers use lime to neutralize acidic soil caused by acid rain.'
  },
  {
    id: 'antacid-reaction',
    name: 'Antacid Neutralizing Stomach Acid',
    type: 'acid-base',
    reactants: [
      { formula: 'Mg(OH)₂', coefficient: 1, state: 's', moleculeId: 'magnesium-hydroxide' },
      { formula: 'HCl', coefficient: 2, state: 'aq', moleculeId: 'hydrogen-chloride' }
    ],
    products: [
      { formula: 'MgCl₂', coefficient: 1, state: 'aq', moleculeId: 'magnesium-chloride' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O',
    enthalpy: null,
    isExothermic: true,
    conditions: 'in the stomach',
    description: 'Milk of magnesia neutralizes excess hydrochloric acid in the stomach.',
    realWorldContext: 'This is exactly how antacid medicine relieves heartburn.'
  },
  {
    id: 'calcium-carbonate-hcl',
    name: 'Limestone and Acid',
    type: 'acid-base',
    reactants: [
      { formula: 'CaCO₃', coefficient: 1, state: 's', moleculeId: 'calcium-carbonate' },
      { formula: 'HCl', coefficient: 2, state: 'aq', moleculeId: 'hydrogen-chloride' }
    ],
    products: [
      { formula: 'CaCl₂', coefficient: 1, state: 'aq', moleculeId: 'calcium-chloride' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂',
    enthalpy: -15.2,
    isExothermic: true,
    conditions: 'room temp',
    description: 'Limestone fizzes in acid, releasing carbon dioxide gas.',
    realWorldContext: 'Geologists identify limestone in the field by the fizz test with dilute acid, and acid rain erodes marble statues this way.'
  },
  {
    id: 'slaking-of-lime',
    name: 'Slaking of Lime',
    type: 'synthesis',
    reactants: [
      { formula: 'CaO', coefficient: 1, state: 's', moleculeId: 'calcium-oxide' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    products: [
      { formula: 'Ca(OH)₂', coefficient: 1, state: 's', moleculeId: 'calcium-hydroxide' }
    ],
    balancedEquation: 'CaO + H₂O → Ca(OH)₂',
    enthalpy: -65.2,
    isExothermic: true,
    conditions: 'adding water to quicklime',
    description: 'Quicklime reacts vigorously with water, releasing enough heat to boil it.',
    realWorldContext: 'This heat has been used for self-heating food cans and was key to traditional mortar making.'
  },
  {
    id: 'limewater-test',
    name: 'Limewater Test for CO₂',
    type: 'precipitation',
    reactants: [
      { formula: 'Ca(OH)₂', coefficient: 1, state: 'aq', moleculeId: 'calcium-hydroxide' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    products: [
      { formula: 'CaCO₃', coefficient: 1, state: 's', moleculeId: 'calcium-carbonate' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O',
    enthalpy: -113.0,
    isExothermic: true,
    conditions: 'bubbling gas through solution',
    description: 'Carbon dioxide turns clear limewater milky by forming insoluble calcium carbonate.',
    realWorldContext: 'The classic school laboratory test to prove a gas is carbon dioxide.'
  },
  {
    id: 'decomposition-baking-soda',
    name: 'Thermal Decomposition of Baking Soda',
    type: 'decomposition',
    reactants: [
      { formula: 'NaHCO₃', coefficient: 2, state: 's', moleculeId: 'sodium-bicarbonate' }
    ],
    products: [
      { formula: 'Na₂CO₃', coefficient: 1, state: 's', moleculeId: 'sodium-carbonate' },
      { formula: 'H₂O', coefficient: 1, state: 'g', moleculeId: 'water' },
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: '2NaHCO₃ → Na₂CO₃ + H₂O + CO₂',
    enthalpy: 129.0,
    isExothermic: false,
    conditions: 'heating (>80 °C)',
    description: 'Baking soda breaks down when heated, releasing carbon dioxide gas.',
    realWorldContext: 'This gas release makes cakes and cookies rise in the oven.'
  },
  {
    id: 'decomposition-ammonium-nitrate',
    name: 'Decomposition of Ammonium Nitrate',
    type: 'decomposition',
    reactants: [
      { formula: 'NH₄NO₃', coefficient: 1, state: 's', moleculeId: 'ammonium-nitrate' }
    ],
    products: [
      { formula: 'N₂O', coefficient: 1, state: 'g', moleculeId: 'nitrous-oxide' },
      { formula: 'H₂O', coefficient: 2, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: 'NH₄NO₃ → N₂O + 2H₂O',
    enthalpy: -36.0,
    isExothermic: true,
    conditions: 'gentle heating (200-260 °C)',
    description: 'Careful heating of ammonium nitrate produces nitrous oxide (laughing gas).',
    realWorldContext: 'The traditional industrial method for producing medical nitrous oxide.'
  },
  {
    id: 'displacement-cu-agno3',
    name: 'Copper Displacing Silver',
    type: 'single-displacement',
    reactants: [
      { formula: 'Cu', coefficient: 1, state: 's' },
      { formula: 'AgNO₃', coefficient: 2, state: 'aq', moleculeId: 'silver-nitrate' }
    ],
    products: [
      { formula: 'Cu(NO₃)₂', coefficient: 1, state: 'aq' },
      { formula: 'Ag', coefficient: 2, state: 's' }
    ],
    balancedEquation: 'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag',
    enthalpy: null,
    isExothermic: true,
    conditions: 'room temp',
    description: 'A copper wire in silver nitrate solution grows glittering silver crystals as the solution turns blue.',
    realWorldContext: 'A beautiful demonstration of the metal activity series — copper is more reactive than silver.'
  },
  {
    id: 'displacement-fe-cuso4',
    name: 'Iron Displacing Copper',
    type: 'single-displacement',
    reactants: [
      { formula: 'Fe', coefficient: 1, state: 's' },
      { formula: 'CuSO₄', coefficient: 1, state: 'aq', moleculeId: 'copper-ii-sulfate' }
    ],
    products: [
      { formula: 'FeSO₄', coefficient: 1, state: 'aq', moleculeId: 'iron-ii-sulfate' },
      { formula: 'Cu', coefficient: 1, state: 's' }
    ],
    balancedEquation: 'Fe + CuSO₄ → FeSO₄ + Cu',
    enthalpy: -153.9,
    isExothermic: true,
    conditions: 'room temp',
    description: 'An iron nail dipped in blue copper sulfate solution becomes coated with reddish copper.',
    realWorldContext: 'A classic school experiment showing iron is more reactive than copper.'
  },
  {
    id: 'displacement-zn-cuso4',
    name: 'Zinc Displacing Copper',
    type: 'single-displacement',
    reactants: [
      { formula: 'Zn', coefficient: 1, state: 's' },
      { formula: 'CuSO₄', coefficient: 1, state: 'aq', moleculeId: 'copper-ii-sulfate' }
    ],
    products: [
      { formula: 'ZnSO₄', coefficient: 1, state: 'aq', moleculeId: 'zinc-sulfate' },
      { formula: 'Cu', coefficient: 1, state: 's' }
    ],
    balancedEquation: 'Zn + CuSO₄ → ZnSO₄ + Cu',
    enthalpy: -217.0,
    isExothermic: true,
    conditions: 'room temp',
    description: 'Zinc metal displaces copper from solution, fading the blue color.',
    realWorldContext: 'The same electron transfer drives the Daniell cell, one of the first practical batteries.'
  },
  {
    id: 'displacement-cl2-ki',
    name: 'Chlorine Displacing Iodine',
    type: 'single-displacement',
    reactants: [
      { formula: 'Cl₂', coefficient: 1, state: 'g', moleculeId: 'chlorine' },
      { formula: 'KI', coefficient: 2, state: 'aq', moleculeId: 'potassium-iodide' }
    ],
    products: [
      { formula: 'KCl', coefficient: 2, state: 'aq', moleculeId: 'potassium-chloride' },
      { formula: 'I₂', coefficient: 1, state: 's', moleculeId: 'iodine' }
    ],
    balancedEquation: 'Cl₂ + 2KI → 2KCl + I₂',
    enthalpy: null,
    isExothermic: true,
    conditions: 'aqueous, room temp',
    description: 'More reactive chlorine kicks iodine out of its salt, turning the solution brown.',
    realWorldContext: 'Demonstrates the reactivity order of the halogens — F > Cl > Br > I.'
  },
  {
    id: 'precipitation-baso4',
    name: 'Precipitation of Barium Sulfate',
    type: 'precipitation',
    reactants: [
      { formula: 'BaCl₂', coefficient: 1, state: 'aq', moleculeId: 'barium-chloride' },
      { formula: 'Na₂SO₄', coefficient: 1, state: 'aq', moleculeId: 'sodium-sulfate' }
    ],
    products: [
      { formula: 'BaSO₄', coefficient: 1, state: 's', moleculeId: 'barium-sulfate' },
      { formula: 'NaCl', coefficient: 2, state: 'aq', moleculeId: 'sodium-chloride' }
    ],
    balancedEquation: 'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl',
    enthalpy: null,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'A dense white precipitate of barium sulfate forms instantly on mixing.',
    realWorldContext: 'The standard laboratory test for sulfate ions in solution.'
  },
  {
    id: 'copper-hydroxide-precipitate',
    name: 'Precipitation of Copper Hydroxide',
    type: 'double-displacement',
    reactants: [
      { formula: 'CuSO₄', coefficient: 1, state: 'aq', moleculeId: 'copper-ii-sulfate' },
      { formula: 'NaOH', coefficient: 2, state: 'aq', moleculeId: 'sodium-hydroxide' }
    ],
    products: [
      { formula: 'Cu(OH)₂', coefficient: 1, state: 's' },
      { formula: 'Na₂SO₄', coefficient: 1, state: 'aq', moleculeId: 'sodium-sulfate' }
    ],
    balancedEquation: 'CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄',
    enthalpy: null,
    isExothermic: true,
    conditions: 'aqueous mixing',
    description: 'A pale blue gelatinous precipitate of copper(II) hydroxide forms.',
    realWorldContext: 'Hydroxide precipitation like this is used to remove toxic metals from industrial wastewater.'
  },
  {
    id: 'ostwald-process',
    name: 'Ostwald Process (Step 1)',
    type: 'redox',
    reactants: [
      { formula: 'NH₃', coefficient: 4, state: 'g', moleculeId: 'ammonia' },
      { formula: 'O₂', coefficient: 5, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'NO', coefficient: 4, state: 'g', moleculeId: 'nitric-oxide' },
      { formula: 'H₂O', coefficient: 6, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: '4NH₃ + 5O₂ → 4NO + 6H₂O',
    enthalpy: -905.2,
    isExothermic: true,
    conditions: 'Pt-Rh catalyst, ~900 °C',
    description: 'Ammonia is catalytically oxidized to nitric oxide over a platinum gauze.',
    realWorldContext: 'The first step of industrial nitric acid production for fertilizers and explosives.'
  },
  {
    id: 'no-to-no2',
    name: 'Oxidation of Nitric Oxide',
    type: 'synthesis',
    reactants: [
      { formula: 'NO', coefficient: 2, state: 'g', moleculeId: 'nitric-oxide' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'NO₂', coefficient: 2, state: 'g', moleculeId: 'nitrogen-dioxide' }
    ],
    balancedEquation: '2NO + O₂ → 2NO₂',
    enthalpy: -114.1,
    isExothermic: true,
    conditions: 'spontaneous in air',
    description: 'Colorless nitric oxide reacts with oxygen to form brown nitrogen dioxide.',
    realWorldContext: 'This reaction turns car exhaust into the brown haze of urban smog.'
  },
  {
    id: 'water-gas-shift',
    name: 'Water-Gas Shift Reaction',
    type: 'redox',
    reactants: [
      { formula: 'CO', coefficient: 1, state: 'g', moleculeId: 'carbon-monoxide' },
      { formula: 'H₂O', coefficient: 1, state: 'g', moleculeId: 'water' }
    ],
    products: [
      { formula: 'CO₂', coefficient: 1, state: 'g', moleculeId: 'carbon-dioxide' },
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' }
    ],
    balancedEquation: 'CO + H₂O → CO₂ + H₂',
    enthalpy: -41.2,
    isExothermic: true,
    conditions: 'Fe or Cu catalyst, 200-450 °C',
    description: 'Carbon monoxide reacts with steam to produce hydrogen gas.',
    realWorldContext: 'A major industrial source of hydrogen for ammonia synthesis and fuel cells.'
  },
  {
    id: 'steam-reforming',
    name: 'Steam Reforming of Methane',
    type: 'redox',
    reactants: [
      { formula: 'CH₄', coefficient: 1, state: 'g', moleculeId: 'methane' },
      { formula: 'H₂O', coefficient: 1, state: 'g', moleculeId: 'water' }
    ],
    products: [
      { formula: 'CO', coefficient: 1, state: 'g', moleculeId: 'carbon-monoxide' },
      { formula: 'H₂', coefficient: 3, state: 'g', moleculeId: 'hydrogen' }
    ],
    balancedEquation: 'CH₄ + H₂O → CO + 3H₂',
    enthalpy: 206.0,
    isExothermic: false,
    conditions: 'Ni catalyst, 700-1000 °C, high pressure',
    description: 'Methane reacts with high-temperature steam to produce synthesis gas.',
    realWorldContext: 'Produces about 95% of the world\'s hydrogen supply today.'
  },
  {
    id: 'fermentation-of-glucose',
    name: 'Fermentation of Glucose',
    type: 'decomposition',
    reactants: [
      { formula: 'C₆H₁₂O₆', coefficient: 1, state: 'aq', moleculeId: 'glucose' }
    ],
    products: [
      { formula: 'C₂H₅OH', coefficient: 2, state: 'l', moleculeId: 'ethanol' },
      { formula: 'CO₂', coefficient: 2, state: 'g', moleculeId: 'carbon-dioxide' }
    ],
    balancedEquation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
    enthalpy: -68.0,
    isExothermic: true,
    conditions: 'yeast enzymes, anaerobic, 25-35 °C',
    description: 'Yeast converts glucose into ethanol and carbon dioxide without oxygen.',
    realWorldContext: 'The reaction behind beer, wine, bread rising, and biofuel production for thousands of years.'
  },
  {
    id: 'esterification',
    name: 'Esterification (Fischer)',
    type: 'double-displacement',
    reactants: [
      { formula: 'CH₃COOH', coefficient: 1, state: 'l', moleculeId: 'acetic-acid' },
      { formula: 'C₂H₅OH', coefficient: 1, state: 'l', moleculeId: 'ethanol' }
    ],
    products: [
      { formula: 'CH₃COOC₂H₅', coefficient: 1, state: 'l', moleculeId: 'ethyl-acetate' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O',
    enthalpy: null,
    isExothermic: null,
    conditions: 'concentrated H₂SO₄ catalyst, reflux',
    description: 'A carboxylic acid and an alcohol combine to form a sweet-smelling ester.',
    realWorldContext: 'Esters made this way give fruits, perfumes, and candies their smells.'
  },
  {
    id: 'oxidation-of-ethanol',
    name: 'Oxidation of Ethanol',
    type: 'redox',
    reactants: [
      { formula: 'C₂H₅OH', coefficient: 1, state: 'l', moleculeId: 'ethanol' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'CH₃COOH', coefficient: 1, state: 'l', moleculeId: 'acetic-acid' },
      { formula: 'H₂O', coefficient: 1, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: 'C₂H₅OH + O₂ → CH₃COOH + H₂O',
    enthalpy: -493.0,
    isExothermic: true,
    conditions: 'acetobacter bacteria, aerobic',
    description: 'Ethanol is oxidized to acetic acid by airborne bacteria.',
    realWorldContext: 'This is how wine turns to vinegar — and how all vinegar is made.'
  },
  {
    id: 'chlorination-of-methane',
    name: 'Chlorination of Methane',
    type: 'single-displacement',
    reactants: [
      { formula: 'CH₄', coefficient: 1, state: 'g', moleculeId: 'methane' },
      { formula: 'Cl₂', coefficient: 1, state: 'g', moleculeId: 'chlorine' }
    ],
    products: [
      { formula: 'CH₃Cl', coefficient: 1, state: 'g' },
      { formula: 'HCl', coefficient: 1, state: 'g', moleculeId: 'hydrogen-chloride' }
    ],
    balancedEquation: 'CH₄ + Cl₂ → CH₃Cl + HCl',
    enthalpy: -99.6,
    isExothermic: true,
    conditions: 'UV light',
    description: 'UV light triggers a free-radical substitution replacing hydrogen with chlorine.',
    realWorldContext: 'A textbook example of free-radical substitution, the first mechanism most students learn.'
  },
  {
    id: 'synthesis-of-hcl',
    name: 'Synthesis of Hydrogen Chloride',
    type: 'synthesis',
    reactants: [
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' },
      { formula: 'Cl₂', coefficient: 1, state: 'g', moleculeId: 'chlorine' }
    ],
    products: [
      { formula: 'HCl', coefficient: 2, state: 'g', moleculeId: 'hydrogen-chloride' }
    ],
    balancedEquation: 'H₂ + Cl₂ → 2HCl',
    enthalpy: -184.6,
    isExothermic: true,
    conditions: 'light or spark (explosive)',
    description: 'Hydrogen and chlorine combine explosively when exposed to light.',
    realWorldContext: 'The industrial route to high-purity hydrochloric acid.'
  },
  {
    id: 'synthesis-of-ammonium-chloride',
    name: 'White Smoke Reaction',
    type: 'synthesis',
    reactants: [
      { formula: 'NH₃', coefficient: 1, state: 'g', moleculeId: 'ammonia' },
      { formula: 'HCl', coefficient: 1, state: 'g', moleculeId: 'hydrogen-chloride' }
    ],
    products: [
      { formula: 'NH₄Cl', coefficient: 1, state: 's', moleculeId: 'ammonium-chloride' }
    ],
    balancedEquation: 'NH₃ + HCl → NH₄Cl',
    enthalpy: -176.0,
    isExothermic: true,
    conditions: 'gases meeting in air',
    description: 'Two invisible gases meet and form a dense white smoke of ammonium chloride.',
    realWorldContext: 'A striking demonstration of gas diffusion — the smoke ring forms closer to the heavier HCl bottle.'
  },
  {
    id: 'aluminum-oxide-formation',
    name: 'Oxidation of Aluminum',
    type: 'synthesis',
    reactants: [
      { formula: 'Al', coefficient: 4, state: 's' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'Al₂O₃', coefficient: 2, state: 's', moleculeId: 'aluminum-oxide' }
    ],
    balancedEquation: '4Al + 3O₂ → 2Al₂O₃',
    enthalpy: -3351.4,
    isExothermic: true,
    conditions: 'spontaneous surface reaction',
    description: 'Aluminum instantly forms a thin, tough oxide layer in air.',
    realWorldContext: 'This invisible oxide skin is why aluminum never rusts away like iron does.'
  },
  {
    id: 'burning-of-hydrogen-sulfide',
    name: 'Combustion of Hydrogen Sulfide',
    type: 'combustion',
    reactants: [
      { formula: 'H₂S', coefficient: 2, state: 'g', moleculeId: 'hydrogen-sulfide' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'SO₂', coefficient: 2, state: 'g', moleculeId: 'sulfur-dioxide' },
      { formula: 'H₂O', coefficient: 2, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: '2H₂S + 3O₂ → 2SO₂ + 2H₂O',
    enthalpy: -1124.0,
    isExothermic: true,
    conditions: 'ignition',
    description: 'Toxic hydrogen sulfide burns with a blue flame to sulfur dioxide and water.',
    realWorldContext: 'Gas refineries flare hydrogen sulfide this way to prevent toxic releases.'
  },
  {
    id: 'sodium-bromine-synthesis',
    name: 'Sodium and Bromine',
    type: 'synthesis',
    reactants: [
      { formula: 'Na', coefficient: 2, state: 's' },
      { formula: 'Br₂', coefficient: 1, state: 'l', moleculeId: 'bromine' }
    ],
    products: [
      { formula: 'NaBr', coefficient: 2, state: 's' }
    ],
    balancedEquation: '2Na + Br₂ → 2NaBr',
    enthalpy: -722.4,
    isExothermic: true,
    conditions: 'room temp, vigorous',
    description: 'Sodium metal reacts vigorously with liquid bromine to form sodium bromide.',
    realWorldContext: 'Sodium bromide was once widely used as a sedative and is still used in photography.'
  },
  {
    id: 'nitrogen-fixation-lightning',
    name: 'Nitrogen Fixation by Lightning',
    type: 'synthesis',
    reactants: [
      { formula: 'N₂', coefficient: 1, state: 'g', moleculeId: 'nitrogen' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'NO', coefficient: 2, state: 'g', moleculeId: 'nitric-oxide' }
    ],
    balancedEquation: 'N₂ + O₂ → 2NO',
    enthalpy: 180.5,
    isExothermic: false,
    conditions: 'lightning / >2000 °C',
    description: 'The extreme heat of lightning forces inert nitrogen to react with oxygen.',
    realWorldContext: 'Lightning naturally fertilizes the soil, fixing millions of tonnes of nitrogen each year.'
  },
  {
    id: 'roasting-zinc-sulfide',
    name: 'Roasting of Zinc Sulfide',
    type: 'redox',
    reactants: [
      { formula: 'ZnS', coefficient: 2, state: 's' },
      { formula: 'O₂', coefficient: 3, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'ZnO', coefficient: 2, state: 's', moleculeId: 'zinc-oxide' },
      { formula: 'SO₂', coefficient: 2, state: 'g', moleculeId: 'sulfur-dioxide' }
    ],
    balancedEquation: '2ZnS + 3O₂ → 2ZnO + 2SO₂',
    enthalpy: -878.2,
    isExothermic: true,
    conditions: 'roasting in air, ~1000 °C',
    description: 'Zinc sulfide ore is roasted in air to form zinc oxide.',
    realWorldContext: 'The first step in extracting zinc metal from its most common ore, sphalerite.'
  },
  {
    id: 'reduction-of-copper-oxide',
    name: 'Reduction of Copper Oxide',
    type: 'redox',
    reactants: [
      { formula: 'CuO', coefficient: 1, state: 's', moleculeId: 'copper-ii-oxide' },
      { formula: 'H₂', coefficient: 1, state: 'g', moleculeId: 'hydrogen' }
    ],
    products: [
      { formula: 'Cu', coefficient: 1, state: 's' },
      { formula: 'H₂O', coefficient: 1, state: 'g', moleculeId: 'water' }
    ],
    balancedEquation: 'CuO + H₂ → Cu + H₂O',
    enthalpy: -128.5,
    isExothermic: true,
    conditions: 'heating in hydrogen stream',
    description: 'Hydrogen strips oxygen from black copper oxide, revealing shiny copper metal.',
    realWorldContext: 'A classic demonstration of reduction — the black powder visibly turns pink-orange.'
  },
  {
    id: 'silver-tarnishing',
    name: 'Tarnishing of Silver',
    type: 'redox',
    reactants: [
      { formula: 'Ag', coefficient: 4, state: 's' },
      { formula: 'H₂S', coefficient: 2, state: 'g', moleculeId: 'hydrogen-sulfide' },
      { formula: 'O₂', coefficient: 1, state: 'g', moleculeId: 'oxygen' }
    ],
    products: [
      { formula: 'Ag₂S', coefficient: 2, state: 's' },
      { formula: 'H₂O', coefficient: 2, state: 'l', moleculeId: 'water' }
    ],
    balancedEquation: '4Ag + 2H₂S + O₂ → 2Ag₂S + 2H₂O',
    enthalpy: null,
    isExothermic: true,
    conditions: 'trace H₂S in air, slow',
    description: 'Silver reacts with trace hydrogen sulfide in air to form black silver sulfide.',
    realWorldContext: 'Why silverware tarnishes black — eggs and onions speed it up because they release H₂S.'
  },
  {
    id: 'decomposition-silver-chloride',
    name: 'Photodecomposition of Silver Chloride',
    type: 'decomposition',
    reactants: [
      { formula: 'AgCl', coefficient: 2, state: 's', moleculeId: 'silver-chloride' }
    ],
    products: [
      { formula: 'Ag', coefficient: 2, state: 's' },
      { formula: 'Cl₂', coefficient: 1, state: 'g', moleculeId: 'chlorine' }
    ],
    balancedEquation: '2AgCl → 2Ag + Cl₂',
    enthalpy: 254.0,
    isExothermic: false,
    conditions: 'sunlight',
    description: 'Light splits silver chloride into dark metallic silver and chlorine.',
    realWorldContext: 'The light-sensitive chemistry that made photographic film possible.'
  }
];
