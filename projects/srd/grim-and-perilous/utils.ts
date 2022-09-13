export function getBonusFromAttribute(value: number): number {
  return Math.floor(value / 10);
}

export function getThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}
