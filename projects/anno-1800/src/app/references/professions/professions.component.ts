import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Archetype, Profession, Skill, Talent } from '@grim-and-perilous/models/common';
import { DataService, DataTypes } from '@ti/app/game/data.service';

const DEFAULT_FILTERS = { skills: [], talents: [], archetype: null };

@Component({
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly filters: FormGroup = new FormGroup({
    archetype: new FormControl(null),
    skills: new FormControl([]),
    talents: new FormControl([]),
  });
  readonly archetypes: Archetype[] = this.data[DataTypes.ARCHETYPES];
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];
  readonly filters$ = this.filters.valueChanges.pipe(startWith(DEFAULT_FILTERS));
  readonly professions$: Observable<Profession[]> = this.filters$.pipe(
    map(filters => {
      return this.data[DataTypes.PROFESSIONS]
        .filter(p => filters?.archetype ? filters?.archetype.includes(p.id) : true)
        .filter(p => filters?.skills.every(s => p.advancements.skills.includes(s)))
        .filter(p => filters?.talents.every(t => p.advancements.talents.includes(t)));
    })
  );

  constructor(private data: DataService) {}

  onFiltersResetClick(): void {
    this.filters.patchValue(DEFAULT_FILTERS);
  }

  trackById(_, item): number {
    return item.id;
  }
}
