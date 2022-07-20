import { JsonString } from './models';

export function getFilteredObject<T>(obj: object, allowed: string[]): T {
  const keys = Object.keys(obj).filter(i => allowed.includes(i));
  const filtered = keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as T);

  return filtered;
}

export function getId(): string {
  return (Date.now() + Math.random()).toString(36).replace('.', '');
}

export function getParsedJson<T>(value: JsonString<T>): T {
  try {
    return JSON.parse(value) as T;
  } catch (r) {
    return null;
  }
}
