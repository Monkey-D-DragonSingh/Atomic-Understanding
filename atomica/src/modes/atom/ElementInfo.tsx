import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Panel } from '../../ui/Panel';
import { PropertyGrid, PropertyItem } from '../../ui/PropertyGrid';
import { Badge } from '../../ui/Badge';
import { EmptyState } from '../../ui/EmptyState';
import { Atom } from 'lucide-react';
import { CATEGORY_COLORS } from '../../../data/constants';
import { toCelsius } from '../../../lib/format';

export function ElementInfo() {
  const { selectedElement } = useAppStore();

  if (!selectedElement) {
    return <EmptyState icon={Atom} title="No Element Selected" description="Select an element from the periodic table to view its properties." />;
  }

  const el = selectedElement;
  const categoryColor = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['unknown'];

  const properties: PropertyItem[] = [
    { label: 'Atomic Mass', value: el.atomicMass, suffix: ' u' },
    { label: 'Category', value: el.category.replace(/-/g, ' ') },
    { label: 'Block', value: `${el.block}-block` },
    { label: 'Period', value: el.period },
    { label: 'Group', value: el.group },
    { label: 'Valence e⁻', value: el.valenceElectrons },
    { label: 'Electronegativity', value: el.electronegativity },
    { label: 'Ionization Energy', value: el.ionizationEnergy, suffix: ' kJ/mol' },
    { label: 'Electron Affinity', value: el.electronAffinity, suffix: ' kJ/mol' },
    { label: 'Atomic Radius', value: el.atomicRadius, suffix: ' pm' },
    { label: 'Covalent Radius', value: el.covalentRadius, suffix: ' pm' },
    { label: 'VdW Radius', value: el.vanDerWaalsRadius, suffix: ' pm' },
    { label: 'Melting Point', value: toCelsius(el.meltingPoint), suffix: ' °C' },
    { label: 'Boiling Point', value: toCelsius(el.boilingPoint), suffix: ' °C' },
    { label: 'Density', value: el.density, suffix: ' g/cm³' },
    { label: 'Oxidation States', value: el.oxidationStates.join(', ') },
    { label: 'Discovered', value: el.yearDiscovered },
    { label: 'Discoverer', value: el.discoveredBy },
  ];

  return (
    <Panel className="h-full border-0 lg:border-l rounded-none">
      <div className="flex flex-col gap-6">
        {/* Hero Section */}
        <div className="flex items-center gap-4">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold shadow-lg"
            style={{ backgroundColor: `${categoryColor}20`, color: categoryColor, border: `1px solid ${categoryColor}40` }}
          >
            {el.symbol}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text leading-tight">{el.name}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Z = {el.atomicNumber}</Badge>
              <Badge style={{ backgroundColor: `${categoryColor}20`, color: categoryColor, borderColor: `${categoryColor}40` }}>
                {el.category.replace(/-/g, ' ')}
              </Badge>
              <Badge variant="default">{el.standardState}</Badge>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Electron Configuration */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">Electron Configuration</h3>
          <div className="bg-black/30 p-3 rounded-lg border border-border">
            <div className="font-mono text-accent mb-1">{el.electronConfigurationSemantic}</div>
            <div className="font-mono text-xs text-text-dim mb-3">{el.electronConfiguration}</div>
            
            <div className="flex flex-wrap gap-1">
              {el.electronsPerShell.map((count, i) => (
                <div key={i} className="flex items-center bg-white/5 border border-white/10 rounded px-2 py-1">
                  <span className="text-[10px] text-text-dim mr-1">n={i + 1}</span>
                  <span className="text-xs font-medium text-text">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-3">Properties</h3>
          <div className="bg-black/30 p-4 rounded-lg border border-border">
            <PropertyGrid items={properties} />
          </div>
        </div>

        {/* Fact */}
        {el.fact && (
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
            <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Did you know?</h3>
            <p className="text-sm text-accent/80 italic">{el.fact}</p>
          </div>
        )}
      </div>
    </Panel>
  );
}
