import React from 'react';

interface PanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Panel({ title, children, className = '' }: PanelProps) {
  return (
    <div className={`glass-strong rounded-2xl elev overflow-hidden flex flex-col ${className}`}>
      {title && (
        <div className="px-5 py-3.5 border-b border-border">
          <h3 className="text-[11px] uppercase tracking-[0.14em] text-text-dim font-semibold">
            {title}
          </h3>
        </div>
      )}
      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
}
