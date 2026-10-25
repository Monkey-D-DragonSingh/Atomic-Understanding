export function EnergyDiagram({ enthalpy }: { enthalpy: number | null }) {
  if (enthalpy === null) {
    return (
      <div className="h-32 flex items-center justify-center border border-dashed border-border rounded-lg bg-black/20">
        <span className="text-sm text-text-dim">Energy data unavailable</span>
      </div>
    );
  }

  const isExo = enthalpy < 0;
  
  // A simple SVG diagram plotting reaction coordinate
  // Path: Start flat, go up to activation energy, go down to final state
  const startY = isExo ? 40 : 80;
  const endY = isExo ? 80 : 40;
  const peakY = 15;

  const path = `M 10 ${startY} C 40 ${startY}, 40 ${peakY}, 60 ${peakY} C 80 ${peakY}, 80 ${endY}, 110 ${endY}`;

  return (
    <div className="relative h-32 w-full bg-black/30 border border-border rounded-lg overflow-hidden flex flex-col p-2">
      <div className="text-xs font-semibold text-text-dim mb-1 flex justify-between">
        <span>Energy Profile</span>
        <span className={isExo ? 'text-blue-400' : 'text-red-400'}>
          ΔH = {enthalpy > 0 ? '+' : ''}{enthalpy} kJ/mol
        </span>
      </div>
      
      <div className="flex-1 relative">
        <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-md" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="25" x2="120" y2="25" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="0" y1="50" x2="120" y2="50" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="0" y1="75" x2="120" y2="75" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
          
          {/* Reaction Path */}
          <path d={path} fill="none" stroke={isExo ? '#60A5FA' : '#F87171'} strokeWidth="3" className="path-draw-anim" />
          
          {/* Labels */}
          <text x="5" y={startY - 5} fill="#9CA3AF" fontSize="6">Reactants</text>
          <text x="115" y={endY - 5} fill="#9CA3AF" fontSize="6" textAnchor="end">Products</text>
          
          {/* Enthalpy delta line */}
          <line x1="90" y1={startY} x2="90" y2={endY} stroke="#A78BFA" strokeWidth="1" strokeDasharray="1,1" />
        </svg>
      </div>
    </div>
  );
}
