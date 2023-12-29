import { HasWeight, JsonString } from './models';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import firebase from 'firebase/compat';
import { FIREBASE_ERROR_MESSAGES } from './const';

export function getErrorMessage(err: firebase.auth.Error): string {
  return FIREBASE_ERROR_MESSAGES.get(err.code) ?? err.message;
}

export function getFilteredObject<T>(obj: object, allowed: string[]): T {
  return Object.keys(obj).filter(i => allowed.includes(i)).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as T);
}

export function getId16<T = string>(): T {
  /* @ts-ignore */
  return ([1e3] + -2e3 + -4e3 + -8e3)
    .replace(/[018]/g, c =>
      /* tslint:disable-next-line:no-bitwise */
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
    .replace(/-/g, '');
}

export function uuid_v4(): string {
  /* @ts-ignore */
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    /* tslint:disable-next-line:no-bitwise */
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
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

export function getUnixTimestamp(): number {
  return Date.now();
}

export function getWeightedRandomItem<T extends HasWeight>(arr: T[]): T {
  const probabilities: number[] = arr.map(i => i.weight);
  const distribution: number[] = probabilities.map((sum => value => sum += value)(0));
  const random: number = getIntegerInRange(1, distribution[distribution.length - 1]);
  const index: number = distribution.findIndex(i => random < i);

  return arr[index] ?? null;
}

export function hasDuplicates(array): boolean {
  return (new Set(array)).size !== array.length;
}

export function setFormControlsEditable(
  form: UntypedFormGroup, controls: string[] = [], isEditable: boolean = true
): void {
  controls.forEach(i => {
    const control: AbstractControl = form.get(i);
    (!!control && isEditable) ? control.enable() : control.disable();
  });
}

export function sortByName(a, b): -1 | 0 | 1 {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}

export function swap<T>(arr: T[], a, b): T[] {
  return arr.map((current, idx) => {
    if (idx === a) { return arr[b]; }
    if (idx === b) { return arr[a]; }
    return current;
  });
}
