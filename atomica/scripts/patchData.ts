import fs from 'fs';
import path from 'path';
import { ELEMENTS } from '../src/data/elements';
import { MOLECULES } from '../src/data/molecules';

// Real fun facts and vdw radii for elements
const ELEMENT_DATA: Record<number, { funFact: string, vanDerWaalsRadius: number | null }> = {
  1: { funFact: "Hydrogen is the most abundant chemical substance in the Universe, constituting roughly 75% of all normal matter.", vanDerWaalsRadius: 120 },
  2: { funFact: "Helium is the only element that cannot be solidified by sufficient cooling at normal atmospheric pressure.", vanDerWaalsRadius: 140 },
  3: { funFact: "Lithium is the lightest metal and the least dense solid element.", vanDerWaalsRadius: 182 },
  4: { funFact: "Beryllium is highly transparent to X-rays, making it ideal for radiation windows.", vanDerWaalsRadius: 153 },
  5: { funFact: "Boron is an essential plant nutrient but is toxic in large amounts.", vanDerWaalsRadius: 192 },
  6: { funFact: "Carbon forms more compounds than any other element, with over 10 million known varieties.", vanDerWaalsRadius: 170 },
  7: { funFact: "Nitrogen gas makes up 78% of Earth's atmosphere by volume.", vanDerWaalsRadius: 155 },
  8: { funFact: "Oxygen is the most abundant element in the Earth's crust, making up almost half of its mass.", vanDerWaalsRadius: 152 },
  9: { funFact: "Fluorine is the most electronegative and reactive of all elements.", vanDerWaalsRadius: 147 },
  10: { funFact: "Neon gives a distinct reddish-orange glow when used in low-voltage neon glow lamps.", vanDerWaalsRadius: 154 },
  11: { funFact: "Sodium is highly reactive and burns with a brilliant yellow flame.", vanDerWaalsRadius: 227 },
  12: { funFact: "Magnesium burns with a brilliant-white light, making it useful in flares and fireworks.", vanDerWaalsRadius: 173 },
  13: { funFact: "Aluminum is the most widely used non-ferrous metal.", vanDerWaalsRadius: 184 },
  14: { funFact: "Silicon is the principal component of most semiconductor devices and integrated circuits.", vanDerWaalsRadius: 210 },
  15: { funFact: "White phosphorus emits a faint glow when exposed to oxygen, hence its name meaning 'light-bringer'.", vanDerWaalsRadius: 180 },
  16: { funFact: "Sulfur is infamous for its pungent smell, though the pure element is actually odorless.", vanDerWaalsRadius: 180 },
  17: { funFact: "Chlorine was historically used as a chemical weapon in World War I.", vanDerWaalsRadius: 175 },
  18: { funFact: "Argon makes up nearly 1% of the Earth's atmosphere, making it the most common noble gas on Earth.", vanDerWaalsRadius: 188 },
  19: { funFact: "Potassium burns with a lilac-colored flame.", vanDerWaalsRadius: 275 },
  20: { funFact: "Calcium is the most abundant metal by mass in many animals, essential for bone structure.", vanDerWaalsRadius: 231 },
  21: { funFact: "Scandium is mainly used in aerospace components and sports equipment like bicycle frames.", vanDerWaalsRadius: 211 },
  22: { funFact: "Titanium is as strong as steel but 45% lighter, making it a premium aerospace material.", vanDerWaalsRadius: null },
  23: { funFact: "Vanadium is added to steel to greatly increase its strength and toughness.", vanDerWaalsRadius: null },
  24: { funFact: "Chromium is polished to a mirror finish and provides the 'chrome' plating on cars.", vanDerWaalsRadius: null },
  25: { funFact: "Manganese is essential to iron and steel production, mitigating sulfur and oxygen impurities.", vanDerWaalsRadius: null },
  26: { funFact: "Iron is the most common element on Earth by mass, forming much of Earth's outer and inner core.", vanDerWaalsRadius: null },
  27: { funFact: "Cobalt produces brilliant blue colors in glass and ceramics.", vanDerWaalsRadius: 163 },
  28: { funFact: "Nickel is a major component of stainless steel and many rechargeable batteries.", vanDerWaalsRadius: 163 },
  29: { funFact: "Copper has been used by humanity for over 10,000 years and is highly conductive.", vanDerWaalsRadius: 140 },
  30: { funFact: "Zinc is most commonly used to galvanize other metals, such as iron, to prevent rusting.", vanDerWaalsRadius: 139 },
  31: { funFact: "Gallium literally melts in your hand, with a melting point of just 29.76 °C.", vanDerWaalsRadius: 187 },
  32: { funFact: "Germanium is an important semiconductor material used in fiber optics and solar cells.", vanDerWaalsRadius: 211 },
  33: { funFact: "Arsenic is notoriously toxic and was a common poison in historical assassinations.", vanDerWaalsRadius: 185 },
  34: { funFact: "Selenium is photovoltaic, meaning it converts light directly into electricity.", vanDerWaalsRadius: 190 },
  35: { funFact: "Bromine is one of only two elements that are liquid at room temperature.", vanDerWaalsRadius: 185 },
  36: { funFact: "Krypton is used in high-performance lighting and lasers.", vanDerWaalsRadius: 202 },
  37: { funFact: "Rubidium ignites spontaneously in air and reacts violently with water.", vanDerWaalsRadius: 303 },
  38: { funFact: "Strontium salts impart a brilliant red color to fireworks and flares.", vanDerWaalsRadius: 249 },
  39: { funFact: "Yttrium is commonly used to make the red phosphors in old color television tubes.", vanDerWaalsRadius: null },
  40: { funFact: "Zirconium is highly resistant to corrosion and is used to clad nuclear fuel rods.", vanDerWaalsRadius: null },
  41: { funFact: "Niobium becomes a superconductor at very low temperatures, useful in MRI machines.", vanDerWaalsRadius: null },
  42: { funFact: "Molybdenum has one of the highest melting points of all pure elements.", vanDerWaalsRadius: null },
  43: { funFact: "Technetium was the first artificially produced element, hence its name derived from the Greek word for 'artificial'.", vanDerWaalsRadius: null },
  44: { funFact: "Ruthenium is an incredibly hard metal often added to platinum to increase durability.", vanDerWaalsRadius: null },
  45: { funFact: "Rhodium is one of the rarest and most valuable precious metals, often used in catalytic converters.", vanDerWaalsRadius: null },
  46: { funFact: "Palladium can absorb up to 900 times its own volume of hydrogen gas at room temperature.", vanDerWaalsRadius: 163 },
  47: { funFact: "Silver has the highest electrical conductivity of any element.", vanDerWaalsRadius: 172 },
  48: { funFact: "Cadmium is highly toxic and historically used in NiCd rechargeable batteries.", vanDerWaalsRadius: 158 },
  49: { funFact: "Indium emits a high-pitched 'cry' or squeak when a solid piece is bent.", vanDerWaalsRadius: 193 },
  50: { funFact: "Tin does not rust and is commonly used to coat other metals to prevent corrosion.", vanDerWaalsRadius: 217 },
  51: { funFact: "Antimony has been used since ancient times for cosmetics, such as kohl.", vanDerWaalsRadius: 206 },
  52: { funFact: "Tellurium frequently smells like garlic, and handlers can absorb this distinct odor.", vanDerWaalsRadius: 206 },
  53: { funFact: "Iodine sublimates into a stunning deep violet gas when heated.", vanDerWaalsRadius: 198 },
  54: { funFact: "Xenon is a noble gas that is heavy enough to be used as a propellant in ion thrusters for spacecraft.", vanDerWaalsRadius: 216 },
  55: { funFact: "Cesium is the most reactive of all metals and melts at 28.5 °C, making it liquid in a warm room.", vanDerWaalsRadius: 343 },
  56: { funFact: "Barium is highly reactive and its compounds are used to produce green colors in fireworks.", vanDerWaalsRadius: 268 },
  57: { funFact: "Lanthanum is used in studio lighting and cinema projection due to its bright spectrum.", vanDerWaalsRadius: null },
  58: { funFact: "Cerium sparks when struck, making it a primary component of flint in modern lighters.", vanDerWaalsRadius: null },
  59: { funFact: "Praseodymium forms the core of highly powerful magnets when alloyed with neodymium.", vanDerWaalsRadius: null },
  60: { funFact: "Neodymium is famous for creating the strongest permanent magnets known.", vanDerWaalsRadius: null },
  61: { funFact: "Promethium is a radioactive element that glows faintly in the dark.", vanDerWaalsRadius: null },
  62: { funFact: "Samarium is used to create magnets that remain stable at high temperatures.", vanDerWaalsRadius: null },
  63: { funFact: "Europium is the most reactive of the rare-earth elements and is used in anti-forgery marks on Euro banknotes.", vanDerWaalsRadius: null },
  64: { funFact: "Gadolinium has a very high magnetic moment and is used as an MRI contrast agent.", vanDerWaalsRadius: null },
  65: { funFact: "Terbium is used as a green phosphor in fluorescent lamps and television screens.", vanDerWaalsRadius: null },
  66: { funFact: "Dysprosium has one of the highest magnetic strengths of the elements, especially at low temperatures.", vanDerWaalsRadius: null },
  67: { funFact: "Holmium has the highest magnetic permeability of any element.", vanDerWaalsRadius: null },
  68: { funFact: "Erbium is used in optical fibers to amplify light signals.", vanDerWaalsRadius: null },
  69: { funFact: "Thulium is incredibly rare and expensive, used primarily in portable X-ray devices.", vanDerWaalsRadius: null },
  70: { funFact: "Ytterbium is utilized in highly precise atomic clocks.", vanDerWaalsRadius: null },
  71: { funFact: "Lutetium is the most expensive rare-earth metal due to the difficulty in isolating it.", vanDerWaalsRadius: null },
  72: { funFact: "Hafnium is an excellent neutron absorber, used in nuclear submarine control rods.", vanDerWaalsRadius: null },
  73: { funFact: "Tantalum is incredibly resistant to corrosion and is used in surgical implants.", vanDerWaalsRadius: null },
  74: { funFact: "Tungsten has the highest melting point of any element, at 3,422 °C.", vanDerWaalsRadius: null },
  75: { funFact: "Rhenium is one of the rarest elements in the Earth's crust and is used in jet engine superalloys.", vanDerWaalsRadius: null },
  76: { funFact: "Osmium is the densest naturally occurring element, twice as heavy as lead.", vanDerWaalsRadius: null },
  77: { funFact: "Iridium is the most corrosion-resistant metal known.", vanDerWaalsRadius: null },
  78: { funFact: "Platinum is highly unreactive and is widely used in catalytic converters.", vanDerWaalsRadius: 175 },
  79: { funFact: "Gold is the most malleable of all metals; a single gram can be beaten into a sheet of one square meter.", vanDerWaalsRadius: 166 },
  80: { funFact: "Mercury is the only metal that is liquid at standard temperature and pressure.", vanDerWaalsRadius: 155 },
  81: { funFact: "Thallium is a highly toxic 'assassin's poison' that historically caused hair loss in its victims.", vanDerWaalsRadius: 196 },
  82: { funFact: "Lead is incredibly dense and effectively blocks dangerous radiation like X-rays and gamma rays.", vanDerWaalsRadius: 202 },
  83: { funFact: "Bismuth is completely diamagnetic, meaning it repels magnetic fields.", vanDerWaalsRadius: 207 },
  84: { funFact: "Polonium is a highly radioactive and toxic element discovered by Marie Curie.", vanDerWaalsRadius: null },
  85: { funFact: "Astatine is the rarest naturally occurring element on Earth, with less than an ounce present at any time.", vanDerWaalsRadius: null },
  86: { funFact: "Radon is a radioactive, colorless gas that can accumulate dangerously in basements.", vanDerWaalsRadius: null },
  87: { funFact: "Francium is the most unstable of the first 101 elements; its most stable isotope has a half-life of 22 minutes.", vanDerWaalsRadius: null },
  88: { funFact: "Radium glows in the dark and was historically used in luminous watch dials until its dangers were realized.", vanDerWaalsRadius: null },
  89: { funFact: "Actinium is highly radioactive and glows with a pale blue light in the dark.", vanDerWaalsRadius: null },
  90: { funFact: "Thorium is significantly more abundant than uranium and is being researched as a safer nuclear fuel.", vanDerWaalsRadius: null },
  91: { funFact: "Protactinium is incredibly rare, toxic, and expensive to extract.", vanDerWaalsRadius: null },
  92: { funFact: "Uranium is the heaviest naturally occurring element and the primary fuel for nuclear reactors.", vanDerWaalsRadius: 186 },
  93: { funFact: "Neptunium is a radioactive transuranic element used in neutron detectors.", vanDerWaalsRadius: null },
  94: { funFact: "Plutonium powers radioisotope thermoelectric generators in deep space probes like Voyager.", vanDerWaalsRadius: null },
  95: { funFact: "Americium is practically used in trace amounts in most household smoke detectors.", vanDerWaalsRadius: null },
  96: { funFact: "Curium is so radioactive that some of its isotopes glow purple in the dark.", vanDerWaalsRadius: null },
  97: { funFact: "Berkelium is a synthetic element named after the city of Berkeley, California.", vanDerWaalsRadius: null },
  98: { funFact: "Californium is extremely expensive and used as a portable neutron source.", vanDerWaalsRadius: null },
  99: { funFact: "Einsteinium was discovered in the debris of the first hydrogen bomb explosion.", vanDerWaalsRadius: null },
  100: { funFact: "Fermium is the heaviest element that can be formed by neutron bombardment of lighter elements.", vanDerWaalsRadius: null },
  101: { funFact: "Mendelevium is named after Dmitri Mendeleev, the creator of the periodic table.", vanDerWaalsRadius: null },
  102: { funFact: "Nobelium was named in honor of Alfred Nobel, the inventor of dynamite.", vanDerWaalsRadius: null },
  103: { funFact: "Lawrencium is synthesized in particle accelerators and has no uses outside of basic research.", vanDerWaalsRadius: null },
  104: { funFact: "Rutherfordium is a highly radioactive synthetic element with a half-life of roughly 1.3 hours.", vanDerWaalsRadius: null },
  105: { funFact: "Dubnium is named after the Russian town of Dubna, a major center of nuclear research.", vanDerWaalsRadius: null },
  106: { funFact: "Seaborgium is named after Glenn T. Seaborg, who participated in the discovery of ten transuranic elements.", vanDerWaalsRadius: null },
  107: { funFact: "Bohrium was synthesized by cold fusion of a bismuth target with chromium ions.", vanDerWaalsRadius: null },
  108: { funFact: "Hassium is expected to be a solid but its most stable isotope only lasts about 16 seconds.", vanDerWaalsRadius: null },
  109: { funFact: "Meitnerium is named after Lise Meitner, a pioneer in the study of nuclear fission.", vanDerWaalsRadius: null },
  110: { funFact: "Darmstadtium was first created by bombarding a lead target with nickel ions.", vanDerWaalsRadius: null },
  111: { funFact: "Roentgenium is highly radioactive and named after the discoverer of X-rays.", vanDerWaalsRadius: null },
  112: { funFact: "Copernicium is an incredibly volatile synthetic element, perhaps even gaseous at room temperature.", vanDerWaalsRadius: null },
  113: { funFact: "Nihonium is the first element discovered in an Asian country (Japan).", vanDerWaalsRadius: null },
  114: { funFact: "Flerovium was named to honor the Flerov Laboratory of Nuclear Reactions in Russia.", vanDerWaalsRadius: null },
  115: { funFact: "Moscovium is a superheavy element whose most stable known isotope has a half-life of 0.65 seconds.", vanDerWaalsRadius: null },
  116: { funFact: "Livermorium was discovered through a collaboration between Russian and American scientists.", vanDerWaalsRadius: null },
  117: { funFact: "Tennessine is the second heaviest known element and named after the US state of Tennessee.", vanDerWaalsRadius: null },
  118: { funFact: "Oganesson is the heaviest synthesized element and the only noble gas predicted to be a solid at room temperature.", vanDerWaalsRadius: null },
};

