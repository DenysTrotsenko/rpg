import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule, StringPipe } from '@std';
import { DataService } from '@im-common';
import { Characteristic, Skill, Specialisation, Talent } from '@imperium-maledictum-1e/models/common';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { combineLatest, Observable, of } from 'rxjs';
import {
  CHARACTERISTIC_ADVANCE, CHARACTERISTIC_COST,
  MAX_CHARACTERISTIC,
  MAX_SKILL,
  MAX_SPECIALISATION, SKILL_ADVANCE, SKILL_COST, SPECIALISATION_ADVANCE, SPECIALISATION_COST, TALENT_COST
} from '@imperium-maledictum-1e/const';

type Option = Characteristic | Skill | Specialisation | Talent;
type FilterFn = (option: Option, character: ImperiumMaledictumCharacter) => boolean;
const DEFAULT_TYPE = null;
const DEFAULT_OPTION = null;

@Component({
  templateUrl: './advancement-dialog.component.html',
  styleUrls: ['./advancement-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    SharedModule,
    StringPipe
  ],
  standalone: true
})
export class AdvancementDialogComponent {
  private readonly data = inject(DataService);
  private readonly character: ImperiumMaledictumCharacter = inject(MAT_DIALOG_DATA);
  private readonly TYPE_TO_OPTIONS: Map<string, Observable<Option[]>> = new Map()
    .set('characteristics', this.data.characteristics$)
    .set('skills', this.data.skills$)
    .set('specialisations', this.data.specialisations$)
    .set('talents', this.data.talents$);
  private readonly TYPE_TO_FILTER: Map<string, FilterFn> = new Map()
    .set('characteristics', this.filterCharacteristic)
    .set('skills', this.filterSkill)
    .set('specialisations', this.filterSpecialisation)
    .set('talents', this.filterTalent);
  private readonly TYPE_TO_ADVANCE: Map<string, number> = new Map()
    .set('characteristics', CHARACTERISTIC_ADVANCE)
    .set('skills', SKILL_ADVANCE)
    .set('specialisations', SPECIALISATION_ADVANCE)
    .set('talents', 1);
  private readonly TYPE_TO_COST_MAP: Map<string, Map<number, number>> = new Map()
    .set('characteristics', CHARACTERISTIC_COST)
    .set('skills', SKILL_COST)
    .set('specialisations', SPECIALISATION_COST)
    .set('talents', null);
  readonly ADVANCEMENT_TYPES = [
    { id: 'characteristics', name: 'Characteristic'},
    { id: 'skills', name: 'Skill'},
    { id: 'specialisations', name: 'Specialisation'},
    { id: 'talents', name: 'Talent'}
  ];
  readonly type = new FormControl(DEFAULT_TYPE, [Validators.required]);
  readonly option = new FormControl(DEFAULT_OPTION, [Validators.required]);
  readonly type$ = this.type.valueChanges.pipe(
    startWith(DEFAULT_TYPE),
    shareReplay(1)
  );
  readonly option$ = this.option.valueChanges.pipe(
    startWith(DEFAULT_OPTION),
    shareReplay(1)
  );
  readonly options$: Observable<Option[]> = this.type$.pipe(
    switchMap(type => {
      if (!type) { return of(null); }
      const character = this.character;
      const filter = this.TYPE_TO_FILTER.get(type);

      return this.TYPE_TO_OPTIONS.get(type).pipe(
        map(options => options.filter(o => filter(o, character)))
      );
    }),
    shareReplay(1)
  );
  readonly show$: Observable<boolean> = this.type$.pipe(
    map(type => type && type !== 'talents')
  );
  readonly current$: Observable<number> = combineLatest([
    this.type$,
    this.option$
  ]).pipe(
    map(([type, option]) => {
      if (!(type && option)) { return 0; }
      console.log(type);
      const character = this.character;
      console.log(character);
      const entity = character[type]?.find(i => i.id === option);
      const starting = entity?.starting ?? 0;
      const advances = entity?.advances ?? 0;

      return !!entity ? starting + advances : 0;
    })
  );
  readonly next$: Observable<number> = combineLatest([
    this.type$,
    this.current$
  ]).pipe(
    map(([type, current]) => {
      if (!type) { return 0; }

      return current + this.TYPE_TO_ADVANCE.get(type);
    })
  );
  readonly cost$: Observable<number> = combineLatest([
    this.type$,
    this.next$
  ]).pipe(
    map(([type, next]) => {
      if (type === 'talents') { return TALENT_COST; }

      return this.TYPE_TO_COST_MAP.get(type)?.get(next) ?? 0;
    })
  );


  private filterCharacteristic(option: Option, character: ImperiumMaledictumCharacter): boolean {
    const characteristic = character.characteristics.find(i => i.id === option.id);
    const starting = characteristic?.starting ?? 0;
    const advances = characteristic?.advances ?? 0;
    const value = starting + advances;
    /* Characteristic is less than maximum */
    return value < MAX_CHARACTERISTIC;
  }

  private filterSkill(option: Option, character: ImperiumMaledictumCharacter): boolean {
    const skill = character.skills.find(i => i.id === option.id);
    const starting = skill?.starting ?? 0;
    const advances = skill?.advances ?? 0;
    const value = starting + advances;
    /* Skill is less than maximum */
    return value < MAX_SKILL;
  }

  private filterSpecialisation(option: Option, character: ImperiumMaledictumCharacter): boolean {
    const specialisation = character.specialisations.find(i => i.id === option.id);
    const starting = specialisation?.starting ?? 0;
    const advances = specialisation?.advances ?? 0;
    const value = starting + advances;
    /* Specialisation is less than maximum */
    return value < MAX_SPECIALISATION;
  }

  private filterTalent(option: Option, character: ImperiumMaledictumCharacter): boolean {
    const talent = character.talents.find(i => i.id === option.id);
    /* Don't have this talent */
    return !talent;
  }
}
