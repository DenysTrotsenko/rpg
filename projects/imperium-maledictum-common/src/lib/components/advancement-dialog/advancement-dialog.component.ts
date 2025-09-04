import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Campaign, CampaignService, CharacterId, SharedModule, StringPipe, TodoTask } from '@std';
import { DataService } from '@im-common';
import {
  Characteristic,
  Skill,
  Specialisation,
  Talent
} from '@imperium-maledictum-1e/models/common';
import {
  getAdvancesXpCost,
  ImperiumMaledictumCharacter,
  isLessThanMax
} from '@imperium-maledictum-1e/models/character';
import { combineLatest, Observable, of } from 'rxjs';
import {
  CHARACTERISTIC_ADVANCE,
  CHARACTERISTIC_COST,
  MAX_CHARACTERISTIC,
  MAX_SKILL,
  MAX_SPECIALISATION,
  SKILL_ADVANCE,
  SKILL_COST,
  SPECIALISATION_ADVANCE,
  SPECIALISATION_COST,
  TALENT_ADVANCE,
  TALENT_COST
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
    ReactiveFormsModule,
    SharedModule,
    StringPipe
]
})
export class AdvancementDialogComponent {
  private readonly data = inject(DataService);
  private readonly campaign = inject(CampaignService);
  private readonly character: ImperiumMaledictumCharacter = inject(MAT_DIALOG_DATA);
  private readonly dialog = inject(MatDialogRef<AdvancementDialogComponent>);
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
    .set('talents', TALENT_ADVANCE);
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
    tap(() => this.option.setValue(DEFAULT_OPTION)),
    shareReplay(1)
  );
  readonly option$ = this.option.valueChanges.pipe(
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
  readonly showProgress$: Observable<boolean> = combineLatest([this.type$, this.option$]).pipe(
    map(([type, option]) => type && option && type !== 'talents'),
    shareReplay(1)
  );
  readonly showCost$: Observable<boolean> = combineLatest([this.type$, this.option$]).pipe(
    map(([type, option]) => type && option),
    shareReplay(1)
  );
  readonly current$: Observable<number> = combineLatest([
    this.type$,
    this.option$
  ]).pipe(
    map(([type, option]) => {
      if (!(type && option)) { return 0; }
      const character = this.character;
      const entity = character[type]?.find(i => i.id === option);
      const starting = entity?.starting ?? 0;
      const advances = entity?.advances ?? 0;

      return !!entity ? starting + advances : 0;
    }),
    shareReplay(1)
  );
  readonly next$: Observable<number> = combineLatest([
    this.type$,
    this.current$
  ]).pipe(
    map(([type, current]) => {
      if (!type) { return 0; }

      return current + this.TYPE_TO_ADVANCE.get(type);
    }),
    shareReplay(1)
  );
  readonly cost$: Observable<number> = combineLatest([
    this.type$,
    this.next$
  ]).pipe(
    map(([type, next]) => {
      if (type === 'talents') { return TALENT_COST; }

      return this.TYPE_TO_COST_MAP.get(type)?.get(next) ?? 0;
    }),
    shareReplay(1)
  );
  readonly spentXp$: Observable<number> = of(this.getSpentXp(this.character)).pipe(
    shareReplay(1)
  );
  readonly totalXp$: Observable<number> = this.campaign.selected$.pipe(
    map(campaign => this.getTotalXp(campaign)),
    shareReplay(1)
  );
  readonly isOkDisabled$: Observable<boolean> = combineLatest([
    this.type$, this.option$, this.cost$, this.spentXp$, this.totalXp$
  ]).pipe(
    map(([type, option, cost, spent, total]) => {
      const isTypeOptionSelected = type && option;
      const isEnoughXp = cost + spent <= total;
      const isEnabled = isTypeOptionSelected && isEnoughXp;

      return !isEnabled;
    })
  );

  onSubmit(): void {
    const character = this.character;
    const type = this.type.value;
    const option = this.option.value;
    const group = character[type];
    const entity = group?.find(i => i.id === option);
    const advance = this.TYPE_TO_ADVANCE.get(type);

    if (!!entity) {
      if (type === 'talents') {
        // group.push({ id: option, advances: advance });
      } else {
        const advances = entity?.advances ?? 0;
        entity.advances = advances + advance;
      }
    } else {
      group.push({ id: option, advances: advance });
    }

    this.dialog.close(character);
  }

  private getTasksXp(tasks: TodoTask[] = [], id: CharacterId): number {
    let xp = 0;
    tasks.forEach(task => {
      if (!!task?.characters?.find(i => i === id)) {
        xp += task?.status === 'completed' ? (task?.experience ?? 0) : 0;
      }
      this.getTasksXp(task.tasks, id);
    });

    return xp;
  }

  private getTotalXp(campaign: Campaign): number {
    return campaign.experience?.reduce((acc, cur) => {
      return acc + this.getTasksXp(cur.tasks, this.character.id);
    }, 0);
  }

  private getSpentXp(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = getAdvancesXpCost(character.characteristics, CHARACTERISTIC_ADVANCE, CHARACTERISTIC_COST);
    const fromSkills = getAdvancesXpCost(character.skills, SKILL_ADVANCE, SKILL_COST);
    const fromSpecialisations = getAdvancesXpCost(character.specialisations, SPECIALISATION_ADVANCE, SPECIALISATION_COST);
    const fromTalents = (character.talents ?? []).reduce((acc, cur) => {
      return cur.advances ? acc + TALENT_COST : acc;
    }, 0);

    return [
      fromCharacteristics,
      fromSkills,
      fromSpecialisations,
      fromTalents
    ].reduce((acc, cur) => acc + cur, 0);
  }

  private filterCharacteristic(option: Option, character: ImperiumMaledictumCharacter): boolean {
    return isLessThanMax(option, character.characteristics, MAX_CHARACTERISTIC);
  }

  private filterSkill(option: Option, character: ImperiumMaledictumCharacter): boolean {
    return isLessThanMax(option, character.skills, MAX_SKILL);
  }

  private filterSpecialisation(option: Option, character: ImperiumMaledictumCharacter): boolean {
    return isLessThanMax(option, character.specialisations, MAX_SPECIALISATION);
  }

  private filterTalent(option: Option, character: ImperiumMaledictumCharacter): boolean {
    const talent = character.talents?.find(i => i.id === option.id);
    /* Don't have this talent */
    return !talent;
  }
}
