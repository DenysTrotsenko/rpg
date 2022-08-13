import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Profession, Skill, Talent, Trait } from '@flames-of-freedom-1e/models';
import { DataService, DataTypes } from '@ti/app/game/data.service';

const DEFAULT_FILTERS = {skills: [], talents: [], trait: null};

@Component({
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly filters: FormGroup = new FormGroup({
    skills: new FormControl([]),
    talents: new FormControl([]),
    trait: new FormControl(null),
  });
  readonly professions: Profession[] = this.data[DataTypes.PROFESSIONS];
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];
  readonly traits: Trait[] = this.data[DataTypes.TRAITS].filter(i => i.id >= 71); // Only Professional Traits

  readonly filters$ = this.filters.valueChanges.pipe(
    startWith(DEFAULT_FILTERS)
  );
  readonly professions$: Observable<Profession[]> = this.filters$.pipe(
    map(filters => {
      return this.data[DataTypes.PROFESSIONS]
        .filter(p => filters?.skills.every(s => p.advancements.skills.includes(s)))
        .filter(p => filters?.talents.every(t => p.advancements.talents.includes(t)))
        .filter(p => !!filters?.trait ? p.traits.includes(filters?.trait) : p);
    })
  );

  constructor(private data: DataService) {}

  onFiltersResetClick(): void {
    this.filters.patchValue(DEFAULT_FILTERS);
  }
}
