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
import { distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import {
  AuthService,
  CampaignService,
  CharacterId,
  DialogService, FS_COLLECTION,
  getId16,
} from '@std';
import { CharacterService } from '../../character.service';
import {
  DataService,
  AddSkillDialogComponent,
  AddSpecialisationDialogComponent,
  AddItemDialogComponent,
  AddTalentDialogComponent
} from '@im-common';
import {
  Characteristic, CharacteristicId,
  Faction,
  FactionId, Item, ItemId, ItemTrait, ItemTraitId,
  Origin,
  OriginId, PsychicPower,
  PsychicPowerId, Role,
  RoleId, Skill, SkillId, Specialisation, Talent, TalentId
} from '@imperium-maledictum-1e/models/common';
import {
  CharacteristicValue,
  ImperiumMaledictumCharacter as Character
} from '@imperium-maledictum-1e/models/character';
import {
  BonusId
} from '../../../../../imperium-maledictum-common/src/lib/components/selected-bonuses/selected-bonuses.component';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {
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
  readonly step5: FormGroup = new FormGroup({
    items: new UntypedFormArray([]),
  });
  readonly step6: FormGroup = new FormGroup<any>({
    name: new FormControl<string>(null, [Validators.required]),
    image: new FormControl<string>(null),
    powers: new FormControl<PsychicPowerId[]>([])
  });
  readonly bonuses: FormGroup = new FormGroup<any>({
    origin: new FormControl<Map<BonusId, number>>(null),
    faction: new FormControl<Map<BonusId, number>>(null),
    role: new FormControl<Map<BonusId, number>>(null),
  });

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      shareReplay(1)
    );
  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$.pipe(
    map(characteristics => characteristics?.sort((a, b) => a?.order - b?.order)),
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
  readonly talents$: Observable<Talent[]> = this.data.talents$;
  readonly powers$: Observable<PsychicPower[]> = this.data.psychicPowers$;

  // readonly formItems$: Observable<string[]> = this.step5.get('items').valueChanges.pipe(
  //   startWith([]),
  //   map(items => items.map(i => {
  //     const item = this.data.get<Item>(i.id);
  //     const qualities = i.qualities?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];
  //     const flaws = i.flaws?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];
  //     const traits = item?.data?.traits?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];
  //
  //     return `${[...qualities, ...flaws].join(' ')} ${item?.name} ${traits.length ? '(' + traits.join(', ') + ')' : ''}`;
  //   }))
  // );
  readonly imagesPath$ = this.auth.uid$.pipe(
    map(id => `${FS_COLLECTION.USERS}/${id}/images`),
    distinctUntilChanged(),
    shareReplay(1)
  );
  readonly originBonuses$ = this.step2.get('origin').valueChanges.pipe(
    distinctUntilChanged(),
    map(id => id ? this.data.get<Origin>(id)?.bonuses : []),
    shareReplay(1)
  );
  readonly factionBonuses$ = this.step3.get('faction').valueChanges.pipe(
    distinctUntilChanged(),
    map(id => id ? this.data.get<Faction>(id)?.bonuses : []),
    shareReplay(1)
  );
  readonly roleBonuses$ = this.step4.get('role').valueChanges.pipe(
    distinctUntilChanged(),
    map(id => id ? this.data.get<Role>(id)?.bonuses : []),
    shareReplay(1)
  );
  readonly totalSelectedBonuses$: Observable<Map<BonusId, number>> = this.bonuses.valueChanges.pipe(
    map(form => {
      const total = new Map<BonusId, number>();
      const originMap = form.origin;
      const factionMap = form.faction;
      const roleMap = form.role;
      const setToTotalSelectedBonuses = (value: number, key: BonusId) => total.set(key, (total.get(key) ?? 0) + value);

      originMap?.forEach(setToTotalSelectedBonuses);
      factionMap?.forEach(setToTotalSelectedBonuses);
      roleMap?.forEach(setToTotalSelectedBonuses);

      return total;
    })
  );

  constructor(
    private readonly auth: AuthService,
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
  ) {
    // TODO: REMOVE
    this.totalSelectedBonuses$.subscribe(res => console.log(res));
  }

  onSubmit(): void {
    const isValid = this.step1.valid && this.step6.valid;

    if (!isValid) { return; }

    combineLatest([
      this.character$,
      this.campaign.selected$
    ])
      .pipe(
        take(1),
        switchMap(([character, campaign]) => {
          const id = character?.id || getId16();

          return this.character.update(id, {
            id,
            author: character?.author ?? this.route.snapshot.data?.user?.uid,
            campaign: character?.campaign ?? campaign.id,
            ...this.step1.value,
            ...this.step2.value,
            ...this.step3.value,
            ...this.step4.value,
            ...this.step5.value,
            ...this.step6.value,
          });
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

  // onAddItemClick(): void {
  //   const group = this.step5.get('items') as UntypedFormArray;
  //
  //   this.dialog.open(AddItemDialogComponent).afterClosed()
  //     .pipe(
  //       filter(res => !!res),
  //       tap(res => group.push(new UntypedFormGroup({
  //         id: new FormControl(res.id),
  //         qualities: new FormControl<ItemTraitId[]>(res.qualities),
  //         flaws: new FormControl<ItemTraitId[]>(res.flaws),
  //         quantity: new FormControl<number>(res.quantity),
  //       })))
  //     )
  //     .subscribe();
  // }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
