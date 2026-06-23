import React from 'react';

interface PanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Panel({ title, children, className = '' }: PanelProps) {
  return (
    <div className={`bg-panel border border-border rounded-xl shadow-[inset_0_0_20px_rgba(79,195,247,0.03)] overflow-hidden flex flex-col ${className}`}>
      {title && (
        <div className="px-4 py-3 border-b border-border bg-black/20">
          <h3 className="text-[11px] uppercase tracking-[0.1em] text-text-dim font-semibold">
            {title}
          </h3>
        </div>
      )}
      <div className="p-4 flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
