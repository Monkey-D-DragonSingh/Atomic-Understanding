import { useAppStore } from '../../../store/useAppStore';
import { MOLECULES } from '../../../data/molecules';
import { Panel } from '../../../components/ui/Panel';
import { Badge } from '../../../components/ui/Badge';
import { Play } from 'lucide-react';
import { PropertyGrid, PropertyItem } from '../../../components/ui/PropertyGrid';

export function BuilderInfoPanel() {
  const { canvasAtoms, canvasBonds, activeCompound, clearBuilder, setCanvasAtoms, setCanvasBonds, setActiveCompound } = useAppStore();

  const handleQuickAdd = (formula: string) => {
    // We will hardcode some simple initial geometries for common molecules
    clearBuilder();
    let atoms: any[] = [];
    let bonds: any[] = [];
    
    if (formula === 'H₂O') {
      atoms = [
        { id: 1, symbol: 'O', x: 200, y: 150, bonds: [1, 2], bondsUsed: 2 },
        { id: 2, symbol: 'H', x: 130, y: 220, bonds: [1], bondsUsed: 1 },
        { id: 3, symbol: 'H', x: 270, y: 220, bonds: [2], bondsUsed: 1 }
      ];
      bonds = [
        { id: 1, from: 1, to: 2, order: 1 },
        { id: 2, from: 1, to: 3, order: 1 }
      ];
    } else if (formula === 'O₂') {
      atoms = [
        { id: 1, symbol: 'O', x: 150, y: 200, bonds: [1], bondsUsed: 2 },
        { id: 2, symbol: 'O', x: 250, y: 200, bonds: [1], bondsUsed: 2 }
      ];
      bonds = [{ id: 1, from: 1, to: 2, order: 2 }];
    } else if (formula === 'CO₂') {
      atoms = [
        { id: 1, symbol: 'C', x: 200, y: 200, bonds: [1, 2], bondsUsed: 4 },
        { id: 2, symbol: 'O', x: 100, y: 200, bonds: [1], bondsUsed: 2 },
        { id: 3, symbol: 'O', x: 300, y: 200, bonds: [2], bondsUsed: 2 }
      ];
      bonds = [
        { id: 1, from: 1, to: 2, order: 2 },
        { id: 2, from: 1, to: 3, order: 2 }
      ];
    } else if (formula === 'NaCl') {
      atoms = [
        { id: 1, symbol: 'Na', x: 150, y: 200, bonds: [1], bondsUsed: 1 },
        { id: 2, symbol: 'Cl', x: 250, y: 200, bonds: [1], bondsUsed: 1 }
      ];
      bonds = [{ id: 1, from: 1, to: 2, order: 1 }];
    } else if (formula === 'O₃') {
      atoms = [
        { id: 1, symbol: 'O', x: 200, y: 150, bonds: [1, 2], bondsUsed: 2 },
        { id: 2, symbol: 'O', x: 130, y: 220, bonds: [1], bondsUsed: 1 },
        { id: 3, symbol: 'O', x: 270, y: 220, bonds: [2], bondsUsed: 1 }
      ];
      bonds = [
        { id: 1, from: 1, to: 2, order: 1 },
        { id: 2, from: 1, to: 3, order: 1 }
      ];
    } else if (formula === 'H₂O₂') {
      atoms = [
        { id: 1, symbol: 'O', x: 160, y: 180, bonds: [1, 2], bondsUsed: 2 },
        { id: 2, symbol: 'O', x: 240, y: 180, bonds: [1, 3], bondsUsed: 2 },
        { id: 3, symbol: 'H', x: 100, y: 240, bonds: [2], bondsUsed: 1 },
        { id: 4, symbol: 'H', x: 300, y: 120, bonds: [3], bondsUsed: 1 }
      ];
      bonds = [
        { id: 1, from: 1, to: 2, order: 1 },
        { id: 2, from: 1, to: 3, order: 1 },
        { id: 3, from: 2, to: 4, order: 1 }
      ];
    }
    
    setCanvasAtoms(atoms);
    setCanvasBonds(bonds);
    
    // Auto-recognize
    const target = MOLECULES.find(m => m.formula === formula);
    setActiveCompound(target || null);
  };

  const isRecognized = !!activeCompound;
  
  // Custom formula fallback
  const elementCounts: Record<string, number> = {};
  canvasAtoms.forEach(a => {
    elementCounts[a.symbol] = (elementCounts[a.symbol] || 0) + 1;
  });
  const customFormula = Object.entries(elementCounts)
    .sort((a, b) => {
      if (a[0] === 'C') return -1;
      if (b[0] === 'C') return 1;
      if (a[0] === 'H') return -1;
      if (b[0] === 'H') return 1;
      return a[0].localeCompare(b[0]);
    })
    .map(([sym, count]) => count > 1 ? `${sym} ${count}` : sym)
    .join('')
    .replace(/ 2/g, '₂').replace(/ 3/g, '₃').replace(/ 4/g, '₄').replace(/ 5/g, '₅').replace(/ 6/g, '₆');

  const properties: PropertyItem[] = isRecognized ? [
    { label: 'Category', value: activeCompound.category },
    { label: 'Molar Mass', value: activeCompound.molarMass, suffix: ' g/mol' },
    { label: 'Geometry', value: activeCompound.geometry },
    { label: 'Polarity', value: activeCompound.polarity },
  ] : [
    { label: 'Atoms', value: canvasAtoms.length },
    { label: 'Bonds', value: canvasBonds.length },
  ];

  return (
    <Panel className="h-full border-0 lg:border-l rounded-none flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
        
        {/* Header Status */}
        <div className={`p-4 rounded-xl border ${isRecognized ? 'bg-accent/10 border-accent/30 shadow-[0_0_15px_rgba(79,195,247,0.2)]' : 'bg-black/30 border-border'}`}>
          {isRecognized ? (
            <>
              <Badge variant="accent" className="mb-2">Recognized Molecule</Badge>
              <h2 className="text-2xl font-bold text-text mb-1">{activeCompound.name}</h2>
              <div className="text-xl font-mono text-accent">{activeCompound.formula}</div>
            </>
          ) : canvasAtoms.length > 0 ? (
            <>
              <Badge variant="default" className="mb-2">Custom Structure</Badge>
              <h2 className="text-lg font-bold text-text-dim mb-1">Unknown Molecule</h2>
              <div className="text-xl font-mono text-text">{customFormula || '---'}</div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">🧪</div>
              <p className="text-text-dim text-sm">Drag elements onto the canvas to start building.</p>
            </div>
          )}
        </div>

        {/* Properties */}
        {(canvasAtoms.length > 0 || isRecognized) && (
          <div className="bg-black/30 p-4 rounded-lg border border-border">
            <PropertyGrid items={properties} />
          </div>
        )}

        {/* View in 3D Button */}
        {isRecognized && (
          <button className="w-full py-3 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-colors flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(79,195,247,0.4)]">
            <Play className="w-4 h-4 fill-current" /> View Real 3D Model
          </button>
        )}

        <hr className="border-border" />

        {/* Quick Add */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">Quick Add</h3>
          <div className="grid grid-cols-3 gap-2">
            {['H₂O', 'CO₂', 'O₂', 'NaCl', 'O₃', 'H₂O₂'].map(f => (
              <button
                key={f}
                onClick={() => handleQuickAdd(f)}
                className="px-2 py-2 bg-white/5 hover:bg-white/10 border border-border rounded text-sm font-mono transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="shrink-0 p-4 border-t border-border bg-black/20">
        <button
          onClick={clearBuilder}
          className="w-full py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-semibold transition-colors"
        >
          Clear Workspace
        </button>
      </div>
    </Panel>
  );
}
