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
  CampaignService,
  CharacterId,
  DialogService,
  getId16,
  setFormControlsEditable
} from '@std';
import { CharacterService } from '../../character.service';
import { DataService } from '@im-common';
import {
  Characteristic,
  Faction,
  FactionId, Item, ItemTrait, ItemTraitId,
  Origin,
  OriginId, PsychicPower,
  PsychicPowerId,
  RoleId, Skill, SkillId, Specialisation, Talent, TalentId
} from '@imperium-maledictum-1e/models/common';
import {
  CharacteristicValue,
  ImperiumMaledictumCharacter as Character
} from '@imperium-maledictum-1e/models/character';
import {
  AddSkillDialogComponent
} from '../../../../../imperium-maledictum-common/src/lib/components/add-skill-dialog.component';
import {
  AddSpecialisationDialogComponent
} from '../../../../../imperium-maledictum-common/src/lib/components/add-specialisation-dialog.component';
import {
  AddItemDialogComponent
} from '../../../../../imperium-maledictum-common/src/lib/components/add-item-dialog.component';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  readonly formTemp: FormGroup = new FormGroup({
    skills: new UntypedFormArray([]),
    specialisations: new UntypedFormArray([]),
    talents: new FormControl<TalentId[]>([]),
    powers: new FormControl<PsychicPowerId[]>([]),
    items: new UntypedFormArray([]),
  });
  readonly form10: FormGroup = new FormGroup({
    name: new FormControl<string>(null, [Validators.required]),
  });

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        // const isNew = !res;
        // this.form.patchValue({
        //   ...res,
        // });
        // setFormControlsEditable(this.form, ['archetype', 'trait'], isNew);
      }),
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

  readonly formSkills$: Observable<Skill[]> = this.formTemp.get('skills').valueChanges.pipe(
    startWith([]),
    map(skills => skills.map(i => i.id).map(i => this.data.get(i)))
  );

  readonly specialisationsChanges = this.formTemp.get('specialisations').valueChanges;
  readonly formSpecialisations$: Observable<(Specialisation & { details: string })[]> = this.specialisationsChanges.pipe(
    startWith([]),
    map(specialisations => specialisations.map(i => ({
      ...this.data.get<Specialisation>(i.id),
      details: i.details
    })))
  );

  readonly formItems$: Observable<string[]> = this.step5.get('items').valueChanges.pipe(
    startWith([]),
    map(items => items.map(i => {
      const item = this.data.get<Item>(i.id);
      const qualities = i.qualities?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];
      const flaws = i.flaws?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];
      const traits = item?.data?.traits?.map(q => this.data.get<ItemTrait>(q)?.name) ?? [];

      return `${[...qualities, ...flaws].join(' ')} ${item?.name} ${traits.length ? '(' + traits.join(', ') + ')' : ''}`;
    }))
  );

  constructor(
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  onSubmit(): void {
    const isValid = this.step1.valid && this.form10.valid;

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
            ...this.form10.value,
            ...this.formTemp.value,
          });
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

  onAddSkillClick(): void {
    const group = this.formTemp.get('skills') as UntypedFormArray;
    const ids = group.value?.map(i => i.id);

    this.skills$
      .pipe(
        take(1),
        switchMap(skills => this.dialog.open(AddSkillDialogComponent, {
          data: skills.filter(i => !ids.includes(i.id))
        }).afterClosed()),
        filter(res => !!res),
        tap(id => group.push(new UntypedFormGroup({
          id: new FormControl<SkillId>(id),
          starting: new FormControl<number>(5),
          advances: new FormControl<number>(0)
        })))
      )
      .subscribe();
  }

  onAddSpecialisationClick(): void {
    const group = this.formTemp.get('specialisations') as UntypedFormArray;
    const ids = group.value?.map(i => i.id);

    this.specialisations$
      .pipe(
        take(1),
        switchMap(specialisations => this.dialog.open(AddSpecialisationDialogComponent, {
          data: specialisations.filter(i => !(ids.includes(i.id) && !i.multiple))
        }).afterClosed()),
        filter(res => !!res),
        tap(res => group.push(new UntypedFormGroup({
          id: new UntypedFormControl(res.id),
          starting: new FormControl<number>(5),
          advances: new FormControl<number>(0),
          ...(res.details ? { details: new UntypedFormControl(res.details) } : {})
        })))
      )
      .subscribe();
  }

  onAddItemClick(): void {
    const group = this.step5.get('items') as UntypedFormArray;

    this.dialog.open(AddItemDialogComponent).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => group.push(new UntypedFormGroup({
          id: new FormControl(res.id),
          qualities: new FormControl<ItemTraitId[]>(res.qualities),
          flaws: new FormControl<ItemTraitId[]>(res.flaws),
        })))
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
