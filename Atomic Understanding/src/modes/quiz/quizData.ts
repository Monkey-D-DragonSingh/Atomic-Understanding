export type QuizCategory = 'elements' | 'reactions' | 'compounds' | 'mixed';
export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [

  // ══════════════════════════════════════════════════════
  // ELEMENTS — EASY
  // ══════════════════════════════════════════════════════
  { id: 'el-e-001', category: 'elements', difficulty: 'easy',
    question: 'What is the chemical symbol for Gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'], correctIndex: 2,
    explanation: '"Au" comes from the Latin word "Aurum", meaning gold.' },

  { id: 'el-e-002', category: 'elements', difficulty: 'easy',
    question: 'How many protons does Carbon have?',
    options: ['4', '6', '8', '12'], correctIndex: 1,
    explanation: 'Carbon has atomic number 6, meaning 6 protons in its nucleus.' },

  { id: 'el-e-003', category: 'elements', difficulty: 'easy',
    question: 'Which element is the most abundant in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'], correctIndex: 2,
    explanation: 'Nitrogen (N₂) makes up about 78% of Earth\'s atmosphere.' },

  { id: 'el-e-004', category: 'elements', difficulty: 'easy',
    question: 'What is the symbol for Sodium?',
    options: ['So', 'Sd', 'Sa', 'Na'], correctIndex: 3,
    explanation: '"Na" comes from the Latin "Natrium".' },

  { id: 'el-e-005', category: 'elements', difficulty: 'easy',
    question: 'Which element has atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'], correctIndex: 1,
    explanation: 'Hydrogen is the lightest element with just one proton.' },

  { id: 'el-e-006', category: 'elements', difficulty: 'easy',
    question: 'What is the symbol for Iron?',
    options: ['Ir', 'In', 'Fe', 'Fr'], correctIndex: 2,
    explanation: '"Fe" comes from the Latin word "Ferrum".' },

  { id: 'el-e-007', category: 'elements', difficulty: 'easy',
    question: 'Which element is known as the "King of Chemicals"?',
    options: ['Hydrochloric acid', 'Sulfuric acid', 'Nitric acid', 'Phosphoric acid'], correctIndex: 1,
    explanation: 'Sulfuric acid (H₂SO₄) is called the king of chemicals due to its wide industrial use.' },

  { id: 'el-e-008', category: 'elements', difficulty: 'easy',
    question: 'What is the atomic number of Oxygen?',
    options: ['6', '7', '8', '9'], correctIndex: 2,
    explanation: 'Oxygen has 8 protons, giving it atomic number 8.' },

  { id: 'el-e-009', category: 'elements', difficulty: 'easy',
    question: 'Which element has the symbol "K"?',
    options: ['Krypton', 'Potassium', 'Calcium', 'Cobalt'], correctIndex: 1,
    explanation: '"K" comes from the Latin "Kalium" for Potassium.' },

  { id: 'el-e-010', category: 'elements', difficulty: 'easy',
    question: 'How many elements are in the periodic table?',
    options: ['108', '112', '116', '118'], correctIndex: 3,
    explanation: 'There are 118 confirmed elements in the modern periodic table.' },

  { id: 'el-e-011', category: 'elements', difficulty: 'easy',
    question: 'Which element is a liquid at room temperature besides Bromine?',
    options: ['Mercury', 'Gallium', 'Cesium', 'Phosphorus'], correctIndex: 0,
    explanation: 'Mercury (Hg) is the only metal that is liquid at room temperature.' },

  { id: 'el-e-012', category: 'elements', difficulty: 'easy',
    question: 'What is the symbol for Silver?',
    options: ['Si', 'Sv', 'Ag', 'Sr'], correctIndex: 2,
    explanation: '"Ag" comes from the Latin "Argentum" meaning silver.' },

  { id: 'el-e-013', category: 'elements', difficulty: 'easy',
    question: 'Which element is used in pencils?',
    options: ['Lead', 'Carbon (Graphite)', 'Zinc', 'Tin'], correctIndex: 1,
    explanation: 'Pencil "lead" is actually graphite, a form of carbon.' },

  { id: 'el-e-014', category: 'elements', difficulty: 'easy',
    question: 'What color does Copper turn when it oxidizes?',
    options: ['Black', 'Red', 'Green', 'Blue'], correctIndex: 2,
    explanation: 'Copper forms a green patina (copper carbonate) when it oxidizes — like the Statue of Liberty.' },

  { id: 'el-e-015', category: 'elements', difficulty: 'easy',
    question: 'Which gas do plants absorb during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctIndex: 2,
    explanation: 'Plants absorb CO₂ and use sunlight to convert it into glucose and oxygen.' },

  // ══════════════════════════════════════════════════════
  // ELEMENTS — MEDIUM
  // ══════════════════════════════════════════════════════
  { id: 'el-m-001', category: 'elements', difficulty: 'medium',
    question: 'Which group of elements is known as the Noble Gases?',
    options: ['Group 1', 'Group 7', 'Group 17', 'Group 18'], correctIndex: 3,
    explanation: 'Noble gases are in Group 18 — they have full outer shells and are mostly unreactive.' },

  { id: 'el-m-002', category: 'elements', difficulty: 'medium',
    question: 'What is the electron configuration of Oxygen?',
    options: ['1s² 2s²', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶', '1s² 2s² 2p²'], correctIndex: 1,
    explanation: 'Oxygen (Z=8) has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p.' },

  { id: 'el-m-003', category: 'elements', difficulty: 'medium',
    question: 'Which period does Chlorine belong to?',
    options: ['Period 2', 'Period 3', 'Period 4', 'Period 5'], correctIndex: 1,
    explanation: 'Chlorine (Z=17) is in Period 3 with configuration [Ne] 3s² 3p⁵.' },

  { id: 'el-m-004', category: 'elements', difficulty: 'medium',
    question: 'What property increases across a period from left to right?',
    options: ['Atomic radius', 'Metallic character', 'Electronegativity', 'Reactivity with water'], correctIndex: 2,
    explanation: 'Electronegativity increases across a period as nuclear charge increases.' },

  { id: 'el-m-005', category: 'elements', difficulty: 'medium',
    question: 'Which element is the best conductor of electricity?',
    options: ['Copper', 'Gold', 'Silver', 'Aluminum'], correctIndex: 2,
    explanation: 'Silver has the highest electrical conductivity of all elements.' },

  { id: 'el-m-006', category: 'elements', difficulty: 'medium',
    question: 'How many valence electrons does Carbon have?',
    options: ['2', '4', '6', '8'], correctIndex: 1,
    explanation: 'Carbon has 4 valence electrons, allowing it to form 4 covalent bonds.' },

  { id: 'el-m-007', category: 'elements', difficulty: 'medium',
    question: 'Which element has the highest electronegativity?',
    options: ['Oxygen', 'Chlorine', 'Nitrogen', 'Fluorine'], correctIndex: 3,
    explanation: 'Fluorine has the highest electronegativity (3.98 on Pauling scale).' },

  { id: 'el-m-008', category: 'elements', difficulty: 'medium',
    question: 'What is the atomic mass of Carbon-12?',
    options: ['6 amu', '12 amu', '14 amu', '6.02 amu'], correctIndex: 1,
    explanation: 'Carbon-12 has exactly 12 atomic mass units — it is the standard reference for atomic mass.' },

  { id: 'el-m-009', category: 'elements', difficulty: 'medium',
    question: 'Which block does Iron belong to in the periodic table?',
    options: ['s-block', 'p-block', 'd-block', 'f-block'], correctIndex: 2,
    explanation: 'Iron is a transition metal in the d-block (Group 8, Period 4).' },

  { id: 'el-m-010', category: 'elements', difficulty: 'medium',
    question: 'What is the most electronegative element after Fluorine?',
    options: ['Chlorine', 'Nitrogen', 'Oxygen', 'Bromine'], correctIndex: 2,
    explanation: 'Oxygen is the second most electronegative element (3.44 on Pauling scale).' },

  { id: 'el-m-011', category: 'elements', difficulty: 'medium',
    question: 'Which element is the most abundant in the Earth\'s crust?',
    options: ['Silicon', 'Iron', 'Oxygen', 'Aluminum'], correctIndex: 2,
    explanation: 'Oxygen makes up about 46% of Earth\'s crust by mass.' },

  { id: 'el-m-012', category: 'elements', difficulty: 'medium',
    question: 'What is the atomic number of Uranium?',
    options: ['82', '88', '92', '96'], correctIndex: 2,
    explanation: 'Uranium has atomic number 92 — it is the heaviest naturally occurring element.' },

  { id: 'el-m-013', category: 'elements', difficulty: 'medium',
    question: 'Which element has the symbol "W"?',
    options: ['Wolfram (Tungsten)', 'Wanadium', 'Manganese', 'Bismuth'], correctIndex: 0,
    explanation: '"W" comes from the German name "Wolfram" for Tungsten.' },

  { id: 'el-m-014', category: 'elements', difficulty: 'medium',
    question: 'Alkali metals are found in which group?',
    options: ['Group 1', 'Group 2', 'Group 17', 'Group 18'], correctIndex: 0,
    explanation: 'Alkali metals (Li, Na, K, Rb, Cs, Fr) are in Group 1 and are highly reactive.' },

  { id: 'el-m-015', category: 'elements', difficulty: 'medium',
    question: 'What is the half-life of Carbon-14?',
    options: ['570 years', '5,730 years', '57,300 years', '573,000 years'], correctIndex: 1,
    explanation: 'Carbon-14 has a half-life of 5,730 years, making it useful for radiocarbon dating.' },

  // ══════════════════════════════════════════════════════
  // ELEMENTS — HARD
  // ══════════════════════════════════════════════════════
  { id: 'el-h-001', category: 'elements', difficulty: 'hard',
    question: 'Which element has the highest first ionization energy?',
    options: ['Fluorine', 'Neon', 'Helium', 'Oxygen'], correctIndex: 2,
    explanation: 'Helium has the highest first ionization energy (2372 kJ/mol) due to its small, full 1s² shell.' },

  { id: 'el-h-002', category: 'elements', difficulty: 'hard',
    question: 'What is the ground state electron configuration of Iron (Fe)?',
    options: ['[Ar] 3d⁶ 4s²', '[Ar] 3d⁵ 4s³', '[Ar] 3d⁸', '[Ar] 4s² 4p⁶'], correctIndex: 0,
    explanation: 'Iron (Z=26) has configuration [Ar] 3d⁶ 4s², consistent with Aufbau principle.' },

  { id: 'el-h-003', category: 'elements', difficulty: 'hard',
    question: 'Which element has an anomalous electron configuration of [Ar] 3d⁵ 4s¹?',
    options: ['Manganese', 'Chromium', 'Iron', 'Vanadium'], correctIndex: 1,
    explanation: 'Chromium adopts [Ar] 3d⁵ 4s¹ for extra stability from a half-filled d subshell.' },

  { id: 'el-h-004', category: 'elements', difficulty: 'hard',
    question: 'What is the electron affinity trend across Period 2?',
    options: ['Decreases left to right', 'Increases then decreases', 'Generally increases left to right', 'Stays constant'], correctIndex: 2,
    explanation: 'Electron affinity generally increases across a period as nuclear charge increases (with some exceptions).' },

  { id: 'el-h-005', category: 'elements', difficulty: 'hard',
    question: 'Which lanthanide element is used in strong permanent magnets?',
    options: ['Lanthanum', 'Cerium', 'Neodymium', 'Samarium'], correctIndex: 2,
    explanation: 'Neodymium (Nd) is used in NdFeB magnets — the strongest permanent magnets known.' },

  { id: 'el-h-006', category: 'elements', difficulty: 'hard',
    question: 'What is the oxidation state of Manganese in KMnO₄?',
    options: ['+3', '+5', '+7', '+6'], correctIndex: 2,
    explanation: 'In KMnO₄: K is +1, each O is -2. So Mn = +7 to balance the formula.' },

  { id: 'el-h-007', category: 'elements', difficulty: 'hard',
    question: 'Which element was the first to be produced artificially?',
    options: ['Plutonium', 'Technetium', 'Curium', 'Americium'], correctIndex: 1,
    explanation: 'Technetium (Tc, Z=43) was the first element to be artificially produced, in 1937.' },

  { id: 'el-h-008', category: 'elements', difficulty: 'hard',
    question: 'What is the Aufbau principle?',
    options: ['Electrons fill highest energy orbitals first', 'No two electrons have the same four quantum numbers', 'Electrons fill lowest energy orbitals first', 'Electrons remain unpaired when possible'], correctIndex: 2,
    explanation: 'Aufbau principle states electrons fill orbitals from lowest to highest energy.' },

  // ══════════════════════════════════════════════════════
  // REACTIONS — EASY
  // ══════════════════════════════════════════════════════
  { id: 're-e-001', category: 'reactions', difficulty: 'easy',
    question: 'What type of reaction releases energy to the surroundings?',
    options: ['Endothermic', 'Exothermic', 'Neutralization', 'Decomposition'], correctIndex: 1,
    explanation: 'Exothermic reactions release heat to surroundings, like combustion.' },

  { id: 're-e-002', category: 'reactions', difficulty: 'easy',
    question: 'What are the products of burning methane (CH₄) in excess oxygen?',
    options: ['CO + H₂', 'CO₂ + H₂O', 'C + H₂O', 'CO₂ + H₂'], correctIndex: 1,
    explanation: 'Complete combustion: CH₄ + 2O₂ → CO₂ + 2H₂O' },

  { id: 're-e-003', category: 'reactions', difficulty: 'easy',
    question: 'In a synthesis reaction, reactants combine to form:',
    options: ['Two products', 'A single product', 'An ion', 'A gas always'], correctIndex: 1,
    explanation: 'Synthesis: A + B → AB, producing one product.' },

  { id: 're-e-004', category: 'reactions', difficulty: 'easy',
    question: 'What is produced when an acid reacts with a base?',
    options: ['Only water', 'Only salt', 'Salt and water', 'Gas and water'], correctIndex: 2,
    explanation: 'Acid + Base → Salt + Water. This is called a neutralization reaction.' },

  { id: 're-e-005', category: 'reactions', difficulty: 'easy',
    question: 'Which of these is a sign that a chemical reaction has occurred?',
    options: ['Change in shape', 'Change in size', 'Production of gas bubbles', 'Change in location'], correctIndex: 2,
    explanation: 'Signs of a chemical reaction include gas production, color change, temperature change, or precipitate formation.' },

  { id: 're-e-006', category: 'reactions', difficulty: 'easy',
    question: 'What does the arrow (→) mean in a chemical equation?',
    options: ['Is equal to', 'Yields or produces', 'Is less than', 'Reacts slowly'], correctIndex: 1,
    explanation: 'The arrow in a chemical equation means "yields" or "produces".' },

  { id: 're-e-007', category: 'reactions', difficulty: 'easy',
    question: 'What is the law of conservation of mass?',
    options: ['Mass can be created in reactions', 'Mass is destroyed in reactions', 'Mass of reactants equals mass of products', 'Mass doubles in every reaction'], correctIndex: 2,
    explanation: 'In a chemical reaction, matter is neither created nor destroyed — total mass is conserved.' },

  { id: 're-e-008', category: 'reactions', difficulty: 'easy',
    question: 'What type of reaction is rusting of iron?',
    options: ['Decomposition', 'Combustion', 'Oxidation', 'Neutralization'], correctIndex: 2,
    explanation: 'Rusting is oxidation: Fe reacts with O₂ and water to form Fe₂O₃ (iron oxide).' },

  { id: 're-e-009', category: 'reactions', difficulty: 'easy',
    question: 'Which gas is produced when zinc reacts with hydrochloric acid?',
    options: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Chlorine'], correctIndex: 2,
    explanation: 'Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is produced.' },

  { id: 're-e-010', category: 'reactions', difficulty: 'easy',
    question: 'What is combustion?',
    options: ['Dissolving in water', 'Rapid reaction with oxygen releasing heat and light', 'Slow decomposition', 'Mixing two liquids'], correctIndex: 1,
    explanation: 'Combustion is a rapid exothermic reaction with oxygen that produces heat and light.' },

  // ══════════════════════════════════════════════════════
  // REACTIONS — MEDIUM
  // ══════════════════════════════════════════════════════
  { id: 're-m-001', category: 'reactions', difficulty: 'medium',
    question: 'What is the enthalpy change sign for an endothermic reaction?',
    options: ['ΔH < 0', 'ΔH = 0', 'ΔH > 0', 'ΔH = ∞'], correctIndex: 2,
    explanation: 'Endothermic reactions absorb heat, so ΔH is positive.' },

  { id: 're-m-002', category: 'reactions', difficulty: 'medium',
    question: 'Which reaction type involves an element replacing another in a compound?',
    options: ['Synthesis', 'Decomposition', 'Single displacement', 'Double displacement'], correctIndex: 2,
    explanation: 'Single displacement: A + BC → AC + B. E.g., Zn + 2HCl → ZnCl₂ + H₂' },

  { id: 're-m-003', category: 'reactions', difficulty: 'medium',
    question: 'What does a catalyst do in a chemical reaction?',
    options: ['Increases energy released', 'Lowers activation energy', 'Changes the products', 'Increases reactant amounts'], correctIndex: 1,
    explanation: 'A catalyst lowers activation energy, speeding up the reaction without being consumed.' },

  { id: 're-m-004', category: 'reactions', difficulty: 'medium',
    question: 'What is the balanced equation for the Haber process?',
    options: ['N₂ + H₂ → NH₃', 'N₂ + 3H₂ → 2NH₃', '2N + 3H₂ → 2NH₃', 'N₂ + 2H₂ → 2NH₃'], correctIndex: 1,
    explanation: 'Haber process: N₂ + 3H₂ ⇌ 2NH₃. Used industrially to produce ammonia for fertilizers.' },

  { id: 're-m-005', category: 'reactions', difficulty: 'medium',
    question: 'In a redox reaction, oxidation involves:',
    options: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of neutrons'], correctIndex: 1,
    explanation: 'OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain.' },

  { id: 're-m-006', category: 'reactions', difficulty: 'medium',
    question: 'What is a precipitate?',
    options: ['A gas formed in a reaction', 'An insoluble solid formed in solution', 'A catalyst used in reactions', 'An acidic product'], correctIndex: 1,
    explanation: 'A precipitate is an insoluble solid that forms when two solutions are mixed.' },

  { id: 're-m-007', category: 'reactions', difficulty: 'medium',
    question: 'What is the activation energy of a reaction?',
    options: ['Energy released by the reaction', 'Energy absorbed from surroundings', 'Minimum energy needed to start the reaction', 'Total energy of all reactants'], correctIndex: 2,
    explanation: 'Activation energy is the minimum energy required for reactant molecules to successfully collide and react.' },

  { id: 're-m-008', category: 'reactions', difficulty: 'medium',
    question: 'Which factor does NOT affect reaction rate?',
    options: ['Temperature', 'Concentration', 'Atomic number of elements', 'Surface area'], correctIndex: 2,
    explanation: 'Atomic number does not affect reaction rate. Temperature, concentration, surface area, and catalysts do.' },

  { id: 're-m-009', category: 'reactions', difficulty: 'medium',
    question: 'What type of reaction is: AB + CD → AD + CB?',
    options: ['Single displacement', 'Double displacement', 'Synthesis', 'Decomposition'], correctIndex: 1,
    explanation: 'Double displacement (metathesis): two compounds exchange ions to form two new compounds.' },

  { id: 're-m-010', category: 'reactions', difficulty: 'medium',
    question: 'What is the oxidizing agent in the reaction: Zn + CuSO₄ → ZnSO₄ + Cu?',
    options: ['Zn', 'ZnSO₄', 'Cu²⁺ (in CuSO₄)', 'SO₄²⁻'], correctIndex: 2,
    explanation: 'Cu²⁺ is reduced (gains electrons) so it is the oxidizing agent. Zn is oxidized.' },

  // ══════════════════════════════════════════════════════
  // REACTIONS — HARD
  // ══════════════════════════════════════════════════════
  { id: 're-h-001', category: 'reactions', difficulty: 'hard',
    question: 'For 2H₂ + O₂ → 2H₂O, what is the enthalpy per mole of water formed?',
    options: ['-285.8 kJ/mol', '-571.6 kJ/mol', '+285.8 kJ/mol', '-143.2 kJ/mol'], correctIndex: 0,
    explanation: 'Total ΔH = -571.6 kJ for 2 moles of H₂O, so per mole = -285.8 kJ/mol.' },

  { id: 're-h-002', category: 'reactions', difficulty: 'hard',
    question: 'In Le Chatelier\'s principle, increasing pressure shifts equilibrium toward:',
    options: ['Side with more moles of gas', 'Side with fewer moles of gas', 'Reactant side always', 'No change occurs'], correctIndex: 1,
    explanation: 'Higher pressure favors the side with fewer gas moles, reducing volume.' },

  { id: 're-h-003', category: 'reactions', difficulty: 'hard',
    question: 'What is the rate law for a second-order reaction with one reactant A?',
    options: ['rate = k', 'rate = k[A]', 'rate = k[A]²', 'rate = k[A][B]'], correctIndex: 2,
    explanation: 'A second-order reaction with one reactant has rate = k[A]², where k is the rate constant.' },

  { id: 're-h-004', category: 'reactions', difficulty: 'hard',
    question: 'What does a negative Gibbs free energy (ΔG < 0) indicate?',
    options: ['Reaction is non-spontaneous', 'Reaction is spontaneous', 'Reaction is at equilibrium', 'Reaction requires a catalyst'], correctIndex: 1,
    explanation: 'ΔG < 0 means the reaction is thermodynamically spontaneous (proceeds without external energy).' },

  { id: 're-h-005', category: 'reactions', difficulty: 'hard',
    question: 'What is the Arrhenius equation used to calculate?',
    options: ['Equilibrium constant', 'Rate constant and its temperature dependence', 'Enthalpy of reaction', 'Molar mass of products'], correctIndex: 1,
    explanation: 'The Arrhenius equation k = Ae^(-Ea/RT) relates the rate constant to temperature and activation energy.' },

  { id: 're-h-006', category: 'reactions', difficulty: 'hard',
    question: 'In electrolysis of water, which gas is produced at the cathode?',
    options: ['Oxygen', 'Hydrogen', 'Ozone', 'Water vapor'], correctIndex: 1,
    explanation: 'At the cathode (negative electrode): 2H⁺ + 2e⁻ → H₂. Hydrogen is produced.' },

  { id: 're-h-007', category: 'reactions', difficulty: 'hard',
    question: 'What is the equilibrium constant expression for: aA + bB ⇌ cC + dD?',
    options: ['K = [A]ᵃ[B]ᵇ / [C]ᶜ[D]ᵈ', 'K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ', 'K = [C][D] / [A][B]', 'K = [A][B] / [C][D]'], correctIndex: 1,
    explanation: 'K = [products] / [reactants] with each concentration raised to its stoichiometric coefficient.' },

  // ══════════════════════════════════════════════════════
  // COMPOUNDS — EASY
  // ══════════════════════════════════════════════════════
  { id: 'co-e-001', category: 'compounds', difficulty: 'easy',
    question: 'What is the chemical formula of water?',
    options: ['HO', 'H₂O', 'H₂O₂', 'HO₂'], correctIndex: 1,
    explanation: 'Water consists of 2 hydrogen atoms covalently bonded to 1 oxygen atom.' },

  { id: 'co-e-002', category: 'compounds', difficulty: 'easy',
    question: 'What type of bond holds NaCl (table salt) together?',
    options: ['Covalent bond', 'Metallic bond', 'Ionic bond', 'Hydrogen bond'], correctIndex: 2,
    explanation: 'NaCl is ionic — Na⁺ and Cl⁻ ions are held by electrostatic attraction.' },

  { id: 'co-e-003', category: 'compounds', difficulty: 'easy',
    question: 'How many atoms are in one molecule of glucose (C₆H₁₂O₆)?',
    options: ['12', '18', '24', '6'], correctIndex: 2,
    explanation: 'C₆H₁₂O₆ has 6+12+6 = 24 atoms total.' },

  { id: 'co-e-004', category: 'compounds', difficulty: 'easy',
    question: 'What is the chemical name of NaCl?',
    options: ['Sodium oxide', 'Sodium chloride', 'Sodium carbonate', 'Sodium hydroxide'], correctIndex: 1,
    explanation: 'NaCl is sodium chloride, commonly known as table salt.' },

  { id: 'co-e-005', category: 'compounds', difficulty: 'easy',
    question: 'Which compound is known as "dry ice"?',
    options: ['Frozen water (H₂O)', 'Solid CO₂', 'Liquid nitrogen', 'Solid SO₂'], correctIndex: 1,
    explanation: 'Dry ice is solid CO₂ — it sublimates at -78.5°C without melting.' },

  { id: 'co-e-006', category: 'compounds', difficulty: 'easy',
    question: 'What is the formula for carbon dioxide?',
    options: ['CO', 'CO₂', 'C₂O', 'CO₃'], correctIndex: 1,
    explanation: 'Carbon dioxide has one carbon atom double-bonded to two oxygen atoms.' },

  { id: 'co-e-007', category: 'compounds', difficulty: 'easy',
    question: 'Which compound makes up the majority of natural gas?',
    options: ['Ethane', 'Propane', 'Methane', 'Butane'], correctIndex: 2,
    explanation: 'Natural gas is primarily methane (CH₄), making up about 70-90% of its composition.' },

  { id: 'co-e-008', category: 'compounds', difficulty: 'easy',
    question: 'What is H₂O₂ commonly known as?',
    options: ['Water', 'Heavy water', 'Hydrogen peroxide', 'Hydroxide'], correctIndex: 2,
    explanation: 'H₂O₂ is hydrogen peroxide, used as an antiseptic and bleaching agent.' },

  { id: 'co-e-009', category: 'compounds', difficulty: 'easy',
    question: 'What is the formula for ammonia?',
    options: ['NO₃', 'NH₄', 'NH₃', 'N₂H₄'], correctIndex: 2,
    explanation: 'Ammonia is NH₃ — one nitrogen bonded to three hydrogen atoms.' },

  { id: 'co-e-010', category: 'compounds', difficulty: 'easy',
    question: 'Which compound is chalk made of?',
    options: ['Calcium chloride', 'Calcium sulfate', 'Calcium carbonate', 'Calcium oxide'], correctIndex: 2,
    explanation: 'Chalk is mainly calcium carbonate (CaCO₃).' },

  // ══════════════════════════════════════════════════════
  // COMPOUNDS — MEDIUM
  // ══════════════════════════════════════════════════════
  { id: 'co-m-001', category: 'compounds', difficulty: 'medium',
    question: 'What is the shape of a water molecule?',
    options: ['Linear', 'Tetrahedral', 'Bent/V-shaped', 'Trigonal planar'], correctIndex: 2,
    explanation: 'Water has 2 bonding pairs and 2 lone pairs, giving a bent shape with ~104.5° bond angle.' },

  { id: 'co-m-002', category: 'compounds', difficulty: 'medium',
    question: 'What is the molar mass of CO₂?',
    options: ['28 g/mol', '32 g/mol', '44 g/mol', '40 g/mol'], correctIndex: 2,
    explanation: 'CO₂: C(12) + 2×O(16) = 12 + 32 = 44 g/mol.' },

  { id: 'co-m-003', category: 'compounds', difficulty: 'medium',
    question: 'What is the pH of a neutral solution at 25°C?',
    options: ['0', '5', '7', '14'], correctIndex: 2,
    explanation: 'Pure water at 25°C has pH = 7, which is considered neutral.' },

  { id: 'co-m-004', category: 'compounds', difficulty: 'medium',
    question: 'Which intermolecular force is responsible for water\'s high boiling point?',
    options: ['London dispersion forces', 'Dipole-dipole interactions', 'Hydrogen bonding', 'Ionic bonding'], correctIndex: 2,
    explanation: 'Hydrogen bonding between water molecules is exceptionally strong, giving water a high boiling point.' },

  { id: 'co-m-005', category: 'compounds', difficulty: 'medium',
    question: 'What is the IUPAC name for CH₃CH₂OH?',
    options: ['Methanol', 'Ethanol', 'Propanol', 'Butanol'], correctIndex: 1,
    explanation: 'CH₃CH₂OH has 2 carbons with an OH group — it is ethanol (drinking alcohol).' },

  { id: 'co-m-006', category: 'compounds', difficulty: 'medium',
    question: 'What type of isomers have the same molecular formula but different structural arrangements?',
    options: ['Optical isomers', 'Geometric isomers', 'Structural isomers', 'Nuclear isomers'], correctIndex: 2,
    explanation: 'Structural isomers have the same molecular formula but different connectivity of atoms.' },

  { id: 'co-m-007', category: 'compounds', difficulty: 'medium',
    question: 'What is the molar mass of NaCl?',
    options: ['23 g/mol', '35.5 g/mol', '58.5 g/mol', '74 g/mol'], correctIndex: 2,
    explanation: 'NaCl: Na(23) + Cl(35.5) = 58.5 g/mol.' },

  { id: 'co-m-008', category: 'compounds', difficulty: 'medium',
    question: 'Which compound is an example of a strong acid?',
    options: ['Acetic acid (CH₃COOH)', 'Hydrochloric acid (HCl)', 'Carbonic acid (H₂CO₃)', 'Citric acid'], correctIndex: 1,
    explanation: 'HCl is a strong acid — it fully dissociates in water. Acetic and carbonic acids are weak acids.' },

  { id: 'co-m-009', category: 'compounds', difficulty: 'medium',
    question: 'What is the functional group of an alcohol?',
    options: ['-COOH', '-CHO', '-OH', '-NH₂'], correctIndex: 2,
    explanation: 'Alcohols contain the hydroxyl (-OH) functional group.' },

  { id: 'co-m-010', category: 'compounds', difficulty: 'medium',
    question: 'Which compound has a tetrahedral shape?',
    options: ['CO₂', 'H₂O', 'CH₄', 'NH₃'], correctIndex: 2,
    explanation: 'Methane (CH₄) has 4 bonding pairs and no lone pairs — perfect tetrahedral geometry.' },

  // ══════════════════════════════════════════════════════
  // COMPOUNDS — HARD
  // ══════════════════════════════════════════════════════
  { id: 'co-h-001', category: 'compounds', difficulty: 'hard',
    question: 'What is the hybridization of carbon in benzene (C₆H₆)?',
    options: ['sp', 'sp²', 'sp³', 'sp³d'], correctIndex: 1,
    explanation: 'Each carbon in benzene is sp² hybridized with one unhybridized p-orbital for the π system.' },

  { id: 'co-h-002', category: 'compounds', difficulty: 'hard',
    question: 'What is the bond angle in a tetrahedral molecule like CH₄?',
    options: ['90°', '109.5°', '120°', '180°'], correctIndex: 1,
    explanation: 'Tetrahedral geometry gives a bond angle of 109.5° due to equal electron pair repulsion.' },

  { id: 'co-h-003', category: 'compounds', difficulty: 'hard',
    question: 'Which type of isomerism occurs in cis-2-butene and trans-2-butene?',
    options: ['Structural isomerism', 'Optical isomerism', 'Geometric isomerism', 'Chain isomerism'], correctIndex: 2,
    explanation: 'Cis and trans isomers differ in spatial arrangement around a C=C double bond — geometric isomerism.' },

  { id: 'co-h-004', category: 'compounds', difficulty: 'hard',
    question: 'What is the van\'t Hoff factor (i) for MgCl₂ in dilute solution?',
    options: ['1', '2', '3', '4'], correctIndex: 2,
    explanation: 'MgCl₂ dissociates into Mg²⁺ + 2Cl⁻ — 3 ions total, so i = 3.' },

  { id: 'co-h-005', category: 'compounds', difficulty: 'hard',
    question: 'What is the VSEPR geometry of SF₆?',
    options: ['Tetrahedral', 'Trigonal bipyramidal', 'Octahedral', 'Square planar'], correctIndex: 2,
    explanation: 'SF₆ has 6 bonding pairs and no lone pairs — perfect octahedral geometry.' },

  { id: 'co-h-006', category: 'compounds', difficulty: 'hard',
    question: 'Which colligative property is used to determine molar mass of solutes?',
    options: ['Vapour pressure', 'Osmotic pressure', 'Surface tension', 'Viscosity'], correctIndex: 1,
    explanation: 'Osmotic pressure (π = iMRT) is very sensitive and commonly used to determine molar mass.' },

  // ══════════════════════════════════════════════════════
  // MIXED — EASY
  // ══════════════════════════════════════════════════════
  { id: 'mx-e-001', category: 'mixed', difficulty: 'easy',
    question: 'What is Avogadro\'s number?',
    options: ['6.022 × 10²¹', '6.022 × 10²³', '6.022 × 10²⁵', '3.14 × 10²³'], correctIndex: 1,
    explanation: 'Avogadro\'s number is 6.022 × 10²³ — the number of particles in one mole of a substance.' },

  { id: 'mx-e-002', category: 'mixed', difficulty: 'easy',
    question: 'What is the pH range of an acid?',
    options: ['7 to 14', '0 to 7', 'Exactly 7', 'Above 14'], correctIndex: 1,
    explanation: 'Acids have pH below 7. The lower the pH, the stronger the acid.' },

  { id: 'mx-e-003', category: 'mixed', difficulty: 'easy',
    question: 'What is a mole in chemistry?',
    options: ['A unit of temperature', 'A unit of amount of substance', 'A unit of pressure', 'A unit of energy'], correctIndex: 1,
    explanation: 'A mole is the SI unit for amount of substance, containing 6.022 × 10²³ particles.' },

  { id: 'mx-e-004', category: 'mixed', difficulty: 'easy',
    question: 'Which state of matter has a definite shape and volume?',
    options: ['Gas', 'Liquid', 'Solid', 'Plasma'], correctIndex: 2,
    explanation: 'Solids have both definite shape and definite volume due to tightly packed particles.' },

  { id: 'mx-e-005', category: 'mixed', difficulty: 'easy',
    question: 'What instrument is used to measure temperature in a lab?',
    options: ['Barometer', 'Thermometer', 'Hydrometer', 'Voltmeter'], correctIndex: 1,
    explanation: 'A thermometer measures temperature in Celsius, Fahrenheit, or Kelvin.' },

  { id: 'mx-e-006', category: 'mixed', difficulty: 'easy',
    question: 'What does "aq" mean in a chemical equation?',
    options: ['In solid form', 'In gaseous form', 'In aqueous (water) solution', 'In liquid form'], correctIndex: 2,
    explanation: '"aq" stands for aqueous — the substance is dissolved in water.' },

  { id: 'mx-e-007', category: 'mixed', difficulty: 'easy',
    question: 'What colour does litmus paper turn in an acid?',
    options: ['Blue', 'Green', 'Red', 'Yellow'], correctIndex: 2,
    explanation: 'Acids turn blue litmus paper red. Bases turn red litmus paper blue.' },

  // ══════════════════════════════════════════════════════
  // MIXED — MEDIUM
  // ══════════════════════════════════════════════════════
  { id: 'mx-m-001', category: 'mixed', difficulty: 'medium',
    question: 'What is molarity?',
    options: ['Moles of solute per kg of solvent', 'Moles of solute per litre of solution', 'Mass of solute per litre', 'Moles of solvent per litre'], correctIndex: 1,
    explanation: 'Molarity (M) = moles of solute / litres of solution. Units are mol/L or M.' },

  { id: 'mx-m-002', category: 'mixed', difficulty: 'medium',
    question: 'What is Boyle\'s Law?',
    options: ['V ∝ T at constant P', 'P ∝ T at constant V', 'P ∝ 1/V at constant T', 'PV = nRT'], correctIndex: 2,
    explanation: 'Boyle\'s Law: at constant temperature, pressure and volume are inversely proportional (P ∝ 1/V).' },

  { id: 'mx-m-003', category: 'mixed', difficulty: 'medium',
    question: 'What is the SI unit of pressure?',
    options: ['Bar', 'Atmosphere', 'Pascal', 'Torr'], correctIndex: 2,
    explanation: 'The SI unit of pressure is the Pascal (Pa). 1 atm = 101,325 Pa.' },

  { id: 'mx-m-004', category: 'mixed', difficulty: 'medium',
    question: 'What is a buffer solution?',
    options: ['Solution with pH of exactly 7', 'Solution that resists changes in pH', 'Very concentrated acid solution', 'Saturated salt solution'], correctIndex: 1,
    explanation: 'A buffer resists pH changes when small amounts of acid or base are added.' },

  { id: 'mx-m-005', category: 'mixed', difficulty: 'medium',
    question: 'How many grams is one mole of water (H₂O)?',
    options: ['10 g', '16 g', '18 g', '20 g'], correctIndex: 2,
    explanation: 'Molar mass of H₂O: 2(1) + 16 = 18 g/mol.' },

  { id: 'mx-m-006', category: 'mixed', difficulty: 'medium',
    question: 'What is sublimation?',
    options: ['Liquid to gas', 'Solid to liquid', 'Solid directly to gas', 'Gas to solid'], correctIndex: 2,
    explanation: 'Sublimation is the direct transition from solid to gas without passing through the liquid phase.' },

  { id: 'mx-m-007', category: 'mixed', difficulty: 'medium',
    question: 'What is the formula for the ideal gas law?',
    options: ['PV = nRT', 'PV = mRT', 'P = nRT/m', 'PV = RT'], correctIndex: 0,
    explanation: 'PV = nRT where P=pressure, V=volume, n=moles, R=gas constant, T=temperature in Kelvin.' },

  // ══════════════════════════════════════════════════════
  // MIXED — HARD
  // ══════════════════════════════════════════════════════
  { id: 'mx-h-001', category: 'mixed', difficulty: 'hard',
    question: 'What is the Henderson-Hasselbalch equation?',
    options: ['pH = pKa + log([A⁻]/[HA])', 'pH = pKa - log([A⁻]/[HA])', 'pH = Ka + [A⁻]/[HA]', 'pH = -log[H⁺] + pKa'], correctIndex: 0,
    explanation: 'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — used to calculate pH of buffer solutions.' },

  { id: 'mx-h-002', category: 'mixed', difficulty: 'hard',
    question: 'What does Hess\'s Law state?',
    options: ['Enthalpy depends on reaction path', 'Total enthalpy is independent of reaction path', 'Only exothermic reactions are spontaneous', 'Energy is created in chemical reactions'], correctIndex: 1,
    explanation: 'Hess\'s Law: the total enthalpy change is independent of the route taken — only initial and final states matter.' },

  { id: 'mx-h-003', category: 'mixed', difficulty: 'hard',
    question: 'What is the relationship between Gibbs free energy, enthalpy and entropy?',
    options: ['ΔG = ΔH + TΔS', 'ΔG = ΔH - TΔS', 'ΔG = TΔS - ΔH', 'ΔG = ΔH × TΔS'], correctIndex: 1,
    explanation: 'ΔG = ΔH - TΔS. A reaction is spontaneous when ΔG < 0.' },

  { id: 'mx-h-004', category: 'mixed', difficulty: 'hard',
    question: 'What is the unit of the rate constant for a first-order reaction?',
    options: ['mol/L·s', 's⁻¹', 'L/mol·s', 'L²/mol²·s'], correctIndex: 1,
    explanation: 'For a first-order reaction, rate = k[A], so k has units of s⁻¹ (per second).' },

  { id: 'mx-h-005', category: 'mixed', difficulty: 'hard',
    question: 'What is the Nernst equation used for?',
    options: ['Calculating reaction rate', 'Finding cell potential under non-standard conditions', 'Determining molar mass', 'Calculating activation energy'], correctIndex: 1,
    explanation: 'The Nernst equation calculates the electrochemical cell potential under non-standard conditions.' },
];

export const QUIZ_CATEGORIES: { value: QuizCategory; label: string; emoji: string }[] = [
  { value: 'mixed',     label: 'Mixed',     emoji: '🔀' },
  { value: 'elements',  label: 'Elements',  emoji: '⚛️' },
  { value: 'reactions', label: 'Reactions', emoji: '⚗️' },
  { value: 'compounds', label: 'Compounds', emoji: '🧪' },
];

export const QUIZ_DIFFICULTIES: { value: QuizDifficulty; label: string; color: string }[] = [
  { value: 'easy',   label: 'Easy',   color: 'text-emerald-400' },
  { value: 'medium', label: 'Medium', color: 'text-amber-400'   },
  { value: 'hard',   label: 'Hard',   color: 'text-red-400'     },
];

export function getQuestions(category: QuizCategory, difficulty: QuizDifficulty | 'all', count = 10): QuizQuestion[] {
  let pool = QUIZ_QUESTIONS;
  if (category !== 'mixed') pool = pool.filter(q => q.category === category);
  if (difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