const MOLECULE_DATA: Record<string, { uses: string, fact: string, bondAngle: string, meltingPoint: number | null, boilingPoint: number | null }> = {
  "hydrogen": { uses: "Rocket fuel and production of ammonia for fertilizers.", fact: "Hydrogen gas is the lightest known substance.", bondAngle: "N/A", meltingPoint: 14.01, boilingPoint: 20.28 },
  "oxygen": { uses: "Essential for respiration and used in steelmaking.", fact: "Liquid oxygen is pale blue and strongly paramagnetic.", bondAngle: "N/A", meltingPoint: 54.36, boilingPoint: 90.188 },
  "nitrogen": { uses: "Used to create inert atmospheres and produce ammonia.", fact: "Nitrogen gas makes up 78% of Earth's atmosphere.", bondAngle: "N/A", meltingPoint: 63.15, boilingPoint: 77.35 },
  "fluorine": { uses: "Used in uranium enrichment and manufacturing Teflon.", fact: "Fluorine gas is so reactive it can burn glass and water.", bondAngle: "N/A", meltingPoint: 53.48, boilingPoint: 85.03 },
  "chlorine": { uses: "Used for water purification and manufacturing PVC.", fact: "Chlorine was the first poison gas used in warfare.", bondAngle: "N/A", meltingPoint: 171.6, boilingPoint: 239.11 },
  "carbon-monoxide": { uses: "Industrial reducing agent in metallurgy.", fact: "Carbon monoxide binds to hemoglobin 200 times stronger than oxygen.", bondAngle: "N/A", meltingPoint: 68.13, boilingPoint: 81.62 },
  "nitric-oxide": { uses: "Important signaling molecule in human physiology.", fact: "Nitric oxide is an unusual free radical gas that is vital for blood pressure regulation.", bondAngle: "N/A", meltingPoint: 109.5, boilingPoint: 121.9 },
  "hydrogen-chloride": { uses: "Used to produce hydrochloric acid for pickling steel.", fact: "Hydrogen chloride fumes instantly upon contact with moisture in the air.", bondAngle: "N/A", meltingPoint: 158.9, boilingPoint: 188.1 },
  "hydrogen-fluoride": { uses: "Used to etch glass and produce fluorocarbons.", fact: "Hydrogen fluoride can dissolve most oxides, including those of glass.", bondAngle: "N/A", meltingPoint: 189.6, boilingPoint: 292.67 },
  "hydrogen-bromide": { uses: "Used in the synthesis of organic bromides.", fact: "Hydrogen bromide is a highly corrosive and fuming gas.", bondAngle: "N/A", meltingPoint: 184.2, boilingPoint: 206.2 },
  "hydrogen-iodide": { uses: "Used illegally to reduce ephedrine to methamphetamine.", fact: "Hydrogen iodide is a colorless gas that reacts rapidly with oxygen.", bondAngle: "N/A", meltingPoint: 222.3, boilingPoint: 237.7 },
  "ozone": { uses: "Used as a powerful oxidant for water purification.", fact: "The ozone layer protects Earth from harmful ultraviolet radiation.", bondAngle: "116.8°", meltingPoint: 80.5, boilingPoint: 161.3 },
  "hydrogen-peroxide": { uses: "Used as a mild antiseptic and industrial bleach.", fact: "Pure hydrogen peroxide can decompose explosively.", bondAngle: "94.8°", meltingPoint: 272.72, boilingPoint: 423.35 },
  "nitrous-oxide": { uses: "Used as 'laughing gas' in dentistry and in rocket motors.", fact: "Nitrous oxide is a significant greenhouse gas with 300 times the warming potential of CO2.", bondAngle: "180°", meltingPoint: 182.3, boilingPoint: 184.67 },
  "nitrogen-dioxide": { uses: "Intermediate in the industrial synthesis of nitric acid.", fact: "Nitrogen dioxide is a toxic, reddish-brown gas prominent in urban smog.", bondAngle: "134.3°", meltingPoint: 261.9, boilingPoint: 294.3 },
  "dinitrogen-tetroxide": { uses: "Used as a hypergolic oxidizer in rocket propulsion.", fact: "Dinitrogen tetroxide exists in an equilibrium mixture with nitrogen dioxide.", bondAngle: "134.3°", meltingPoint: 261.9, boilingPoint: 294.3 },
  "sulfur-dioxide": { uses: "Used as a preservative in dried fruits and winemaking.", fact: "Sulfur dioxide is the primary cause of acid rain.", bondAngle: "119°", meltingPoint: 197.6, boilingPoint: 263.1 },
  "sulfur-trioxide": { uses: "Crucial precursor to sulfuric acid.", fact: "Sulfur trioxide forms dense white fumes when reacting with moisture in air.", bondAngle: "120°", meltingPoint: 289.9, boilingPoint: 318.0 },
  "ammonia": { uses: "Primary ingredient in modern synthetic fertilizers.", fact: "The Haber process produces over 175 million tonnes of ammonia annually.", bondAngle: "107°", meltingPoint: 195.4, boilingPoint: 239.8 },
  "phosphine": { uses: "Used as an extremely toxic agricultural fumigant.", fact: "Phosphine gas smells like rotting fish or garlic.", bondAngle: "93.5°", meltingPoint: 139.3, boilingPoint: 185.3 },
  "hydrogen-sulfide": { uses: "Used to extract sulfur and produce organic sulfur compounds.", fact: "Hydrogen sulfide is the toxic gas responsible for the smell of rotten eggs.", bondAngle: "92.1°", meltingPoint: 190.9, boilingPoint: 213.1 },
  "water": { uses: "Universal solvent, essential for all known forms of life.", fact: "Water is the only common substance that exists as solid, liquid, and gas in normal Earth conditions.", bondAngle: "104.5°", meltingPoint: 273.15, boilingPoint: 373.15 },
  "carbon-dioxide": { uses: "Used in carbonated beverages and fire extinguishers.", fact: "Solid carbon dioxide is known as dry ice and sublimates without melting.", bondAngle: "180°", meltingPoint: 194.65, boilingPoint: 194.65 },
  "silicon-dioxide": { uses: "Primary component of sand, used extensively in making glass.", fact: "Quartz is a crystallized form of silicon dioxide.", bondAngle: "109.5°", meltingPoint: 1983, boilingPoint: 2503 },
  "iron-iii-oxide": { uses: "Used as a pigment and core ore in steelmaking.", fact: "Iron(III) oxide is responsible for the red color of the planet Mars.", bondAngle: "N/A", meltingPoint: 1838, boilingPoint: null },
  "magnesium-oxide": { uses: "Used in firebrick and as a supplement for magnesium deficiency.", fact: "Magnesium oxide is extremely heat-resistant with a melting point over 2800 °C.", bondAngle: "N/A", meltingPoint: 3125, boilingPoint: 3873 },
  "calcium-oxide": { uses: "Used in making cement and regulating soil acidity.", fact: "Calcium oxide emits an intense white light when heated, known as 'limelight'.", bondAngle: "N/A", meltingPoint: 2886, boilingPoint: 3123 },
  "nitric-acid": { uses: "Used extensively to manufacture fertilizers and explosives.", fact: "Nitric acid will dissolve most metals, turning yellow as it decomposes.", bondAngle: "130°", meltingPoint: 231, boilingPoint: 356 },
  "sulfuric-acid": { uses: "Industrial chemical for fertilizers, batteries, and ore processing.", fact: "Sulfuric acid production is often used as a metric of a nation's industrial strength.", bondAngle: "109.5°", meltingPoint: 283.5, boilingPoint: 610 },
  "phosphoric-acid": { uses: "Used in cola beverages to provide a tangy flavor.", fact: "Phosphoric acid is the key component of DNA's phosphate backbone.", bondAngle: "109.5°", meltingPoint: 315.5, boilingPoint: 431 },
  "carbonic-acid": { uses: "Forms naturally in blood to help transport CO2.", fact: "Carbonic acid exists only in solution and cannot be isolated as a pure compound.", bondAngle: "120°", meltingPoint: null, boilingPoint: null },
  "perchloric-acid": { uses: "Used in preparing perchlorate salts for rocket fuel.", fact: "Hot concentrated perchloric acid is an extremely dangerous and explosive oxidizer.", bondAngle: "109.5°", meltingPoint: 161, boilingPoint: 476 },
  "sodium-hydroxide": { uses: "Used to make soap, paper, and clear drains (lye).", fact: "Sodium hydroxide dissolves so exothermically it can boil the water it is added to.", bondAngle: "N/A", meltingPoint: 591, boilingPoint: 1661 },
  "potassium-hydroxide": { uses: "Used in manufacturing soft liquid soaps and biodiesel.", fact: "Potassium hydroxide is more soluble than sodium hydroxide.", bondAngle: "N/A", meltingPoint: 633, boilingPoint: 1593 },
  "calcium-hydroxide": { uses: "Used in water treatment and food preparation (pickling).", fact: "A saturated solution of calcium hydroxide is known as limewater.", bondAngle: "N/A", meltingPoint: 853, boilingPoint: null },
  "ammonium-hydroxide": { uses: "Used as a general-purpose household cleaner.", fact: "Ammonium hydroxide is simply a solution of ammonia dissolved in water.", bondAngle: "109.5°", meltingPoint: 195, boilingPoint: null },
  "sodium-chloride": { uses: "Essential dietary mineral and winter road de-icer.", fact: "Sodium chloride crystals are perfectly cubic at the microscopic level.", bondAngle: "N/A", meltingPoint: 1074, boilingPoint: 1738 },
  "potassium-chloride": { uses: "Used in lethal injections and as a salt substitute.", fact: "Potassium chloride occurs naturally as the mineral sylvite.", bondAngle: "N/A", meltingPoint: 1043, boilingPoint: 1693 },
  "calcium-chloride": { uses: "Used for extreme road de-icing and concrete acceleration.", fact: "Calcium chloride absorbs so much moisture from the air it can dissolve itself into a puddle.", bondAngle: "180°", meltingPoint: 1045, boilingPoint: 2208 },
  "magnesium-chloride": { uses: "Used for dust control and highway de-icing.", fact: "Magnesium chloride is heavily present in seawater.", bondAngle: "180°", meltingPoint: 987, boilingPoint: 1685 },
  "aluminum-chloride": { uses: "Crucial catalyst in Friedel-Crafts alkylation.", fact: "Anhydrous aluminum chloride reacts violently with water to form HCl gas.", bondAngle: "120°", meltingPoint: 465, boilingPoint: null },
  "calcium-carbonate": { uses: "Main component of antacids and chalk.", fact: "Calcium carbonate is the primary substance forming pearls and marine shells.", bondAngle: "120°", meltingPoint: 1100, boilingPoint: null },
  "sodium-bicarbonate": { uses: "Used as baking soda for leavening bread.", fact: "Sodium bicarbonate is used to neutralize chemical spills of acids.", bondAngle: "120°", meltingPoint: 323, boilingPoint: null },
  "potassium-nitrate": { uses: "Major component of gunpowder (saltpeter).", fact: "Potassium nitrate is highly soluble in hot water but barely soluble in cold water.", bondAngle: "120°", meltingPoint: 607, boilingPoint: 673 },
  "copper-ii-sulfate": { uses: "Used as a fungicide and algicide in agriculture.", fact: "Copper(II) sulfate turns completely white when deprived of its hydration water.", bondAngle: "109.5°", meltingPoint: 383, boilingPoint: null },
  "methane": { uses: "Primary component of natural gas used for heating.", fact: "Methane is the simplest hydrocarbon and a potent greenhouse gas.", bondAngle: "109.5°", meltingPoint: 90.7, boilingPoint: 111.6 },
  "ethane": { uses: "Precursor in the production of ethylene (ethene).", fact: "Ethane is the second most abundant component of natural gas.", bondAngle: "109.5°", meltingPoint: 89.89, boilingPoint: 184.5 },
  "ethene": { uses: "Used to force the ripening of fruits.", fact: "Ethene is the most produced organic compound in the world, largely for polyethylene.", bondAngle: "120°", meltingPoint: 104.0, boilingPoint: 169.5 },
  "ethyne": { uses: "Used in oxy-acetylene torches for high-temperature welding.", fact: "Ethyne (acetylene) burns with an incredibly hot flame reaching 3,150 °C.", bondAngle: "180°", meltingPoint: 192.4, boilingPoint: 189.3 },
  "propane": { uses: "Common fuel for barbecue grills and portable stoves.", fact: "Propane becomes a liquid at relatively low pressure, making it easy to store in tanks.", bondAngle: "109.5°", meltingPoint: 85.5, boilingPoint: 231.0 },
  "butane": { uses: "Used as fuel in pocket lighters and camping stoves.", fact: "Butane is often blended with propane to create LPG.", bondAngle: "109.5°", meltingPoint: 134.9, boilingPoint: 272.0 },
  "benzene": { uses: "Precursor to many chemicals including plastics and drugs.", fact: "Benzene has a distinct hexagonal ring structure representing aromaticity.", bondAngle: "120°", meltingPoint: 278.6, boilingPoint: 353.2 },
  "methanol": { uses: "Used as racing fuel and antifreeze.", fact: "Methanol is highly toxic and can cause permanent blindness if ingested.", bondAngle: "109°", meltingPoint: 175.6, boilingPoint: 337.8 },
  "ethanol": { uses: "The active ingredient in alcoholic beverages and a common biofuel.", fact: "Ethanol is an effective psychoactive drug when consumed.", bondAngle: "109°", meltingPoint: 159.0, boilingPoint: 351.5 },
  "acetic-acid": { uses: "Gives vinegar its sour taste and pungent smell.", fact: "Pure acetic acid is called glacial acetic acid because it freezes into ice-like crystals.", bondAngle: "109.5°", meltingPoint: 289.8, boilingPoint: 391.2 },
  "acetone": { uses: "A highly effective solvent, commonly used in nail polish remover.", fact: "Acetone is naturally produced in the human body during fat metabolism.", bondAngle: "120°", meltingPoint: 178.5, boilingPoint: 329.2 },
  "formaldehyde": { uses: "Used in embalming fluid to preserve biological specimens.", fact: "Formaldehyde is the simplest aldehyde.", bondAngle: "120°", meltingPoint: 181, boilingPoint: 254 },
  "chloroform": { uses: "Historically used as an inhaled anesthetic.", fact: "Chloroform reacts with oxygen in light to form highly toxic phosgene gas.", bondAngle: "109.5°", meltingPoint: 209.7, boilingPoint: 334.3 },
  "carbon-tetrachloride": { uses: "Historically used in fire extinguishers and dry cleaning.", fact: "Carbon tetrachloride is no longer widely used due to its severe toxicity and ozone-depleting properties.", bondAngle: "109.5°", meltingPoint: 250, boilingPoint: 349.8 },
  "glucose": { uses: "Primary energy source for cellular respiration in biology.", fact: "The brain relies almost entirely on glucose as its energy supply.", bondAngle: "109.5°", meltingPoint: 419, boilingPoint: null },
  "urea": { uses: "Highly concentrated nitrogen fertilizer.", fact: "Urea was the first organic compound to be artificially synthesized from inorganic starting materials.", bondAngle: "120°", meltingPoint: 406, boilingPoint: null },
  "caffeine": { uses: "Consumed universally as a central nervous system stimulant.", fact: "Caffeine works by blocking adenosine receptors in the brain to prevent drowsiness.", bondAngle: "120°", meltingPoint: 511, boilingPoint: 451 },
  "acetonitrile": { uses: "Widely used as a solvent in high-performance liquid chromatography (HPLC).", fact: "Acetonitrile is the simplest organic nitrile.", bondAngle: "180°", meltingPoint: 227.4, boilingPoint: 354.8 },
  "hydrogen-cyanide": { uses: "Used in the industrial production of polyurethanes and plastics.", fact: "Hydrogen cyanide smells like bitter almonds, but a significant portion of the population cannot detect it.", bondAngle: "180°", meltingPoint: 259.8, boilingPoint: 299 },
};

