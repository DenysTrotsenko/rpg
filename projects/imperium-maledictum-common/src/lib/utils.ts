export function sortByName<T extends { name?: string; }>(a: T, b: T): number {
  const aName = a?.name ?? '';
  const bName = b?.name ?? '';

  if (aName < bName) { return -1; }
  if (aName > bName) { return 1; }
  return 0;
}

export function sortByOrder<T extends { order?: number; }>(a: T, b: T): number {
  const aOrder = a?.order ?? 0;
  const bOrder = b?.order ?? 0;
  return aOrder - bOrder;
}
