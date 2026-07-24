import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon: Icon, title, description, children, className = '' }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in ${className}`}>
      <div className="w-16 h-16 mb-5 rounded-2xl glass-strong flex items-center justify-center">
        <Icon className="w-7 h-7 text-text-dim opacity-60" />
      </div>
      <h3 className="text-lg font-semibold text-text mb-1.5 tracking-tight">{title}</h3>
      {description && <p className="text-sm text-text-dim max-w-xs mb-6 leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