async function patch() {
  console.log('Fetching Periodic Table JSON for elements...');
  const res = await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json');
  const ptData = await res.json();

  console.log('Patching ELEMENTS...');
  for (const el of ELEMENTS) {
    const ptd = ptData.elements.find((e: any) => e.number === el.atomicNumber);
    if (ptd) {
      el.electronegativity = ptd.electronegativity || null;
      el.atomicRadius = ptd.atomic_radius || null;
      el.covalentRadius = ptd.covalent_radius || null;
      el.oxidationStates = ptd.oxidation_states ? (typeof ptd.oxidation_states === 'string' ? ptd.oxidation_states.split(',').map(Number) : ptd.oxidation_states) : [];
    }
    const myData = ELEMENT_DATA[el.atomicNumber];
    if (myData) {
      el.vanDerWaalsRadius = myData.vanDerWaalsRadius;
      el.funFact = myData.funFact;
    }
  }

  const elementsOut = `// VERIFIED: 118 elements, shells sum == atomicNumber for each.
import { Element } from '../types';

export const ELEMENTS: Element[] = ${JSON.stringify(ELEMENTS, null, 2)};
`;

  fs.writeFileSync(path.resolve('src/data/elements.ts'), elementsOut);
  console.log('Updated src/data/elements.ts');

  console.log('Patching MOLECULES...');
  for (const mol of MOLECULES) {
    const md = MOLECULE_DATA[mol.id];
    if (md) {
      mol.uses = md.uses;
      mol.fact = md.fact;
      mol.bondAngle = md.bondAngle;
      mol.meltingPoint = md.meltingPoint;
      mol.boilingPoint = md.boilingPoint;
    }
  }

  const moleculesOut = `import { Molecule } from '../types';

export const MOLECULES: Molecule[] = ${JSON.stringify(MOLECULES, null, 2)};
`;

  fs.writeFileSync(path.resolve('src/data/molecules.ts'), moleculesOut);
  console.log('Updated src/data/molecules.ts');
}

patch().catch(console.error);
