import { Molecule } from '../types';

export const MOLECULES: Molecule[] = [
  {
    "id": "hydrogen",
    "name": "Hydrogen",
    "iupacName": "molecular hydrogen",
    "formula": "H₂",
    "hillFormula": "H2",
    "molarMass": 2.016,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 14.01,
    "boilingPoint": 20.28,
    "uses": "Rocket fuel and production of ammonia for fertilizers.",
    "fact": "Hydrogen gas is the lightest known substance.",
    "atoms": [
      {
        "id": 1,
        "element": "H",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 3,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "oxygen",
    "name": "Oxygen",
    "iupacName": "molecular oxygen",
    "formula": "O₂",
    "hillFormula": "O2",
    "molarMass": 31.999,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 54.36,
    "boilingPoint": 90.188,
    "uses": "Essential for respiration and used in steelmaking.",
    "fact": "Liquid oxygen is pale blue and strongly paramagnetic.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.616,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 0.616,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitrogen",
    "name": "Nitrogen",
    "iupacName": "molecular nitrogen",
    "formula": "N₂",
    "hillFormula": "N2",
    "molarMass": 28.014,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 63.15,
    "boilingPoint": 77.35,
    "uses": "Used to create inert atmospheres and produce ammonia.",
    "fact": "Nitrogen gas makes up 78% of Earth's atmosphere.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -0.556,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": 0.556,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 3,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "fluorine",
    "name": "Fluorine",
    "iupacName": "molecular fluorine",
    "formula": "F₂",
    "hillFormula": "F2",
    "molarMass": 37.99680632,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 53.48,
    "boilingPoint": 85.03,
    "uses": "Used in uranium enrichment and manufacturing Teflon.",
    "fact": "Fluorine gas is so reactive it can burn glass and water.",
    "atoms": [
      {
        "id": 1,
        "element": "F",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "F",
        "x": 3,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "chlorine",
    "name": "Chlorine",
    "iupacName": "molecular chlorine",
    "formula": "Cl₂",
    "hillFormula": "Cl2",
    "molarMass": 70.9,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 171.6,
    "boilingPoint": 239.11,
    "uses": "Used for water purification and manufacturing PVC.",
    "fact": "Chlorine was the first poison gas used in warfare.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": -1.0061,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 1.0061,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "carbon-monoxide",
    "name": "Carbon Monoxide",
    "iupacName": "carbon monoxide",
    "formula": "CO",
    "hillFormula": "CO",
    "molarMass": 28.01,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 68.13,
    "boilingPoint": 81.62,
    "uses": "Industrial reducing agent in metallurgy.",
    "fact": "Carbon monoxide binds to hemoglobin 200 times stronger than oxygen.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.5285,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.5285,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 3,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitric-oxide",
    "name": "Nitric Oxide",
    "iupacName": "nitric oxide",
    "formula": "NO",
    "hillFormula": "NO",
    "molarMass": 30.006,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 109.5,
    "boilingPoint": 121.9,
    "uses": "Important signaling molecule in human physiology.",
    "fact": "Nitric oxide is an unusual free radical gas that is vital for blood pressure regulation.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": 2,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-chloride",
    "name": "Hydrogen Chloride",
    "iupacName": "chlorane",
    "formula": "HCl",
    "hillFormula": "ClH",
    "molarMass": 36.46,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 158.9,
    "boilingPoint": 188.1,
    "uses": "Used to produce hydrochloric acid for pickling steel.",
    "fact": "Hydrogen chloride fumes instantly upon contact with moisture in the air.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.6058,
        "y": -0.2053,
        "z": -1.1384
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-fluoride",
    "name": "Hydrogen Fluoride",
    "iupacName": "fluorane",
    "formula": "HF",
    "hillFormula": "FH",
    "molarMass": 20.0064,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 189.6,
    "boilingPoint": 292.67,
    "uses": "Used to etch glass and produce fluorocarbons.",
    "fact": "Hydrogen fluoride can dissolve most oxides, including those of glass.",
    "atoms": [
      {
        "id": 1,
        "element": "F",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.4358,
        "y": -0.1477,
        "z": -0.8188
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-bromide",
    "name": "Hydrogen Bromide",
    "iupacName": "bromane",
    "formula": "HBr",
    "hillFormula": "BrH",
    "molarMass": 80.91,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 184.2,
    "boilingPoint": 206.2,
    "uses": "Used in the synthesis of organic bromides.",
    "fact": "Hydrogen bromide is a highly corrosive and fuming gas.",
    "atoms": [
      {
        "id": 1,
        "element": "Br",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.6731,
        "y": -0.2281,
        "z": -1.2649
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-iodide",
    "name": "Hydrogen Iodide",
    "iupacName": "iodane",
    "formula": "HI",
    "hillFormula": "HI",
    "molarMass": 127.9124,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 222.3,
    "boilingPoint": 237.7,
    "uses": "Used illegally to reduce ephedrine to methamphetamine.",
    "fact": "Hydrogen iodide is a colorless gas that reacts rapidly with oxygen.",
    "atoms": [
      {
        "id": 1,
        "element": "I",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.7665,
        "y": -0.2597,
        "z": -1.4401
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ozone",
    "name": "Ozone",
    "iupacName": "ozone",
    "formula": "O₃",
    "hillFormula": "O3",
    "molarMass": 47.998,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "116.8°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 80.5,
    "boilingPoint": 161.3,
    "uses": "Used as a powerful oxidant for water purification.",
    "fact": "The ozone layer protects Earth from harmful ultraviolet radiation.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.095,
        "y": -0.4943,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.1489,
        "y": 0.2152,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.054,
        "y": 0.2791,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-peroxide",
    "name": "Hydrogen Peroxide",
    "iupacName": "hydrogen peroxide",
    "formula": "H₂O₂",
    "hillFormula": "H2O2",
    "molarMass": 34.015,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "94.8°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 272.72,
    "boilingPoint": 423.35,
    "uses": "Used as a mild antiseptic and industrial bleach.",
    "fact": "Pure hydrogen peroxide can decompose explosively.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.7247,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.7247,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.8233,
        "y": -0.7,
        "z": -0.6676
      },
      {
        "id": 4,
        "element": "H",
        "x": -0.8233,
        "y": -0.6175,
        "z": 0.7446
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitrous-oxide",
    "name": "Nitrous Oxide",
    "iupacName": "nitrous oxide",
    "formula": "N₂O",
    "hillFormula": "N2O",
    "molarMass": 44.013,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 182.3,
    "boilingPoint": 184.67,
    "uses": "Used as 'laughing gas' in dentistry and in rocket motors.",
    "fact": "Nitrous oxide is a significant greenhouse gas with 300 times the warming potential of CO2.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.3063,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": -0.1096,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "N",
        "x": -1.1967,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 3,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitrogen-dioxide",
    "name": "Nitrogen Dioxide",
    "iupacName": "Nitrogen Dioxide",
    "formula": "NO₂",
    "hillFormula": "NO2",
    "molarMass": 46.006,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "134.3°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 261.9,
    "boilingPoint": 294.3,
    "uses": "Intermediate in the industrial synthesis of nitric acid.",
    "fact": "Nitrogen dioxide is a toxic, reddish-brown gas prominent in urban smog.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 3.7321,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "N",
        "x": 2.866,
        "y": -0.25,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "dinitrogen-tetroxide",
    "name": "Dinitrogen Tetroxide",
    "iupacName": "Dinitrogen Tetroxide",
    "formula": "N₂O₄",
    "hillFormula": "N2O4",
    "molarMass": 92.011,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "134.3°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 261.9,
    "boilingPoint": 294.3,
    "uses": "Used as a hypergolic oxidizer in rocket propulsion.",
    "fact": "Dinitrogen tetroxide exists in an equilibrium mixture with nitrogen dioxide.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.3085,
        "y": 1.1031,
        "z": 0.0005
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.3084,
        "y": 1.1031,
        "z": -0.0005
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.3085,
        "y": -1.1032,
        "z": -0.0007
      },
      {
        "id": 4,
        "element": "O",
        "x": 1.3085,
        "y": -1.1031,
        "z": 0.0007
      },
      {
        "id": 5,
        "element": "N",
        "x": -0.749,
        "y": 0,
        "z": 0.0003
      },
      {
        "id": 6,
        "element": "N",
        "x": 0.749,
        "y": 0,
        "z": -0.0003
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 6,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sulfur-dioxide",
    "name": "Sulfur Dioxide",
    "iupacName": "sulfur dioxide",
    "formula": "SO₂",
    "hillFormula": "O2S",
    "molarMass": 64.07,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "119°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 197.6,
    "boilingPoint": 263.1,
    "uses": "Used as a preservative in dried fruits and winemaking.",
    "fact": "Sulfur dioxide is the primary cause of acid rain.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 0,
        "y": -0.5774,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.3091,
        "y": 0.2887,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.3091,
        "y": 0.2887,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sulfur-trioxide",
    "name": "Sulfur Trioxide",
    "iupacName": "sulfur trioxide",
    "formula": "SO₃",
    "hillFormula": "O3S",
    "molarMass": 80.07,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 289.9,
    "boilingPoint": 318,
    "uses": "Crucial precursor to sulfuric acid.",
    "fact": "Sulfur trioxide forms dense white fumes when reacting with moisture in air.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 0,
        "y": 0,
        "z": -0.0003
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.6552,
        "y": -1.2949,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "O",
        "x": -0.7939,
        "y": 1.2148,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "O",
        "x": 1.4491,
        "y": 0.0801,
        "z": 0.0001
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ammonia",
    "name": "Ammonia",
    "iupacName": "azane",
    "formula": "NH₃",
    "hillFormula": "H3N",
    "molarMass": 17.031,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "trigonal-pyramidal",
    "hybridization": "none",
    "bondAngle": "107°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 195.4,
    "boilingPoint": 239.8,
    "uses": "Primary ingredient in modern synthetic fertilizers.",
    "fact": "The Haber process produces over 175 million tonnes of ammonia annually.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": -0.4417,
        "y": 0.2906,
        "z": 0.8711
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.7256,
        "y": 0.6896,
        "z": -0.1907
      },
      {
        "id": 4,
        "element": "H",
        "x": 0.4875,
        "y": -0.8701,
        "z": 0.2089
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "phosphine",
    "name": "Phosphine",
    "iupacName": "phosphane",
    "formula": "PH₃",
    "hillFormula": "H3P",
    "molarMass": 33.998,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "trigonal-pyramidal",
    "hybridization": "none",
    "bondAngle": "93.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 139.3,
    "boilingPoint": 185.3,
    "uses": "Used as an extremely toxic agricultural fumigant.",
    "fact": "Phosphine gas smells like rotting fish or garlic.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "P",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": -0.6323,
        "y": 0.513,
        "z": 1.1573
      },
      {
        "id": 3,
        "element": "H",
        "x": 1.2032,
        "y": 0.7159,
        "z": 0.2052
      },
      {
        "id": 4,
        "element": "H",
        "x": 0.461,
        "y": -1.1757,
        "z": 0.6383
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-sulfide",
    "name": "Hydrogen Sulfide",
    "iupacName": "sulfane",
    "formula": "H₂S",
    "hillFormula": "H2S",
    "molarMass": 34.08,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "92.1°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 190.9,
    "boilingPoint": 213.1,
    "uses": "Used to extract sulfur and produce organic sulfur compounds.",
    "fact": "Hydrogen sulfide is the toxic gas responsible for the smell of rotten eggs.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.4855,
        "y": 1.2232,
        "z": 0.2576
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.8868,
        "y": -0.2325,
        "z": -0.9787
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "water",
    "name": "Water",
    "iupacName": "oxidane",
    "formula": "H₂O",
    "hillFormula": "H2O",
    "molarMass": 18.015,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "none",
    "bondAngle": "104.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 273.15,
    "boilingPoint": 373.15,
    "uses": "Universal solvent, essential for all known forms of life.",
    "fact": "Water is the only common substance that exists as solid, liquid, and gas in normal Earth conditions.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.2774,
        "y": 0.8929,
        "z": 0.2544
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.6068,
        "y": -0.2383,
        "z": -0.7169
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "carbon-dioxide",
    "name": "Carbon Dioxide",
    "iupacName": "carbon dioxide",
    "formula": "CO₂",
    "hillFormula": "CO2",
    "molarMass": 44.009,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 194.65,
    "boilingPoint": 194.65,
    "uses": "Used in carbonated beverages and fire extinguishers.",
    "fact": "Solid carbon dioxide is known as dry ice and sublimates without melting.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.197,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.197,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "silicon-dioxide",
    "name": "Silicon Dioxide",
    "iupacName": "dioxosilane",
    "formula": "SiO₂",
    "hillFormula": "O2Si",
    "molarMass": 60.084,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1983,
    "boilingPoint": 2503,
    "uses": "Primary component of sand, used extensively in making glass.",
    "fact": "Quartz is a crystallized form of silicon dioxide.",
    "atoms": [
      {
        "id": 1,
        "element": "Si",
        "x": 0,
        "y": -0.5548,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.2172,
        "y": 0.2774,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.2171,
        "y": 0.2774,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "iron-iii-oxide",
    "name": "Iron(III) Oxide",
    "iupacName": "Iron(III) Oxide",
    "formula": "Fe₂O₃",
    "hillFormula": "Fe2O3",
    "molarMass": 0,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1838,
    "boilingPoint": null,
    "uses": "Used as a pigment and core ore in steelmaking.",
    "fact": "Iron(III) oxide is responsible for the red color of the planet Mars.",
    "atoms": [],
    "bonds": []
  },
  {
    "id": "magnesium-oxide",
    "name": "Magnesium Oxide",
    "iupacName": "oxomagnesium",
    "formula": "MgO",
    "hillFormula": "MgO",
    "molarMass": 40.305,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 3125,
    "boilingPoint": 3873,
    "uses": "Used in firebrick and as a supplement for magnesium deficiency.",
    "fact": "Magnesium oxide is extremely heat-resistant with a melting point over 2800 °C.",
    "atoms": [
      {
        "id": 1,
        "element": "Mg",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 3,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "calcium-oxide",
    "name": "Calcium Oxide",
    "iupacName": "oxocalcium",
    "formula": "CaO",
    "hillFormula": "CaO",
    "molarMass": 56.08,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 2886,
    "boilingPoint": 3123,
    "uses": "Used in making cement and regulating soil acidity.",
    "fact": "Calcium oxide emits an intense white light when heated, known as 'limelight'.",
    "atoms": [
      {
        "id": 1,
        "element": "Ca",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 3,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitric-acid",
    "name": "Nitric Acid",
    "iupacName": "nitric acid",
    "formula": "HNO₃",
    "hillFormula": "HNO3",
    "molarMass": 63.013,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "130°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 231,
    "boilingPoint": 356,
    "uses": "Used extensively to manufacture fertilizers and explosives.",
    "fact": "Nitric acid will dissolve most metals, turning yellow as it decomposes.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.0416,
        "y": -1.3017,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "O",
        "x": -1.1005,
        "y": 0.6377,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.1387,
        "y": 0.5685,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "N",
        "x": 0.0034,
        "y": 0.0956,
        "z": -0.0004
      },
      {
        "id": 5,
        "element": "H",
        "x": 0.9095,
        "y": -1.5016,
        "z": 0.0002
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sulfuric-acid",
    "name": "Sulfuric Acid",
    "iupacName": "sulfuric acid",
    "formula": "H₂SO₄",
    "hillFormula": "H2O4S",
    "molarMass": 98.08,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 283.5,
    "boilingPoint": 610,
    "uses": "Industrial chemical for fertilizers, batteries, and ore processing.",
    "fact": "Sulfuric acid production is often used as a metric of a nation's industrial strength.",
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 0.0002,
        "y": -0.0002,
        "z": -0.1181
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.2744,
        "y": 0.0355,
        "z": 0.8975
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.2765,
        "y": -0.0326,
        "z": 0.8949
      },
      {
        "id": 4,
        "element": "O",
        "x": -0.0336,
        "y": 1.2577,
        "z": -0.8391
      },
      {
        "id": 5,
        "element": "O",
        "x": 0.0354,
        "y": -1.2604,
        "z": -0.8351
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.2111,
        "y": 0.6912,
        "z": 1.6312
      },
      {
        "id": 7,
        "element": "H",
        "x": -1.2148,
        "y": -0.6859,
        "z": 1.6307
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "phosphoric-acid",
    "name": "Phosphoric Acid",
    "iupacName": "phosphoric acid",
    "formula": "H₃PO₄",
    "hillFormula": "H3O4P",
    "molarMass": 97.995,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 315.5,
    "boilingPoint": 431,
    "uses": "Used in cola beverages to provide a tangy flavor.",
    "fact": "Phosphoric acid is the key component of DNA's phosphate backbone.",
    "atoms": [
      {
        "id": 1,
        "element": "P",
        "x": 0.0936,
        "y": -0.0002,
        "z": -0.0071
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.6464,
        "y": -0.865,
        "z": -1.1531
      },
      {
        "id": 3,
        "element": "O",
        "x": -0.5406,
        "y": -0.5569,
        "z": 1.3712
      },
      {
        "id": 4,
        "element": "O",
        "x": -0.4998,
        "y": 1.4936,
        "z": -0.159
      },
      {
        "id": 5,
        "element": "O",
        "x": 1.5932,
        "y": -0.0714,
        "z": -0.052
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.6269,
        "y": -0.8815,
        "z": -1.1776
      },
      {
        "id": 7,
        "element": "H",
        "x": -1.5153,
        "y": -0.5509,
        "z": 1.482
      },
      {
        "id": 8,
        "element": "H",
        "x": -0.1382,
        "y": 2.0806,
        "z": -0.8567
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 8,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "carbonic-acid",
    "name": "Carbonic Acid",
    "iupacName": "carbonic acid",
    "formula": "H₂CO₃",
    "hillFormula": "CH2O3",
    "molarMass": 62.025,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": null,
    "boilingPoint": null,
    "uses": "Forms naturally in blood to help transport CO2.",
    "fact": "Carbonic acid exists only in solution and cannot be isolated as a pure compound.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.6954,
        "y": -1.1061,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.6949,
        "y": 1.1064,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.3055,
        "y": -0.0003,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.0847,
        "y": 0,
        "z": -0.0001
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.1635,
        "y": -1.9304,
        "z": 0.0001
      },
      {
        "id": 6,
        "element": "H",
        "x": -0.1627,
        "y": 1.9305,
        "z": 0.0001
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "perchloric-acid",
    "name": "Perchloric Acid",
    "iupacName": "perchloric acid",
    "formula": "HClO₄",
    "hillFormula": "ClHO4",
    "molarMass": 100.46,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 161,
    "boilingPoint": 476,
    "uses": "Used in preparing perchlorate salts for rocket fuel.",
    "fact": "Hot concentrated perchloric acid is an extremely dangerous and explosive oxidizer.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 2.866,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 3.7321,
        "y": 0.5,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 2,
        "y": -0.5,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 2.366,
        "y": 0.866,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 3.366,
        "y": -0.866,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 4.269,
        "y": 0.19,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sodium-hydroxide",
    "name": "Sodium Hydroxide",
    "iupacName": "sodium hydroxide",
    "formula": "NaOH",
    "hillFormula": "HNaO",
    "molarMass": 39.997,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 591,
    "boilingPoint": 1661,
    "uses": "Used to make soap, paper, and clear drains (lye).",
    "fact": "Sodium hydroxide dissolves so exothermically it can boil the water it is added to.",
    "atoms": [
      {
        "id": 1,
        "element": "Na",
        "x": 3.403,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.5369,
        "y": -0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 2,
        "y": 0.06,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-hydroxide",
    "name": "Potassium Hydroxide",
    "iupacName": "potassium hydroxide",
    "formula": "KOH",
    "hillFormula": "HKO",
    "molarMass": 56.106,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 633,
    "boilingPoint": 1593,
    "uses": "Used in manufacturing soft liquid soaps and biodiesel.",
    "fact": "Potassium hydroxide is more soluble than sodium hydroxide.",
    "atoms": [
      {
        "id": 1,
        "element": "K",
        "x": 3.403,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.5369,
        "y": -0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 2,
        "y": 0.06,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "calcium-hydroxide",
    "name": "Calcium Hydroxide",
    "iupacName": "calcium dihydroxide",
    "formula": "Ca(OH)₂",
    "hillFormula": "CaH2O2",
    "molarMass": 74.09,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 853,
    "boilingPoint": null,
    "uses": "Used in water treatment and food preparation (pickling).",
    "fact": "A saturated solution of calcium hydroxide is known as limewater.",
    "atoms": [
      {
        "id": 1,
        "element": "Ca",
        "x": 3.403,
        "y": -0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 4.269,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 2.5369,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": 4.8059,
        "y": -0.06,
        "z": 0
      },
      {
        "id": 5,
        "element": "H",
        "x": 2,
        "y": -0.06,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ammonium-hydroxide",
    "name": "Ammonium Hydroxide",
    "iupacName": "azanium hydroxide",
    "formula": "NH₄OH",
    "hillFormula": "H5NO",
    "molarMass": 35.046,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 195,
    "boilingPoint": null,
    "uses": "Used as a general-purpose household cleaner.",
    "fact": "Ammonium hydroxide is simply a solution of ammonia dissolved in water.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0369,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": 0.5369,
        "y": 3.0369,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 1.0739,
        "y": 3.3469,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": 0,
        "y": 2.7269,
        "z": 0
      },
      {
        "id": 5,
        "element": "H",
        "x": 0.2269,
        "y": 3.5739,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 0.8469,
        "y": 2.5,
        "z": 0
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.0369,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sodium-chloride",
    "name": "Sodium Chloride",
    "iupacName": "sodium chloride",
    "formula": "NaCl",
    "hillFormula": "ClNa",
    "molarMass": 58.44,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1074,
    "boilingPoint": 1738,
    "uses": "Essential dietary mineral and winter road de-icer.",
    "fact": "Sodium chloride crystals are perfectly cubic at the microscopic level.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Na",
        "x": 2,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-chloride",
    "name": "Potassium Chloride",
    "iupacName": "potassium chloride",
    "formula": "KCl",
    "hillFormula": "ClK",
    "molarMass": 74.55,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1043,
    "boilingPoint": 1693,
    "uses": "Used in lethal injections and as a salt substitute.",
    "fact": "Potassium chloride occurs naturally as the mineral sylvite.",
    "atoms": [
      {
        "id": 1,
        "element": "K",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 2,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "calcium-chloride",
    "name": "Calcium Chloride",
    "iupacName": "calcium dichloride",
    "formula": "CaCl₂",
    "hillFormula": "CaCl2",
    "molarMass": 110.98,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1045,
    "boilingPoint": 2208,
    "uses": "Used for extreme road de-icing and concrete acceleration.",
    "fact": "Calcium chloride absorbs so much moisture from the air it can dissolve itself into a puddle.",
    "atoms": [
      {
        "id": 1,
        "element": "Ca",
        "x": 2.866,
        "y": -0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 3.7321,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 2,
        "y": 0.25,
        "z": 0
      }
    ],
    "bonds": []
  },
  {
    "id": "magnesium-chloride",
    "name": "Magnesium Chloride",
    "iupacName": "magnesium dichloride",
    "formula": "MgCl₂",
    "hillFormula": "Cl2Mg",
    "molarMass": 95.21,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 987,
    "boilingPoint": 1685,
    "uses": "Used for dust control and highway de-icing.",
    "fact": "Magnesium chloride is heavily present in seawater.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 3.7321,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 2,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "Mg",
        "x": 2.866,
        "y": -0.25,
        "z": 0
      }
    ],
    "bonds": []
  },
  {
    "id": "aluminum-chloride",
    "name": "Aluminum Chloride",
    "iupacName": "trichloroalumane",
    "formula": "AlCl₃",
    "hillFormula": "AlCl3",
    "molarMass": 133.34,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 465,
    "boilingPoint": null,
    "uses": "Crucial catalyst in Friedel-Crafts alkylation.",
    "fact": "Anhydrous aluminum chloride reacts violently with water to form HCl gas.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 3.7321,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "Al",
        "x": 2.866,
        "y": 0.25,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "calcium-carbonate",
    "name": "Calcium Carbonate",
    "iupacName": "calcium carbonate",
    "formula": "CaCO₃",
    "hillFormula": "CCaO3",
    "molarMass": 100.09,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 1100,
    "boilingPoint": null,
    "uses": "Main component of antacids and chalk.",
    "fact": "Calcium carbonate is the primary substance forming pearls and marine shells.",
    "atoms": [
      {
        "id": 1,
        "element": "Ca",
        "x": 3.7071,
        "y": -0.8536,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.7071,
        "y": -0.8536,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 3.7071,
        "y": 0.1464,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 2,
        "y": 0.8536,
        "z": 0
      },
      {
        "id": 5,
        "element": "C",
        "x": 2.7071,
        "y": 0.1464,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sodium-bicarbonate",
    "name": "Sodium Bicarbonate",
    "iupacName": "sodium hydrogen carbonate",
    "formula": "NaHCO₃",
    "hillFormula": "CHNaO3",
    "molarMass": 84.007,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 323,
    "boilingPoint": null,
    "uses": "Used as baking soda for leavening bread.",
    "fact": "Sodium bicarbonate is used to neutralize chemical spills of acids.",
    "atoms": [
      {
        "id": 1,
        "element": "Na",
        "x": 5.135,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 4.269,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 2.5369,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 3.403,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "C",
        "x": 3.403,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 2,
        "y": 0.44,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-nitrate",
    "name": "Potassium Nitrate",
    "iupacName": "potassium nitrate",
    "formula": "KNO₃",
    "hillFormula": "KNO3",
    "molarMass": 101.103,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 607,
    "boilingPoint": 673,
    "uses": "Major component of gunpowder (saltpeter).",
    "fact": "Potassium nitrate is highly soluble in hot water but barely soluble in cold water.",
    "atoms": [
      {
        "id": 1,
        "element": "K",
        "x": 4.5981,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 3.7321,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "N",
        "x": 2.866,
        "y": 0.25,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "copper-ii-sulfate",
    "name": "Copper(II) Sulfate",
    "iupacName": "copper sulfate",
    "formula": "CuSO₄",
    "hillFormula": "CuO4S",
    "molarMass": 159.61,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 383,
    "boilingPoint": null,
    "uses": "Used as a fungicide and algicide in agriculture.",
    "fact": "Copper(II) sulfate turns completely white when deprived of its hydration water.",
    "atoms": [
      {
        "id": 1,
        "element": "Cu",
        "x": 2,
        "y": -1,
        "z": 0
      },
      {
        "id": 2,
        "element": "S",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 3,
        "y": -1,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 4,
        "y": 0,
        "z": 0
      },
      {
        "id": 6,
        "element": "O",
        "x": 3,
        "y": 1,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "methane",
    "name": "Methane",
    "iupacName": "methane",
    "formula": "CH₄",
    "hillFormula": "CH4",
    "molarMass": 16.043,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 90.7,
    "boilingPoint": 111.6,
    "uses": "Primary component of natural gas used for heating.",
    "fact": "Methane is the simplest hydrocarbon and a potent greenhouse gas.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.5541,
        "y": 0.7996,
        "z": 0.4965
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.6833,
        "y": -0.8134,
        "z": -0.2536
      },
      {
        "id": 4,
        "element": "H",
        "x": -0.7782,
        "y": -0.3735,
        "z": 0.6692
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.4593,
        "y": 0.3874,
        "z": -0.9121
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ethane",
    "name": "Ethane",
    "iupacName": "ethane",
    "formula": "C₂H₆",
    "hillFormula": "C2H6",
    "molarMass": 30.07,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 89.89,
    "boilingPoint": 184.5,
    "uses": "Precursor in the production of ethylene (ethene).",
    "fact": "Ethane is the second most abundant component of natural gas.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.756,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.756,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": -1.1404,
        "y": 0.6586,
        "z": 0.7845
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.1404,
        "y": 0.3501,
        "z": -0.9626
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.1405,
        "y": -1.0087,
        "z": 0.1781
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.1404,
        "y": -0.3501,
        "z": 0.9626
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.1405,
        "y": 1.0087,
        "z": -0.1781
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.1404,
        "y": -0.6586,
        "z": -0.7845
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 8,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ethene",
    "name": "Ethene",
    "iupacName": "ethene",
    "formula": "C₂H₄",
    "hillFormula": "C2H4",
    "molarMass": 28.05,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 104,
    "boilingPoint": 169.5,
    "uses": "Used to force the ripening of fruits.",
    "fact": "Ethene is the most produced organic compound in the world, largely for polyethylene.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.6672,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.6672,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": -1.2213,
        "y": -0.929,
        "z": 0.0708
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.2212,
        "y": 0.929,
        "z": -0.0708
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.2213,
        "y": 0.929,
        "z": -0.0708
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.2213,
        "y": -0.929,
        "z": 0.0708
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ethyne",
    "name": "Ethyne",
    "iupacName": "acetylene",
    "formula": "C₂H₂",
    "hillFormula": "C2H2",
    "molarMass": 26.04,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 192.4,
    "boilingPoint": 189.3,
    "uses": "Used in oxy-acetylene torches for high-temperature welding.",
    "fact": "Ethyne (acetylene) burns with an incredibly hot flame reaching 3,150 °C.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.6,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.6,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": -1.665,
        "y": 0,
        "z": -0.0001
      },
      {
        "id": 4,
        "element": "H",
        "x": 1.665,
        "y": 0,
        "z": 0.0001
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 3,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "propane",
    "name": "Propane",
    "iupacName": "propane",
    "formula": "C₃H₈",
    "hillFormula": "C3H8",
    "molarMass": 44.1,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 85.5,
    "boilingPoint": 231,
    "uses": "Common fuel for barbecue grills and portable stoves.",
    "fact": "Propane becomes a liquid at relatively low pressure, making it easy to store in tanks.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0,
        "y": -0.5689,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -1.2571,
        "y": 0.2844,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.2571,
        "y": 0.2845,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": 0,
        "y": -1.2183,
        "z": 0.8824
      },
      {
        "id": 5,
        "element": "H",
        "x": 0,
        "y": -1.2183,
        "z": -0.8824
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.2969,
        "y": 0.9244,
        "z": 0.8873
      },
      {
        "id": 7,
        "element": "H",
        "x": -1.2967,
        "y": 0.9245,
        "z": -0.8872
      },
      {
        "id": 8,
        "element": "H",
        "x": -2.1475,
        "y": -0.352,
        "z": -0.0001
      },
      {
        "id": 9,
        "element": "H",
        "x": 2.1475,
        "y": -0.352,
        "z": 0
      },
      {
        "id": 10,
        "element": "H",
        "x": 1.2968,
        "y": 0.9245,
        "z": 0.8872
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.2968,
        "y": 0.9245,
        "z": -0.8872
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 11,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "butane",
    "name": "Butane",
    "iupacName": "butane",
    "formula": "C₄H₁₀",
    "hillFormula": "C4H10",
    "molarMass": 58.12,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 134.9,
    "boilingPoint": 272,
    "uses": "Used as fuel in pocket lighters and camping stoves.",
    "fact": "Butane is often blended with propane to create LPG.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.563,
        "y": 0.516,
        "z": 0.0071
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.563,
        "y": -0.5159,
        "z": 0.0071
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.9293,
        "y": -0.1506,
        "z": -0.0071
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.9294,
        "y": 0.1505,
        "z": -0.0071
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.4724,
        "y": 1.1666,
        "z": -0.8706
      },
      {
        "id": 6,
        "element": "H",
        "x": -0.4825,
        "y": 1.1551,
        "z": 0.894
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.4825,
        "y": -1.1551,
        "z": 0.894
      },
      {
        "id": 8,
        "element": "H",
        "x": 0.4723,
        "y": -1.1665,
        "z": -0.8706
      },
      {
        "id": 9,
        "element": "H",
        "x": -2.0542,
        "y": -0.771,
        "z": -0.9003
      },
      {
        "id": 10,
        "element": "H",
        "x": -2.0651,
        "y": -0.7856,
        "z": 0.8742
      },
      {
        "id": 11,
        "element": "H",
        "x": -2.7203,
        "y": 0.606,
        "z": -0.0058
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.0542,
        "y": 0.7709,
        "z": -0.9003
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.7202,
        "y": -0.6062,
        "z": -0.0059
      },
      {
        "id": 14,
        "element": "H",
        "x": 2.0652,
        "y": 0.7854,
        "z": 0.8743
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 14,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "benzene",
    "name": "Benzene",
    "iupacName": "benzene",
    "formula": "C₆H₆",
    "hillFormula": "C6H6",
    "molarMass": 78.11,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 278.6,
    "boilingPoint": 353.2,
    "uses": "Precursor to many chemicals including plastics and drugs.",
    "fact": "Benzene has a distinct hexagonal ring structure representing aromaticity.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -1.2131,
        "y": -0.6884,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -1.2028,
        "y": 0.7064,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.0103,
        "y": -1.3948,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.0104,
        "y": 1.3948,
        "z": -0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.2028,
        "y": -0.7063,
        "z": 0
      },
      {
        "id": 6,
        "element": "C",
        "x": 1.2131,
        "y": 0.6884,
        "z": 0
      },
      {
        "id": 7,
        "element": "H",
        "x": -2.1577,
        "y": -1.2244,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": -2.1393,
        "y": 1.2564,
        "z": 0.0001
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.0184,
        "y": -2.4809,
        "z": -0.0001
      },
      {
        "id": 10,
        "element": "H",
        "x": 0.0184,
        "y": 2.4808,
        "z": 0
      },
      {
        "id": 11,
        "element": "H",
        "x": 2.1394,
        "y": -1.2563,
        "z": 0.0001
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.1577,
        "y": 1.2245,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "methanol",
    "name": "Methanol",
    "iupacName": "methanol",
    "formula": "CH₃OH",
    "hillFormula": "CH4O",
    "molarMass": 32.042,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 175.6,
    "boilingPoint": 337.8,
    "uses": "Used as racing fuel and antifreeze.",
    "fact": "Methanol is highly toxic and can cause permanent blindness if ingested.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.7079,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.7079,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": -1.0732,
        "y": -0.769,
        "z": 0.6852
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.0731,
        "y": -0.1947,
        "z": -1.0113
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.0632,
        "y": 0.9786,
        "z": 0.3312
      },
      {
        "id": 6,
        "element": "H",
        "x": 0.9936,
        "y": -0.8804,
        "z": -0.298
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ethanol",
    "name": "Ethanol",
    "iupacName": "ethanol",
    "formula": "C₂H₅OH",
    "hillFormula": "C2H6O",
    "molarMass": 46.07,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 159,
    "boilingPoint": 351.5,
    "uses": "The active ingredient in alcoholic beverages and a common biofuel.",
    "fact": "Ethanol is an effective psychoactive drug when consumed.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.1712,
        "y": 0.2997,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.0463,
        "y": -0.5665,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.2175,
        "y": 0.2668,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": -0.0958,
        "y": -1.212,
        "z": 0.8819
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.0952,
        "y": -1.1938,
        "z": -0.8946
      },
      {
        "id": 6,
        "element": "H",
        "x": 2.105,
        "y": -0.372,
        "z": -0.0177
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.2426,
        "y": 0.9307,
        "z": -0.8704
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.2616,
        "y": 0.9052,
        "z": 0.8886
      },
      {
        "id": 9,
        "element": "H",
        "x": -1.1291,
        "y": 0.8364,
        "z": 0.8099
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 8,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "acetic-acid",
    "name": "Acetic Acid",
    "iupacName": "acetic acid",
    "formula": "CH₃COOH",
    "hillFormula": "C2H4O2",
    "molarMass": 60.05,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 289.8,
    "boilingPoint": 391.2,
    "uses": "Gives vinegar its sour taste and pungent smell.",
    "fact": "Pure acetic acid is called glacial acetic acid because it freezes into ice-like crystals.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.3035,
        "y": 1.289,
        "z": -0.0002
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.98,
        "y": -0.8878,
        "z": -0.0002
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.3743,
        "y": -0.3516,
        "z": -0.0002
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.0907,
        "y": -0.0496,
        "z": 0.0006
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.8368,
        "y": 0.057,
        "z": -0.9021
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.84,
        "y": 0.0676,
        "z": 0.8952
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.5207,
        "y": -1.4356,
        "z": 0.0064
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.2598,
        "y": 1.5081,
        "z": -0.0008
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "acetone",
    "name": "Acetone",
    "iupacName": "propan-2-one",
    "formula": "CH₃COCH₃",
    "hillFormula": "C3H6O",
    "molarMass": 58.08,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 178.5,
    "boilingPoint": 329.2,
    "uses": "A highly effective solvent, commonly used in nail polish remover.",
    "fact": "Acetone is naturally produced in the human body during fat metabolism.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0003,
        "y": -1.3171,
        "z": -0.0002
      },
      {
        "id": 2,
        "element": "C",
        "x": 0,
        "y": -0.0872,
        "z": 0.0006
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.281,
        "y": 0.7024,
        "z": -0.0002
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.2813,
        "y": 0.7019,
        "z": -0.0002
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.3279,
        "y": 1.3235,
        "z": -0.898
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.326,
        "y": 1.3282,
        "z": 0.8945
      },
      {
        "id": 7,
        "element": "H",
        "x": 2.1351,
        "y": 0.0196,
        "z": 0.0027
      },
      {
        "id": 8,
        "element": "H",
        "x": -2.1352,
        "y": 0.0187,
        "z": 0.0027
      },
      {
        "id": 9,
        "element": "H",
        "x": -1.3284,
        "y": 1.323,
        "z": -0.898
      },
      {
        "id": 10,
        "element": "H",
        "x": -1.3266,
        "y": 1.3278,
        "z": 0.8945
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 10,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "formaldehyde",
    "name": "Formaldehyde",
    "iupacName": "formaldehyde",
    "formula": "CH₂O",
    "hillFormula": "CH2O",
    "molarMass": 30.026,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 181,
    "boilingPoint": 254,
    "uses": "Used in embalming fluid to preserve biological specimens.",
    "fact": "Formaldehyde is the simplest aldehyde.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.6123,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.6123,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": -1.2,
        "y": 0.2426,
        "z": -0.8998
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.2,
        "y": -0.2424,
        "z": 0.8998
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "chloroform",
    "name": "Chloroform",
    "iupacName": "chloroform",
    "formula": "CHCl₃",
    "hillFormula": "CHCl3",
    "molarMass": 119.37,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 209.7,
    "boilingPoint": 334.3,
    "uses": "Historically used as an inhaled anesthetic.",
    "fact": "Chloroform reacts with oxygen in light to form highly toxic phosgene gas.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": -0.0962,
        "y": -1.6789,
        "z": 0.1394
      },
      {
        "id": 2,
        "element": "Cl",
        "x": -1.4059,
        "y": 0.9228,
        "z": 0.1394
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 1.5022,
        "y": 0.7561,
        "z": 0.1393
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.0001,
        "y": 0,
        "z": -0.4181
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.0001,
        "y": -0.0001,
        "z": -1.5111
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "carbon-tetrachloride",
    "name": "Carbon Tetrachloride",
    "iupacName": "tetrachloromethane",
    "formula": "CCl₄",
    "hillFormula": "CCl4",
    "molarMass": 153.8,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 250,
    "boilingPoint": 349.8,
    "uses": "Historically used in fire extinguishers and dry cleaning.",
    "fact": "Carbon tetrachloride is no longer widely used due to its severe toxicity and ozone-depleting properties.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 0.7071,
        "y": 1.2237,
        "z": -1.0849
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 1.3068,
        "y": -0.9165,
        "z": 0.7922
      },
      {
        "id": 3,
        "element": "Cl",
        "x": -1.019,
        "y": -1.1147,
        "z": -0.9456
      },
      {
        "id": 4,
        "element": "Cl",
        "x": -0.9949,
        "y": 0.8076,
        "z": 1.2378
      },
      {
        "id": 5,
        "element": "C",
        "x": 0,
        "y": -0.0002,
        "z": 0.0004
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "glucose",
    "name": "Glucose",
    "iupacName": "(3R,4S,5S,6R)-6-(hydroxymethyl)oxane-2,3,4,5-tetrol",
    "formula": "C₆H₁₂O₆",
    "hillFormula": "C6H12O6",
    "molarMass": 180.16,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 419,
    "boilingPoint": null,
    "uses": "Primary energy source for cellular respiration in biology.",
    "fact": "The brain relies almost entirely on glucose as its energy supply.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.6679,
        "y": 1.1587,
        "z": 0.257
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.887,
        "y": -2.4483,
        "z": -0.3388
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.8623,
        "y": -2.0693,
        "z": 0.4696
      },
      {
        "id": 4,
        "element": "O",
        "x": 2.8609,
        "y": 0.5414,
        "z": -0.4619
      },
      {
        "id": 5,
        "element": "O",
        "x": 1.1222,
        "y": 2.6552,
        "z": 0.2574
      },
      {
        "id": 6,
        "element": "O",
        "x": -3.3742,
        "y": 0.9717,
        "z": -0.1865
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.3727,
        "y": -1.247,
        "z": 0.23
      },
      {
        "id": 8,
        "element": "C",
        "x": 1.0856,
        "y": -1.0709,
        "z": -0.194
      },
      {
        "id": 9,
        "element": "C",
        "x": -1.2211,
        "y": -0.0621,
        "z": -0.2375
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.6082,
        "y": 0.3151,
        "z": 0.1839
      },
      {
        "id": 11,
        "element": "C",
        "x": 0.6388,
        "y": 1.4132,
        "z": -0.2534
      },
      {
        "id": 12,
        "element": "C",
        "x": -2.655,
        "y": -0.1577,
        "z": 0.274
      },
      {
        "id": 13,
        "element": "H",
        "x": -0.4248,
        "y": -1.3522,
        "z": 1.3206
      },
      {
        "id": 14,
        "element": "H",
        "x": 1.2066,
        "y": -1.2487,
        "z": -1.2697
      },
      {
        "id": 15,
        "element": "H",
        "x": -1.2548,
        "y": -0.0098,
        "z": -1.3343
      },
      {
        "id": 16,
        "element": "H",
        "x": 1.7952,
        "y": 0.3598,
        "z": 1.2636
      },
      {
        "id": 17,
        "element": "H",
        "x": 0.5967,
        "y": 1.5141,
        "z": -1.344
      },
      {
        "id": 18,
        "element": "H",
        "x": -2.6916,
        "y": -0.1535,
        "z": 1.3685
      },
      {
        "id": 19,
        "element": "H",
        "x": -3.1564,
        "y": -1.0581,
        "z": -0.0922
      },
      {
        "id": 20,
        "element": "H",
        "x": -0.8514,
        "y": -2.3615,
        "z": -1.3066
      },
      {
        "id": 21,
        "element": "H",
        "x": 1.4973,
        "y": -2.9356,
        "z": 0.22
      },
      {
        "id": 22,
        "element": "H",
        "x": 2.7165,
        "y": 0.4989,
        "z": -1.4227
      },
      {
        "id": 23,
        "element": "H",
        "x": 1.4876,
        "y": 2.5033,
        "z": 1.1448
      },
      {
        "id": 24,
        "element": "H",
        "x": -2.9192,
        "y": 1.7652,
        "z": 0.144
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 19,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "urea",
    "name": "Urea",
    "iupacName": "urea",
    "formula": "CO(NH₂)₂",
    "hillFormula": "CH4N2O",
    "molarMass": 60.056,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 406,
    "boilingPoint": null,
    "uses": "Highly concentrated nitrogen fertilizer.",
    "fact": "Urea was the first organic compound to be artificially synthesized from inorganic starting materials.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.3042,
        "y": -0.0008,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "N",
        "x": 0.6903,
        "y": -1.1479,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "N",
        "x": 0.6888,
        "y": 1.1489,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.0749,
        "y": -0.0001,
        "z": -0.0003
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.7041,
        "y": -1.1111,
        "z": -0.0002
      },
      {
        "id": 6,
        "element": "H",
        "x": 0.2605,
        "y": -2.0669,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.2578,
        "y": 2.0672,
        "z": 0.0002
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.7026,
        "y": 1.1134,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 4,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 8,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "caffeine",
    "name": "Caffeine",
    "iupacName": "1,3,7-trimethylpurine-2,6-dione",
    "formula": "C₈H₁₀N₄O₂",
    "hillFormula": "C8H10N4O2",
    "molarMass": 194.19,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 511,
    "boilingPoint": 451,
    "uses": "Consumed universally as a central nervous system stimulant.",
    "fact": "Caffeine works by blocking adenosine receptors in the brain to prevent drowsiness.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.47,
        "y": 2.5688,
        "z": 0.0006
      },
      {
        "id": 2,
        "element": "O",
        "x": -3.1271,
        "y": -0.4436,
        "z": -0.0003
      },
      {
        "id": 3,
        "element": "N",
        "x": -0.9686,
        "y": -1.3125,
        "z": 0
      },
      {
        "id": 4,
        "element": "N",
        "x": 2.2182,
        "y": 0.1412,
        "z": -0.0003
      },
      {
        "id": 5,
        "element": "N",
        "x": -1.3477,
        "y": 1.0797,
        "z": -0.0001
      },
      {
        "id": 6,
        "element": "N",
        "x": 1.4119,
        "y": -1.9372,
        "z": 0.0002
      },
      {
        "id": 7,
        "element": "C",
        "x": 0.8579,
        "y": 0.2592,
        "z": -0.0008
      },
      {
        "id": 8,
        "element": "C",
        "x": 0.3897,
        "y": -1.0264,
        "z": -0.0004
      },
      {
        "id": 9,
        "element": "C",
        "x": 0.0307,
        "y": 1.422,
        "z": -0.0006
      },
      {
        "id": 10,
        "element": "C",
        "x": -1.9061,
        "y": -0.2495,
        "z": -0.0004
      },
      {
        "id": 11,
        "element": "C",
        "x": 2.5032,
        "y": -1.1998,
        "z": 0.0003
      },
      {
        "id": 12,
        "element": "C",
        "x": -1.4276,
        "y": -2.696,
        "z": 0.0008
      },
      {
        "id": 13,
        "element": "C",
        "x": 3.1926,
        "y": 1.2061,
        "z": 0.0003
      },
      {
        "id": 14,
        "element": "C",
        "x": -2.2969,
        "y": 2.1881,
        "z": 0.0007
      },
      {
        "id": 15,
        "element": "H",
        "x": 3.5163,
        "y": -1.5787,
        "z": 0.0008
      },
      {
        "id": 16,
        "element": "H",
        "x": -1.0451,
        "y": -3.1973,
        "z": -0.8937
      },
      {
        "id": 17,
        "element": "H",
        "x": -2.5186,
        "y": -2.7596,
        "z": 0.0011
      },
      {
        "id": 18,
        "element": "H",
        "x": -1.0447,
        "y": -3.1963,
        "z": 0.8957
      },
      {
        "id": 19,
        "element": "H",
        "x": 4.1992,
        "y": 0.7801,
        "z": 0.0002
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.0468,
        "y": 1.8092,
        "z": -0.8992
      },
      {
        "id": 21,
        "element": "H",
        "x": 3.0466,
        "y": 1.8083,
        "z": 0.9004
      },
      {
        "id": 22,
        "element": "H",
        "x": -1.8087,
        "y": 3.1651,
        "z": -0.0003
      },
      {
        "id": 23,
        "element": "H",
        "x": -2.9322,
        "y": 2.1027,
        "z": 0.8881
      },
      {
        "id": 24,
        "element": "H",
        "x": -2.9346,
        "y": 2.1021,
        "z": -0.8849
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 24,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "acetonitrile",
    "name": "Acetonitrile",
    "iupacName": "acetonitrile",
    "formula": "CH₃CN",
    "hillFormula": "C2H3N",
    "molarMass": 41.05,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 227.4,
    "boilingPoint": 354.8,
    "uses": "Widely used as a solvent in high-performance liquid chromatography (HPLC).",
    "fact": "Acetonitrile is the simplest organic nitrile.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": 1.2608,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -1.3613,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.1006,
        "y": 0,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.75,
        "y": -0.8301,
        "z": 0.5974
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.7501,
        "y": -0.1022,
        "z": -1.0175
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.75,
        "y": 0.9324,
        "z": 0.4202
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 3,
        "order": 3,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 6,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hydrogen-cyanide",
    "name": "Hydrogen Cyanide",
    "iupacName": "formonitrile",
    "formula": "HCN",
    "hillFormula": "CHN",
    "molarMass": 27.025,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "none",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 259.8,
    "boilingPoint": 299,
    "uses": "Used in the industrial production of polyurethanes and plastics.",
    "fact": "Hydrogen cyanide smells like bitter almonds, but a significant portion of the population cannot detect it.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -0.58,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.58,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 1.645,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 3,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 1,
        "type": "covalent"
      }
    ]
  }
];
