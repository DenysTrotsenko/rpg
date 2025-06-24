import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CacheService } from '@std';
import { Characteristic, Skill, Talent, WFRPBase } from '@wfrp-4e/models/common';
import { CHARACTERISTICS } from '@wfrp-4e/data/characteristics';
import { SKILLS } from '@wfrp-4e/data/skills';
import { TALENTS } from '@wfrp-4e/data/talents';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly $cache = inject(CacheService);

  readonly characteristics = this.process<Characteristic>(CHARACTERISTICS);
  readonly skills = this.process<Skill>(SKILLS);
  readonly talents = this.process<Talent>(TALENTS);
  readonly characteristics$ = of(this.characteristics);
  readonly skills$ = of(this.skills);
  readonly talents$ = of(this.talents);

  get<T>(id: string): T {
    return this.$cache.get(id) as T;
  }

  private process<T extends WFRPBase>(collection: T[], tooltipFn: (i: T) => string = null): T[] {
    return collection.map(i => {
      if (!i.labels) { i.labels = {}; }
      i.labels.tooltip = !!tooltipFn ? tooltipFn(i) : null;
      this.$cache.set(i.id, i);

      return i;
    });
  }
}
