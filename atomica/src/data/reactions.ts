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
  }
];
