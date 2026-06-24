export function fmt(value: any, suffix: string = ''): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return '—';
    // Round to 3 decimals to remove floating-point noise (e.g. -252.8699999998 -> -252.87)
    // while preserving meaningful precision (atomic masses like 1.008).
    const rounded = Math.round(value * 1000) / 1000;
    return `${rounded}${suffix}`;
  }
  if (typeof value === 'string' && value.trim() === '') return '—';
  return `${value}${suffix}`;
}

export function toSubscript(formula: string): string {
  if (!formula) return '';
  const subscripts = '₀₁₂₃₄₅₆₇₈₉';
  return formula.replace(/[0-9]/g, (match) => subscripts.charAt(parseInt(match)));
}

export function toCelsius(kelvin: number | null): number | null {
  if (kelvin === null) return null;
  return kelvin - 273.15;
}

export function toFahrenheit(kelvin: number | null): number | null {
  if (kelvin === null) return null;
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

export function titleCase(str: string): string {
  if (!str) return '';
  return str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
