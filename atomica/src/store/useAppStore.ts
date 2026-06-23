import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Element } from '../types/element';
import { Molecule, MoleculeAtom } from '../types/molecule';
import { Reaction } from '../types/reaction';

export type AppMode = 'atom' | 'molecule' | 'compound' | 'reaction';
export type AtomViewMode = 'bohr' | 'cloud' | 'orbital';
export type CompoundViewMode = 'skeletal' | 'ball-stick' | 'space-fill';

export interface PlacedAtom extends MoleculeAtom {
  // Part 2 extended properties
}

export interface AppState {
  mode: AppMode;
  setMode: (m: AppMode) => void;

  selectedElement: Element | null;
  selectElement: (el: Element | null) => void;
  atomView: AtomViewMode;
  setAtomView: (v: AtomViewMode) => void;

  canvasAtoms: PlacedAtom[]; // molecule-builder state (Part 2)
  setCanvasAtoms: (atoms: PlacedAtom[]) => void;

  activeCompound: Molecule | null; // compound-mode search result (Part 3)
  setActiveCompound: (c: Molecule | null) => void;
  compoundView: CompoundViewMode;
  setCompoundView: (v: CompoundViewMode) => void;

  searchHistory: string[]; // persisted to localStorage
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  activeReaction: Reaction | null;
  setActiveReaction: (r: Reaction | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      mode: 'atom',
      setMode: (mode) => set({ mode }),

      selectedElement: null,
      selectElement: (selectedElement) => set({ selectedElement }),
      atomView: 'bohr',
      setAtomView: (atomView) => set({ atomView }),

      canvasAtoms: [],
      setCanvasAtoms: (canvasAtoms) => set({ canvasAtoms }),

      activeCompound: null,
      setActiveCompound: (activeCompound) => set({ activeCompound }),
      compoundView: 'ball-stick',
      setCompoundView: (compoundView) => set({ compoundView }),

      searchHistory: [],
      addSearchHistory: (query) =>
        set((state) => ({
          searchHistory: [
            query,
            ...state.searchHistory.filter((q) => q !== query),
          ].slice(0, 10),
        })),
      clearSearchHistory: () => set({ searchHistory: [] }),

      activeReaction: null,
      setActiveReaction: (activeReaction) => set({ activeReaction }),
    }),
    {
      name: 'atomica-storage',
      partialize: (state) => ({ searchHistory: state.searchHistory }),
    }
  )
);
