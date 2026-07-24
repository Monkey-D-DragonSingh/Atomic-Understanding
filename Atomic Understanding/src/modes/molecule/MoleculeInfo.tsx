import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../../components/ui/Panel';
import { PropertyGrid, PropertyItem } from '../../components/ui/PropertyGrid';
import { EmptyState } from '../../components/ui/EmptyState';
import { Droplets } from 'lucide-react';
import { toCelsius } from '../../lib/format';

export function MoleculeInfo() {
  const { activeCompound } = useAppStore();

  if (!activeCompound) {
    return <EmptyState icon={Droplets} title="No Molecule Selected" description="Select a molecule from the gallery to view its properties." />;
  }

  const mol = activeCompound;

  const properties: PropertyItem[] = [
    { label: 'Molar Mass', value: mol.molarMass, suffix: ' g/mol' },
    { label: 'Bond Type', value: mol.bondType },
    { label: 'Geometry', value: mol.geometry },
    { label: 'Hybridization', value: mol.hybridization },
    { label: 'Bond Angle', value: mol.bondAngle },
    { label: 'Polarity', value: mol.polarity },
    { label: 'Dipole Moment', value: mol.dipoleMoment, suffix: ' D' },
    { label: 'State (RT)', value: mol.standardState },
    { label: 'Melting Point', value: toCelsius(mol.meltingPoint), suffix: ' °C' },
    { label: 'Boiling Point', value: toCelsius(mol.boilingPoint), suffix: ' °C' },
  ];

  return (
    <Panel className="h-full border-0 lg:border-l rounded-none flex flex-col">
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto pr-2">
        <div>
          <h2 className="text-2xl font-bold text-accent">{mol.name}</h2>
          <div className="text-xl font-mono mt-1 text-text">{mol.formula}</div>
        </div>

        <hr className="border-border" />

        <div className="bg-black/30 p-4 rounded-lg border border-border">
          <PropertyGrid items={properties} />
        </div>

        {mol.uses && (
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">Primary Uses</h3>
            {Array.isArray(mol.uses) ? (
              <ul className="list-disc list-inside text-sm text-text">
                {mol.uses.map((use: string, i: number) => <li key={i}>{use}</li>)}
              </ul>
            ) : (
              <p className="text-sm text-text">{mol.uses}</p>
            )}
          </div>
        )}

        {mol.fact && (
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
            <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Did you know?</h3>
            <p className="text-sm text-accent/80 italic">{mol.fact}</p>
          </div>
        )}
      </div>
    </Panel>
  );
}
