import { JsonString } from './models';
import { AbstractControl, FormGroup } from '@angular/forms';

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

export function getParsedJson<T>(value: JsonString<T>): T | null {
  try {
    return JSON.parse(value) as T;
  } catch (r) {
    return null;
  }
}

export function getRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSumFromOneToN(n: number = 1): number {
  return typeof n === 'number' ? n * (n + 1) / 2 : null;
}

export function setFormControlsEditable(
  form: FormGroup, controls: string[] = [], isEditable: boolean = true
): void {
  controls.forEach(i => {
    const control: AbstractControl = form.get(i);
    (!!control && isEditable) ? control.enable() : control.disable();
  });
}

export function sortByName(a, b): -1 | 0| 1 {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}
