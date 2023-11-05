import tinycolor from 'tinycolor2';

export function darkerColor(color: string, amount: number): string {
  return tinycolor(color).darken(amount).toString();
}