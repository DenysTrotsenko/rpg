import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  constructor() { }

  getSumFromOneToN(n: number = 0): number {
    return typeof n === 'number' ? n * (n + 1) / 2 : null;
  }
}
