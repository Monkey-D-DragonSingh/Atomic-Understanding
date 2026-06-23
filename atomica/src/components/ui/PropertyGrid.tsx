import React from 'react';
import { fmt } from '../../lib/format';

export interface PropertyItem {
  label: string;
  value: any;
  suffix?: string;
}

interface PropertyGridProps {
  items: PropertyItem[];
  className?: string;
}

export function PropertyGrid({ items, className = '' }: PropertyGridProps) {
  return (
    <dl className={`grid grid-cols-2 gap-x-4 gap-y-3 text-sm ${className}`}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <dt className="text-text-dim truncate" title={item.label}>
            {item.label}
          </dt>
          <dd className="text-text font-medium break-words text-right">
            {fmt(item.value, item.suffix)}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
