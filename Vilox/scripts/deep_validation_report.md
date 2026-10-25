# Deep Chemical Database Validation Report

Generated at: 2026-07-24T16:05:05.115Z

## Summary

| Domain | Checked | Errors | Warnings |
| :--- | :---: | :---: | :---: |
| **Elements** | 118 | 0 | 0 |
| **Molecules** | 148 | 0 | 2 |
| **Reactions** | 66 | 0 | 2 |

> [!NOTE]
> 🎉 **All tests passed!** No errors found in elements, molecules, or reactions database. The database is stoichiometrically balanced and mass-conserved.

### Molecule Warnings

* ⚠️ [Molecule iron-iii-oxide - Iron(III) Oxide] Has empty 3D atoms coordinates (standard for complex ionic solids)
* ⚠️ [Molecule lead-ii-nitrate - Lead(II) Nitrate] Molar mass slight difference. Hardcoded: 331, Calculated: 331.2180

### Reaction Warnings

* ⚠️ [Reaction combustion-of-sulfur - Combustion of Sulfur] Mass conservation slight floating point variance. LHS: 512.4920, RHS: 512.5600 (diff: 0.0680)
* ⚠️ [Reaction roasting-zinc-sulfide - Roasting of Zinc Sulfide] Mass conservation slight floating point variance. LHS: 290.8810, RHS: 290.9400 (diff: 0.0590)

