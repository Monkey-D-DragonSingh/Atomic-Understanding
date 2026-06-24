import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warning' | 'error' | 'outline' | string;
  className?: string;
  style?: React.CSSProperties;
}

export function Badge({ children, variant = 'default', className = '', style }: BadgeProps) {
  let variantClasses = '';
  switch (variant) {
    case 'accent':
      variantClasses = 'bg-accent/15 text-accent border border-accent/25';
      break;
    case 'warning':
      variantClasses = 'bg-amber-400/15 text-amber-300 border border-amber-400/25';
      break;
    case 'error':
      variantClasses = 'bg-red-500/15 text-red-300 border border-red-500/25';
      break;
    case 'outline':
      variantClasses = 'bg-transparent text-text-dim border border-border-strong';
      break;
    case 'default':
      variantClasses = 'bg-surface text-text border border-border';
      break;
    default:
      variantClasses = 'bg-surface text-text border border-border';
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight ${variantClasses} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
