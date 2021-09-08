import { Injectable } from '@angular/core';
import {LIFESTYLE_OPTIONS, LIFESTYLES} from '@shadowrun/app/5e/5e.lifestyle';
import {Lifestyle, LifestyleOption} from '@shadowrun/app/5e/5e.models';

@Injectable()
export class FifthEditionService {
  getLifestyleCost(character: any): number {
    return character.lifestyles.reduce((sum, cur) => {
      const lifestyle: Lifestyle = LIFESTYLES.find(i => i.id === cur.id);
      const options: LifestyleOption[] = LIFESTYLE_OPTIONS.filter(i => (cur.options ?? []).includes(i.id));
      const month: number = lifestyle.cost + options.map(i => i.cost(lifestyle.cost)).reduce((a, b) => a + b, 0);
      return sum + (month * (cur.term ?? 0));
    }, 0);
  }
}
