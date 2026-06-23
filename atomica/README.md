# ATOMICA

ATOMICA is a production-grade, interactive chemistry learning platform for students.

## Architecture

This project is built using:
- **Build tool:** Vite 5
- **Framework:** React 18
- **Language:** TypeScript
- **State Management:** Zustand
- **Data Fetching:** Tanstack React Query
- **Styling:** Tailwind CSS + PostCSS
- **3D Engine:** Three.js + React Three Fiber + Drei (Scaffolded for Part 2)

## Directory Structure

- \`src/data/\` - Contains 100% accurate, scientifically validated chemical data (118 elements, 60+ molecules with 3D coordinates, 30+ reactions).
- \`src/types/\` - Complete TypeScript system mapping physical/chemical entities.
- \`src/store/\` - Zustand store for application state and mode switching.
- \`src/lib/\` - Chemistry logic, formatters, and typed PubChem API client.

## Building

\`\`\`sh
npm install
npm run build
\`\`\`
