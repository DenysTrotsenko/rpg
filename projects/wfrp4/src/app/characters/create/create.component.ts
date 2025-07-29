import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import {
  AuthService,
  CampaignService,
  CharacterId,
  FS_COLLECTION,
  getId16,
} from '@std';
import { CharacterService } from '../../character.service';
import {
  DataService, BonusId
} from '@im-common';
import {
  Bonus,
  Characteristic, CharacteristicId,
  Faction,
  FactionId, ItemBonus,
  Origin,
  OriginId, PsychicPower,
  PsychicPowerId, Role,
  RoleId, Skill, SkillId, Specialisation, SpecialisationId, Talent, TalentId
} from '@imperium-maledictum-1e/models/common';
import { AdvanceableValue, ImperiumMaledictumCharacter, ItemValue } from '@imperium-maledictum-1e/models/character';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CreateComponent {
  private readonly RANDOM_TALENTS_QUANTITY: 2 | 1 = Math.random() < .01 ? 2 : 1;
  private RANDOM_BONUSES: Bonus[] = null;

  readonly step1: FormGroup = new FormGroup({
    characteristics: new UntypedFormArray([]),
  });
  readonly step2: FormGroup = new FormGroup({
    origin: new FormControl<OriginId>(null, [Validators.required]),
  });
  readonly step3: FormGroup = new FormGroup({
    faction: new FormControl<FactionId>(null, [Validators.required]),
  });
  readonly step4: FormGroup = new FormGroup({
    role: new FormControl<RoleId>(null, [Validators.required]),
  });
  readonly step5: FormGroup = new FormGroup<any>({
    name: new FormControl<string>(null, [Validators.required]),
    image: new FormControl<string>(null),
    powers: new FormControl<PsychicPowerId[]>([])
  });
  readonly bonuses: FormGroup = new FormGroup<any>({
    origin: new FormControl<Map<BonusId, number>>(null),
    faction: new FormControl<Map<BonusId, number>>(null),
    role: new FormControl<Map<BonusId, number>>(null),
    /* From Random Talents Table */
    random: new FormControl<Map<BonusId, number>>(null)
  });
  readonly items: FormGroup = new FormGroup<any>({
    origin: new FormControl([]),
    faction: new FormControl([]),
    role: new FormControl([]),
  });

  readonly character$: Observable<ImperiumMaledictumCharacter> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<ImperiumMaledictumCharacter>),
      distinctUntilChanged((p, q) => JSON.stringify(p) === JSON.stringify(q)),
      shareReplay(1)
    );
  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$.pipe(
    tap(characteristics => {
      const group = this.step1.get('characteristics') as UntypedFormArray;
      characteristics.forEach(i => group.push(new UntypedFormGroup({
        id: new UntypedFormControl(i.id),
        starting: new UntypedFormControl(20, [Validators.required, Validators.min(20), Validators.max(50)]),
        advances: new UntypedFormControl(0)
      })));
    }),
    shareReplay(1)
  );
  readonly origins$: Observable<Origin[]> = this.data.origins$;
  readonly factions$: Observable<Faction[]> = this.data.factions$;
  readonly roles$: Observable<Faction[]> = this.data.roles$;
  readonly skills$: Observable<Skill[]> = this.data.skills$;
  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$;
  readonly talents$: Observable<Talent[]> = this.data.talents$.pipe(
    tap(talents => {
      this.RANDOM_BONUSES = [
        {
          type: 'talents',
          pick: this.RANDOM_TALENTS_QUANTITY,
          options: talents.map(t => {
            return { id: t.id, value: 1 };
          })
        }
      ];
    })
  );
  readonly powers$: Observable<PsychicPower[]> = this.data.psychicPowers$;

  readonly imagesPath$ = this.auth.uid$.pipe(
    map(id => `${FS_COLLECTION.USERS}/${id}/images`),
    distinctUntilChanged(),
    shareReplay(1)
  );
  readonly totalSelectedBonuses$: Observable<Map<BonusId, number>> = this.bonuses.valueChanges.pipe(
    map(form => {
      const total = new Map<BonusId, number>();
      const addToTotalSelectedBonuses = (value: number, key: BonusId) => total.set(key, (total.get(key) ?? 0) + value);

      form.origin?.forEach(addToTotalSelectedBonuses);
      form.faction?.forEach(addToTotalSelectedBonuses);
      form.role?.forEach(addToTotalSelectedBonuses);
      form.random?.forEach(addToTotalSelectedBonuses);

      return total;
    }),
    shareReplay(1)
  );
  readonly totalSelectedItems$: Observable<ItemValue[]> = this.items.valueChanges.pipe(
    map(form => {
      return [
        ...form.origin,
        ...form.faction,
        ...form.role
      ];
    }),
    shareReplay(1)
  );
  readonly originBonuses$ = combineLatest([
    this.step2.get('origin').valueChanges.pipe(startWith(null)),
    this.totalSelectedBonuses$.pipe(startWith(new Map()))
  ]).pipe(
    map(([id, total]) => {
      return this.setBonusOptionsDisabled(id ? this.data.get<Origin>(id)?.bonuses : [], total);
    }),
    shareReplay(1)
  );
  readonly originItems$: Observable<ItemBonus[]> = combineLatest([
    this.step2.get('origin').valueChanges.pipe(startWith(null)),
    this.totalSelectedItems$.pipe(startWith([] as ItemValue[]))
  ]).pipe(
    map(([id, total]) => this.data.get<Origin>(id)?.items ?? []),
    shareReplay(1)
  );
  readonly factionBonuses$ = combineLatest([
    this.step3.get('faction').valueChanges.pipe(startWith(null)),
    this.totalSelectedBonuses$.pipe(startWith(new Map()))
  ]).pipe(
    map(([id, total]) => {
      return this.setBonusOptionsDisabled(id ? this.data.get<Faction>(id)?.bonuses : [], total);
    }),
    shareReplay(1)
  );
  readonly factionItems$: Observable<ItemBonus[]> = combineLatest([
    this.step3.get('faction').valueChanges.pipe(startWith(null)),
    this.totalSelectedItems$.pipe(startWith([] as ItemValue[]))
  ]).pipe(
    map(([id, total]) => this.data.get<Faction>(id)?.items ?? []),
    shareReplay(1)
  );
  readonly roleBonuses$ = combineLatest([
    this.step4.get('role').valueChanges.pipe(startWith(null)),
    this.totalSelectedBonuses$.pipe(startWith(new Map()))
  ]).pipe(
    map(([id, total]) => {
      return this.setBonusOptionsDisabled(id ? this.data.get<Role>(id)?.bonuses : [], total);
    }),
    shareReplay(1)
  );
  readonly roleItems$: Observable<ItemBonus[]> = combineLatest([
    this.step4.get('role').valueChanges.pipe(startWith(null)),
    this.totalSelectedItems$.pipe(startWith([] as ItemValue[]))
  ]).pipe(
    map(([id, total]) => this.data.get<Role>(id)?.items ?? []),
    shareReplay(1)
  );
  readonly randomTalentBonuses$ = combineLatest([
    this.talents$.pipe(take(1)),
    this.totalSelectedBonuses$.pipe(startWith(new Map()))
  ]).pipe(
    map(([talents, total]) => {
      return this.setBonusOptionsDisabled(this.RANDOM_BONUSES, total);
    }),
    shareReplay(1)
  );

  constructor(
    private readonly auth: AuthService,
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
  ) {}

  onSubmit(): void {
    const isValid = this.step1.valid && this.step2.valid && this.step3.valid && this.step4.valid && this.step5.valid;

    if (!isValid) { return; }

    const combined = {
      character: this.character$,
      campaign: this.campaign.selected$,
      bonuses: this.totalSelectedBonuses$,
      items: this.totalSelectedItems$,
      skills: this.skills$,
      specialisations: this.specialisations$,
      talents: this.talents$
    };

    combineLatest(combined)
      .pipe(
        take(1),
        switchMap(({character, campaign, bonuses, items, skills, specialisations, talents}) => {
          const id = character?.id || getId16();
          return this.character.update(id, {
            id,
            author: character?.author ?? this.route.snapshot.data?.user?.uid,
            campaign: character?.campaign ?? campaign.id,
            characteristics: this.step1.value?.characteristics?.map(i => {
              return {
                id: i.id,
                starting: i.starting + (bonuses.get(i.id) ?? 0),
                advances: 0
              } as AdvanceableValue<CharacteristicId>;
            }),
            ...this.step2.value,
            ...this.step3.value,
            ...this.step4.value,
            ...this.step5.value,
            skills: skills.filter(i => bonuses.has(i.id)).map(i => {
              return {
                id: i.id,
                starting: bonuses.get(i.id),
                advances: 0
              } as AdvanceableValue<SkillId>;
            }),
            specialisations: specialisations.filter(i => bonuses.has(i.id)).map(i => {
              return {
                id: i.id,
                starting: bonuses.get(i.id),
                advances: 0
              } as AdvanceableValue<SpecialisationId>;
            }),
            talents: talents.filter(i => bonuses.has(i.id)).map(i => {
              return {
                id: i.id,
                starting: 1
              } as AdvanceableValue<TalentId>;
            }),
            items: [
              ...items
            ],
            fate: 3,
            corruption: 0,
            wounds: 0
          });
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }

  private setBonusOptionsDisabled(bonuses: Bonus[], total: Map<BonusId, number>): Bonus[] {
    bonuses.forEach(bonus => {
      const options = bonus.options;

      options.forEach(option => {
        if (bonus.type === 'skills') {
          const id = option.id as SkillId;
          option.disabled = total.get(id) && total.get(id) >= 10;
        } else if (bonus.type === 'specialisations') {
          const id = option.id as SpecialisationId;
          option.disabled = total.get(id) && total.get(id) >= 5;
        } else if (bonus.type === 'talents') {
          const id = option.id as TalentId;
          option.disabled = total.has(id);
        }
      });
    });

    return bonuses;
  }
}
