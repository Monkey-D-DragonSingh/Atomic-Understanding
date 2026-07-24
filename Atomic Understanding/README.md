# Atomic Understanding

Atomic Understanding is a production-grade, interactive chemistry learning platform designed for students. It visualizes atomic structures, enables freeform molecule building with dynamic bonding logic, and simulates chemical reactions accurately.

## Features

- **Atom Mode (Periodic Table):**
  - Explore all 118 elements with real chemical data.
  - Interactive 3D visualizer showing Bohr, Electron Cloud, and Orbital models.
- **Molecule Mode (Interactive Builder):**
  - Drag and drop atoms onto a 2D canvas.
  - Real-time bonding engine that checks proximity, valence capacity, and auto-resolves bond orders.
  - Molecular recognition engine that identifies compounds built from scratch.
- **Compound Mode (PubChem Integration):**
  - Search any compound to fetch live data from the PubChem API.
  - View 3D ball-and-stick, space-fill, or 2D skeletal representations.
- **Reaction Mode (Simulator):**
  - Run dynamic, animated simulations of 30+ chemical reactions.
  - Shows balanced equations with computed conservation of mass banners.
  - Includes real-time Enthalpy (ΔH) energy diagrams.

## Architecture

This project is built using modern web standards:
- **Build tool:** Vite 5
- **Framework:** React 18
- **Language:** TypeScript
- **State Management:** Zustand (with local persistence)
- **Data Fetching:** Tanstack React Query
- **Styling:** Tailwind CSS + PostCSS
- **3D Engine:** Three.js + React Three Fiber + Drei
- **2D Engine:** HTML5 Canvas API

## Quick Start & Build Instructions

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### Installation

Clone the repository and install dependencies:
```bash
npm install
```

### Running Locally

Start the Vite development server with HMR:
```bash
npm run dev
```

### Building for Production

Compile the TypeScript types and bundle the application:
```bash
npm run build
```

This will output the compiled assets into the `dist/` directory.

### Previewing Production Build

To preview the generated production build locally:
```bash
npm run preview
```

### Deployment
Atomic Understanding is a static Single Page Application (SPA). The `dist/` folder can be deployed to any static host (Vercel, Netlify, GitHub Pages, AWS S3).
If deploying to a subdirectory, be sure to set the `base` configuration in `vite.config.ts`.

## Global Shortcuts
- `1` : Switch to Atom Mode
- `2` : Switch to Molecule Builder Mode
- `3` : Switch to Compound Mode
- `4` : Switch to Reaction Simulator
- `Shift + ?` : Open Help & Shortcuts overlay
- `Esc` : Close overlays or clear current selection

## Directory Structure
- `src/components/ui/` - Reusable design system components (Panels, Badges, etc.)
- `src/data/` - Hardcoded 100% accurate chemical data (elements, molecules, reactions).
- `src/lib/` - Shared business logic for chemistry math and formatting.
- `src/modes/` - The core application domains (Atom, Molecule, Compound, Reaction).
- `src/store/` - Zustand global state.
