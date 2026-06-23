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
      variantClasses = 'bg-accent/20 text-accent border border-accent/30';
      break;
    case 'warning':
      variantClasses = 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      break;
    case 'error':
      variantClasses = 'bg-red-500/20 text-red-400 border border-red-500/30';
      break;
    case 'outline':
      variantClasses = 'bg-transparent text-text-dim border border-border';
      break;
    case 'default':
      variantClasses = 'bg-white/10 text-text border border-white/5';
      break;
    default:
      // Custom variant string (like 'transition-metal' logic could be passed via inline styles or custom css classes)
      variantClasses = 'bg-white/10 text-text border border-white/5';
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${variantClasses} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
