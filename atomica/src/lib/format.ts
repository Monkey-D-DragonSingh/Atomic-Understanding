export function fmt(value: any, suffix: string = ''): string {
  if (value === null || value === undefined) return '—';
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
