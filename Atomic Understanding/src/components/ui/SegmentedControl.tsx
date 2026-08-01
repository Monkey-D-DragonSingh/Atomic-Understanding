import React from 'react';

interface SegmentedControlProps<T extends string> {
  options: { label: React.ReactNode; value: T; disabled?: boolean }[];
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
    <div className={`flex glass p-1 rounded-full ${className}`}>
      {options.map((opt) => {
        const isActive = value === opt.value;
        const isDisabled = !!opt.disabled;
        return (
          <button
            key={opt.value}
            onClick={() => !isDisabled && onChange(opt.value)}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            className={`flex-1 transition-all duration-200 rounded-full font-medium flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              isSm ? 'px-3.5 py-1.5 text-xs' : 'px-4 py-2 text-sm'
            } ${
              isDisabled
                ? 'opacity-40 cursor-not-allowed text-text-dim'
                : isActive
                ? 'bg-surface-strong text-text shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_2px_10px_-2px_rgba(0,0,0,0.6)]'
                : 'text-text-dim hover:text-text'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}