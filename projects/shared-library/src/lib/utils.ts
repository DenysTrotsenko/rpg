import { JsonString } from './models';

export function getParsedJson<T>(value: JsonString<T>): T {
  try {
    return JSON.parse(value) as T;
  } catch (r) {
    return null;
  }
}
