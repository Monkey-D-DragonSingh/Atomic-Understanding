import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Element } from '../types/element';
import { Molecule } from '../types/molecule';
import { Reaction } from '../types/reaction';

export type AppMode = 'atom' | 'molecule' | 'compound' | 'reaction';
export type AtomViewMode = 'bohr' | 'cloud' | 'orbital';
export type CompoundViewMode = 'skeletal' | 'ball-stick' | 'space-fill';

export interface PlacedAtom {
  id: number;
  symbol: string;
  x: number;
  y: number;
  bonds: number[]; // bond ids
  bondsUsed: number;
}

export interface PlacedBond {
  id: number;
  from: number;
  to: number;
  order: number;
}

export interface AppState {
  mode: AppMode;
  setMode: (m: AppMode) => void;

  selectedElement: Element | null;
  selectElement: (el: Element | null) => void;
  atomView: AtomViewMode;
  setAtomView: (v: AtomViewMode) => void;

  canvasAtoms: PlacedAtom[];
  setCanvasAtoms: (atoms: PlacedAtom[]) => void;
  canvasBonds: PlacedBond[];
  setCanvasBonds: (bonds: PlacedBond[]) => void;
  clearBuilder: () => void;

  activeCompound: Molecule | null; // compound-mode search result (Part 3)
  setActiveCompound: (c: Molecule | null) => void;
  compoundView: CompoundViewMode;
  setCompoundView: (v: CompoundViewMode) => void;

  searchHistory: string[]; // persisted to localStorage
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  activeReaction: Reaction | null;
  setActiveReaction: (r: Reaction | null) => void;

  leftDrawerOpen: boolean;
  setLeftDrawerOpen: (open: boolean) => void;
  rightDrawerOpen: boolean;
  setRightDrawerOpen: (open: boolean) => void;

  onboardingSeen: boolean;
  setOnboardingSeen: (seen: boolean) => void;
  helpOpen: boolean;
  setHelpOpen: (open: boolean) => void;
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
      canvasBonds: [],
      setCanvasBonds: (canvasBonds) => set({ canvasBonds }),
      clearBuilder: () => set({ canvasAtoms: [], canvasBonds: [] }),

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

      leftDrawerOpen: false,
      setLeftDrawerOpen: (leftDrawerOpen) => set({ leftDrawerOpen }),
      rightDrawerOpen: false,
      setRightDrawerOpen: (rightDrawerOpen) => set({ rightDrawerOpen }),

      onboardingSeen: false,
      setOnboardingSeen: (onboardingSeen) => set({ onboardingSeen }),
      helpOpen: false,
      setHelpOpen: (helpOpen) => set({ helpOpen }),
    }),
    {
      name: 'atomica-storage',
      partialize: (state) => ({ 
        searchHistory: state.searchHistory,
        onboardingSeen: state.onboardingSeen
      }),
    }
  )
);
