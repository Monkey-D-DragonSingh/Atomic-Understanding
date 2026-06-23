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
    <div className={`flex flex-col items-center justify-center h-full p-8 text-center ${className}`}>
      <div className="w-16 h-16 mb-4 rounded-2xl bg-black/30 border border-border flex items-center justify-center shadow-[inset_0_0_20px_rgba(79,195,247,0.05)]">
        <Icon className="w-8 h-8 text-text-dim opacity-50" />
      </div>
      <h3 className="text-lg font-medium text-text mb-2">{title}</h3>
      {description && <p className="text-sm text-text-dim max-w-sm mb-6">{description}</p>}
      {children}
    </div>
  );
}
