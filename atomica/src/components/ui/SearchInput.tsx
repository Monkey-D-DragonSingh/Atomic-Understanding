import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (val: string) => void;
  onClear?: () => void;
}

export function SearchInput({ value, onChange, onClear, className = '', ...props }: SearchInputProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search className="absolute left-3 w-4 h-4 text-text-dim" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/20 border border-border rounded-lg py-2 pl-10 pr-10 text-sm text-text placeholder-text-dim focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          className="absolute right-3 text-text-dim hover:text-text focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
