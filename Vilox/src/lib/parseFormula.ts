// Parses neutral formulas, including condensed groups such as Ca(OH)2.
export function parseFormula(formula: string): Record<string, number> {
  const normalized = formula.replace(/[\u2080-\u2089]/g, char =>
    String.fromCharCode(char.charCodeAt(0) - 0x2080 + 0x30));
  const tokens = normalized.match(/[A-Z][a-z]?|\d+|[()]/g) ?? [];
  if (!tokens.length || tokens.join('') !== normalized) throw new Error(`Unsupported formula: ${formula}`);
  const stack: Record<string, number>[] = [{}];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]!;
    if (token === '(') {
      stack.push({});
      continue;
    }
    if (/^\d+$/.test(token)) throw new Error(`Unexpected count in formula: ${formula}`);
    let multiplier = 1;
    if (/^\d+$/.test(tokens[i + 1] ?? '')) multiplier = Number(tokens[++i]);
    if (multiplier < 1) throw new Error(`Invalid count in formula: ${formula}`);
    if (token === ')') {
      if (stack.length === 1) throw new Error(`Unmatched group in formula: ${formula}`);
      const group = stack.pop()!;
      const counts = stack[stack.length - 1]!;
      for (const [symbol, count] of Object.entries(group)) counts[symbol] = (counts[symbol] ?? 0) + count * multiplier;
    } else {
      const counts = stack[stack.length - 1]!;
      counts[token] = (counts[token] ?? 0) + multiplier;
    }
  }
  if (stack.length !== 1) throw new Error(`Unmatched group in formula: ${formula}`);
  return stack[0]!;
}
