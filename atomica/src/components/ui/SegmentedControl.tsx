import React from 'react';

interface SegmentedControlProps<T extends string> {
  options: { label: React.ReactNode; value: T }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className = '',
  size = 'md',
}: SegmentedControlProps<T>) {
  const isSm = size === 'sm';
  return (
    <div className={`flex bg-black/30 p-1 rounded-lg border border-border/50 ${className}`}>
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 transition-all rounded-md font-medium flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isSm ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
            } ${
              isActive
                ? 'bg-accent text-bg shadow-[0_0_10px_var(--accent-glow)]'
                : 'text-text-dim hover:text-text hover:bg-white/5'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
