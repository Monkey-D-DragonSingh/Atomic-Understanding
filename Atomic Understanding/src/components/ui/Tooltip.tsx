import React, { useState } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Tooltip({ content, children, className = '', style }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative flex ${className}`}
      style={style}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && content && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/90 border border-accent/40 rounded-lg shadow-lg text-sm text-text whitespace-nowrap z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-100">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-accent/40" />
        </div>
      )}
    </div>
  );
}
