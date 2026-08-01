import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Element } from '../types/element';
import { Molecule } from '../types/molecule';
import { Reaction, ReactionMatchResult } from '../types/reaction';
import { CuratedReaction } from '../types/curatedReaction';

export type AppMode = 'atom' | 'molecule' | 'compound' | 'reaction' | 'quiz';
export type AtomViewMode = 'bohr' | 'cloud' | 'orbital';
export type CompoundViewMode = 'skeletal' | 'ball-stick' | 'space-fill';
export type ReactionSubMode = 'browse' | 'build';

export interface PlacedAtom {
  id: number;
  symbol: string;
  x: number;
  y: number;
  bonds: number[];
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

  activeCompound: Molecule | null;
  setActiveCompound: (c: Molecule | null) => void;
  compoundView: CompoundViewMode;
  setCompoundView: (v: CompoundViewMode) => void;

  show3DModal: boolean;
  setShow3DModal: (open: boolean) => void;

  // --- Reaction Mode: sub-mode toggle (Browse curated reactions vs Build your own) ---
  reactionSubMode: ReactionSubMode;
  setReactionSubMode: (m: ReactionSubMode) => void;

  // --- Reaction Mode: "Build" (drag molecules together, match against curated set) ---
  selectedReactantIds: string[];               // Molecule ids chosen as reactants
  addReactant: (moleculeId: string) => void;
  removeReactant: (moleculeId: string) => void;
  clearReactants: () => void;

  selectedCatalystId: string | null;
  setCatalystId: (id: string | null) => void;

  reactionResult: ReactionMatchResult | null;   // null = haven't hit "React" yet
  setReactionResult: (result: ReactionMatchResult | null) => void;

  activeReaction: Reaction | null;              // kept for any legacy reaction-detail views
  setActiveReaction: (r: Reaction | null) => void;

  // --- Reaction Mode: "Browse" (pick a reaction from a curated list, watch it animate) ---
  activeCuratedReaction: CuratedReaction | null;
  setActiveCuratedReaction: (r: CuratedReaction | null) => void;

  searchHistory: string[];
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  leftDrawerOpen: boolean;
  setLeftDrawerOpen: (open: boolean) => void;
  rightDrawerOpen: boolean;
  setRightDrawerOpen: (open: boolean) => void;

  leftCollapsed: boolean;
  setLeftCollapsed: (c: boolean) => void;
  rightCollapsed: boolean;
  setRightCollapsed: (c: boolean) => void;

  rightPanelWidth: number;
  setRightPanelWidth: (width: number) => void;

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

      show3DModal: false,
      setShow3DModal: (show3DModal) => set({ show3DModal }),

      // --- Reaction Mode: sub-mode toggle ---
      reactionSubMode: 'browse',
      setReactionSubMode: (reactionSubMode) => set({ reactionSubMode }),

      // --- Reaction Mode: Build ---
      selectedReactantIds: [],
      addReactant: (moleculeId) =>
        set((state) => ({
          // avoid duplicate entries; resets any stale result once the mix changes
          selectedReactantIds: state.selectedReactantIds.includes(moleculeId)
            ? state.selectedReactantIds
            : [...state.selectedReactantIds, moleculeId],
          reactionResult: null,
        })),
      removeReactant: (moleculeId) =>
        set((state) => ({
          selectedReactantIds: state.selectedReactantIds.filter((id) => id !== moleculeId),
          reactionResult: null,
        })),
      clearReactants: () =>
        set({ selectedReactantIds: [], selectedCatalystId: null, reactionResult: null }),

      selectedCatalystId: null,
      setCatalystId: (selectedCatalystId) => set({ selectedCatalystId, reactionResult: null }),

      reactionResult: null,
      setReactionResult: (reactionResult) => set({ reactionResult }),

      activeReaction: null,
      setActiveReaction: (activeReaction) => set({ activeReaction }),

      // --- Reaction Mode: Browse ---
      activeCuratedReaction: null,
      setActiveCuratedReaction: (activeCuratedReaction) => set({ activeCuratedReaction }),

      searchHistory: [],
      addSearchHistory: (query) =>
        set((state) => ({
          searchHistory: [
            query,
            ...state.searchHistory.filter((q) => q !== query),
          ].slice(0, 10),
        })),
      clearSearchHistory: () => set({ searchHistory: [] }),

      leftDrawerOpen: false,
      setLeftDrawerOpen: (leftDrawerOpen) => set({ leftDrawerOpen }),
      rightDrawerOpen: false,
      setRightDrawerOpen: (rightDrawerOpen) => set({ rightDrawerOpen }),

      leftCollapsed: false,
      setLeftCollapsed: (leftCollapsed) => set({ leftCollapsed }),
      rightCollapsed: false,
      setRightCollapsed: (rightCollapsed) => set({ rightCollapsed }),

      // Small on every fresh load. Not persisted (see partialize below) —
      // the user can drag it wider per-session, but it always starts small.
      rightPanelWidth: 320,
      setRightPanelWidth: (rightPanelWidth) => set({ rightPanelWidth }),

      onboardingSeen: false,
      setOnboardingSeen: (onboardingSeen) => set({ onboardingSeen }),
      helpOpen: false,
      setHelpOpen: (helpOpen) => set({ helpOpen }),
    }),
    {
      name: 'atomica-storage',
      partialize: (state) => ({
        searchHistory: state.searchHistory,
        onboardingSeen: state.onboardingSeen,
        leftCollapsed: state.leftCollapsed,
        rightCollapsed: state.rightCollapsed,
        // rightPanelWidth intentionally NOT persisted — the panel should
        // always start small on load; user can resize it per-session.
      }),
    }
  )
);