import { Molecule } from '../types';

export const MOLECULES: Molecule[] = [
  {
    "id": "hydrogen",
    "name": "Hydrogen",
    "iupacName": "molecular hydrogen",
    "formula": "H₂",
    "hillFormula": "H2",
    "molarMass": 2.016,
    "category": "element (diatomic)",
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
    "category": "element (diatomic)",
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
    "category": "element (diatomic)",
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
    "category": "element (diatomic)",
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
    "category": "element (diatomic)",
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
    "category": "element (allotrope)",
    "bondType": "covalent",
    "geometry": "bent",
    "hybridization": "sp2",
    "bondAngle": "116.8°",
    "polarity": "polar",
    "dipoleMoment": 0.53,
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
    "hybridization": "sp3",
    "bondAngle": "94.8°",
    "polarity": "polar",
    "dipoleMoment": 2.26,
    "standardState": "liquid",
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
    "molarMass": 159.69,
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
  },
  {
    "id": "bromine",
    "name": "Bromine",
    "iupacName": "molecular bromine",
    "formula": "Br₂",
    "hillFormula": "Br2",
    "molarMass": 159.81,
    "category": "element (diatomic)",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 265.8,
    "boilingPoint": 332,
    "uses": "Used in flame retardants and water treatment.",
    "fact": "Bromine is one of only two elements that are liquid at room temperature.",
    "atoms": [
      {
        "id": 1,
        "element": "Br",
        "x": -1.146,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Br",
        "x": 1.146,
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
    "id": "iodine",
    "name": "Iodine",
    "iupacName": "molecular iodine",
    "formula": "I₂",
    "hillFormula": "I2",
    "molarMass": 253.8089,
    "category": "element (diatomic)",
    "bondType": "covalent",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 386.85,
    "boilingPoint": 457.4,
    "uses": "Essential nutrient added to table salt; used as an antiseptic.",
    "fact": "Solid iodine sublimes into a striking violet vapor when gently heated.",
    "atoms": [
      {
        "id": 1,
        "element": "I",
        "x": -1.326,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "I",
        "x": 1.326,
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
    "id": "white-phosphorus",
    "name": "White Phosphorus",
    "iupacName": "1,2,3,4-tetraphosphatricyclo[1.1.0.02,4]butane",
    "formula": "P₄",
    "hillFormula": "P4",
    "molarMass": 123.895048,
    "category": "element (allotrope)",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "sp3",
    "bondAngle": "60°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "solid",
    "meltingPoint": 317.3,
    "boilingPoint": 553.7,
    "uses": "Precursor to phosphoric acid and phosphorus compounds.",
    "fact": "White phosphorus glows in the dark and ignites spontaneously in air at about 30 °C.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "P",
        "x": -0.1257,
        "y": -1.3853,
        "z": 0.1131
      },
      {
        "id": 2,
        "element": "P",
        "x": 0.7491,
        "y": 0.4881,
        "z": 1.0714
      },
      {
        "id": 3,
        "element": "P",
        "x": 0.6438,
        "y": 0.3124,
        "z": -1.198
      },
      {
        "id": 4,
        "element": "P",
        "x": -1.2672,
        "y": 0.5847,
        "z": 0.0136
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
        "to": 4,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "octasulfur",
    "name": "Sulfur (S₈)",
    "iupacName": "octathiocane",
    "formula": "S₈",
    "hillFormula": "S8",
    "molarMass": 256.5,
    "category": "element (allotrope)",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "108°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "solid",
    "meltingPoint": 388.36,
    "boilingPoint": 717.8,
    "uses": "Used in vulcanizing rubber and producing sulfuric acid.",
    "fact": "Elemental sulfur naturally forms puckered eight-membered crown-shaped rings.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 0.0238,
        "y": 2.3163,
        "z": -0.5082
      },
      {
        "id": 2,
        "element": "S",
        "x": -1.6211,
        "y": 1.6547,
        "z": 0.508
      },
      {
        "id": 3,
        "element": "S",
        "x": 1.6548,
        "y": 1.6209,
        "z": 0.5085
      },
      {
        "id": 4,
        "element": "S",
        "x": -2.3163,
        "y": 0.0237,
        "z": -0.5082
      },
      {
        "id": 5,
        "element": "S",
        "x": 2.3163,
        "y": -0.0238,
        "z": -0.5084
      },
      {
        "id": 6,
        "element": "S",
        "x": -1.6546,
        "y": -1.6208,
        "z": 0.5086
      },
      {
        "id": 7,
        "element": "S",
        "x": 1.6212,
        "y": -1.6547,
        "z": 0.508
      },
      {
        "id": 8,
        "element": "S",
        "x": -0.0241,
        "y": -2.3162,
        "z": -0.5083
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
      },
      {
        "from": 3,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
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
        "from": 7,
        "to": 8,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sulfur-hexafluoride",
    "name": "Sulfur Hexafluoride",
    "iupacName": "hexafluoro-lambda6-sulfane",
    "formula": "SF₆",
    "hillFormula": "F6S",
    "molarMass": 146.06,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "octahedral",
    "hybridization": "sp3d2",
    "bondAngle": "90°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "gas",
    "meltingPoint": 209.3,
    "boilingPoint": 209.3,
    "uses": "Used as an electrical insulator in high-voltage equipment.",
    "fact": "Inhaling sulfur hexafluoride makes your voice deeper — the opposite of helium.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 2.866,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "F",
        "x": 3.7321,
        "y": 0.5,
        "z": 0
      },
      {
        "id": 3,
        "element": "F",
        "x": 2,
        "y": -0.5,
        "z": 0
      },
      {
        "id": 4,
        "element": "F",
        "x": 2,
        "y": 0.5,
        "z": 0
      },
      {
        "id": 5,
        "element": "F",
        "x": 2.866,
        "y": -1,
        "z": 0
      },
      {
        "id": 6,
        "element": "F",
        "x": 2.866,
        "y": 1,
        "z": 0
      },
      {
        "id": 7,
        "element": "F",
        "x": 3.7321,
        "y": -0.5,
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
        "from": 1,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 7,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "phosphorus-trichloride",
    "name": "Phosphorus Trichloride",
    "iupacName": "trichlorophosphane",
    "formula": "PCl₃",
    "hillFormula": "Cl3P",
    "molarMass": 137.33,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-pyramidal",
    "hybridization": "sp3",
    "bondAngle": "100.1°",
    "polarity": "polar",
    "dipoleMoment": 0.97,
    "standardState": "liquid",
    "meltingPoint": 179.9,
    "boilingPoint": 349.3,
    "uses": "Key intermediate for making pesticides and flame retardants.",
    "fact": "Phosphorus trichloride fumes violently on contact with moist air.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": -0.9467,
        "y": 1.5677,
        "z": 0.257
      },
      {
        "id": 2,
        "element": "Cl",
        "x": -0.8841,
        "y": -1.6037,
        "z": 0.2571
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 1.8312,
        "y": 0.0361,
        "z": 0.2568
      },
      {
        "id": 4,
        "element": "P",
        "x": -0.0004,
        "y": -0.0002,
        "z": -0.7709
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
    "id": "phosphorus-pentachloride",
    "name": "Phosphorus Pentachloride",
    "iupacName": "pentachloro-lambda5-phosphane",
    "formula": "PCl₅",
    "hillFormula": "Cl5P",
    "molarMass": 208.2,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-bipyramidal",
    "hybridization": "sp3d",
    "bondAngle": "90° / 120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "solid",
    "meltingPoint": 433.9,
    "boilingPoint": 440,
    "uses": "Powerful chlorinating agent in organic synthesis.",
    "fact": "A classic textbook example of a trigonal-bipyramidal molecule with an expanded octet.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 3.8606,
        "y": 0.4677,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 2,
        "y": 0.0722,
        "z": 0
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 2.5878,
        "y": -0.9458,
        "z": 0
      },
      {
        "id": 4,
        "element": "Cl",
        "x": 2.7866,
        "y": 0.9458,
        "z": 0
      },
      {
        "id": 5,
        "element": "Cl",
        "x": 3.7377,
        "y": -0.7014,
        "z": 0
      },
      {
        "id": 6,
        "element": "P",
        "x": 2.9945,
        "y": -0.0323,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 6,
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
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
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
    "id": "boron-trifluoride",
    "name": "Boron Trifluoride",
    "iupacName": "trifluoroborane",
    "formula": "BF₃",
    "hillFormula": "BF3",
    "molarMass": 67.81,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "sp2",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "gas",
    "meltingPoint": 146.4,
    "boilingPoint": 172,
    "uses": "Used as a catalyst in organic synthesis.",
    "fact": "Boron trifluoride is a textbook electron-deficient molecule — boron has only six valence electrons.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "F",
        "x": 3.7321,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 2,
        "element": "F",
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 3,
        "element": "F",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "B",
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
    "id": "xenon-tetrafluoride",
    "name": "Xenon Tetrafluoride",
    "iupacName": "tetrafluoroxenon",
    "formula": "XeF₄",
    "hillFormula": "F4Xe",
    "molarMass": 207.29,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "square-planar",
    "hybridization": "sp3d2",
    "bondAngle": "90°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "solid",
    "meltingPoint": 390,
    "boilingPoint": 388.9,
    "uses": "Used in research on noble gas chemistry.",
    "fact": "Xenon tetrafluoride shattered the belief that noble gases could not form compounds.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "Xe",
        "x": 2.7071,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "F",
        "x": 3.4142,
        "y": 0.7071,
        "z": 0
      },
      {
        "id": 3,
        "element": "F",
        "x": 2,
        "y": -0.7071,
        "z": 0
      },
      {
        "id": 4,
        "element": "F",
        "x": 2,
        "y": 0.7071,
        "z": 0
      },
      {
        "id": 5,
        "element": "F",
        "x": 3.4142,
        "y": -0.7071,
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
    "id": "carbon-disulfide",
    "name": "Carbon Disulfide",
    "iupacName": "methanedithione",
    "formula": "CS₂",
    "hillFormula": "CS2",
    "molarMass": 76.15,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "linear",
    "hybridization": "sp",
    "bondAngle": "180°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "liquid",
    "meltingPoint": 161.6,
    "boilingPoint": 319.4,
    "uses": "Used to manufacture rayon and cellophane.",
    "fact": "Carbon disulfide is so flammable it can be ignited by the heat of a steam pipe.",
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": -1.5904,
        "y": 0.0002,
        "z": 0.0002
      },
      {
        "id": 2,
        "element": "S",
        "x": 1.5904,
        "y": 0.0002,
        "z": 0.0002
      },
      {
        "id": 3,
        "element": "C",
        "x": 0,
        "y": -0.0004,
        "z": -0.0004
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
    "id": "phosgene",
    "name": "Phosgene",
    "iupacName": "carbonyl dichloride",
    "formula": "COCl₂",
    "hillFormula": "CCl2O",
    "molarMass": 98.91,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "sp2",
    "bondAngle": "~120°",
    "polarity": "polar",
    "dipoleMoment": 1.17,
    "standardState": "gas",
    "meltingPoint": 155,
    "boilingPoint": 281.3,
    "uses": "Industrial precursor for polyurethanes and polycarbonates.",
    "fact": "Phosgene smells faintly of freshly cut hay despite being extremely toxic.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": -1.4422,
        "y": 0.8003,
        "z": -0.0001
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 1.4424,
        "y": 0.8001,
        "z": -0.0001
      },
      {
        "id": 3,
        "element": "O",
        "x": -0.0002,
        "y": -1.4135,
        "z": -0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.0001,
        "y": -0.1869,
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
    "id": "hydrazine",
    "name": "Hydrazine",
    "iupacName": "hydrazine",
    "formula": "N₂H₄",
    "hillFormula": "H4N2",
    "molarMass": 32.046,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "~107°",
    "polarity": "polar",
    "dipoleMoment": 1.85,
    "standardState": "liquid",
    "meltingPoint": 275.1,
    "boilingPoint": 387,
    "uses": "Used as rocket and spacecraft thruster fuel.",
    "fact": "Hydrazine powered the maneuvering thrusters of the Space Shuttle and many satellites.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": 0.7101,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": -0.7101,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 1.0429,
        "y": -0.5396,
        "z": 0.7978
      },
      {
        "id": 4,
        "element": "H",
        "x": 1.0453,
        "y": -0.4863,
        "z": -0.8305
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.0453,
        "y": -0.9592,
        "z": -0.0786
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.0429,
        "y": 0.4854,
        "z": -0.8318
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
    "id": "silane",
    "name": "Silane",
    "iupacName": "silane",
    "formula": "SiH₄",
    "hillFormula": "H4Si",
    "molarMass": 32.117,
    "category": "binary compound",
    "bondType": "covalent",
    "geometry": "tetrahedral",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "gas",
    "meltingPoint": 88,
    "boilingPoint": 161,
    "uses": "Used to deposit silicon layers in semiconductor manufacturing.",
    "fact": "Silane ignites spontaneously on contact with air.",
    "atoms": [
      {
        "id": 1,
        "element": "Si",
        "x": 0,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "H",
        "x": 0.9385,
        "y": 0.9654,
        "z": 0.6265
      },
      {
        "id": 3,
        "element": "H",
        "x": 0.7506,
        "y": -1.2008,
        "z": -0.4472
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.0315,
        "y": -0.4013,
        "z": 0.99
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.6575,
        "y": 0.6367,
        "z": -1.1694
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
    "id": "sodium-carbonate",
    "name": "Sodium Carbonate",
    "iupacName": "disodium;carbonate",
    "formula": "Na₂CO₃",
    "hillFormula": "CNa2O3",
    "molarMass": 105.988,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1124,
    "boilingPoint": null,
    "uses": "Washing soda — used in glassmaking and as a water softener.",
    "fact": "Sodium carbonate has been harvested from dry lake beds since ancient Egyptian times.",
    "atoms": [
      {
        "id": 1,
        "element": "Na",
        "x": 5.4641,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "Na",
        "x": 2,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 4.5981,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 2.866,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 3.7321,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 6,
        "element": "C",
        "x": 3.7321,
        "y": 0.25,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 3,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 6,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sodium-sulfate",
    "name": "Sodium Sulfate",
    "iupacName": "disodium;sulfate",
    "formula": "Na₂SO₄",
    "hillFormula": "Na2O4S",
    "molarMass": 142.04,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1157,
    "boilingPoint": 1702,
    "uses": "Used in powdered detergents and papermaking.",
    "fact": "Known as Glauber's salt, it was one of the first laxatives in medicine.",
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 3.7321,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Na",
        "x": 5.4641,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "Na",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 4.5981,
        "y": 0.5,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 2.866,
        "y": -0.5,
        "z": 0
      },
      {
        "id": 6,
        "element": "O",
        "x": 3.2321,
        "y": 0.866,
        "z": 0
      },
      {
        "id": 7,
        "element": "O",
        "x": 4.2321,
        "y": -0.866,
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
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 7,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sodium-nitrate",
    "name": "Sodium Nitrate",
    "iupacName": "sodium nitrate",
    "formula": "NaNO₃",
    "hillFormula": "NNaO3",
    "molarMass": 84.995,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 581,
    "boilingPoint": 653,
    "uses": "Fertilizer and food preservative for cured meats.",
    "fact": "Called Chile saltpeter, vast natural deposits in the Atacama Desert were once fought over in war.",
    "atoms": [
      {
        "id": 1,
        "element": "Na",
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
    "id": "sodium-fluoride",
    "name": "Sodium Fluoride",
    "iupacName": "sodium fluoride",
    "formula": "NaF",
    "hillFormula": "FNa",
    "molarMass": 41.9881724,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1266,
    "boilingPoint": 1977,
    "uses": "Added to toothpaste and drinking water to prevent tooth decay.",
    "fact": "Fluoride ions strengthen tooth enamel by converting it into acid-resistant fluorapatite.",
    "atoms": [
      {
        "id": 1,
        "element": "Na",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "F",
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
    "id": "ammonium-chloride",
    "name": "Ammonium Chloride",
    "iupacName": "azanium chloride",
    "formula": "NH₄Cl",
    "hillFormula": "ClH4N",
    "molarMass": 53.49,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 611,
    "boilingPoint": null,
    "uses": "Used in dry cell batteries and as a flavoring in salty licorice.",
    "fact": "Ammonium chloride sublimes when heated — it turns directly from solid to vapor and back.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": 0.2869,
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
    "id": "ammonium-nitrate",
    "name": "Ammonium Nitrate",
    "iupacName": "azanium nitrate",
    "formula": "NH₄NO₃",
    "hillFormula": "H4N2O3",
    "molarMass": 80.044,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 442.8,
    "boilingPoint": null,
    "uses": "One of the world's most widely used nitrogen fertilizers.",
    "fact": "Dissolving ammonium nitrate in water absorbs heat — the principle behind instant cold packs.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.7321,
        "y": 1.5,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 0,
        "y": 1.5,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 0.866,
        "y": 0,
        "z": 0
      },
      {
        "id": 4,
        "element": "N",
        "x": 0.866,
        "y": 4.0369,
        "z": 0
      },
      {
        "id": 5,
        "element": "N",
        "x": 0.866,
        "y": 1,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.403,
        "y": 4.3469,
        "z": 0
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.3291,
        "y": 3.7269,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": 0.556,
        "y": 4.5739,
        "z": 0
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.176,
        "y": 3.5,
        "z": 0
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
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
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
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 9,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ammonium-sulfate",
    "name": "Ammonium Sulfate",
    "iupacName": "diazanium;sulfate",
    "formula": "(NH₄)₂SO₄",
    "hillFormula": "H8N2O4S",
    "molarMass": 132.14,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 508,
    "boilingPoint": null,
    "uses": "Fertilizer that supplies both nitrogen and sulfur to crops.",
    "fact": "Ammonium sulfate is also used in laboratories to precipitate and purify proteins.",
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 3.9399,
        "y": 0.866,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 3.0739,
        "y": 0.366,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 3.4399,
        "y": 1.7321,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 4.8059,
        "y": 1.366,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 4.4399,
        "y": 0,
        "z": 0
      },
      {
        "id": 6,
        "element": "N",
        "x": 0.5369,
        "y": 2.403,
        "z": 0
      },
      {
        "id": 7,
        "element": "N",
        "x": 3.9399,
        "y": 4.269,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.0739,
        "y": 2.713,
        "z": 0
      },
      {
        "id": 9,
        "element": "H",
        "x": 0,
        "y": 2.093,
        "z": 0
      },
      {
        "id": 10,
        "element": "H",
        "x": 0.2269,
        "y": 2.9399,
        "z": 0
      },
      {
        "id": 11,
        "element": "H",
        "x": 0.8469,
        "y": 1.866,
        "z": 0
      },
      {
        "id": 12,
        "element": "H",
        "x": 4.4768,
        "y": 4.579,
        "z": 0
      },
      {
        "id": 13,
        "element": "H",
        "x": 3.403,
        "y": 3.959,
        "z": 0
      },
      {
        "id": 14,
        "element": "H",
        "x": 3.6299,
        "y": 4.8059,
        "z": 0
      },
      {
        "id": 15,
        "element": "H",
        "x": 4.2499,
        "y": 3.7321,
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
        "from": 6,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 12,
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
        "from": 7,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 15,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-permanganate",
    "name": "Potassium Permanganate",
    "iupacName": "potassium permanganate",
    "formula": "KMnO₄",
    "hillFormula": "KMnO4",
    "molarMass": 158.034,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 513,
    "boilingPoint": null,
    "uses": "Powerful oxidizer used for water treatment and disinfection.",
    "fact": "A few crystals turn an entire glass of water an intense royal purple.",
    "atoms": [
      {
        "id": 1,
        "element": "Mn",
        "x": 2.7071,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "K",
        "x": 4.3801,
        "y": 0.4483,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 3.4142,
        "y": 0.7071,
        "z": 0
      },
      {
        "id": 4,
        "element": "O",
        "x": 2,
        "y": -0.7071,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 3.4142,
        "y": -0.7071,
        "z": 0
      },
      {
        "id": 6,
        "element": "O",
        "x": 2,
        "y": 0.7071,
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
        "from": 1,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 7,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-dichromate",
    "name": "Potassium Dichromate",
    "iupacName": "dipotassium;oxido-(oxido(dioxo)chromio)oxy-dioxochromium",
    "formula": "K₂Cr₂O₇",
    "hillFormula": "Cr2K2O7",
    "molarMass": 294.18,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 671,
    "boilingPoint": 773,
    "uses": "Oxidizing agent used in laboratory analysis and leather tanning.",
    "fact": "Its vivid orange color changes to green as it oxidizes other substances — the basis of old breathalyzer tests.",
    "atoms": [
      {
        "id": 1,
        "element": "Cr",
        "x": 3.7321,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cr",
        "x": 5.4641,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "K",
        "x": 7.1962,
        "y": 0,
        "z": 0
      },
      {
        "id": 4,
        "element": "K",
        "x": 2,
        "y": 0,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 4.5981,
        "y": 0.5,
        "z": 0
      },
      {
        "id": 6,
        "element": "O",
        "x": 2.866,
        "y": -0.5,
        "z": 0
      },
      {
        "id": 7,
        "element": "O",
        "x": 6.3301,
        "y": -0.5,
        "z": 0
      },
      {
        "id": 8,
        "element": "O",
        "x": 3.2321,
        "y": 0.866,
        "z": 0
      },
      {
        "id": 9,
        "element": "O",
        "x": 4.2321,
        "y": -0.866,
        "z": 0
      },
      {
        "id": 10,
        "element": "O",
        "x": 5.9641,
        "y": 0.866,
        "z": 0
      },
      {
        "id": 11,
        "element": "O",
        "x": 4.9641,
        "y": -0.866,
        "z": 0
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
        "from": 1,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 9,
        "order": 2,
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
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 11,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-chlorate",
    "name": "Potassium Chlorate",
    "iupacName": "potassium chlorate",
    "formula": "KClO₃",
    "hillFormula": "ClKO3",
    "molarMass": 122.55,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 629,
    "boilingPoint": 673,
    "uses": "Oxidizer in safety matches and fireworks.",
    "fact": "The striking surface of a match box and the match head together contain the full recipe for fire.",
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
        "element": "Cl",
        "x": 2.866,
        "y": 0.25,
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
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 3,
        "order": 7,
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
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 5,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "potassium-iodide",
    "name": "Potassium Iodide",
    "iupacName": "potassium iodide",
    "formula": "KI",
    "hillFormula": "IK",
    "molarMass": 166.0028,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 954,
    "boilingPoint": 1600,
    "uses": "Protects the thyroid gland from radioactive iodine exposure.",
    "fact": "Potassium iodide tablets are stockpiled around nuclear plants for emergency use.",
    "atoms": [
      {
        "id": 1,
        "element": "I",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "K",
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
    "id": "silver-nitrate",
    "name": "Silver Nitrate",
    "iupacName": "silver nitrate",
    "formula": "AgNO₃",
    "hillFormula": "AgNO3",
    "molarMass": 169.873,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 483,
    "boilingPoint": 713,
    "uses": "Used in chemistry labs to test for halide ions.",
    "fact": "Silver nitrate stains skin black on contact — early chemists called it \"lunar caustic\".",
    "atoms": [
      {
        "id": 1,
        "element": "Ag",
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
    "id": "silver-chloride",
    "name": "Silver Chloride",
    "iupacName": "chlorosilver",
    "formula": "AgCl",
    "hillFormula": "AgCl",
    "molarMass": 143.32,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 728,
    "boilingPoint": 1820,
    "uses": "Light-sensitive compound used in photographic film and paper.",
    "fact": "Silver chloride darkens in sunlight — the chemistry behind the first photographs.",
    "atoms": [
      {
        "id": 1,
        "element": "Ag",
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
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "barium-chloride",
    "name": "Barium Chloride",
    "iupacName": "barium(2+) dichloride",
    "formula": "BaCl₂",
    "hillFormula": "BaCl2",
    "molarMass": 208.23,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1235,
    "boilingPoint": 1833,
    "uses": "Laboratory reagent for testing sulfate ions.",
    "fact": "Barium salts burn with a brilliant green flame used in fireworks.",
    "atoms": [
      {
        "id": 1,
        "element": "Ba",
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
    "bonds": [
      {
        "from": 1,
        "to": 2,
        "order": 7,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 3,
        "order": 7,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "barium-sulfate",
    "name": "Barium Sulfate",
    "iupacName": "barium(2+) sulfate",
    "formula": "BaSO₄",
    "hillFormula": "BaO4S",
    "molarMass": 233.39,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1858,
    "boilingPoint": null,
    "uses": "Swallowed as a \"barium meal\" to make the gut visible in X-rays.",
    "fact": "Though barium is toxic, barium sulfate is so insoluble it passes through the body harmlessly.",
    "atoms": [
      {
        "id": 1,
        "element": "Ba",
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
    "id": "calcium-sulfate",
    "name": "Calcium Sulfate",
    "iupacName": "calcium sulfate",
    "formula": "CaSO₄",
    "hillFormula": "CaO4S",
    "molarMass": 136.14,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1733,
    "boilingPoint": null,
    "uses": "The main component of plaster of Paris and drywall.",
    "fact": "Gypsum (hydrated calcium sulfate) forms the world's largest natural crystals — up to 12 meters long.",
    "atoms": [
      {
        "id": 1,
        "element": "Ca",
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
    "id": "magnesium-sulfate",
    "name": "Magnesium Sulfate",
    "iupacName": "magnesium sulfate",
    "formula": "MgSO₄",
    "hillFormula": "MgO4S",
    "molarMass": 120.37,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1397,
    "boilingPoint": null,
    "uses": "Epsom salt — used in bath soaks and as a laxative.",
    "fact": "Named after a bitter saline spring in Epsom, England, where it was discovered in 1618.",
    "atoms": [
      {
        "id": 1,
        "element": "S",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "Mg",
        "x": 2,
        "y": -1,
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
        "from": 1,
        "to": 6,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "magnesium-hydroxide",
    "name": "Magnesium Hydroxide",
    "iupacName": "magnesium dihydroxide",
    "formula": "Mg(OH)₂",
    "hillFormula": "H2MgO2",
    "molarMass": 58.32,
    "category": "base",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 623,
    "boilingPoint": null,
    "uses": "The active ingredient in milk of magnesia antacid.",
    "fact": "Its low solubility makes it a safe antacid — only a little dissolves at a time.",
    "atoms": [
      {
        "id": 1,
        "element": "Mg",
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
    "id": "zinc-oxide",
    "name": "Zinc Oxide",
    "iupacName": "zinc oxygen(2-)",
    "formula": "ZnO",
    "hillFormula": "OZn",
    "molarMass": 81.4,
    "category": "binary compound",
    "bondType": "ionic",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 2247,
    "boilingPoint": null,
    "uses": "Active ingredient in sunscreen and diaper rash cream.",
    "fact": "Zinc oxide blocks both UVA and UVB rays by physically reflecting sunlight.",
    "atoms": [
      {
        "id": 1,
        "element": "Zn",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": []
  },
  {
    "id": "zinc-sulfate",
    "name": "Zinc Sulfate",
    "iupacName": "zinc sulfate",
    "formula": "ZnSO₄",
    "hillFormula": "O4SZn",
    "molarMass": 161.4,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 953,
    "boilingPoint": null,
    "uses": "Dietary zinc supplement and agricultural micronutrient.",
    "fact": "Historically called \"white vitriol\" by alchemists.",
    "atoms": [
      {
        "id": 1,
        "element": "Zn",
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
    "id": "copper-ii-oxide",
    "name": "Copper(II) Oxide",
    "iupacName": "copper oxygen(2-)",
    "formula": "CuO",
    "hillFormula": "CuO",
    "molarMass": 79.55,
    "category": "binary compound",
    "bondType": "ionic",
    "geometry": "diatomic",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 1599,
    "boilingPoint": null,
    "uses": "Used to give glass and ceramics blue-green colors.",
    "fact": "The classic black powder formed when copper is heated in air.",
    "atoms": [
      {
        "id": 1,
        "element": "Cu",
        "x": 3,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2,
        "y": 0,
        "z": 0
      }
    ],
    "bonds": []
  },
  {
    "id": "aluminum-oxide",
    "name": "Aluminum Oxide",
    "iupacName": "dialuminum;tris(oxygen(2-))",
    "formula": "Al₂O₃",
    "hillFormula": "Al2O3",
    "molarMass": 101.961,
    "category": "binary compound",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 2345,
    "boilingPoint": 3250,
    "uses": "Abrasive in sandpaper and the source ore of aluminum metal.",
    "fact": "Rubies and sapphires are simply aluminum oxide crystals with trace impurities.",
    "atoms": [
      {
        "id": 1,
        "element": "Al",
        "x": 2.866,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "Al",
        "x": 4.5981,
        "y": 0.25,
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
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      }
    ],
    "bonds": []
  },
  {
    "id": "iron-ii-sulfate",
    "name": "Iron(II) Sulfate",
    "iupacName": "iron(2+) sulfate",
    "formula": "FeSO₄",
    "hillFormula": "FeO4S",
    "molarMass": 151.91,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 953,
    "boilingPoint": null,
    "uses": "The most common treatment for iron-deficiency anemia.",
    "fact": "Known as \"green vitriol\", it was used to make iron gall ink for a thousand years of manuscripts.",
    "atoms": [
      {
        "id": 1,
        "element": "Fe",
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
    "id": "iron-iii-chloride",
    "name": "Iron(III) Chloride",
    "iupacName": "trichloroiron",
    "formula": "FeCl₃",
    "hillFormula": "Cl3Fe",
    "molarMass": 162.2,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 580,
    "boilingPoint": 589,
    "uses": "Used to etch copper circuit boards and treat sewage.",
    "fact": "Hobbyists use ferric chloride solution to etch custom printed circuit boards at home.",
    "atoms": [
      {
        "id": 1,
        "element": "Fe",
        "x": 2.866,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "Cl",
        "x": 3.7321,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 3,
        "element": "Cl",
        "x": 2,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 4,
        "element": "Cl",
        "x": 2.866,
        "y": -0.75,
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
    "id": "lead-ii-nitrate",
    "name": "Lead(II) Nitrate",
    "iupacName": "lead(2+) dinitrate",
    "formula": "Pb(NO₃)₂",
    "hillFormula": "N2O6Pb",
    "molarMass": 331,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 743,
    "boilingPoint": null,
    "uses": "Laboratory source of lead ions for demonstrations.",
    "fact": "One of the few lead salts that dissolves readily in water.",
    "atoms": [
      {
        "id": 1,
        "element": "Pb",
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
        "x": 7.1962,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 5,
        "element": "O",
        "x": 5.4641,
        "y": 0.75,
        "z": 0
      },
      {
        "id": 6,
        "element": "O",
        "x": 2.866,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 7,
        "element": "O",
        "x": 6.3301,
        "y": -0.75,
        "z": 0
      },
      {
        "id": 8,
        "element": "N",
        "x": 2.866,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 9,
        "element": "N",
        "x": 6.3301,
        "y": 0.25,
        "z": 0
      }
    ],
    "bonds": [
      {
        "from": 2,
        "to": 8,
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
        "from": 4,
        "to": 9,
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
        "from": 6,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 9,
        "order": 2,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "lead-ii-iodide",
    "name": "Lead(II) Iodide",
    "iupacName": "diiodolead",
    "formula": "PbI₂",
    "hillFormula": "I2Pb",
    "molarMass": 461,
    "category": "ionic salt",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 675,
    "boilingPoint": 1145,
    "uses": "Used in modern perovskite solar cell research.",
    "fact": "Its brilliant golden crystals falling through solution create the famous \"golden rain\" demonstration.",
    "atoms": [
      {
        "id": 1,
        "element": "Pb",
        "x": 2.866,
        "y": -0.25,
        "z": 0
      },
      {
        "id": 2,
        "element": "I",
        "x": 3.7321,
        "y": 0.25,
        "z": 0
      },
      {
        "id": 3,
        "element": "I",
        "x": 2,
        "y": 0.25,
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
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "titanium-dioxide",
    "name": "Titanium Dioxide",
    "iupacName": "dioxotitanium",
    "formula": "TiO₂",
    "hillFormula": "O2Ti",
    "molarMass": 79.866,
    "category": "binary compound",
    "bondType": "ionic",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "ionic",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 2116,
    "boilingPoint": 3245,
    "uses": "The world's most-used white pigment — in paint, paper, and sunscreen.",
    "fact": "Titanium dioxide makes white paint white, and once whitened toothpaste and powdered donuts too.",
    "atoms": [
      {
        "id": 1,
        "element": "Ti",
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
    "id": "boric-acid",
    "name": "Boric Acid",
    "iupacName": "boric acid",
    "formula": "H₃BO₃",
    "hillFormula": "BH3O3",
    "molarMass": 61.84,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "trigonal-planar",
    "hybridization": "sp2",
    "bondAngle": "120°",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 443.8,
    "boilingPoint": null,
    "uses": "Mild antiseptic, insecticide, and eye-wash ingredient.",
    "fact": "Boric acid is used in nuclear power plants to control the rate of fission.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 4.269,
        "y": 0.905,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.5369,
        "y": 0.905,
        "z": 0
      },
      {
        "id": 3,
        "element": "O",
        "x": 3.403,
        "y": -0.595,
        "z": 0
      },
      {
        "id": 4,
        "element": "B",
        "x": 3.403,
        "y": 0.405,
        "z": 0
      },
      {
        "id": 5,
        "element": "H",
        "x": 4.8059,
        "y": 0.595,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 2,
        "y": 0.595,
        "z": 0
      },
      {
        "id": 7,
        "element": "H",
        "x": 2.866,
        "y": -0.905,
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
    "id": "formic-acid",
    "name": "Formic Acid",
    "iupacName": "formic acid",
    "formula": "HCOOH",
    "hillFormula": "CH2O2",
    "molarMass": 46.025,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "~120°",
    "polarity": "polar",
    "dipoleMoment": 1.41,
    "standardState": "liquid",
    "meltingPoint": 281.6,
    "boilingPoint": 373.9,
    "uses": "Used in leather tanning and as a livestock feed preservative.",
    "fact": "Formic acid is the sting in ant bites — its name comes from formica, Latin for ant.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.1685,
        "y": 0.1825,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.1146,
        "y": 0.2103,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.0538,
        "y": -0.3927,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": -0.0511,
        "y": -1.4875,
        "z": 0.0002
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.1142,
        "y": 1.162,
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
        "from": 1,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 2,
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
    "id": "oxalic-acid",
    "name": "Oxalic Acid",
    "iupacName": "oxalic acid",
    "formula": "C₂H₂O₄",
    "hillFormula": "C2H2O4",
    "molarMass": 90.03,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "~120°",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 462.7,
    "boilingPoint": null,
    "uses": "Rust remover and wood bleaching agent.",
    "fact": "Spinach and rhubarb leaves are rich in oxalic acid, which is why rhubarb leaves are toxic.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.2736,
        "y": -1.1946,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "O",
        "x": -1.2736,
        "y": 1.1946,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.3636,
        "y": 1.0924,
        "z": -0.0001
      },
      {
        "id": 4,
        "element": "O",
        "x": -1.3636,
        "y": -1.0924,
        "z": -0.0002
      },
      {
        "id": 5,
        "element": "C",
        "x": 0.7541,
        "y": 0.0422,
        "z": 0
      },
      {
        "id": 6,
        "element": "C",
        "x": -0.7541,
        "y": -0.0421,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "H",
        "x": 2.2545,
        "y": -1.1852,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": -2.2545,
        "y": 1.1852,
        "z": -0.0001
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
        "from": 1,
        "to": 7,
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
    "id": "citric-acid",
    "name": "Citric Acid",
    "iupacName": "2-hydroxypropane-1,2,3-tricarboxylic acid",
    "formula": "C₆H₈O₇",
    "hillFormula": "C6H8O7",
    "molarMass": 192.12,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 429,
    "boilingPoint": null,
    "uses": "Gives citrus fruits their sourness; a ubiquitous food additive (E330).",
    "fact": "Nearly all commercial citric acid is made by fermenting sugar with a mold, not from lemons.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0296,
        "y": 0.2095,
        "z": 1.6069
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.8558,
        "y": 1.7979,
        "z": -1.4962
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.3554,
        "y": 2.2689,
        "z": 0.6622
      },
      {
        "id": 4,
        "element": "O",
        "x": -2.3908,
        "y": -2.3046,
        "z": -0.7871
      },
      {
        "id": 5,
        "element": "O",
        "x": 3.5351,
        "y": -0.4033,
        "z": -0.9273
      },
      {
        "id": 6,
        "element": "O",
        "x": -2.5559,
        "y": -0.6265,
        "z": 0.7317
      },
      {
        "id": 7,
        "element": "O",
        "x": 2.5438,
        "y": -1.1245,
        "z": 0.9835
      },
      {
        "id": 8,
        "element": "C",
        "x": 0.1007,
        "y": 0.362,
        "z": 0.1941
      },
      {
        "id": 9,
        "element": "C",
        "x": -0.4905,
        "y": -0.8791,
        "z": -0.4971
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.5374,
        "y": 0.7096,
        "z": -0.2266
      },
      {
        "id": 11,
        "element": "C",
        "x": -0.765,
        "y": 1.5773,
        "z": -0.1587
      },
      {
        "id": 12,
        "element": "C",
        "x": -1.9098,
        "y": -1.2305,
        "z": -0.1154
      },
      {
        "id": 13,
        "element": "C",
        "x": 2.5767,
        "y": -0.3568,
        "z": 0.03
      },
      {
        "id": 14,
        "element": "H",
        "x": 0.112,
        "y": -1.7555,
        "z": -0.2286
      },
      {
        "id": 15,
        "element": "H",
        "x": -0.4574,
        "y": -0.7614,
        "z": -1.5866
      },
      {
        "id": 16,
        "element": "H",
        "x": 1.8842,
        "y": 1.608,
        "z": 0.3
      },
      {
        "id": 17,
        "element": "H",
        "x": 1.5589,
        "y": 0.9361,
        "z": -1.3004
      },
      {
        "id": 18,
        "element": "H",
        "x": 0.462,
        "y": 0.9771,
        "z": 2.0186
      },
      {
        "id": 19,
        "element": "H",
        "x": -1.4293,
        "y": 2.5669,
        "z": -1.7015
      },
      {
        "id": 20,
        "element": "H",
        "x": -3.3078,
        "y": -2.5252,
        "z": -0.5172
      },
      {
        "id": 21,
        "element": "H",
        "x": 4.1914,
        "y": -1.1116,
        "z": -0.7546
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 11,
        "order": 2,
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
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 13,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 9,
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
        "to": 11,
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
        "to": 14,
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
        "to": 13,
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
        "from": 10,
        "to": 17,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "lactic-acid",
    "name": "Lactic Acid",
    "iupacName": "2-hydroxypropanoic acid",
    "formula": "C₃H₆O₃",
    "hillFormula": "C3H6O3",
    "molarMass": 90.08,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 291,
    "boilingPoint": 395,
    "uses": "Produced in muscles during exercise; ferments milk into yogurt.",
    "fact": "The sour taste of yogurt and sourdough comes from bacteria producing lactic acid.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.3875,
        "y": 1.1182,
        "z": 0.1968
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.4877,
        "y": -1.0368,
        "z": 0.2617
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.2263,
        "y": 1.1148,
        "z": -0.4123
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.7078,
        "y": -0.1118,
        "z": 0.4002
      },
      {
        "id": 5,
        "element": "C",
        "x": -1.3669,
        "y": -1.1626,
        "z": -0.4759
      },
      {
        "id": 6,
        "element": "C",
        "x": 0.7481,
        "y": 0.0781,
        "z": 0.0295
      },
      {
        "id": 7,
        "element": "H",
        "x": -0.7822,
        "y": -0.3748,
        "z": 1.4601
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.2848,
        "y": -0.8968,
        "z": -1.536
      },
      {
        "id": 9,
        "element": "H",
        "x": -2.4357,
        "y": -1.2376,
        "z": -0.2485
      },
      {
        "id": 10,
        "element": "H",
        "x": -0.91,
        "y": -2.1472,
        "z": -0.3365
      },
      {
        "id": 11,
        "element": "H",
        "x": -1.0263,
        "y": 1.7604,
        "z": 0.8318
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.4313,
        "y": -0.9049,
        "z": 0.0279
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
        "to": 11,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
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
        "from": 5,
        "to": 8,
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
      }
    ]
  },
  {
    "id": "benzoic-acid",
    "name": "Benzoic Acid",
    "iupacName": "benzoic acid",
    "formula": "C₆H₅COOH",
    "hillFormula": "C7H6O2",
    "molarMass": 122.12,
    "category": "acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 395.5,
    "boilingPoint": 522.4,
    "uses": "Food preservative (E210) that stops mold and yeast growth.",
    "fact": "First isolated in the 16th century from gum benzoin, a fragrant tree resin.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 2.3067,
        "y": -1.1843,
        "z": 0.0008
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.4571,
        "y": 1.0837,
        "z": -0.0005
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.3072,
        "y": 0.0339,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.4142,
        "y": 1.2278,
        "z": 0.0003
      },
      {
        "id": 5,
        "element": "C",
        "x": -0.3662,
        "y": -1.1878,
        "z": -0.0003
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.8088,
        "y": 1.2003,
        "z": 0.0003
      },
      {
        "id": 7,
        "element": "C",
        "x": -1.7609,
        "y": -1.2153,
        "z": -0.0003
      },
      {
        "id": 8,
        "element": "C",
        "x": -2.482,
        "y": -0.0213,
        "z": 0
      },
      {
        "id": 9,
        "element": "C",
        "x": 1.7611,
        "y": 0.0629,
        "z": -0.0003
      },
      {
        "id": 10,
        "element": "H",
        "x": 0.0914,
        "y": 2.19,
        "z": 0.0004
      },
      {
        "id": 11,
        "element": "H",
        "x": 0.1555,
        "y": -2.1407,
        "z": -0.0006
      },
      {
        "id": 12,
        "element": "H",
        "x": -2.3706,
        "y": 2.1298,
        "z": 0.0005
      },
      {
        "id": 13,
        "element": "H",
        "x": -2.2859,
        "y": -2.1661,
        "z": -0.0005
      },
      {
        "id": 14,
        "element": "H",
        "x": -3.5679,
        "y": -0.0428,
        "z": 0
      },
      {
        "id": 15,
        "element": "H",
        "x": 3.2873,
        "y": -1.1536,
        "z": 0.0011
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
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 4,
        "order": 2,
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
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
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
        "from": 5,
        "to": 7,
        "order": 2,
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
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
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
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 14,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "pentane",
    "name": "Pentane",
    "iupacName": "pentane",
    "formula": "C₅H₁₂",
    "hillFormula": "C5H12",
    "molarMass": 72.15,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "liquid",
    "meltingPoint": 143.5,
    "boilingPoint": 309.2,
    "uses": "Blowing agent for polystyrene foam and a laboratory solvent.",
    "fact": "Pentane boils at just 36 °C — warm hands can make it boil.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0,
        "y": 0.3478,
        "z": -0.0228
      },
      {
        "id": 2,
        "element": "C",
        "x": 1.2621,
        "y": -0.514,
        "z": -0.0001
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.2621,
        "y": -0.514,
        "z": -0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": 2.5198,
        "y": 0.3401,
        "z": 0.0115
      },
      {
        "id": 5,
        "element": "C",
        "x": -2.5199,
        "y": 0.3401,
        "z": 0.0115
      },
      {
        "id": 6,
        "element": "H",
        "x": 0,
        "y": 0.9783,
        "z": -0.9202
      },
      {
        "id": 7,
        "element": "H",
        "x": 0,
        "y": 1.0201,
        "z": 0.8439
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.28,
        "y": -1.171,
        "z": -0.8775
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.2583,
        "y": -1.1576,
        "z": 0.8874
      },
      {
        "id": 10,
        "element": "H",
        "x": -1.2799,
        "y": -1.171,
        "z": -0.8774
      },
      {
        "id": 11,
        "element": "H",
        "x": -1.2582,
        "y": -1.1576,
        "z": 0.8873
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.5484,
        "y": 0.9847,
        "z": 0.8958
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.5708,
        "y": 0.9752,
        "z": -0.8788
      },
      {
        "id": 14,
        "element": "H",
        "x": 3.4101,
        "y": -0.2964,
        "z": 0.0264
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.5484,
        "y": 0.9848,
        "z": 0.8958
      },
      {
        "id": 16,
        "element": "H",
        "x": -3.4101,
        "y": -0.2964,
        "z": 0.0263
      },
      {
        "id": 17,
        "element": "H",
        "x": -2.5709,
        "y": 0.975,
        "z": -0.8787
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
        "to": 6,
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
        "from": 2,
        "to": 9,
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
      },
      {
        "from": 5,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 17,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "hexane",
    "name": "Hexane",
    "iupacName": "hexane",
    "formula": "C₆H₁₄",
    "hillFormula": "C6H14",
    "molarMass": 86.18,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "liquid",
    "meltingPoint": 178,
    "boilingPoint": 342,
    "uses": "Solvent used to extract vegetable oils from seeds.",
    "fact": "Most cooking oil is extracted from seeds using hexane, which is then evaporated away.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0.6558,
        "y": 0.3935,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.6558,
        "y": -0.3932,
        "z": 0.0227
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.8649,
        "y": -0.5413,
        "z": -0.0114
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.865,
        "y": 0.5414,
        "z": 0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": 3.1709,
        "y": 0.2369,
        "z": -0.0001
      },
      {
        "id": 6,
        "element": "C",
        "x": -3.1709,
        "y": -0.2372,
        "z": -0.0115
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.684,
        "y": 1.0388,
        "z": -0.8865
      },
      {
        "id": 8,
        "element": "H",
        "x": 0.7045,
        "y": 1.0489,
        "z": 0.8783
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.693,
        "y": -1.0225,
        "z": 0.9203
      },
      {
        "id": 10,
        "element": "H",
        "x": -0.6952,
        "y": -1.0642,
        "z": -0.8441
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.8337,
        "y": -1.2015,
        "z": 0.8633
      },
      {
        "id": 12,
        "element": "H",
        "x": 1.8334,
        "y": -1.1803,
        "z": -0.9015
      },
      {
        "id": 13,
        "element": "H",
        "x": -1.8442,
        "y": 1.1983,
        "z": 0.8775
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.8234,
        "y": 1.1837,
        "z": -0.8874
      },
      {
        "id": 15,
        "element": "H",
        "x": 3.2485,
        "y": 0.8856,
        "z": -0.8784
      },
      {
        "id": 16,
        "element": "H",
        "x": 4.0222,
        "y": -0.451,
        "z": -0.0096
      },
      {
        "id": 17,
        "element": "H",
        "x": 3.2483,
        "y": 0.8607,
        "z": 0.8961
      },
      {
        "id": 18,
        "element": "H",
        "x": -3.2373,
        "y": -0.8791,
        "z": -0.8958
      },
      {
        "id": 19,
        "element": "H",
        "x": -3.2592,
        "y": -0.8681,
        "z": 0.8788
      },
      {
        "id": 20,
        "element": "H",
        "x": -4.0221,
        "y": 0.4505,
        "z": -0.0263
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
        "to": 7,
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
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 10,
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
        "to": 11,
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
        "to": 6,
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
      },
      {
        "from": 5,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 20,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "octane",
    "name": "Octane",
    "iupacName": "octane",
    "formula": "C₈H₁₈",
    "hillFormula": "C8H18",
    "molarMass": 114.23,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "liquid",
    "meltingPoint": 216.3,
    "boilingPoint": 398.8,
    "uses": "A key component of gasoline.",
    "fact": "The \"octane rating\" at gas pumps is named after this molecule's branched isomer, isooctane.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.6084,
        "y": -0.4286,
        "z": 0.0387
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.632,
        "y": 0.4677,
        "z": 0.0288
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.9251,
        "y": 0.3534,
        "z": 0.0307
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.9162,
        "y": -0.3646,
        "z": 0.0134
      },
      {
        "id": 5,
        "element": "C",
        "x": -3.1635,
        "y": -0.5416,
        "z": -0.0336
      },
      {
        "id": 6,
        "element": "C",
        "x": 3.1566,
        "y": 0.5275,
        "z": -0.0351
      },
      {
        "id": 7,
        "element": "C",
        "x": -4.4429,
        "y": 0.281,
        "z": -0.0264
      },
      {
        "id": 8,
        "element": "C",
        "x": 4.4352,
        "y": -0.2948,
        "z": -0.0166
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.5822,
        "y": -1.0768,
        "z": 0.9233
      },
      {
        "id": 10,
        "element": "H",
        "x": -0.5814,
        "y": -1.0883,
        "z": -0.8377
      },
      {
        "id": 11,
        "element": "H",
        "x": 0.6221,
        "y": 1.1178,
        "z": 0.9119
      },
      {
        "id": 12,
        "element": "H",
        "x": 0.6044,
        "y": 1.1188,
        "z": -0.8533
      },
      {
        "id": 13,
        "element": "H",
        "x": -1.9307,
        "y": 1.0354,
        "z": -0.8287
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.9737,
        "y": 0.979,
        "z": 0.9306
      },
      {
        "id": 15,
        "element": "H",
        "x": 1.9126,
        "y": -1.0331,
        "z": -0.8562
      },
      {
        "id": 16,
        "element": "H",
        "x": 1.9522,
        "y": -0.9984,
        "z": 0.9079
      },
      {
        "id": 17,
        "element": "H",
        "x": -3.1698,
        "y": -1.2275,
        "z": 0.8214
      },
      {
        "id": 18,
        "element": "H",
        "x": -3.132,
        "y": -1.1542,
        "z": -0.9419
      },
      {
        "id": 19,
        "element": "H",
        "x": 3.1575,
        "y": 1.2109,
        "z": 0.8221
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.1369,
        "y": 1.1437,
        "z": -0.9415
      },
      {
        "id": 21,
        "element": "H",
        "x": -4.5183,
        "y": 0.8815,
        "z": 0.8858
      },
      {
        "id": 22,
        "element": "H",
        "x": -4.48,
        "y": 0.9564,
        "z": -0.8871
      },
      {
        "id": 23,
        "element": "H",
        "x": -5.3163,
        "y": -0.377,
        "z": -0.0729
      },
      {
        "id": 24,
        "element": "H",
        "x": 5.3093,
        "y": 0.3628,
        "z": -0.053
      },
      {
        "id": 25,
        "element": "H",
        "x": 4.4807,
        "y": -0.9684,
        "z": -0.8784
      },
      {
        "id": 26,
        "element": "H",
        "x": 4.5011,
        "y": -0.8974,
        "z": 0.8948
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
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 10,
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
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 12,
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
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 18,
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
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 26,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "cyclohexane",
    "name": "Cyclohexane",
    "iupacName": "cyclohexane",
    "formula": "C₆H₁₂",
    "hillFormula": "C6H12",
    "molarMass": 84.16,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "111°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "liquid",
    "meltingPoint": 279.6,
    "boilingPoint": 353.9,
    "uses": "Mostly converted into nylon precursors.",
    "fact": "Cyclohexane rings flip between \"chair\" and \"boat\" shapes billions of times per second.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.0435,
        "y": -1.4573,
        "z": -0.2258
      },
      {
        "id": 2,
        "element": "C",
        "x": 1.2404,
        "y": -0.7663,
        "z": 0.2258
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.2838,
        "y": -0.691,
        "z": 0.2258
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.2838,
        "y": 0.6911,
        "z": -0.2257
      },
      {
        "id": 5,
        "element": "C",
        "x": -1.2404,
        "y": 0.7662,
        "z": -0.2258
      },
      {
        "id": 6,
        "element": "C",
        "x": 0.0435,
        "y": 1.4573,
        "z": 0.2258
      },
      {
        "id": 7,
        "element": "H",
        "x": -0.046,
        "y": -1.5425,
        "z": -1.3194
      },
      {
        "id": 8,
        "element": "H",
        "x": -0.0739,
        "y": -2.4771,
        "z": 0.1741
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.3129,
        "y": -0.8111,
        "z": 1.3194
      },
      {
        "id": 10,
        "element": "H",
        "x": 2.1083,
        "y": -1.3026,
        "z": -0.1742
      },
      {
        "id": 11,
        "element": "H",
        "x": -2.1821,
        "y": -1.1746,
        "z": -0.1741
      },
      {
        "id": 12,
        "element": "H",
        "x": -1.3588,
        "y": -0.7314,
        "z": 1.3195
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.1821,
        "y": 1.1746,
        "z": 0.1742
      },
      {
        "id": 14,
        "element": "H",
        "x": 1.359,
        "y": 0.7315,
        "z": -1.3194
      },
      {
        "id": 15,
        "element": "H",
        "x": -1.3129,
        "y": 0.811,
        "z": -1.3195
      },
      {
        "id": 16,
        "element": "H",
        "x": -2.1083,
        "y": 1.3025,
        "z": 0.1741
      },
      {
        "id": 17,
        "element": "H",
        "x": 0.0459,
        "y": 1.5425,
        "z": 1.3195
      },
      {
        "id": 18,
        "element": "H",
        "x": 0.0738,
        "y": 2.4771,
        "z": -0.1742
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
        "to": 7,
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
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 10,
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
        "to": 11,
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
        "to": 6,
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
      },
      {
        "from": 5,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 18,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "propene",
    "name": "Propene",
    "iupacName": "prop-1-ene",
    "formula": "C₃H₆",
    "hillFormula": "C3H6",
    "molarMass": 42.08,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "~120°",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "gas",
    "meltingPoint": 87.9,
    "boilingPoint": 225.5,
    "uses": "Polymerized into polypropylene for containers, ropes, and car parts.",
    "fact": "Propene is the second most produced building block of the plastics industry after ethene.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 1.2818,
        "y": -0.2031,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.0643,
        "y": 0.4402,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.2175,
        "y": -0.2371,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": 1.8429,
        "y": 0.1063,
        "z": -0.8871
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.2188,
        "y": -1.2959,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.8429,
        "y": 0.1063,
        "z": 0.8871
      },
      {
        "id": 7,
        "element": "H",
        "x": -0.095,
        "y": 1.5262,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": -2.1647,
        "y": 0.2911,
        "z": 0
      },
      {
        "id": 9,
        "element": "H",
        "x": -1.239,
        "y": -1.3212,
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
        "from": 1,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 7,
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
        "to": 9,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "butadiene",
    "name": "1,3-Butadiene",
    "iupacName": "buta-1,3-diene",
    "formula": "C₄H₆",
    "hillFormula": "C4H6",
    "molarMass": 54.09,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "~120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "gas",
    "meltingPoint": 164.3,
    "boilingPoint": 268.7,
    "uses": "Polymerized into synthetic rubber for car tires.",
    "fact": "Most of the world's car tires are built from butadiene-based synthetic rubber.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.6022,
        "y": 0.3972,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.6024,
        "y": -0.3975,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.8315,
        "y": -0.1305,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.8314,
        "y": 0.1308,
        "z": 0
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.4975,
        "y": 1.4789,
        "z": 0.0001
      },
      {
        "id": 6,
        "element": "H",
        "x": 0.4979,
        "y": -1.4792,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "H",
        "x": -2.7035,
        "y": 0.5151,
        "z": 0
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.9975,
        "y": -1.2027,
        "z": 0
      },
      {
        "id": 9,
        "element": "H",
        "x": 2.7036,
        "y": -0.5143,
        "z": 0
      },
      {
        "id": 10,
        "element": "H",
        "x": 1.9969,
        "y": 1.203,
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
        "to": 5,
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
        "from": 3,
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
    "id": "toluene",
    "name": "Toluene",
    "iupacName": "toluene",
    "formula": "C₇H₈",
    "hillFormula": "C7H8",
    "molarMass": 92.14,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0.36,
    "standardState": "liquid",
    "meltingPoint": 178,
    "boilingPoint": 383.8,
    "uses": "Solvent in paints, glues, and nail polish.",
    "fact": "Toluene is benzene's safer cousin — one methyl group makes it far less carcinogenic.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": -0.9825,
        "y": 0,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.285,
        "y": 1.2079,
        "z": 0.0001
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.2852,
        "y": -1.2079,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": -2.4741,
        "y": 0.0001,
        "z": -0.0002
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.1099,
        "y": 1.208,
        "z": -0.0001
      },
      {
        "id": 6,
        "element": "C",
        "x": 1.1097,
        "y": -1.208,
        "z": 0
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.8072,
        "y": 0,
        "z": -0.0001
      },
      {
        "id": 8,
        "element": "H",
        "x": -0.8169,
        "y": 2.1557,
        "z": -0.0017
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.8172,
        "y": -2.1556,
        "z": -0.0018
      },
      {
        "id": 10,
        "element": "H",
        "x": -2.8694,
        "y": -0.8801,
        "z": 0.5183
      },
      {
        "id": 11,
        "element": "H",
        "x": -2.8694,
        "y": 0.8808,
        "z": 0.5175
      },
      {
        "id": 12,
        "element": "H",
        "x": -2.8495,
        "y": -0.0004,
        "z": -1.0283
      },
      {
        "id": 13,
        "element": "H",
        "x": 1.6531,
        "y": 2.1484,
        "z": -0.0007
      },
      {
        "id": 14,
        "element": "H",
        "x": 1.6529,
        "y": -2.1485,
        "z": -0.0005
      },
      {
        "id": 15,
        "element": "H",
        "x": 2.8933,
        "y": -0.0001,
        "z": -0.0004
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
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 6,
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
        "to": 10,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 15,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "naphthalene",
    "name": "Naphthalene",
    "iupacName": "naphthalene",
    "formula": "C₁₀H₈",
    "hillFormula": "C10H8",
    "molarMass": 128.17,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0,
    "standardState": "solid",
    "meltingPoint": 353.4,
    "boilingPoint": 491,
    "uses": "The classic ingredient of mothballs.",
    "fact": "Naphthalene's two fused benzene rings sublime directly from solid to vapor — the source of mothball smell.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0,
        "y": 0.7076,
        "z": 0.0001
      },
      {
        "id": 2,
        "element": "C",
        "x": 0,
        "y": -0.7076,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.225,
        "y": 1.3944,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.225,
        "y": -1.3944,
        "z": 0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": -1.225,
        "y": 1.3943,
        "z": 0
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.225,
        "y": -1.3943,
        "z": 0
      },
      {
        "id": 7,
        "element": "C",
        "x": 2.4327,
        "y": 0.6959,
        "z": -0.0001
      },
      {
        "id": 8,
        "element": "C",
        "x": 2.4327,
        "y": -0.6958,
        "z": 0
      },
      {
        "id": 9,
        "element": "C",
        "x": -2.4327,
        "y": 0.6958,
        "z": 0
      },
      {
        "id": 10,
        "element": "C",
        "x": -2.4327,
        "y": -0.6958,
        "z": -0.0001
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.2489,
        "y": 2.4821,
        "z": -0.0001
      },
      {
        "id": 12,
        "element": "H",
        "x": 1.2489,
        "y": -2.4822,
        "z": 0.0001
      },
      {
        "id": 13,
        "element": "H",
        "x": -1.249,
        "y": 2.4821,
        "z": 0.0001
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.2489,
        "y": -2.4822,
        "z": -0.0001
      },
      {
        "id": 15,
        "element": "H",
        "x": 3.3732,
        "y": 1.2391,
        "z": -0.0001
      },
      {
        "id": 16,
        "element": "H",
        "x": 3.3733,
        "y": -1.239,
        "z": -0.0001
      },
      {
        "id": 17,
        "element": "H",
        "x": -3.3732,
        "y": 1.239,
        "z": 0
      },
      {
        "id": 18,
        "element": "H",
        "x": -3.3733,
        "y": -1.239,
        "z": -0.0001
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
        "to": 5,
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
        "from": 3,
        "to": 11,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 14,
        "order": 1,
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
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 18,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "phenol",
    "name": "Phenol",
    "iupacName": "phenol",
    "formula": "C₆H₅OH",
    "hillFormula": "C6H6O",
    "molarMass": 94.11,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "120°",
    "polarity": "polar",
    "dipoleMoment": 1.22,
    "standardState": "solid",
    "meltingPoint": 314,
    "boilingPoint": 455,
    "uses": "Precursor to plastics, aspirin, and disinfectants.",
    "fact": "Joseph Lister used phenol as the first surgical antiseptic in 1867, revolutionizing surgery.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -2.3622,
        "y": 0.0001,
        "z": -0.0004
      },
      {
        "id": 2,
        "element": "C",
        "x": -1.0011,
        "y": 0,
        "z": 0.0003
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.3037,
        "y": 1.208,
        "z": 0.0002
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.3038,
        "y": -1.2079,
        "z": 0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.0912,
        "y": 1.208,
        "z": -0.0001
      },
      {
        "id": 6,
        "element": "C",
        "x": 1.0911,
        "y": -1.208,
        "z": 0
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.7886,
        "y": 0,
        "z": -0.0002
      },
      {
        "id": 8,
        "element": "H",
        "x": -0.8351,
        "y": 2.1559,
        "z": 0.0002
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.8415,
        "y": -2.1521,
        "z": 0
      },
      {
        "id": 10,
        "element": "H",
        "x": 1.6345,
        "y": 2.1484,
        "z": -0.0003
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.6341,
        "y": -2.1486,
        "z": -0.0002
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.8747,
        "y": -0.0001,
        "z": -0.0004
      },
      {
        "id": 13,
        "element": "H",
        "x": -2.6772,
        "y": 0.9203,
        "z": -0.0005
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
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
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
        "from": 3,
        "to": 5,
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
        "from": 4,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 12,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "styrene",
    "name": "Styrene",
    "iupacName": "styrene",
    "formula": "C₈H₈",
    "hillFormula": "C8H8",
    "molarMass": 104.15,
    "category": "hydrocarbon",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "120°",
    "polarity": "nonpolar",
    "dipoleMoment": 0.13,
    "standardState": "liquid",
    "meltingPoint": 242.5,
    "boilingPoint": 418.3,
    "uses": "Polymerized into polystyrene for foam cups and packaging.",
    "fact": "Styrofoam is about 95% air trapped in a polystyrene web.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0.5487,
        "y": -0.2144,
        "z": 0.1043
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.3364,
        "y": -1.2879,
        "z": 0.0052
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.0619,
        "y": 1.0927,
        "z": 0.1091
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.7083,
        "y": -1.0543,
        "z": -0.0889
      },
      {
        "id": 5,
        "element": "C",
        "x": -1.3101,
        "y": 1.3263,
        "z": 0.0151
      },
      {
        "id": 6,
        "element": "C",
        "x": -2.1952,
        "y": 0.2528,
        "z": -0.0839
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.9794,
        "y": -0.458,
        "z": 0.2022
      },
      {
        "id": 8,
        "element": "C",
        "x": 2.9601,
        "y": 0.3428,
        "z": -0.263
      },
      {
        "id": 9,
        "element": "H",
        "x": 0.0255,
        "y": -2.3133,
        "z": -0.0015
      },
      {
        "id": 10,
        "element": "H",
        "x": 0.7226,
        "y": 1.951,
        "z": 0.199
      },
      {
        "id": 11,
        "element": "H",
        "x": -2.3977,
        "y": -1.89,
        "z": -0.1662
      },
      {
        "id": 12,
        "element": "H",
        "x": -1.6899,
        "y": 2.3438,
        "z": 0.0222
      },
      {
        "id": 13,
        "element": "H",
        "x": -3.2635,
        "y": 0.4346,
        "z": -0.1562
      },
      {
        "id": 14,
        "element": "H",
        "x": 2.2727,
        "y": -1.3927,
        "z": 0.6752
      },
      {
        "id": 15,
        "element": "H",
        "x": 3.9982,
        "y": 0.0502,
        "z": -0.1434
      },
      {
        "id": 16,
        "element": "H",
        "x": 2.7608,
        "y": 1.2784,
        "z": -0.7731
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
        "to": 9,
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
        "to": 10,
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
        "to": 11,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 13,
        "order": 1,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 16,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "isopropanol",
    "name": "Isopropanol",
    "iupacName": "propan-2-ol",
    "formula": "C₃H₇OH",
    "hillFormula": "C3H8O",
    "molarMass": 60.1,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "polar",
    "dipoleMoment": 1.66,
    "standardState": "liquid",
    "meltingPoint": 184,
    "boilingPoint": 355.8,
    "uses": "The main ingredient of rubbing alcohol and hand sanitizers.",
    "fact": "Isopropanol kills germs by dissolving their protective membranes in seconds.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.0004,
        "y": 1.3572,
        "z": -0.1242
      },
      {
        "id": 2,
        "element": "C",
        "x": 0,
        "y": 0.0177,
        "z": 0.3601
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.2599,
        "y": -0.6878,
        "z": -0.1179
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.2603,
        "y": -0.6871,
        "z": -0.1179
      },
      {
        "id": 5,
        "element": "H",
        "x": -0.0001,
        "y": 0.0646,
        "z": 1.454
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.3079,
        "y": -1.7139,
        "z": 0.259
      },
      {
        "id": 7,
        "element": "H",
        "x": -2.1507,
        "y": -0.1484,
        "z": 0.2213
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.3061,
        "y": -0.7138,
        "z": -1.2122
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.3089,
        "y": -1.7132,
        "z": 0.259
      },
      {
        "id": 10,
        "element": "H",
        "x": 2.1508,
        "y": -0.1471,
        "z": 0.2213
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.3066,
        "y": -0.7131,
        "z": -1.2122
      },
      {
        "id": 12,
        "element": "H",
        "x": -0.0006,
        "y": 1.3242,
        "z": -1.0961
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
        "to": 12,
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
      },
      {
        "from": 4,
        "to": 11,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ethylene-glycol",
    "name": "Ethylene Glycol",
    "iupacName": "ethane-1,2-diol",
    "formula": "C₂H₆O₂",
    "hillFormula": "C2H6O2",
    "molarMass": 62.07,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "polar",
    "dipoleMoment": 2.36,
    "standardState": "liquid",
    "meltingPoint": 260.2,
    "boilingPoint": 470.4,
    "uses": "The main ingredient of automotive antifreeze.",
    "fact": "Its sweet taste makes antifreeze dangerously attractive to pets — bittering agents are now added.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.3915,
        "y": -0.5796,
        "z": -0.1488
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.3915,
        "y": -0.5796,
        "z": 0.1488
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.6979,
        "y": 0.5796,
        "z": 0.2967
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.6979,
        "y": 0.5796,
        "z": -0.2966
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.2604,
        "y": 1.4681,
        "z": -0.004
      },
      {
        "id": 6,
        "element": "H",
        "x": -0.6563,
        "y": 0.5356,
        "z": 1.389
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.2579,
        "y": 1.4625,
        "z": 0.0237
      },
      {
        "id": 8,
        "element": "H",
        "x": 0.6683,
        "y": 0.554,
        "z": -1.3904
      },
      {
        "id": 9,
        "element": "H",
        "x": -1.4455,
        "y": -0.534,
        "z": -1.1186
      },
      {
        "id": 10,
        "element": "H",
        "x": 0.8773,
        "y": -1.3546,
        "z": -0.1355
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
        "from": 1,
        "to": 9,
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
        "to": 10,
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
    "id": "glycerol",
    "name": "Glycerol",
    "iupacName": "propane-1,2,3-triol",
    "formula": "C₃H₈O₃",
    "hillFormula": "C3H8O3",
    "molarMass": 92.09,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "109.5°",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 291.3,
    "boilingPoint": 563,
    "uses": "Moisturizer in soaps and cosmetics; sweetener in foods.",
    "fact": "Glycerol forms the backbone of every fat molecule in your body.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0235,
        "y": -1.3493,
        "z": 0.2499
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.3988,
        "y": -0.0044,
        "z": -0.2369
      },
      {
        "id": 3,
        "element": "O",
        "x": -2.4131,
        "y": -0.0097,
        "z": -0.2384
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.0001,
        "y": -0.0124,
        "z": -0.2555
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.2544,
        "y": 0.698,
        "z": 0.2362
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.2637,
        "y": 0.6778,
        "z": 0.2447
      },
      {
        "id": 7,
        "element": "H",
        "x": -0.0033,
        "y": -0.0966,
        "z": -1.3473
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.3076,
        "y": 0.7187,
        "z": 1.3298
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.3018,
        "y": 1.7246,
        "z": -0.1387
      },
      {
        "id": 10,
        "element": "H",
        "x": -1.307,
        "y": 1.7136,
        "z": -0.1066
      },
      {
        "id": 11,
        "element": "H",
        "x": -1.31,
        "y": 0.667,
        "z": 1.3389
      },
      {
        "id": 12,
        "element": "H",
        "x": 0.0214,
        "y": -1.3033,
        "z": 1.2213
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.3408,
        "y": -0.9155,
        "z": 0.0984
      },
      {
        "id": 14,
        "element": "H",
        "x": -3.1917,
        "y": 0.4634,
        "z": 0.1016
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
        "to": 12,
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
        "to": 13,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
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
        "from": 5,
        "to": 8,
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
        "from": 6,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "acetaldehyde",
    "name": "Acetaldehyde",
    "iupacName": "acetaldehyde",
    "formula": "CH₃CHO",
    "hillFormula": "C2H4O",
    "molarMass": 44.05,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "~120°",
    "polarity": "polar",
    "dipoleMoment": 2.75,
    "standardState": "gas",
    "meltingPoint": 150,
    "boilingPoint": 293.3,
    "uses": "Industrial intermediate for acetic acid and perfumes.",
    "fact": "Acetaldehyde is what your liver makes from alcohol — and the main cause of hangovers.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.1443,
        "y": 0.2412,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": -1.2574,
        "y": 0.1815,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.113,
        "y": -0.4226,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": -1.7938,
        "y": -0.1493,
        "z": 0.8924
      },
      {
        "id": 5,
        "element": "H",
        "x": -1.1865,
        "y": 1.2719,
        "z": 0.0016
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.7928,
        "y": -0.1468,
        "z": -0.8938
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.1478,
        "y": -1.5252,
        "z": -0.0007
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
    "id": "ethyl-acetate",
    "name": "Ethyl Acetate",
    "iupacName": "ethyl acetate",
    "formula": "CH₃COOC₂H₅",
    "hillFormula": "C4H8O2",
    "molarMass": 88.11,
    "category": "ester",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": 1.78,
    "standardState": "liquid",
    "meltingPoint": 189.6,
    "boilingPoint": 350.3,
    "uses": "Solvent in nail polish remover and decaffeinating coffee.",
    "fact": "The fruity smell of pears and some wines comes partly from ethyl acetate.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -0.2577,
        "y": -0.4782,
        "z": -0.0002
      },
      {
        "id": 2,
        "element": "O",
        "x": 1.2472,
        "y": 1.2745,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.347,
        "y": 0.4499,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": -2.6506,
        "y": -0.3197,
        "z": 0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": 0.9867,
        "y": 0.0789,
        "z": -0.0001
      },
      {
        "id": 6,
        "element": "C",
        "x": 2.0213,
        "y": -1.0053,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "H",
        "x": -1.2894,
        "y": 1.0804,
        "z": 0.8943
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.2895,
        "y": 1.0807,
        "z": -0.894
      },
      {
        "id": 9,
        "element": "H",
        "x": -3.5065,
        "y": 0.3609,
        "z": 0.0002
      },
      {
        "id": 10,
        "element": "H",
        "x": -2.7149,
        "y": -0.9687,
        "z": -0.8795
      },
      {
        "id": 11,
        "element": "H",
        "x": -2.7147,
        "y": -0.969,
        "z": 0.8794
      },
      {
        "id": 12,
        "element": "H",
        "x": 1.9158,
        "y": -1.6188,
        "z": -0.8982
      },
      {
        "id": 13,
        "element": "H",
        "x": 1.9167,
        "y": -1.6175,
        "z": 0.8994
      },
      {
        "id": 14,
        "element": "H",
        "x": 3.0182,
        "y": -0.5553,
        "z": -0.0007
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
        "from": 1,
        "to": 5,
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
      },
      {
        "from": 4,
        "to": 11,
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
        "from": 6,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 14,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "diethyl-ether",
    "name": "Diethyl Ether",
    "iupacName": "ethoxyethane",
    "formula": "C₄H₁₀O",
    "hillFormula": "C4H10O",
    "molarMass": 74.12,
    "category": "ether",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "110°",
    "polarity": "polar",
    "dipoleMoment": 1.15,
    "standardState": "liquid",
    "meltingPoint": 156.8,
    "boilingPoint": 307.6,
    "uses": "Historic surgical anesthetic; laboratory solvent.",
    "fact": "The first public surgery under ether anesthesia in 1846 ended the era of surgery without pain relief.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0008,
        "y": -0.2762,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 1.1747,
        "y": 0.5222,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": -1.1754,
        "y": 0.5226,
        "z": 0
      },
      {
        "id": 4,
        "element": "C",
        "x": 2.3873,
        "y": -0.384,
        "z": 0
      },
      {
        "id": 5,
        "element": "C",
        "x": -2.3874,
        "y": -0.3844,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.1905,
        "y": 1.159,
        "z": -0.8916
      },
      {
        "id": 7,
        "element": "H",
        "x": 1.1905,
        "y": 1.1588,
        "z": 0.8916
      },
      {
        "id": 8,
        "element": "H",
        "x": -1.1909,
        "y": 1.159,
        "z": 0.8918
      },
      {
        "id": 9,
        "element": "H",
        "x": -1.1908,
        "y": 1.159,
        "z": -0.8918
      },
      {
        "id": 10,
        "element": "H",
        "x": 3.3119,
        "y": 0.2,
        "z": 0
      },
      {
        "id": 11,
        "element": "H",
        "x": 2.3814,
        "y": -1.0362,
        "z": 0.8796
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.3815,
        "y": -1.0362,
        "z": -0.8796
      },
      {
        "id": 13,
        "element": "H",
        "x": -3.3125,
        "y": 0.1989,
        "z": 0.0001
      },
      {
        "id": 14,
        "element": "H",
        "x": -2.381,
        "y": -1.0366,
        "z": -0.8796
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.3811,
        "y": -1.0366,
        "z": 0.8796
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
        "from": 3,
        "to": 5,
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
        "to": 9,
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
        "from": 5,
        "to": 13,
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
        "from": 5,
        "to": 15,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "methylamine",
    "name": "Methylamine",
    "iupacName": "methanamine",
    "formula": "CH₃NH₂",
    "hillFormula": "CH5N",
    "molarMass": 31.057,
    "category": "amine",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp3",
    "bondAngle": "~107°",
    "polarity": "polar",
    "dipoleMoment": 1.31,
    "standardState": "gas",
    "meltingPoint": 179.9,
    "boilingPoint": 266.8,
    "uses": "Building block for pharmaceuticals and pesticides.",
    "fact": "Methylamine is ammonia's simplest organic cousin and smells strongly of rotting fish.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -0.7154,
        "y": 0,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.7154,
        "y": 0,
        "z": 0
      },
      {
        "id": 3,
        "element": "H",
        "x": 1.1069,
        "y": 0.0916,
        "z": 1.0174
      },
      {
        "id": 4,
        "element": "H",
        "x": 1.0996,
        "y": 0.8349,
        "z": -0.593
      },
      {
        "id": 5,
        "element": "H",
        "x": 1.0996,
        "y": -0.9274,
        "z": -0.4345
      },
      {
        "id": 6,
        "element": "H",
        "x": -1.0625,
        "y": 0.8564,
        "z": 0.4294
      },
      {
        "id": 7,
        "element": "H",
        "x": -1.0625,
        "y": -0.7661,
        "z": 0.5753
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
      }
    ]
  },
  {
    "id": "aniline",
    "name": "Aniline",
    "iupacName": "aniline",
    "formula": "C₆H₅NH₂",
    "hillFormula": "C6H7N",
    "molarMass": 93.13,
    "category": "amine",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": 1.53,
    "standardState": "liquid",
    "meltingPoint": 267,
    "boilingPoint": 457.3,
    "uses": "Parent compound of thousands of synthetic dyes.",
    "fact": "The accidental discovery of mauve dye from aniline in 1856 launched the entire synthetic chemical industry.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -2.4046,
        "y": 0,
        "z": 0.0005
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.9941,
        "y": -0.0002,
        "z": -0.0003
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.2969,
        "y": 1.2079,
        "z": -0.0003
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.2965,
        "y": -1.208,
        "z": -0.0003
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.098,
        "y": 1.208,
        "z": 0.0001
      },
      {
        "id": 6,
        "element": "C",
        "x": 1.0984,
        "y": -1.2078,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.7957,
        "y": 0.0002,
        "z": 0.0003
      },
      {
        "id": 8,
        "element": "H",
        "x": -0.8289,
        "y": 2.1558,
        "z": -0.0003
      },
      {
        "id": 9,
        "element": "H",
        "x": -0.8283,
        "y": -2.1561,
        "z": -0.0002
      },
      {
        "id": 10,
        "element": "H",
        "x": 1.6411,
        "y": 2.1486,
        "z": 0.0002
      },
      {
        "id": 11,
        "element": "H",
        "x": 1.6417,
        "y": -2.1482,
        "z": 0.0002
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.8818,
        "y": 0.0004,
        "z": 0.0006
      },
      {
        "id": 13,
        "element": "H",
        "x": -2.9109,
        "y": -0.8755,
        "z": -0.0005
      },
      {
        "id": 14,
        "element": "H",
        "x": -2.9107,
        "y": 0.8756,
        "z": -0.0006
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
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 3,
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
        "from": 3,
        "to": 5,
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
        "from": 4,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 12,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "vinyl-chloride",
    "name": "Vinyl Chloride",
    "iupacName": "chloroethene",
    "formula": "C₂H₃Cl",
    "hillFormula": "C2H3Cl",
    "molarMass": 62.5,
    "category": "compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "sp2",
    "bondAngle": "~120°",
    "polarity": "polar",
    "dipoleMoment": 1.45,
    "standardState": "gas",
    "meltingPoint": 119.4,
    "boilingPoint": 259.8,
    "uses": "Polymerized into PVC for pipes, window frames, and flooring.",
    "fact": "PVC is the world's third most-produced plastic, all built from this small gas molecule.",
    "atoms": [
      {
        "id": 1,
        "element": "Cl",
        "x": -1.4203,
        "y": 0.1932,
        "z": 0
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.158,
        "y": -0.4694,
        "z": 0
      },
      {
        "id": 3,
        "element": "C",
        "x": 1.2623,
        "y": 0.2762,
        "z": 0
      },
      {
        "id": 4,
        "element": "H",
        "x": 0.1621,
        "y": -1.5509,
        "z": -0.0001
      },
      {
        "id": 5,
        "element": "H",
        "x": 2.2396,
        "y": -0.1941,
        "z": 0
      },
      {
        "id": 6,
        "element": "H",
        "x": 1.2208,
        "y": 1.36,
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
      }
    ]
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "iupacName": "2-acetyloxybenzoic acid",
    "formula": "C₉H₈O₄",
    "hillFormula": "C9H8O4",
    "molarMass": 180.16,
    "category": "pharmaceutical",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 408,
    "boilingPoint": null,
    "uses": "Pain reliever, fever reducer, and blood thinner.",
    "fact": "Aspirin's ancestor, willow bark, was prescribed for pain by Hippocrates 2,400 years ago.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.2333,
        "y": 0.554,
        "z": 0.7792
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.6952,
        "y": -2.7148,
        "z": -0.7502
      },
      {
        "id": 3,
        "element": "O",
        "x": 0.7958,
        "y": -2.1843,
        "z": 0.8685
      },
      {
        "id": 4,
        "element": "O",
        "x": 1.7813,
        "y": 0.8105,
        "z": -1.4821
      },
      {
        "id": 5,
        "element": "C",
        "x": -0.0857,
        "y": 0.6088,
        "z": 0.4403
      },
      {
        "id": 6,
        "element": "C",
        "x": -0.7927,
        "y": -0.5515,
        "z": 0.1244
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.7288,
        "y": 1.8464,
        "z": 0.4133
      },
      {
        "id": 8,
        "element": "C",
        "x": -2.1426,
        "y": -0.4741,
        "z": -0.2184
      },
      {
        "id": 9,
        "element": "C",
        "x": -2.0787,
        "y": 1.9238,
        "z": 0.0706
      },
      {
        "id": 10,
        "element": "C",
        "x": -2.7855,
        "y": 0.7636,
        "z": -0.2453
      },
      {
        "id": 11,
        "element": "C",
        "x": -0.1409,
        "y": -1.8536,
        "z": 0.1477
      },
      {
        "id": 12,
        "element": "C",
        "x": 2.1094,
        "y": 0.6715,
        "z": -0.3113
      },
      {
        "id": 13,
        "element": "C",
        "x": 3.5305,
        "y": 0.5996,
        "z": 0.1635
      },
      {
        "id": 14,
        "element": "H",
        "x": -0.1851,
        "y": 2.7545,
        "z": 0.6593
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.7247,
        "y": -1.3605,
        "z": -0.4564
      },
      {
        "id": 16,
        "element": "H",
        "x": -2.5797,
        "y": 2.8872,
        "z": 0.0506
      },
      {
        "id": 17,
        "element": "H",
        "x": -3.8374,
        "y": 0.8238,
        "z": -0.509
      },
      {
        "id": 18,
        "element": "H",
        "x": 3.729,
        "y": 1.4184,
        "z": 0.8593
      },
      {
        "id": 19,
        "element": "H",
        "x": 4.2045,
        "y": 0.6969,
        "z": -0.6924
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.7105,
        "y": -0.3659,
        "z": 0.6426
      },
      {
        "id": 21,
        "element": "H",
        "x": -0.2555,
        "y": -3.5916,
        "z": -0.7337
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
        "from": 1,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 12,
        "order": 2,
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
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
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
        "to": 14,
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
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
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
      }
    ]
  },
  {
    "id": "paracetamol",
    "name": "Paracetamol",
    "iupacName": "N-(4-hydroxyphenyl)acetamide",
    "formula": "C₈H₉NO₂",
    "hillFormula": "C8H9NO2",
    "molarMass": 151.16,
    "category": "pharmaceutical",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 442,
    "boilingPoint": null,
    "uses": "One of the most widely used pain and fever medicines in the world.",
    "fact": "Known as acetaminophen in the US — the active ingredient of Tylenol and Crocin.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 3.8509,
        "y": 0.4516,
        "z": 0.0012
      },
      {
        "id": 2,
        "element": "O",
        "x": -2.5999,
        "y": 1.4041,
        "z": -0.0018
      },
      {
        "id": 3,
        "element": "N",
        "x": -1.5705,
        "y": -0.7171,
        "z": 0.0001
      },
      {
        "id": 4,
        "element": "C",
        "x": -0.2066,
        "y": -0.4231,
        "z": -0.0002
      },
      {
        "id": 5,
        "element": "C",
        "x": 0.2205,
        "y": 0.9047,
        "z": 0.0004
      },
      {
        "id": 6,
        "element": "C",
        "x": 0.7298,
        "y": -1.457,
        "z": -0.0007
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.5841,
        "y": 1.1986,
        "z": 0.0002
      },
      {
        "id": 8,
        "element": "C",
        "x": 2.0933,
        "y": -1.1629,
        "z": -0.0007
      },
      {
        "id": 9,
        "element": "C",
        "x": 2.5204,
        "y": 0.1648,
        "z": -0.0003
      },
      {
        "id": 10,
        "element": "C",
        "x": -2.6485,
        "y": 0.1782,
        "z": 0.0009
      },
      {
        "id": 11,
        "element": "C",
        "x": -3.9735,
        "y": -0.542,
        "z": 0.001
      },
      {
        "id": 12,
        "element": "H",
        "x": -0.4436,
        "y": 1.7577,
        "z": 0.0012
      },
      {
        "id": 13,
        "element": "H",
        "x": 0.4113,
        "y": -2.4963,
        "z": -0.001
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.801,
        "y": -1.7086,
        "z": 0.0001
      },
      {
        "id": 15,
        "element": "H",
        "x": 1.9053,
        "y": 2.237,
        "z": 0.0009
      },
      {
        "id": 16,
        "element": "H",
        "x": 2.818,
        "y": -1.9726,
        "z": -0.0008
      },
      {
        "id": 17,
        "element": "H",
        "x": -4.0655,
        "y": -1.1463,
        "z": -0.9058
      },
      {
        "id": 18,
        "element": "H",
        "x": -4.7904,
        "y": 0.1844,
        "z": 0.0288
      },
      {
        "id": 19,
        "element": "H",
        "x": -4.0445,
        "y": -1.1886,
        "z": 0.8802
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.965,
        "y": 1.4176,
        "z": 0.0017
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
        "to": 20,
        "order": 1,
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
        "to": 4,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 16,
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
        "from": 11,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 19,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "ibuprofen",
    "name": "Ibuprofen",
    "iupacName": "2-[4-(2-methylpropyl)phenyl]propanoic acid",
    "formula": "C₁₃H₁₈O₂",
    "hillFormula": "C13H18O2",
    "molarMass": 206.28,
    "category": "pharmaceutical",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 349,
    "boilingPoint": null,
    "uses": "Anti-inflammatory painkiller for headaches, sprains, and arthritis.",
    "fact": "Ibuprofen exists as two mirror-image forms, but only one of them actually relieves pain.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -4.4457,
        "y": -1.0032,
        "z": 0.4113
      },
      {
        "id": 2,
        "element": "O",
        "x": -2.4005,
        "y": -1.9114,
        "z": 0.0531
      },
      {
        "id": 3,
        "element": "C",
        "x": 3.9024,
        "y": -0.4411,
        "z": 0.0362
      },
      {
        "id": 4,
        "element": "C",
        "x": 3.1486,
        "y": 0.8194,
        "z": -0.4313
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.6528,
        "y": 0.7393,
        "z": -0.2472
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.0946,
        "y": 0.5935,
        "z": 0.0901
      },
      {
        "id": 7,
        "element": "C",
        "x": -2.5728,
        "y": 0.5152,
        "z": 0.2719
      },
      {
        "id": 8,
        "element": "C",
        "x": 3.6076,
        "y": -0.776,
        "z": 1.5005
      },
      {
        "id": 9,
        "element": "C",
        "x": 3.5239,
        "y": -1.6299,
        "z": -0.8505
      },
      {
        "id": 10,
        "element": "C",
        "x": 0.869,
        "y": 0.2281,
        "z": -1.2695
      },
      {
        "id": 11,
        "element": "C",
        "x": 1.0897,
        "y": 1.1791,
        "z": 0.9405
      },
      {
        "id": 12,
        "element": "C",
        "x": -0.5135,
        "y": 0.1549,
        "z": -1.0998
      },
      {
        "id": 13,
        "element": "C",
        "x": -0.2929,
        "y": 1.1057,
        "z": 1.1102
      },
      {
        "id": 14,
        "element": "C",
        "x": -3.3736,
        "y": 1.3495,
        "z": -0.7486
      },
      {
        "id": 15,
        "element": "C",
        "x": -3.1004,
        "y": -0.9233,
        "z": 0.2332
      },
      {
        "id": 16,
        "element": "H",
        "x": 4.9775,
        "y": -0.2527,
        "z": -0.0735
      },
      {
        "id": 17,
        "element": "H",
        "x": 3.3789,
        "y": 1.0242,
        "z": -1.4854
      },
      {
        "id": 18,
        "element": "H",
        "x": 3.5298,
        "y": 1.6907,
        "z": 0.1182
      },
      {
        "id": 19,
        "element": "H",
        "x": -2.8243,
        "y": 0.8896,
        "z": 1.2739
      },
      {
        "id": 20,
        "element": "H",
        "x": 2.5794,
        "y": -1.1167,
        "z": 1.6574
      },
      {
        "id": 21,
        "element": "H",
        "x": 3.7958,
        "y": 0.0879,
        "z": 2.1462
      },
      {
        "id": 22,
        "element": "H",
        "x": 4.2658,
        "y": -1.5849,
        "z": 1.8375
      },
      {
        "id": 23,
        "element": "H",
        "x": 4.1778,
        "y": -2.4814,
        "z": -0.6301
      },
      {
        "id": 24,
        "element": "H",
        "x": 2.4964,
        "y": -1.9688,
        "z": -0.6863
      },
      {
        "id": 25,
        "element": "H",
        "x": 3.6494,
        "y": -1.3895,
        "z": -1.9115
      },
      {
        "id": 26,
        "element": "H",
        "x": 1.3084,
        "y": -0.1099,
        "z": -2.2035
      },
      {
        "id": 27,
        "element": "H",
        "x": 1.7024,
        "y": 1.5855,
        "z": 1.7398
      },
      {
        "id": 28,
        "element": "H",
        "x": -1.1208,
        "y": -0.2449,
        "z": -1.9075
      },
      {
        "id": 29,
        "element": "H",
        "x": -0.729,
        "y": 1.4534,
        "z": 2.043
      },
      {
        "id": 30,
        "element": "H",
        "x": -3.0012,
        "y": 2.3792,
        "z": -0.784
      },
      {
        "id": 31,
        "element": "H",
        "x": -3.3032,
        "y": 0.9294,
        "z": -1.7582
      },
      {
        "id": 32,
        "element": "H",
        "x": -4.4357,
        "y": 1.3895,
        "z": -0.4835
      },
      {
        "id": 33,
        "element": "H",
        "x": -4.7639,
        "y": -1.9305,
        "z": 0.3782
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 33,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 15,
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
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 10,
        "order": 2,
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
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 26,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 13,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 27,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 28,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 29,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 30,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 31,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 32,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "vitamin-c",
    "name": "Vitamin C",
    "iupacName": "(2R)-2-[(1S)-1,2-dihydroxyethyl]-3,4-dihydroxy-2H-furan-5-one",
    "formula": "C₆H₈O₆",
    "hillFormula": "C6H8O6",
    "molarMass": 176.12,
    "category": "vitamin",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 463,
    "boilingPoint": null,
    "uses": "Essential nutrient for collagen production and immune function.",
    "fact": "Humans are among the few animals that cannot make their own vitamin C — hence scurvy on old sailing ships.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0932,
        "y": -1.1066,
        "z": 0.6445
      },
      {
        "id": 2,
        "element": "O",
        "x": -1.3436,
        "y": 0.0892,
        "z": -1.3863
      },
      {
        "id": 3,
        "element": "O",
        "x": 0.8392,
        "y": 2.3901,
        "z": 0.2844
      },
      {
        "id": 4,
        "element": "O",
        "x": -3.8929,
        "y": -0.204,
        "z": -0.3326
      },
      {
        "id": 5,
        "element": "O",
        "x": 3.022,
        "y": 0.5695,
        "z": -0.6056
      },
      {
        "id": 6,
        "element": "O",
        "x": 1.9915,
        "y": -2.156,
        "z": -0.1376
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.3397,
        "y": 0.2618,
        "z": 0.7853
      },
      {
        "id": 8,
        "element": "C",
        "x": -1.6059,
        "y": 0.4585,
        "z": -0.033
      },
      {
        "id": 9,
        "element": "C",
        "x": 0.8212,
        "y": 1.0265,
        "z": 0.2887
      },
      {
        "id": 10,
        "element": "C",
        "x": -2.7464,
        "y": -0.4082,
        "z": 0.4863
      },
      {
        "id": 11,
        "element": "C",
        "x": 1.8077,
        "y": 0.2273,
        "z": -0.1049
      },
      {
        "id": 12,
        "element": "C",
        "x": 1.3536,
        "y": -1.1481,
        "z": 0.1108
      },
      {
        "id": 13,
        "element": "H",
        "x": -0.5154,
        "y": 0.4609,
        "z": 1.8484
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.9162,
        "y": 1.5092,
        "z": -0.0432
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.4989,
        "y": -1.4735,
        "z": 0.4351
      },
      {
        "id": 16,
        "element": "H",
        "x": -3.0013,
        "y": -0.1462,
        "z": 1.5179
      },
      {
        "id": 17,
        "element": "H",
        "x": -1.0999,
        "y": -0.8522,
        "z": -1.3986
      },
      {
        "id": 18,
        "element": "H",
        "x": 0.0039,
        "y": 2.6957,
        "z": 0.678
      },
      {
        "id": 19,
        "element": "H",
        "x": -4.6023,
        "y": -0.7644,
        "z": 0.0257
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.5024,
        "y": -0.2572,
        "z": -0.7856
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
        "from": 1,
        "to": 12,
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
        "from": 2,
        "to": 17,
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
        "to": 18,
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
        "to": 19,
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
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 12,
        "order": 2,
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
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 15,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nicotine",
    "name": "Nicotine",
    "iupacName": "3-[(2S)-1-methylpyrrolidin-2-yl]pyridine",
    "formula": "C₁₀H₁₄N₂",
    "hillFormula": "C10H14N2",
    "molarMass": 162.23,
    "category": "alkaloid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 194,
    "boilingPoint": 520,
    "uses": "The addictive stimulant in tobacco; also used as an insecticide.",
    "fact": "Tobacco plants make nicotine as a natural insecticide to poison insects that eat their leaves.",
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -1.7023,
        "y": -0.7962,
        "z": -0.0339
      },
      {
        "id": 2,
        "element": "N",
        "x": 2.2968,
        "y": -0.7091,
        "z": 1.2171
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.8846,
        "y": 0.3095,
        "z": -0.5713
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.4955,
        "y": 1.5824,
        "z": 0.0436
      },
      {
        "id": 5,
        "element": "C",
        "x": -2.6857,
        "y": 1.0984,
        "z": 0.8596
      },
      {
        "id": 6,
        "element": "C",
        "x": -3.0281,
        "y": -0.2382,
        "z": 0.2329
      },
      {
        "id": 7,
        "element": "C",
        "x": 0.5872,
        "y": 0.1544,
        "z": -0.2513
      },
      {
        "id": 8,
        "element": "C",
        "x": -1.7618,
        "y": -1.9503,
        "z": -0.9217
      },
      {
        "id": 9,
        "element": "C",
        "x": 1.5569,
        "y": 0.7025,
        "z": -1.0791
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.0008,
        "y": -0.5357,
        "z": 0.8738
      },
      {
        "id": 11,
        "element": "C",
        "x": 2.9009,
        "y": 0.5451,
        "z": -0.7593
      },
      {
        "id": 12,
        "element": "C",
        "x": 3.2156,
        "y": -0.1627,
        "z": 0.3895
      },
      {
        "id": 13,
        "element": "H",
        "x": -1.0084,
        "y": 0.3665,
        "z": -1.6624
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.8454,
        "y": 2.2456,
        "z": -0.7571
      },
      {
        "id": 15,
        "element": "H",
        "x": -0.8018,
        "y": 2.1528,
        "z": 0.6709
      },
      {
        "id": 16,
        "element": "H",
        "x": -2.3896,
        "y": 0.965,
        "z": 1.9076
      },
      {
        "id": 17,
        "element": "H",
        "x": -3.522,
        "y": 1.8029,
        "z": 0.8293
      },
      {
        "id": 18,
        "element": "H",
        "x": -3.6094,
        "y": -0.8662,
        "z": 0.9151
      },
      {
        "id": 19,
        "element": "H",
        "x": -3.6021,
        "y": -0.088,
        "z": -0.6903
      },
      {
        "id": 20,
        "element": "H",
        "x": -2.3643,
        "y": -2.746,
        "z": -0.4698
      },
      {
        "id": 21,
        "element": "H",
        "x": -0.7627,
        "y": -2.3668,
        "z": -1.0885
      },
      {
        "id": 22,
        "element": "H",
        "x": -2.1975,
        "y": -1.7036,
        "z": -1.8965
      },
      {
        "id": 23,
        "element": "H",
        "x": 1.2798,
        "y": 1.2544,
        "z": -1.9728
      },
      {
        "id": 24,
        "element": "H",
        "x": 0.3027,
        "y": -0.9778,
        "z": 1.577
      },
      {
        "id": 25,
        "element": "H",
        "x": 3.6775,
        "y": 0.9638,
        "z": -1.389
      },
      {
        "id": 26,
        "element": "H",
        "x": 4.2491,
        "y": -0.3134,
        "z": 0.6833
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
        "from": 1,
        "to": 6,
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
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 12,
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
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 15,
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
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 19,
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
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 26,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "tnt",
    "name": "TNT",
    "iupacName": "2-methyl-1,3,5-trinitrobenzene",
    "formula": "C₇H₅N₃O₆",
    "hillFormula": "C7H5N3O6",
    "molarMass": 227.13,
    "category": "explosive",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 353.5,
    "boilingPoint": null,
    "uses": "Military explosive and the reference standard for explosive power.",
    "fact": "The energy of asteroid impacts and earthquakes is measured in \"tons of TNT equivalent\".",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.5454,
        "y": -3.514,
        "z": 0.0012
      },
      {
        "id": 2,
        "element": "O",
        "x": 0.5495,
        "y": 3.5137,
        "z": 0.0008
      },
      {
        "id": 3,
        "element": "O",
        "x": 2.4677,
        "y": -2.4539,
        "z": -0.0005
      },
      {
        "id": 4,
        "element": "O",
        "x": 2.4705,
        "y": 2.4513,
        "z": 0.0003
      },
      {
        "id": 5,
        "element": "O",
        "x": -3.5931,
        "y": -1.0959,
        "z": 0.0004
      },
      {
        "id": 6,
        "element": "O",
        "x": -3.5922,
        "y": 1.0993,
        "z": 0.0006
      },
      {
        "id": 7,
        "element": "N",
        "x": 1.2142,
        "y": -2.454,
        "z": 0.0002
      },
      {
        "id": 8,
        "element": "N",
        "x": 1.217,
        "y": 2.4527,
        "z": 0
      },
      {
        "id": 9,
        "element": "N",
        "x": -2.9846,
        "y": 0.0015,
        "z": 0.0001
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.2253,
        "y": -0.0006,
        "z": -0.0009
      },
      {
        "id": 11,
        "element": "C",
        "x": 0.5271,
        "y": -1.2082,
        "z": -0.0008
      },
      {
        "id": 12,
        "element": "C",
        "x": 0.5284,
        "y": 1.2078,
        "z": -0.0008
      },
      {
        "id": 13,
        "element": "C",
        "x": -1.5646,
        "y": 0.0008,
        "z": -0.0004
      },
      {
        "id": 14,
        "element": "C",
        "x": -0.8678,
        "y": -1.2074,
        "z": -0.0006
      },
      {
        "id": 15,
        "element": "C",
        "x": -0.8666,
        "y": 1.2084,
        "z": -0.0006
      },
      {
        "id": 16,
        "element": "C",
        "x": 2.7239,
        "y": -0.0016,
        "z": 0.0011
      },
      {
        "id": 17,
        "element": "H",
        "x": -1.4159,
        "y": -2.1468,
        "z": -0.0003
      },
      {
        "id": 18,
        "element": "H",
        "x": -1.4137,
        "y": 2.1483,
        "z": -0.0003
      },
      {
        "id": 19,
        "element": "H",
        "x": 3.1226,
        "y": 0.2418,
        "z": -0.9891
      },
      {
        "id": 20,
        "element": "H",
        "x": 3.0863,
        "y": 0.6934,
        "z": 0.7662
      },
      {
        "id": 21,
        "element": "H",
        "x": 3.3154,
        "y": -0.8111,
        "z": 0.4109
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
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 12,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 15,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 14,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 21,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "nitroglycerin",
    "name": "Nitroglycerin",
    "iupacName": "1,3-dinitrooxypropan-2-yl nitrate",
    "formula": "C₃H₅N₃O₉",
    "hillFormula": "C3H5N3O9",
    "molarMass": 227.09,
    "category": "explosive",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 286.2,
    "boilingPoint": null,
    "uses": "The explosive in dynamite — and a life-saving heart medication.",
    "fact": "Alfred Nobel tamed nitroglycerin into dynamite, and its fortune now funds the Nobel Prizes.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.0424,
        "y": -1.3569,
        "z": 0.411
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.4896,
        "y": -0.1938,
        "z": -0.1771
      },
      {
        "id": 3,
        "element": "O",
        "x": -1.5272,
        "y": 0.9543,
        "z": 0.2726
      },
      {
        "id": 4,
        "element": "O",
        "x": -1.143,
        "y": -2.6329,
        "z": -0.9457
      },
      {
        "id": 5,
        "element": "O",
        "x": -1.5454,
        "y": -2.7561,
        "z": 1.244
      },
      {
        "id": 6,
        "element": "O",
        "x": 3.3033,
        "y": 1.8382,
        "z": 0.1442
      },
      {
        "id": 7,
        "element": "O",
        "x": -3.2965,
        "y": 1.5003,
        "z": -0.9379
      },
      {
        "id": 8,
        "element": "O",
        "x": 4.689,
        "y": 0.1002,
        "z": 0.3197
      },
      {
        "id": 9,
        "element": "O",
        "x": -3.149,
        "y": 2.2897,
        "z": 1.1422
      },
      {
        "id": 10,
        "element": "N",
        "x": -0.9724,
        "y": -2.334,
        "z": 0.2369
      },
      {
        "id": 11,
        "element": "N",
        "x": 3.5993,
        "y": 0.6429,
        "z": 0.1229
      },
      {
        "id": 12,
        "element": "N",
        "x": -2.764,
        "y": 1.6465,
        "z": 0.1631
      },
      {
        "id": 13,
        "element": "C",
        "x": 0.1644,
        "y": -0.4658,
        "z": -0.7
      },
      {
        "id": 14,
        "element": "C",
        "x": 1.2787,
        "y": 0.5245,
        "z": -0.3881
      },
      {
        "id": 15,
        "element": "C",
        "x": -1.1692,
        "y": 0.2429,
        "z": -0.9077
      },
      {
        "id": 16,
        "element": "H",
        "x": 0.4619,
        "y": -1.0291,
        "z": -1.5943
      },
      {
        "id": 17,
        "element": "H",
        "x": 1.0315,
        "y": 1.0753,
        "z": 0.5284
      },
      {
        "id": 18,
        "element": "H",
        "x": 1.3888,
        "y": 1.2205,
        "z": -1.2291
      },
      {
        "id": 19,
        "element": "H",
        "x": -1.9707,
        "y": -0.4513,
        "z": -1.1776
      },
      {
        "id": 20,
        "element": "H",
        "x": -1.0471,
        "y": 0.9527,
        "z": -1.7372
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 14,
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
        "from": 3,
        "to": 15,
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
        "from": 5,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 20,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "sucrose",
    "name": "Sucrose",
    "iupacName": "(2R,3R,4S,5S,6R)-2-[(2S,3S,4S,5R)-3,4-dihydroxy-2,5-bis(hydroxymethyl)oxolan-2-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol",
    "formula": "C₁₂H₂₂O₁₁",
    "hillFormula": "C12H22O11",
    "molarMass": 342.3,
    "category": "carbohydrate",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 459,
    "boilingPoint": null,
    "uses": "Common table sugar from sugarcane and sugar beets.",
    "fact": "Sucrose is one glucose and one fructose molecule joined together.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.468,
        "y": 0.4385,
        "z": -0.9184
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.6033,
        "y": -0.8919,
        "z": 0.8122
      },
      {
        "id": 3,
        "element": "O",
        "x": 0.9285,
        "y": 0.4834,
        "z": -0.3053
      },
      {
        "id": 4,
        "element": "O",
        "x": -3.0702,
        "y": -2.0054,
        "z": 1.1933
      },
      {
        "id": 5,
        "element": "O",
        "x": -4.62,
        "y": 0.6319,
        "z": 0.7326
      },
      {
        "id": 6,
        "element": "O",
        "x": 1.2231,
        "y": 0.2156,
        "z": 2.5658
      },
      {
        "id": 7,
        "element": "O",
        "x": 3.6108,
        "y": -1.7286,
        "z": 0.6379
      },
      {
        "id": 8,
        "element": "O",
        "x": 3.15,
        "y": 1.8347,
        "z": 1.1537
      },
      {
        "id": 9,
        "element": "O",
        "x": -1.9582,
        "y": -1.848,
        "z": -2.43
      },
      {
        "id": 10,
        "element": "O",
        "x": -1.3845,
        "y": 3.245,
        "z": -0.8933
      },
      {
        "id": 11,
        "element": "O",
        "x": 3.8369,
        "y": 0.2057,
        "z": -2.5044
      },
      {
        "id": 12,
        "element": "C",
        "x": -1.4947,
        "y": -0.8632,
        "z": -0.3037
      },
      {
        "id": 13,
        "element": "C",
        "x": -2.9301,
        "y": -1.0229,
        "z": 0.1866
      },
      {
        "id": 14,
        "element": "C",
        "x": -3.229,
        "y": 0.3737,
        "z": 0.6887
      },
      {
        "id": 15,
        "element": "C",
        "x": -2.5505,
        "y": 1.2243,
        "z": -0.3791
      },
      {
        "id": 16,
        "element": "C",
        "x": 0.7534,
        "y": -0.7453,
        "z": 0.3971
      },
      {
        "id": 17,
        "element": "C",
        "x": 1.6462,
        "y": -0.7853,
        "z": 1.639
      },
      {
        "id": 18,
        "element": "C",
        "x": 3.1147,
        "y": -0.5553,
        "z": 1.2746
      },
      {
        "id": 19,
        "element": "C",
        "x": 3.2915,
        "y": 0.6577,
        "z": 0.3521
      },
      {
        "id": 20,
        "element": "C",
        "x": 2.2579,
        "y": 0.7203,
        "z": -0.7858
      },
      {
        "id": 21,
        "element": "C",
        "x": -1.0903,
        "y": -1.9271,
        "z": -1.3122
      },
      {
        "id": 22,
        "element": "C",
        "x": -2.0027,
        "y": 2.5323,
        "z": 0.1653
      },
      {
        "id": 23,
        "element": "C",
        "x": 2.5886,
        "y": -0.1903,
        "z": -1.9666
      },
      {
        "id": 24,
        "element": "H",
        "x": -3.6217,
        "y": -1.2732,
        "z": -0.6273
      },
      {
        "id": 25,
        "element": "H",
        "x": -2.8148,
        "y": 0.5301,
        "z": 1.6917
      },
      {
        "id": 26,
        "element": "H",
        "x": -3.2289,
        "y": 1.4361,
        "z": -1.215
      },
      {
        "id": 27,
        "element": "H",
        "x": 1.0588,
        "y": -1.5992,
        "z": -0.2109
      },
      {
        "id": 28,
        "element": "H",
        "x": 1.5257,
        "y": -1.753,
        "z": 2.1409
      },
      {
        "id": 29,
        "element": "H",
        "x": 3.6908,
        "y": -0.4029,
        "z": 2.1956
      },
      {
        "id": 30,
        "element": "H",
        "x": 4.31,
        "y": 0.675,
        "z": -0.0511
      },
      {
        "id": 31,
        "element": "H",
        "x": 2.2441,
        "y": 1.7505,
        "z": -1.1644
      },
      {
        "id": 32,
        "element": "H",
        "x": -1.1311,
        "y": -2.9324,
        "z": -0.8803
      },
      {
        "id": 33,
        "element": "H",
        "x": -0.0995,
        "y": -1.7686,
        "z": -1.74
      },
      {
        "id": 34,
        "element": "H",
        "x": -1.2448,
        "y": 2.3605,
        "z": 0.9369
      },
      {
        "id": 35,
        "element": "H",
        "x": -2.799,
        "y": 3.1543,
        "z": 0.5841
      },
      {
        "id": 36,
        "element": "H",
        "x": 1.821,
        "y": -0.1132,
        "z": -2.7443
      },
      {
        "id": 37,
        "element": "H",
        "x": 2.6532,
        "y": -1.2446,
        "z": -1.6891
      },
      {
        "id": 38,
        "element": "H",
        "x": -3.98,
        "y": -1.9485,
        "z": 1.5318
      },
      {
        "id": 39,
        "element": "H",
        "x": -4.7364,
        "y": 1.5664,
        "z": 0.9746
      },
      {
        "id": 40,
        "element": "H",
        "x": 0.2787,
        "y": 0.0666,
        "z": 2.7433
      },
      {
        "id": 41,
        "element": "H",
        "x": 4.549,
        "y": -1.5769,
        "z": 0.4327
      },
      {
        "id": 42,
        "element": "H",
        "x": 3.3427,
        "y": 2.6011,
        "z": 0.5871
      },
      {
        "id": 43,
        "element": "H",
        "x": -1.6962,
        "y": -2.5508,
        "z": -3.0488
      },
      {
        "id": 44,
        "element": "H",
        "x": -0.679,
        "y": 2.6806,
        "z": -1.2535
      },
      {
        "id": 45,
        "element": "H",
        "x": 3.7489,
        "y": 1.1234,
        "z": -2.8135
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 20,
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
        "to": 38,
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
        "from": 5,
        "to": 39,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 40,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 41,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 42,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 43,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 44,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 45,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 26,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 27,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 17,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 17,
        "to": 28,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 29,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 30,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 31,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 21,
        "to": 32,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 21,
        "to": 33,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 34,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 35,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 23,
        "to": 36,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 23,
        "to": 37,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "fructose",
    "name": "Fructose",
    "iupacName": "(3S,4R,5R)-2-(hydroxymethyl)oxane-2,3,4,5-tetrol",
    "formula": "C₆H₁₂O₆",
    "hillFormula": "C6H12O6",
    "molarMass": 180.16,
    "category": "carbohydrate",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 376,
    "boilingPoint": null,
    "uses": "The natural sugar of fruits and honey.",
    "fact": "Fructose is the sweetest natural sugar — about 1.7 times sweeter than table sugar.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.6618,
        "y": 1.323,
        "z": -0.0993
      },
      {
        "id": 2,
        "element": "O",
        "x": 0.0905,
        "y": -2.309,
        "z": -0.1069
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.3199,
        "y": -0.3534,
        "z": 1.436
      },
      {
        "id": 4,
        "element": "O",
        "x": -2.6062,
        "y": -1.2361,
        "z": -0.0845
      },
      {
        "id": 5,
        "element": "O",
        "x": -2.0587,
        "y": 1.272,
        "z": -1.069
      },
      {
        "id": 6,
        "element": "O",
        "x": 3.2708,
        "y": 0.4758,
        "z": -0.3702
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.2099,
        "y": -0.9371,
        "z": -0.3514
      },
      {
        "id": 8,
        "element": "C",
        "x": 0.9863,
        "y": -0.0636,
        "z": 0.0748
      },
      {
        "id": 9,
        "element": "C",
        "x": -1.4718,
        "y": -0.5351,
        "z": 0.4176
      },
      {
        "id": 10,
        "element": "C",
        "x": -1.7212,
        "y": 0.967,
        "z": 0.2864
      },
      {
        "id": 11,
        "element": "C",
        "x": -0.4712,
        "y": 1.754,
        "z": 0.662
      },
      {
        "id": 12,
        "element": "C",
        "x": 2.2098,
        "y": -0.3575,
        "z": -0.7956
      },
      {
        "id": 13,
        "element": "H",
        "x": -0.4002,
        "y": -0.8301,
        "z": -1.4272
      },
      {
        "id": 14,
        "element": "H",
        "x": -1.3729,
        "y": -0.8117,
        "z": 1.4736
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.5694,
        "y": 1.277,
        "z": 0.9065
      },
      {
        "id": 16,
        "element": "H",
        "x": -0.6141,
        "y": 2.8159,
        "z": 0.4361
      },
      {
        "id": 17,
        "element": "H",
        "x": -0.2485,
        "y": 1.6651,
        "z": 1.731
      },
      {
        "id": 18,
        "element": "H",
        "x": 2.0165,
        "y": -0.1492,
        "z": -1.8528
      },
      {
        "id": 19,
        "element": "H",
        "x": 2.5517,
        "y": -1.3906,
        "z": -0.6875
      },
      {
        "id": 20,
        "element": "H",
        "x": 0.7358,
        "y": -2.5963,
        "z": -0.7743
      },
      {
        "id": 21,
        "element": "H",
        "x": 2.2555,
        "y": -0.1275,
        "z": 1.5717
      },
      {
        "id": 22,
        "element": "H",
        "x": -2.6215,
        "y": -1.1375,
        "z": -1.0513
      },
      {
        "id": 23,
        "element": "H",
        "x": -2.9294,
        "y": 0.8786,
        "z": -1.2485
      },
      {
        "id": 24,
        "element": "H",
        "x": 2.9749,
        "y": 1.3979,
        "z": -0.4593
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 8,
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
        "to": 9,
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
        "to": 10,
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
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 14,
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
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
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
    "id": "cholesterol",
    "name": "Cholesterol",
    "iupacName": "(3S,8S,9S,10R,13R,14S,17R)-10,13-dimethyl-17-[(2R)-6-methylheptan-2-yl]-2,3,4,7,8,9,11,12,14,15,16,17-dodecahydro-1H-cyclopenta[a]phenanthren-3-ol",
    "formula": "C₂₇H₄₆O",
    "hillFormula": "C27H46O",
    "molarMass": 386.7,
    "category": "lipid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 421.2,
    "boilingPoint": 633,
    "uses": "Essential building block of cell membranes and hormones.",
    "fact": "Despite its bad reputation, your body makes about 1 gram of cholesterol every day because you need it.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 7.4996,
        "y": 1.5828,
        "z": -0.3199
      },
      {
        "id": 2,
        "element": "C",
        "x": -0.8177,
        "y": -1.1082,
        "z": -0.2032
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.1192,
        "y": -0.4371,
        "z": 0.9962
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.4069,
        "y": -0.5652,
        "z": 0.9577
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.9478,
        "y": 0.0601,
        "z": -0.3611
      },
      {
        "id": 6,
        "element": "C",
        "x": -2.2919,
        "y": -0.8444,
        "z": 0.189
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.3507,
        "y": -0.3835,
        "z": -1.4733
      },
      {
        "id": 8,
        "element": "C",
        "x": 3.5192,
        "y": -0.0819,
        "z": -0.4669
      },
      {
        "id": 9,
        "element": "C",
        "x": -0.8724,
        "y": -0.9821,
        "z": 2.2059
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.1802,
        "y": -0.4327,
        "z": -1.6188
      },
      {
        "id": 11,
        "element": "C",
        "x": -2.3228,
        "y": -1.1293,
        "z": 1.7092
      },
      {
        "id": 12,
        "element": "C",
        "x": 2.0419,
        "y": 0.1295,
        "z": 2.1715
      },
      {
        "id": 13,
        "element": "C",
        "x": -3.3507,
        "y": -1.6209,
        "z": -0.5805
      },
      {
        "id": 14,
        "element": "C",
        "x": -0.536,
        "y": -2.6262,
        "z": -0.3284
      },
      {
        "id": 15,
        "element": "C",
        "x": 4.1902,
        "y": 0.2693,
        "z": 0.8685
      },
      {
        "id": 16,
        "element": "C",
        "x": 4.025,
        "y": 0.9005,
        "z": -1.5654
      },
      {
        "id": 17,
        "element": "C",
        "x": 3.5099,
        "y": 0.3709,
        "z": 2.0236
      },
      {
        "id": 18,
        "element": "C",
        "x": 3.9298,
        "y": -1.5261,
        "z": -0.8427
      },
      {
        "id": 19,
        "element": "C",
        "x": 5.6816,
        "y": 0.5131,
        "z": 0.8483
      },
      {
        "id": 20,
        "element": "C",
        "x": 5.5422,
        "y": 1.0788,
        "z": -1.6005
      },
      {
        "id": 21,
        "element": "C",
        "x": -4.7871,
        "y": -1.2758,
        "z": -0.1342
      },
      {
        "id": 22,
        "element": "C",
        "x": 6.0799,
        "y": 1.5067,
        "z": -0.2396
      },
      {
        "id": 23,
        "element": "C",
        "x": -3.211,
        "y": -1.3511,
        "z": -2.0841
      },
      {
        "id": 24,
        "element": "C",
        "x": -5.1857,
        "y": 0.2026,
        "z": -0.2341
      },
      {
        "id": 25,
        "element": "C",
        "x": -6.595,
        "y": 0.4923,
        "z": 0.2927
      },
      {
        "id": 26,
        "element": "C",
        "x": -7.021,
        "y": 1.9641,
        "z": 0.1265
      },
      {
        "id": 27,
        "element": "C",
        "x": -6.9608,
        "y": 2.4322,
        "z": -1.3284
      },
      {
        "id": 28,
        "element": "C",
        "x": -6.132,
        "y": 2.8612,
        "z": 0.9919
      },
      {
        "id": 29,
        "element": "H",
        "x": -0.342,
        "y": 0.643,
        "z": 0.9624
      },
      {
        "id": 30,
        "element": "H",
        "x": 1.6832,
        "y": -1.6247,
        "z": 1.0013
      },
      {
        "id": 31,
        "element": "H",
        "x": 1.7287,
        "y": 1.1384,
        "z": -0.2924
      },
      {
        "id": 32,
        "element": "H",
        "x": -2.4681,
        "y": 0.2316,
        "z": 0.0536
      },
      {
        "id": 33,
        "element": "H",
        "x": -0.6679,
        "y": 0.667,
        "z": -1.4515
      },
      {
        "id": 34,
        "element": "H",
        "x": -0.7587,
        "y": -0.8152,
        "z": -2.3872
      },
      {
        "id": 35,
        "element": "H",
        "x": -0.8128,
        "y": -0.3057,
        "z": 3.0646
      },
      {
        "id": 36,
        "element": "H",
        "x": -0.4762,
        "y": -1.9538,
        "z": 2.5211
      },
      {
        "id": 37,
        "element": "H",
        "x": 1.4682,
        "y": -1.4584,
        "z": -1.8669
      },
      {
        "id": 38,
        "element": "H",
        "x": 1.4577,
        "y": 0.1809,
        "z": -2.4834
      },
      {
        "id": 39,
        "element": "H",
        "x": -2.6868,
        "y": -2.138,
        "z": 1.9354
      },
      {
        "id": 40,
        "element": "H",
        "x": -2.9829,
        "y": -0.4196,
        "z": 2.2204
      },
      {
        "id": 41,
        "element": "H",
        "x": 1.8749,
        "y": -0.4861,
        "z": 3.0637
      },
      {
        "id": 42,
        "element": "H",
        "x": 1.5596,
        "y": 1.0968,
        "z": 2.3598
      },
      {
        "id": 43,
        "element": "H",
        "x": -3.228,
        "y": -2.6991,
        "z": -0.4184
      },
      {
        "id": 44,
        "element": "H",
        "x": -0.9839,
        "y": -3.0472,
        "z": -1.2333
      },
      {
        "id": 45,
        "element": "H",
        "x": 0.5324,
        "y": -2.8514,
        "z": -0.3834
      },
      {
        "id": 46,
        "element": "H",
        "x": -0.9299,
        "y": -3.1942,
        "z": 0.5205
      },
      {
        "id": 47,
        "element": "H",
        "x": 3.5741,
        "y": 1.89,
        "z": -1.4087
      },
      {
        "id": 48,
        "element": "H",
        "x": 3.6971,
        "y": 0.566,
        "z": -2.5568
      },
      {
        "id": 49,
        "element": "H",
        "x": 4.0374,
        "y": 0.6439,
        "z": 2.9344
      },
      {
        "id": 50,
        "element": "H",
        "x": 3.6098,
        "y": -1.7868,
        "z": -1.8567
      },
      {
        "id": 51,
        "element": "H",
        "x": 5.0153,
        "y": -1.6694,
        "z": -0.8217
      },
      {
        "id": 52,
        "element": "H",
        "x": 3.5014,
        "y": -2.2625,
        "z": -0.155
      },
      {
        "id": 53,
        "element": "H",
        "x": 6.0427,
        "y": 0.885,
        "z": 1.816
      },
      {
        "id": 54,
        "element": "H",
        "x": 6.2092,
        "y": -0.4372,
        "z": 0.6979
      },
      {
        "id": 55,
        "element": "H",
        "x": 6.0327,
        "y": 0.154,
        "z": -1.9285
      },
      {
        "id": 56,
        "element": "H",
        "x": 5.8095,
        "y": 1.8311,
        "z": -2.3531
      },
      {
        "id": 57,
        "element": "H",
        "x": -5.4968,
        "y": -1.8725,
        "z": -0.7224
      },
      {
        "id": 58,
        "element": "H",
        "x": -4.9223,
        "y": -1.6028,
        "z": 0.9045
      },
      {
        "id": 59,
        "element": "H",
        "x": 5.7045,
        "y": 2.5078,
        "z": 0.0055
      },
      {
        "id": 60,
        "element": "H",
        "x": -3.0371,
        "y": -0.2938,
        "z": -2.3068
      },
      {
        "id": 61,
        "element": "H",
        "x": -4.1284,
        "y": -1.6408,
        "z": -2.6111
      },
      {
        "id": 62,
        "element": "H",
        "x": -2.4266,
        "y": -1.9624,
        "z": -2.5342
      },
      {
        "id": 63,
        "element": "H",
        "x": -4.4754,
        "y": 0.806,
        "z": 0.3359
      },
      {
        "id": 64,
        "element": "H",
        "x": -5.1073,
        "y": 0.5076,
        "z": -1.2817
      },
      {
        "id": 65,
        "element": "H",
        "x": 7.8276,
        "y": 1.8603,
        "z": 0.5525
      },
      {
        "id": 66,
        "element": "H",
        "x": -6.6571,
        "y": 0.208,
        "z": 1.3505
      },
      {
        "id": 67,
        "element": "H",
        "x": -7.3119,
        "y": -0.1425,
        "z": -0.2432
      },
      {
        "id": 68,
        "element": "H",
        "x": -8.0556,
        "y": 2.0552,
        "z": 0.4799
      },
      {
        "id": 69,
        "element": "H",
        "x": -7.5096,
        "y": 1.746,
        "z": -1.9817
      },
      {
        "id": 70,
        "element": "H",
        "x": -7.4214,
        "y": 3.4218,
        "z": -1.425
      },
      {
        "id": 71,
        "element": "H",
        "x": -5.9346,
        "y": 2.5173,
        "z": -1.6989
      },
      {
        "id": 72,
        "element": "H",
        "x": -6.107,
        "y": 2.5091,
        "z": 2.0285
      },
      {
        "id": 73,
        "element": "H",
        "x": -6.526,
        "y": 3.8837,
        "z": 1.0014
      },
      {
        "id": 74,
        "element": "H",
        "x": -5.1039,
        "y": 2.9156,
        "z": 0.6205
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 65,
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
        "to": 14,
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
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 29,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
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
        "to": 30,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 8,
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
        "to": 31,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 32,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 33,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 34,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 35,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 36,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 37,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 38,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 39,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 40,
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
        "to": 41,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 42,
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
        "from": 13,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 43,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 44,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 45,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 46,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 17,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 47,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 48,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 17,
        "to": 49,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 50,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 51,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 52,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 53,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 54,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 55,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 56,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 21,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 21,
        "to": 57,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 21,
        "to": 58,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 59,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 23,
        "to": 60,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 23,
        "to": 61,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 23,
        "to": 62,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 24,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 24,
        "to": 63,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 24,
        "to": 64,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 25,
        "to": 26,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 25,
        "to": 66,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 25,
        "to": 67,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 26,
        "to": 27,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 26,
        "to": 28,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 26,
        "to": 68,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 27,
        "to": 69,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 27,
        "to": 70,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 27,
        "to": 71,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 28,
        "to": 72,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 28,
        "to": 73,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 28,
        "to": 74,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "dopamine",
    "name": "Dopamine",
    "iupacName": "4-(2-aminoethyl)benzene-1,2-diol",
    "formula": "C₈H₁₁NO₂",
    "hillFormula": "C8H11NO2",
    "molarMass": 153.18,
    "category": "neurotransmitter",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 401,
    "boilingPoint": null,
    "uses": "Brain chemical central to motivation, reward, and movement.",
    "fact": "Every \"like\" notification triggers a small pulse of dopamine in your brain.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -2.2392,
        "y": 1.9626,
        "z": 0.0548
      },
      {
        "id": 2,
        "element": "O",
        "x": -3.3557,
        "y": -0.5612,
        "z": 0.3868
      },
      {
        "id": 3,
        "element": "N",
        "x": 4.4081,
        "y": 0.2624,
        "z": 0.3445
      },
      {
        "id": 4,
        "element": "C",
        "x": 2.1628,
        "y": -0.0212,
        "z": -0.6613
      },
      {
        "id": 5,
        "element": "C",
        "x": 0.704,
        "y": -0.1603,
        "z": -0.385
      },
      {
        "id": 6,
        "element": "C",
        "x": 2.9862,
        "y": 0.1008,
        "z": 0.6289
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.0999,
        "y": 0.9759,
        "z": -0.2919
      },
      {
        "id": 8,
        "element": "C",
        "x": 0.1434,
        "y": -1.4267,
        "z": -0.2187
      },
      {
        "id": 9,
        "element": "C",
        "x": -1.4642,
        "y": 0.8456,
        "z": -0.0326
      },
      {
        "id": 10,
        "element": "C",
        "x": -1.2209,
        "y": -1.557,
        "z": 0.0407
      },
      {
        "id": 11,
        "element": "C",
        "x": -2.0247,
        "y": -0.4208,
        "z": 0.1336
      },
      {
        "id": 12,
        "element": "H",
        "x": 2.5111,
        "y": -0.8817,
        "z": -1.2481
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.3332,
        "y": 0.8564,
        "z": -1.2993
      },
      {
        "id": 14,
        "element": "H",
        "x": 2.849,
        "y": -0.7888,
        "z": 1.2541
      },
      {
        "id": 15,
        "element": "H",
        "x": 2.6457,
        "y": 0.9593,
        "z": 1.2192
      },
      {
        "id": 16,
        "element": "H",
        "x": 0.3315,
        "y": 1.9659,
        "z": -0.4187
      },
      {
        "id": 17,
        "element": "H",
        "x": 0.7594,
        "y": -2.3195,
        "z": -0.2869
      },
      {
        "id": 18,
        "element": "H",
        "x": -1.6445,
        "y": -2.5496,
        "z": 0.1686
      },
      {
        "id": 19,
        "element": "H",
        "x": 4.5468,
        "y": 1.0868,
        "z": -0.2388
      },
      {
        "id": 20,
        "element": "H",
        "x": 4.7362,
        "y": -0.5285,
        "z": -0.2089
      },
      {
        "id": 21,
        "element": "H",
        "x": -3.1541,
        "y": 1.6866,
        "z": 0.2377
      },
      {
        "id": 22,
        "element": "H",
        "x": -3.5639,
        "y": -1.5074,
        "z": 0.4721
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
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 22,
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
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
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
        "from": 5,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 15,
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
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 11,
        "order": 2,
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
        "to": 18,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "serotonin",
    "name": "Serotonin",
    "iupacName": "3-(2-aminoethyl)-1H-indol-5-ol",
    "formula": "C₁₀H₁₂N₂O",
    "hillFormula": "C10H12N2O",
    "molarMass": 176.21,
    "category": "neurotransmitter",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 440.6,
    "boilingPoint": null,
    "uses": "Neurotransmitter regulating mood, sleep, and appetite.",
    "fact": "About 90% of your body's serotonin is made in your gut, not your brain.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 2.7352,
        "y": 2.462,
        "z": 0.0975
      },
      {
        "id": 2,
        "element": "N",
        "x": 0.1121,
        "y": -2.3478,
        "z": -0.1123
      },
      {
        "id": 3,
        "element": "N",
        "x": -4.2402,
        "y": 1.5678,
        "z": -0.288
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.1857,
        "y": -0.604,
        "z": 0.3372
      },
      {
        "id": 5,
        "element": "C",
        "x": 0.1487,
        "y": -0.1361,
        "z": 0.1781
      },
      {
        "id": 6,
        "element": "C",
        "x": -2.3744,
        "y": 0.2167,
        "z": 0.644
      },
      {
        "id": 7,
        "element": "C",
        "x": 0.9428,
        "y": -1.2499,
        "z": -0.103
      },
      {
        "id": 8,
        "element": "C",
        "x": -1.1761,
        "y": -1.9673,
        "z": 0.1523
      },
      {
        "id": 9,
        "element": "C",
        "x": -3.0873,
        "y": 0.7369,
        "z": -0.6178
      },
      {
        "id": 10,
        "element": "C",
        "x": 0.7591,
        "y": 1.132,
        "z": 0.2466
      },
      {
        "id": 11,
        "element": "C",
        "x": 2.3223,
        "y": -1.1586,
        "z": -0.3198
      },
      {
        "id": 12,
        "element": "C",
        "x": 2.1379,
        "y": 1.2386,
        "z": 0.032
      },
      {
        "id": 13,
        "element": "C",
        "x": 2.9057,
        "y": 0.1096,
        "z": -0.2468
      },
      {
        "id": 14,
        "element": "H",
        "x": -3.0828,
        "y": -0.3736,
        "z": 1.2406
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.0842,
        "y": 1.0654,
        "z": 1.2769
      },
      {
        "id": 16,
        "element": "H",
        "x": -1.9688,
        "y": -2.7018,
        "z": 0.1846
      },
      {
        "id": 17,
        "element": "H",
        "x": 0.4109,
        "y": -3.2968,
        "z": -0.2895
      },
      {
        "id": 18,
        "element": "H",
        "x": -3.4225,
        "y": -0.1074,
        "z": -1.2312
      },
      {
        "id": 19,
        "element": "H",
        "x": -2.3888,
        "y": 1.3212,
        "z": -1.2284
      },
      {
        "id": 20,
        "element": "H",
        "x": 0.1635,
        "y": 2.0149,
        "z": 0.4625
      },
      {
        "id": 21,
        "element": "H",
        "x": 2.9207,
        "y": -2.0371,
        "z": -0.5368
      },
      {
        "id": 22,
        "element": "H",
        "x": 3.9762,
        "y": 0.2086,
        "z": -0.4111
      },
      {
        "id": 23,
        "element": "H",
        "x": -4.6455,
        "y": 1.9395,
        "z": -1.1461
      },
      {
        "id": 24,
        "element": "H",
        "x": -3.9363,
        "y": 2.3734,
        "z": 0.2574
      },
      {
        "id": 25,
        "element": "H",
        "x": 2.0601,
        "y": 3.1324,
        "z": 0.2995
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 1,
        "to": 25,
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
        "from": 2,
        "to": 17,
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
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 13,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 22,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "adrenaline",
    "name": "Adrenaline",
    "iupacName": "4-[(1R)-1-hydroxy-2-(methylamino)ethyl]benzene-1,2-diol",
    "formula": "C₉H₁₃NO₃",
    "hillFormula": "C9H13NO3",
    "molarMass": 183.2,
    "category": "hormone",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 484.7,
    "boilingPoint": null,
    "uses": "The fight-or-flight hormone; emergency treatment for severe allergies.",
    "fact": "An adrenaline surge can make people briefly stronger and faster — the science behind \"hysterical strength\".",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 1.7394,
        "y": -2.1169,
        "z": -1.0894
      },
      {
        "id": 2,
        "element": "O",
        "x": -2.2941,
        "y": 1.0781,
        "z": -1.7979
      },
      {
        "id": 3,
        "element": "O",
        "x": -3.6584,
        "y": 0.5842,
        "z": 0.5722
      },
      {
        "id": 4,
        "element": "N",
        "x": 2.6359,
        "y": 1.0243,
        "z": 0.703
      },
      {
        "id": 5,
        "element": "C",
        "x": 1.6787,
        "y": -1.1447,
        "z": -0.0373
      },
      {
        "id": 6,
        "element": "C",
        "x": 0.2684,
        "y": -0.6866,
        "z": 0.1208
      },
      {
        "id": 7,
        "element": "C",
        "x": 2.6376,
        "y": 0.0193,
        "z": -0.3576
      },
      {
        "id": 8,
        "element": "C",
        "x": -0.3658,
        "y": -0.0099,
        "z": -0.9212
      },
      {
        "id": 9,
        "element": "C",
        "x": -0.4164,
        "y": -0.9343,
        "z": 1.3105
      },
      {
        "id": 10,
        "element": "C",
        "x": -1.6849,
        "y": 0.4191,
        "z": -0.7732
      },
      {
        "id": 11,
        "element": "C",
        "x": -1.7353,
        "y": -0.5053,
        "z": 1.4585
      },
      {
        "id": 12,
        "element": "C",
        "x": -2.3696,
        "y": 0.1713,
        "z": 0.4166
      },
      {
        "id": 13,
        "element": "C",
        "x": 3.5645,
        "y": 2.1013,
        "z": 0.395
      },
      {
        "id": 14,
        "element": "H",
        "x": 2.021,
        "y": -1.6511,
        "z": 0.8741
      },
      {
        "id": 15,
        "element": "H",
        "x": 2.3808,
        "y": 0.4742,
        "z": -1.3225
      },
      {
        "id": 16,
        "element": "H",
        "x": 3.6478,
        "y": -0.3931,
        "z": -0.4831
      },
      {
        "id": 17,
        "element": "H",
        "x": 0.1501,
        "y": 0.1801,
        "z": -1.8589
      },
      {
        "id": 18,
        "element": "H",
        "x": 0.064,
        "y": -1.4598,
        "z": 2.1315
      },
      {
        "id": 19,
        "element": "H",
        "x": 2.9013,
        "y": 0.5888,
        "z": 1.5858
      },
      {
        "id": 20,
        "element": "H",
        "x": -2.2571,
        "y": -0.705,
        "z": 2.3907
      },
      {
        "id": 21,
        "element": "H",
        "x": 2.6646,
        "y": -2.4067,
        "z": -1.1652
      },
      {
        "id": 22,
        "element": "H",
        "x": 3.2862,
        "y": 2.6124,
        "z": -0.5325
      },
      {
        "id": 23,
        "element": "H",
        "x": 4.5925,
        "y": 1.7346,
        "z": 0.3078
      },
      {
        "id": 24,
        "element": "H",
        "x": 3.5401,
        "y": 2.8441,
        "z": 1.1985
      },
      {
        "id": 25,
        "element": "H",
        "x": -3.2008,
        "y": 1.2997,
        "z": -1.5231
      },
      {
        "id": 26,
        "element": "H",
        "x": -3.969,
        "y": 0.3259,
        "z": 1.457
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
        "from": 1,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 25,
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
        "from": 3,
        "to": 26,
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
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 19,
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
        "to": 7,
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
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 16,
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
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 24,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "glycine",
    "name": "Glycine",
    "iupacName": "2-aminoacetic acid",
    "formula": "C₂H₅NO₂",
    "hillFormula": "C2H5NO2",
    "molarMass": 75.07,
    "category": "amino acid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 506,
    "boilingPoint": null,
    "uses": "The simplest amino acid, a building block of all proteins.",
    "fact": "Glycine has been detected in comets — amino acids exist in outer space.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -1.6487,
        "y": 0.6571,
        "z": -0.0104
      },
      {
        "id": 2,
        "element": "O",
        "x": -0.4837,
        "y": -1.2934,
        "z": -0.0005
      },
      {
        "id": 3,
        "element": "N",
        "x": 1.9006,
        "y": -0.0812,
        "z": -0.009
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.7341,
        "y": 0.7867,
        "z": 0.0079
      },
      {
        "id": 5,
        "element": "C",
        "x": -0.5023,
        "y": -0.0691,
        "z": 0.012
      },
      {
        "id": 6,
        "element": "H",
        "x": 0.7326,
        "y": 1.4215,
        "z": -0.8824
      },
      {
        "id": 7,
        "element": "H",
        "x": 0.7464,
        "y": 1.4088,
        "z": 0.9069
      },
      {
        "id": 8,
        "element": "H",
        "x": 1.8743,
        "y": -0.6844,
        "z": -0.8301
      },
      {
        "id": 9,
        "element": "H",
        "x": 1.8887,
        "y": -0.6969,
        "z": 0.8031
      },
      {
        "id": 10,
        "element": "H",
        "x": -2.4447,
        "y": 0.0839,
        "z": -0.026
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
        "from": 1,
        "to": 10,
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
        "from": 3,
        "to": 4,
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
        "to": 9,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 7,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "menthol",
    "name": "Menthol",
    "iupacName": "5-methyl-2-propan-2-ylcyclohexan-1-ol",
    "formula": "C₁₀H₂₀O",
    "hillFormula": "C10H20O",
    "molarMass": 156.26,
    "category": "terpenoid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 309.5,
    "boilingPoint": 487.4,
    "uses": "Gives mint products their cooling sensation.",
    "fact": "Menthol doesn't lower temperature — it tricks the same nerve receptors that sense cold.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 0.4167,
        "y": 2.3656,
        "z": 0.4212
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.7056,
        "y": -0.0351,
        "z": 0.4283
      },
      {
        "id": 3,
        "element": "C",
        "x": -0.0704,
        "y": 1.1567,
        "z": -0.156
      },
      {
        "id": 4,
        "element": "C",
        "x": 0.1195,
        "y": -1.3636,
        "z": -0.067
      },
      {
        "id": 5,
        "element": "C",
        "x": -2.1491,
        "y": -0.2825,
        "z": -0.3743
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.5705,
        "y": 1.0447,
        "z": 0.1258
      },
      {
        "id": 7,
        "element": "C",
        "x": -1.3769,
        "y": -1.4666,
        "z": 0.2195
      },
      {
        "id": 8,
        "element": "C",
        "x": 2.1959,
        "y": 0.0476,
        "z": 0.0872
      },
      {
        "id": 9,
        "element": "C",
        "x": -3.6356,
        "y": -0.3844,
        "z": -0.038
      },
      {
        "id": 10,
        "element": "C",
        "x": 2.964,
        "y": -1.0757,
        "z": 0.7771
      },
      {
        "id": 11,
        "element": "C",
        "x": 2.4009,
        "y": -0.0067,
        "z": -1.4238
      },
      {
        "id": 12,
        "element": "H",
        "x": 0.6107,
        "y": 0.0011,
        "z": 1.5233
      },
      {
        "id": 13,
        "element": "H",
        "x": 0.0505,
        "y": 1.2366,
        "z": -1.2394
      },
      {
        "id": 14,
        "element": "H",
        "x": 0.6057,
        "y": -2.217,
        "z": 0.4162
      },
      {
        "id": 15,
        "element": "H",
        "x": 0.2458,
        "y": -1.4865,
        "z": -1.1471
      },
      {
        "id": 16,
        "element": "H",
        "x": -2.0478,
        "y": -0.3149,
        "z": -1.4673
      },
      {
        "id": 17,
        "element": "H",
        "x": -2.0912,
        "y": 1.8891,
        "z": -0.3438
      },
      {
        "id": 18,
        "element": "H",
        "x": -1.7507,
        "y": 1.1543,
        "z": 1.204
      },
      {
        "id": 19,
        "element": "H",
        "x": -1.7607,
        "y": -2.4073,
        "z": -0.1934
      },
      {
        "id": 20,
        "element": "H",
        "x": -1.5344,
        "y": -1.5097,
        "z": 1.305
      },
      {
        "id": 21,
        "element": "H",
        "x": 2.5987,
        "y": 0.9985,
        "z": 0.4579
      },
      {
        "id": 22,
        "element": "H",
        "x": -4.1928,
        "y": 0.4445,
        "z": -0.4872
      },
      {
        "id": 23,
        "element": "H",
        "x": -4.0574,
        "y": -1.319,
        "z": -0.4227
      },
      {
        "id": 24,
        "element": "H",
        "x": -3.8026,
        "y": -0.3576,
        "z": 1.0441
      },
      {
        "id": 25,
        "element": "H",
        "x": 2.7722,
        "y": -2.0566,
        "z": 0.3315
      },
      {
        "id": 26,
        "element": "H",
        "x": 4.042,
        "y": -0.8974,
        "z": 0.6899
      },
      {
        "id": 27,
        "element": "H",
        "x": 2.7273,
        "y": -1.1242,
        "z": 1.8452
      },
      {
        "id": 28,
        "element": "H",
        "x": 2.1015,
        "y": -0.9567,
        "z": -1.8739
      },
      {
        "id": 29,
        "element": "H",
        "x": 3.4719,
        "y": 0.0983,
        "z": -1.6398
      },
      {
        "id": 30,
        "element": "H",
        "x": 1.9134,
        "y": 0.8109,
        "z": -1.9586
      },
      {
        "id": 31,
        "element": "H",
        "x": 0.2875,
        "y": 2.3126,
        "z": 1.3836
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
        "from": 1,
        "to": 31,
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
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 12,
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
        "to": 13,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 15,
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
        "to": 7,
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
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 20,
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
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 26,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 27,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 28,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 29,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
        "to": 30,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "vanillin",
    "name": "Vanillin",
    "iupacName": "4-hydroxy-3-methoxybenzaldehyde",
    "formula": "C₈H₈O₃",
    "hillFormula": "C8H8O3",
    "molarMass": 152.15,
    "category": "flavor compound",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 354.5,
    "boilingPoint": 558,
    "uses": "The primary flavor compound of vanilla.",
    "fact": "Less than 1% of the world's vanillin comes from actual vanilla orchids — the rest is synthesized.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": 2.2627,
        "y": -0.987,
        "z": 0
      },
      {
        "id": 2,
        "element": "O",
        "x": 2.3372,
        "y": 1.7917,
        "z": 0.0004
      },
      {
        "id": 3,
        "element": "O",
        "x": -3.6702,
        "y": -0.303,
        "z": 0.0004
      },
      {
        "id": 4,
        "element": "C",
        "x": 1.1085,
        "y": -0.2634,
        "z": -0.0001
      },
      {
        "id": 5,
        "element": "C",
        "x": -1.3066,
        "y": -0.1985,
        "z": -0.0002
      },
      {
        "id": 6,
        "element": "C",
        "x": -0.1177,
        "y": -0.9281,
        "z": -0.0001
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.146,
        "y": 1.1309,
        "z": -0.0002
      },
      {
        "id": 8,
        "element": "C",
        "x": -1.269,
        "y": 1.1959,
        "z": -0.0002
      },
      {
        "id": 9,
        "element": "C",
        "x": -0.0428,
        "y": 1.8606,
        "z": -0.0001
      },
      {
        "id": 10,
        "element": "C",
        "x": -2.5853,
        "y": -0.8912,
        "z": -0.0001
      },
      {
        "id": 11,
        "element": "C",
        "x": 2.1371,
        "y": -2.4077,
        "z": 0.0001
      },
      {
        "id": 12,
        "element": "H",
        "x": -0.2062,
        "y": -2.0095,
        "z": 0
      },
      {
        "id": 13,
        "element": "H",
        "x": -2.1826,
        "y": 1.7848,
        "z": -0.0002
      },
      {
        "id": 14,
        "element": "H",
        "x": -0.0279,
        "y": 2.9473,
        "z": 0
      },
      {
        "id": 15,
        "element": "H",
        "x": -2.553,
        "y": -1.994,
        "z": -0.0004
      },
      {
        "id": 16,
        "element": "H",
        "x": 1.6477,
        "y": -2.7702,
        "z": -0.9105
      },
      {
        "id": 17,
        "element": "H",
        "x": 1.6479,
        "y": -2.7701,
        "z": 0.9106
      },
      {
        "id": 18,
        "element": "H",
        "x": 3.1516,
        "y": -2.8203,
        "z": 0
      },
      {
        "id": 19,
        "element": "H",
        "x": 2.1681,
        "y": 2.7496,
        "z": 0.0005
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
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 6,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 8,
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
        "from": 6,
        "to": 12,
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
        "from": 8,
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 13,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 11,
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
        "from": 11,
        "to": 18,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "capsaicin",
    "name": "Capsaicin",
    "iupacName": "(E)-N-[(4-hydroxy-3-methoxyphenyl)methyl]-8-methylnon-6-enamide",
    "formula": "C₁₈H₂₇NO₃",
    "hillFormula": "C18H27NO3",
    "molarMass": 305.4,
    "category": "alkaloid",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 335,
    "boilingPoint": 483,
    "uses": "The heat of chili peppers; used in pain-relief creams.",
    "fact": "Birds cannot feel capsaicin's burn — chilies evolved it to deter mammals but welcome seed-spreading birds.",
    "atoms": [
      {
        "id": 1,
        "element": "O",
        "x": -3.072,
        "y": -1.1978,
        "z": -1.6178
      },
      {
        "id": 2,
        "element": "O",
        "x": 0.1878,
        "y": 2.8332,
        "z": -1.6625
      },
      {
        "id": 3,
        "element": "O",
        "x": 1.4469,
        "y": 3.4844,
        "z": 0.7288
      },
      {
        "id": 4,
        "element": "N",
        "x": -3.0435,
        "y": -0.9878,
        "z": 0.698
      },
      {
        "id": 5,
        "element": "C",
        "x": -0.1532,
        "y": -2.7807,
        "z": -0.2617
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.3568,
        "y": -3.4137,
        "z": 0.4471
      },
      {
        "id": 7,
        "element": "C",
        "x": 1.1649,
        "y": -2.9637,
        "z": 0.4986
      },
      {
        "id": 8,
        "element": "C",
        "x": -2.6677,
        "y": -3.1597,
        "z": -0.2969
      },
      {
        "id": 9,
        "element": "C",
        "x": 4.3193,
        "y": -0.8137,
        "z": -0.3766
      },
      {
        "id": 10,
        "element": "C",
        "x": 2.3448,
        "y": -2.3597,
        "z": -0.2073
      },
      {
        "id": 11,
        "element": "C",
        "x": -2.9468,
        "y": -1.6829,
        "z": -0.4955
      },
      {
        "id": 12,
        "element": "C",
        "x": 3.1301,
        "y": -1.4139,
        "z": 0.3296
      },
      {
        "id": 13,
        "element": "C",
        "x": -3.3105,
        "y": 0.4304,
        "z": 0.7665
      },
      {
        "id": 14,
        "element": "C",
        "x": -2.0471,
        "y": 1.2414,
        "z": 0.7528
      },
      {
        "id": 15,
        "element": "C",
        "x": 5.5978,
        "y": -1.0917,
        "z": 0.4134
      },
      {
        "id": 16,
        "element": "C",
        "x": 4.1182,
        "y": 0.6898,
        "z": -0.563
      },
      {
        "id": 17,
        "element": "C",
        "x": -1.5052,
        "y": 1.6682,
        "z": -0.4595
      },
      {
        "id": 18,
        "element": "C",
        "x": -1.4152,
        "y": 1.5683,
        "z": 1.9527
      },
      {
        "id": 19,
        "element": "C",
        "x": -0.3315,
        "y": 2.4221,
        "z": -0.4721
      },
      {
        "id": 20,
        "element": "C",
        "x": -0.2414,
        "y": 2.3217,
        "z": 1.9401
      },
      {
        "id": 21,
        "element": "C",
        "x": 0.3004,
        "y": 2.7488,
        "z": 0.7277
      },
      {
        "id": 22,
        "element": "C",
        "x": -0.5191,
        "y": 2.4571,
        "z": -2.8426
      },
      {
        "id": 23,
        "element": "H",
        "x": -0.0604,
        "y": -3.2152,
        "z": -1.2653
      },
      {
        "id": 24,
        "element": "H",
        "x": -0.3197,
        "y": -1.7056,
        "z": -0.4004
      },
      {
        "id": 25,
        "element": "H",
        "x": -1.4166,
        "y": -3.0305,
        "z": 1.4722
      },
      {
        "id": 26,
        "element": "H",
        "x": -1.2009,
        "y": -4.4962,
        "z": 0.5286
      },
      {
        "id": 27,
        "element": "H",
        "x": 1.0607,
        "y": -2.54,
        "z": 1.5052
      },
      {
        "id": 28,
        "element": "H",
        "x": 1.3588,
        "y": -4.0354,
        "z": 0.6292
      },
      {
        "id": 29,
        "element": "H",
        "x": -3.5042,
        "y": -3.5994,
        "z": 0.2583
      },
      {
        "id": 30,
        "element": "H",
        "x": -2.6391,
        "y": -3.6413,
        "z": -1.2812
      },
      {
        "id": 31,
        "element": "H",
        "x": 4.4308,
        "y": -1.2656,
        "z": -1.3705
      },
      {
        "id": 32,
        "element": "H",
        "x": 2.5632,
        "y": -2.7349,
        "z": -1.204
      },
      {
        "id": 33,
        "element": "H",
        "x": 2.9108,
        "y": -1.0453,
        "z": 1.3294
      },
      {
        "id": 34,
        "element": "H",
        "x": -3.8754,
        "y": 0.6149,
        "z": 1.6874
      },
      {
        "id": 35,
        "element": "H",
        "x": -3.9609,
        "y": 0.7198,
        "z": -0.0674
      },
      {
        "id": 36,
        "element": "H",
        "x": -2.9424,
        "y": -1.4861,
        "z": 1.5768
      },
      {
        "id": 37,
        "element": "H",
        "x": 6.4701,
        "y": -0.6796,
        "z": -0.1053
      },
      {
        "id": 38,
        "element": "H",
        "x": 5.7589,
        "y": -2.169,
        "z": 0.5323
      },
      {
        "id": 39,
        "element": "H",
        "x": 5.5592,
        "y": -0.6446,
        "z": 1.4133
      },
      {
        "id": 40,
        "element": "H",
        "x": 4.0219,
        "y": 1.2064,
        "z": 0.3988
      },
      {
        "id": 41,
        "element": "H",
        "x": 4.9665,
        "y": 1.1305,
        "z": -1.0977
      },
      {
        "id": 42,
        "element": "H",
        "x": 3.2133,
        "y": 0.8952,
        "z": -1.1461
      },
      {
        "id": 43,
        "element": "H",
        "x": -2.0405,
        "y": 1.3881,
        "z": -1.36
      },
      {
        "id": 44,
        "element": "H",
        "x": -1.8264,
        "y": 1.2398,
        "z": 2.9035
      },
      {
        "id": 45,
        "element": "H",
        "x": 0.241,
        "y": 2.5685,
        "z": 2.8821
      },
      {
        "id": 46,
        "element": "H",
        "x": 1.7425,
        "y": 3.6089,
        "z": 1.647
      },
      {
        "id": 47,
        "element": "H",
        "x": 0.0349,
        "y": 2.8663,
        "z": -3.6938
      },
      {
        "id": 48,
        "element": "H",
        "x": -1.5201,
        "y": 2.9009,
        "z": -2.8727
      },
      {
        "id": 49,
        "element": "H",
        "x": -0.5401,
        "y": 1.3694,
        "z": -2.9714
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 11,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 22,
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
        "from": 3,
        "to": 46,
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
        "from": 4,
        "to": 36,
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
        "to": 7,
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
        "from": 5,
        "to": 24,
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
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 26,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 10,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 27,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 7,
        "to": 28,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 11,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 29,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 30,
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
        "from": 9,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 31,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 12,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 32,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 12,
        "to": 33,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 34,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 13,
        "to": 35,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 17,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 14,
        "to": 18,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 37,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 38,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 15,
        "to": 39,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 40,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 41,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 16,
        "to": 42,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 17,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 17,
        "to": 43,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 20,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 18,
        "to": 44,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 19,
        "to": 21,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 20,
        "to": 45,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 47,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 48,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 22,
        "to": 49,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "limonene",
    "name": "Limonene",
    "iupacName": "1-methyl-4-prop-1-en-2-ylcyclohexene",
    "formula": "C₁₀H₁₆",
    "hillFormula": "C10H16",
    "molarMass": 136.23,
    "category": "terpene",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "nonpolar",
    "dipoleMoment": null,
    "standardState": "liquid",
    "meltingPoint": 199,
    "boilingPoint": 449.6,
    "uses": "Citrus-scented solvent in cleaners and cosmetics.",
    "fact": "The smell of orange peel is almost pure limonene.",
    "atoms": [
      {
        "id": 1,
        "element": "C",
        "x": 0.7192,
        "y": -0.0434,
        "z": -0.3658
      },
      {
        "id": 2,
        "element": "C",
        "x": 0.0421,
        "y": -1.2082,
        "z": 0.3534
      },
      {
        "id": 3,
        "element": "C",
        "x": 0.0383,
        "y": 1.2842,
        "z": -0.0178
      },
      {
        "id": 4,
        "element": "C",
        "x": -1.4408,
        "y": -1.2988,
        "z": -0.0167
      },
      {
        "id": 5,
        "element": "C",
        "x": -2.1402,
        "y": 0.0377,
        "z": -0.0377
      },
      {
        "id": 6,
        "element": "C",
        "x": -1.4599,
        "y": 1.197,
        "z": -0.0219
      },
      {
        "id": 7,
        "element": "C",
        "x": 2.1674,
        "y": 0.006,
        "z": 0.0127
      },
      {
        "id": 8,
        "element": "C",
        "x": -3.6392,
        "y": -0.0018,
        "z": -0.0797
      },
      {
        "id": 9,
        "element": "C",
        "x": 3.1503,
        "y": -0.1695,
        "z": -1.1067
      },
      {
        "id": 10,
        "element": "C",
        "x": 2.5629,
        "y": 0.1968,
        "z": 1.2801
      },
      {
        "id": 11,
        "element": "H",
        "x": 0.6243,
        "y": -0.2083,
        "z": -1.4484
      },
      {
        "id": 12,
        "element": "H",
        "x": 0.1131,
        "y": -1.0963,
        "z": 1.4436
      },
      {
        "id": 13,
        "element": "H",
        "x": 0.5319,
        "y": -2.1584,
        "z": 0.1048
      },
      {
        "id": 14,
        "element": "H",
        "x": 0.3467,
        "y": 2.0435,
        "z": -0.7479
      },
      {
        "id": 15,
        "element": "H",
        "x": 0.3327,
        "y": 1.6654,
        "z": 0.9672
      },
      {
        "id": 16,
        "element": "H",
        "x": -1.9359,
        "y": -1.9678,
        "z": 0.6974
      },
      {
        "id": 17,
        "element": "H",
        "x": -1.5405,
        "y": -1.7572,
        "z": -1.0086
      },
      {
        "id": 18,
        "element": "H",
        "x": -1.9997,
        "y": 2.1405,
        "z": -0.0187
      },
      {
        "id": 19,
        "element": "H",
        "x": -3.979,
        "y": -0.5416,
        "z": -0.9696
      },
      {
        "id": 20,
        "element": "H",
        "x": -4.0784,
        "y": 1.0009,
        "z": -0.1102
      },
      {
        "id": 21,
        "element": "H",
        "x": -4.031,
        "y": -0.5107,
        "z": 0.8069
      },
      {
        "id": 22,
        "element": "H",
        "x": 3.0066,
        "y": -1.1416,
        "z": -1.5896
      },
      {
        "id": 23,
        "element": "H",
        "x": 3.0161,
        "y": 0.6165,
        "z": -1.857
      },
      {
        "id": 24,
        "element": "H",
        "x": 4.1868,
        "y": -0.1219,
        "z": -0.7567
      },
      {
        "id": 25,
        "element": "H",
        "x": 3.6171,
        "y": 0.2302,
        "z": 1.5362
      },
      {
        "id": 26,
        "element": "H",
        "x": 1.8613,
        "y": 0.3225,
        "z": 2.0973
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
        "to": 7,
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
        "to": 4,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 2,
        "to": 13,
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
        "to": 14,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 5,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 16,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 4,
        "to": 17,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 6,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 8,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 18,
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
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 19,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 20,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 8,
        "to": 21,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 22,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 23,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 24,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 25,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 26,
        "order": 1,
        "type": "covalent"
      }
    ]
  },
  {
    "id": "adenine",
    "name": "Adenine",
    "iupacName": "7H-purin-6-amine",
    "formula": "C₅H₅N₅",
    "hillFormula": "C5H5N5",
    "molarMass": 135.13,
    "category": "nucleobase",
    "bondType": "covalent",
    "geometry": "none",
    "hybridization": "none",
    "bondAngle": "N/A",
    "polarity": "polar",
    "dipoleMoment": null,
    "standardState": "solid",
    "meltingPoint": 633,
    "boilingPoint": null,
    "uses": "The \"A\" of DNA's genetic code; part of ATP, the cell's energy currency.",
    "fact": "Adenine appears in both your DNA and ATP — it stores your genes and powers your muscles.",
    "isSpecial": true,
    "atoms": [
      {
        "id": 1,
        "element": "N",
        "x": -1.199,
        "y": -1.3997,
        "z": 0
      },
      {
        "id": 2,
        "element": "N",
        "x": -2.0752,
        "y": 0.6499,
        "z": 0
      },
      {
        "id": 3,
        "element": "N",
        "x": 0.0337,
        "y": 1.8594,
        "z": -0.0001
      },
      {
        "id": 4,
        "element": "N",
        "x": 1.9998,
        "y": 0.415,
        "z": 0
      },
      {
        "id": 5,
        "element": "N",
        "x": 1.8241,
        "y": -1.976,
        "z": 0
      },
      {
        "id": 6,
        "element": "C",
        "x": -0.1359,
        "y": -0.5421,
        "z": 0.0001
      },
      {
        "id": 7,
        "element": "C",
        "x": -0.7056,
        "y": 0.7241,
        "z": 0.0001
      },
      {
        "id": 8,
        "element": "C",
        "x": 1.2359,
        "y": -0.7004,
        "z": 0
      },
      {
        "id": 9,
        "element": "C",
        "x": -2.3386,
        "y": -0.6394,
        "z": 0
      },
      {
        "id": 10,
        "element": "C",
        "x": 1.3607,
        "y": 1.6092,
        "z": 0
      },
      {
        "id": 11,
        "element": "H",
        "x": -1.1566,
        "y": -2.4103,
        "z": -0.0002
      },
      {
        "id": 12,
        "element": "H",
        "x": -3.3225,
        "y": -1.0864,
        "z": -0.0001
      },
      {
        "id": 13,
        "element": "H",
        "x": 2.0034,
        "y": 2.4831,
        "z": -0.0001
      },
      {
        "id": 14,
        "element": "H",
        "x": 2.8322,
        "y": -2.0528,
        "z": 0.0003
      },
      {
        "id": 15,
        "element": "H",
        "x": 1.2503,
        "y": -2.8082,
        "z": 0.0004
      }
    ],
    "bonds": [
      {
        "from": 1,
        "to": 6,
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
        "to": 9,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 7,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 3,
        "to": 10,
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
        "to": 10,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 5,
        "to": 8,
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
        "from": 5,
        "to": 15,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 7,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 6,
        "to": 8,
        "order": 2,
        "type": "covalent"
      },
      {
        "from": 9,
        "to": 12,
        "order": 1,
        "type": "covalent"
      },
      {
        "from": 10,
        "to": 13,
        "order": 1,
        "type": "covalent"
      }
    ]
  }
];
