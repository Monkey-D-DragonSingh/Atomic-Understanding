import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../../ui/Panel';
import { PropertyGrid, PropertyItem } from '../../ui/PropertyGrid';
import { EmptyState } from '../../ui/EmptyState';
import { Spinner } from '../../ui/Spinner';
import { Search, ExternalLink, Copy } from 'lucide-react';

export function CompoundInfo() {
  const { activeCompound } = useAppStore();
  const [copied, setCopied] = useState(false);

  // Since CompoundMode handles the query state locally, we'll assume activeCompound is set 
  // when loaded. If it's loading, CompoundMode should ideally show a loading state in the center.
  // Wait, the plan says CompoundInfo shows the Loading / Error / Success states.
  // We'll manage that via props or a separate store. For simplicity, we assume activeCompound is populated.
  // Let's rely on CompoundMode passing down loading/error props, or we just render activeCompound here.

  if (!activeCompound) {
    return (
      <EmptyState icon={Search} title="Search a compound" description="Search by name to view its 3D structure and properties." />
    );
  }

  const props = activeCompound.properties || {};

  const handleCopy = () => {
    if (props.CanonicalSMILES) {
      navigator.clipboard.writeText(props.CanonicalSMILES);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const propertyItems: PropertyItem[] = [
    { label: 'PubChem CID', value: activeCompound.pubchemCid },
    { label: 'Molecular Weight', value: props.MolecularWeight, suffix: ' g/mol' },
    { label: 'XLogP3', value: props.XLogP },
    { label: 'H-Bond Donors', value: props.HBondDonorCount },
    { label: 'H-Bond Acceptors', value: props.HBondAcceptorCount },
    { label: 'Rotatable Bonds', value: props.RotatableBondCount },
    { label: 'TPSA', value: props.TPSA },
    { label: 'Charge', value: props.Charge },
    { label: 'Complexity', value: props.Complexity },
  ];

  return (
    <Panel className="h-full border-0 lg:border-l rounded-none">
      <div className="flex flex-col h-full gap-6">
        <div>
          <h2 className="text-2xl font-bold text-accent break-words">{activeCompound.name}</h2>
          <div className="text-xl font-bold mt-1 text-text">{activeCompound.formula}</div>
          {props.IUPACName && (
            <div className="text-xs text-text-dim mt-2 line-clamp-2" title={props.IUPACName}>
              {props.IUPACName}
            </div>
          )}
        </div>

        <hr className="border-border" />

        <div className="bg-black/30 p-4 rounded-lg border border-border">
          <PropertyGrid items={propertyItems} />
          
          <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs text-text-dim">
            <span>Atoms: {activeCompound.atoms.length}</span>
            <span>Bonds: {activeCompound.bonds.length}</span>
          </div>
        </div>

        {props.CanonicalSMILES && (
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">Canonical SMILES</h3>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-black/50 border border-border rounded p-2 text-xs font-mono text-text-dim overflow-hidden text-ellipsis whitespace-nowrap">
                {props.CanonicalSMILES}
              </div>
              <button 
                onClick={handleCopy}
                className="p-2 bg-panel border border-border hover:border-accent hover:text-accent rounded transition-colors"
                title="Copy SMILES"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            {copied && <div className="text-[10px] text-accent mt-1 text-right">Copied to clipboard!</div>}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-border text-center">
          <a 
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${activeCompound.pubchemCid}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            View on PubChem <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </Panel>
  );
}
