import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {FirestoreService, UnsubscribeDirective} from '@shared';
import {ALLEGIANCES} from '@flames-of-freedom-1e/allegiances';
import {
  Age,
  Allegiance,
  Archetype,
  Attribute,
  Belief,
  Build,
  Culture, Eyes,
  Flaw, HairColor, HairLength, HairStyle, Mark,
  Profession, Stature,
  Style,
  Tier,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  AgeId,
  AllegianceId,
  ArchetypeId,
  AttributeId,
  CultureId,
  ProfessionId,
  SkillId,
  TalentId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import {ATTRIBUTES} from '@flames-of-freedom-1e/attributes';
import {BELIEFS} from '@flames-of-freedom-1e/beliefs';
import {FLAWS} from '@flames-of-freedom-1e/flaws';
import {ARCHETYPES} from '@flames-of-freedom-1e/archetypes';
import {CULTURES} from '@flames-of-freedom-1e/cultures';
import {ARCHETYPE_TRAIT} from '@flames-of-freedom-1e/traits';
import {AGES} from '@flames-of-freedom-1e/age';
import {PROFESSIONS} from '@flames-of-freedom-1e/professions';
import {TIERS} from '@flames-of-freedom-1e/tiers';
import {getAttributeBonus} from '@flames-of-freedom-1e/utils';
import {DEFAULT_ATTRIBUTE_PERCENTAGES, DEFAULT_DETERMINATION} from '@flames-of-freedom-1e/const';
import {TooltipService} from '@ti/app/game/tooltip.service';
import {BUILD, EYES, HAIR_COLOR, HAIR_LENGTH, HAIR_STYLE, MARKS, STATURE, STYLE} from '@flames-of-freedom-1e/appearance';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    portrait: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    miscellaneous: new FormGroup({
      biography: new FormControl(''),
      gender: new FormControl('Male', [Validators.required]),
      age: new FormControl(AgeId.YOUNG, [Validators.required]),
      stature: new FormControl(null, [Validators.required]),
      build: new FormControl(null, [Validators.required]),
      style: new FormControl(null, [Validators.required]),
      eyes: new FormControl(null, [Validators.required]),
      hair_length: new FormControl(null, [Validators.required]),
      hair_style: new FormControl(null, [Validators.required]),
      hair_color: new FormControl(null, [Validators.required]),
      mark: new FormControl(null, [Validators.required]),
    }),
    determination: new FormControl(DEFAULT_DETERMINATION, [Validators.required]),
    allegiance: new FormControl(AllegianceId.THE_REBELS, [Validators.required]),
    culture: new FormControl(CultureId.BLACK, [Validators.required]),
    belief: new FormControl(BELIEFS[0].id, [Validators.required]),
    flaw: new FormControl(FLAWS[0].id, [Validators.required]),
    attributes: new FormGroup({
      [AttributeId.COMBAT]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.BRAWN]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.AGILITY]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.PERCEPTION]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.INTELLIGENCE]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.WILLPOWER]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [AttributeId.FELLOWSHIP]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required])
    }, [Validators.required]),
    archetype: new FormControl(ArchetypeId.COMMONER, [Validators.required]),
    trait: new FormControl(TraitId.ITS_OWN_REWARD, [Validators.required]),
    tier: new FormControl(1, [Validators.required]),
    professions: new FormGroup({
      basic: new FormControl(null, [Validators.required]),
      intermediate: new FormControl(null, [Validators.required]),
      advanced: new FormControl(null, [Validators.required]),
    }),
    advancements: new FormGroup({
      basic: new FormGroup({
        traits: new FormControl([]),
        quirks: new FormControl([]),
        bonuses: new FormControl([]),
        skills: new FormControl([]),
        talents: new FormControl([]),
      }),
      intermediate: new FormGroup({
        traits: new FormControl([]),
        quirks: new FormControl([]),
        bonuses: new FormControl([]),
        skills: new FormControl([]),
        talents: new FormControl([]),
      }),
      advanced: new FormGroup({
        traits: new FormControl([]),
        quirks: new FormControl([]),
        bonuses: new FormControl([]),
        skills: new FormControl([]),
        talents: new FormControl([]),
      }),
    })
  });

  AGES: Age[] = AGES;
  ALLEGIANCES: Allegiance[] = ALLEGIANCES;
  ARCHETYPES: Archetype[] = ARCHETYPES;
  ATTRIBUTES: Attribute[] = ATTRIBUTES;
  BELIEFS: Belief[] = BELIEFS;
  BUILD: Build[] = BUILD;
  CULTURES: Culture[] = CULTURES;
  EYES: Eyes[] = EYES;
  FLAWS: Flaw[] = FLAWS;
  HAIR_LENGTH: HairLength[] = HAIR_LENGTH;
  HAIR_STYLE: HairStyle[] = HAIR_STYLE;
  HAIR_COLOR: HairColor[] = HAIR_COLOR;
  MARKS: Mark[] = MARKS;
  PROFESSIONS: Profession[] = PROFESSIONS;
  STATURE: Stature[] = STATURE;
  STYLE: Style[] = STYLE;
  TIERS: Tier[] = TIERS;

  readonly determination$: Observable<number> = this.form.get('determination').valueChanges.pipe(
    startWith(DEFAULT_DETERMINATION),
    shareReplay(1)
  );
  readonly agility$: Observable<number> = this.form.get('attributes').get(`${AttributeId.AGILITY}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly brawn$: Observable<number> = this.form.get('attributes').get(`${AttributeId.BRAWN}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly perception$: Observable<number> = this.form.get('attributes').get(`${AttributeId.PERCEPTION}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly willpower$: Observable<number> = this.form.get('attributes').get(`${AttributeId.WILLPOWER}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly damageThresholds$: Observable<string> = combineLatest([
    this.determination$,
    this.brawn$
  ]).pipe(
    map(([determination, brawn]) => {
      const threshold: number = determination + getAttributeBonus(brawn);
      return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
    }),
    shareReplay(1)
  );
  readonly perilThresholds$: Observable<string> = this.willpower$.pipe(
    map(willpower => {
      const threshold: number = 3 + getAttributeBonus(willpower);
      return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
    }),
    shareReplay(1)
  );
  readonly encumbranceLimit$: Observable<string> = this.brawn$.pipe(
    map(brawn => {
      const limit: number = 3 + getAttributeBonus(brawn);
      return `${limit}`;
    }),
    shareReplay(1)
  );
  readonly initiative$: Observable<string> = this.perception$.pipe(
    map(perception => {
      const initiative: number = 3 + getAttributeBonus(perception);
      return `${initiative}`;
    }),
    shareReplay(1)
  );
  readonly movement$: Observable<string> = this.agility$.pipe(
    map(agility => {
      const movement: number = 3 + getAttributeBonus(agility);
      return `${movement}`;
    }),
    shareReplay(1)
  );
  readonly archetype$: Observable<ArchetypeId> = this.form.get('archetype').valueChanges.pipe(
    startWith(ArchetypeId.COMMONER),
    shareReplay(1)
  );
  readonly traits$: Observable<Trait[]> = this.archetype$.pipe(
    tap(() => this.form.get('trait').setValue(null)),
    map((id: ArchetypeId) => {
      const archetype: Archetype = ARCHETYPES.find(i => i.id === id);
      return ARCHETYPE_TRAIT.filter(i => archetype.traits.includes(i.id));
    }),
    shareReplay(1)
  );
  readonly basicProfessions$: Observable<Profession[]> = this.archetype$.pipe(
    map((id: ArchetypeId) => {
      const archetype: Archetype = ARCHETYPES.find(i => i.id === id);
      return PROFESSIONS.filter(i => archetype.professions.includes(i.id));
    }),
    shareReplay(1)
  );
  // readonly professions$: Observable<any> = this.form.get('professions').valueChanges;
  readonly basicProfession$: Observable<any> = this.form.get('professions.basic').valueChanges;
  readonly intermediateProfession$: Observable<any> = this.form.get('professions.intermediate').valueChanges;
  readonly advancedProfession$: Observable<any> = this.form.get('professions.advanced').valueChanges;

  readonly character$: Observable<any> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<any>),
      distinctUntilChanged((p: any, q: any) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        // this.form.patchValue({
        //   id: res?.id ?? this.service.getId(),
        //   portrait: res?.portrait ?? DEFAULT_PORTRAIT,
        //   name: res?.name ?? '',
        //   miscellaneous: {
        //     gender: res?.miscellaneous?.gender ?? 'Male'
        //   },
        //   metatype: res?.metatype ?? METATYPE_ID.HUMAN,
        //   awakening: res?.awakening ?? AWAKENING_ID.MUNDANE,
        //   magic_tradition: res?.magic_tradition ?? null,
        // }, { emitEvent: false });
        // !!res ? this.portrait.disable() : this.portrait.enable();
        // !!res ? this.name.disable() : this.name.enable();
        // !!res ? this.gender.disable() : this.gender.enable();
        // !!res ? this.metatype.disable() : this.metatype.enable();
        // !!res ? this.awakening.disable() : this.awakening.enable();
        // !!res ? this.magic_tradition.disable() : this.magic_tradition.enable();
      }),
      shareReplay(1)
    );

  constructor(
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tooltip: TooltipService
  ) {
    super();
  }

  ngOnInit(): void {
    this.basicProfession$
      .pipe(
        tap((id: ProfessionId) => {
          console.log(this.form.getRawValue());
          const profession: Profession = this.getProfession(id);
          this.form.get('advancements.basic').setValue({
            traits: [],
            quirks: [],
            bonuses: [],
            skills: profession.advancements.skills.slice(),
            talents: [],
          });
        })
      )
      .subscribe();
  }

  getArchetype(id: ArchetypeId): Archetype {
    return ARCHETYPES.find(i => i.id === id);
  }

  getAttributeBonus(id: AttributeId): number {
    const attribute: number = this.form.get('attributes').get(`${id}`).value;
    return getAttributeBonus(attribute);
  }

  getProfession(id: ProfessionId): Profession {
    return PROFESSIONS.find(i => i.id === id);
  }

  isProfessionHidden(id: ProfessionId): boolean {
    const basic: ProfessionId = this.form.get('professions.basic').value;
    const intermediate: ProfessionId = this.form.get('professions.intermediate').value;
    const advanced: ProfessionId = this.form.get('professions.advanced').value;
    return [basic, intermediate, advanced].includes(id);
  }

  isBasicAdvancesAvailable(): Profession {
    const id: ProfessionId = this.form.get('professions.basic').value;
    const profession: Profession = this.getProfession(id);
    return profession;
  }

  isIntermediateAdvancesAvailable(): Profession {
    const id: ProfessionId = this.form.get('professions.intermediate').value;
    const profession: Profession = this.getProfession(id);
    return profession;
  }

  isAdvancedAdvancesAvailable(): Profession {
    const id: ProfessionId = this.form.get('professions.advanced').value;
    const profession: Profession = this.getProfession(id);
    return profession;
  }

  isMagicalProfession(id: ProfessionId): boolean {
    const mages: ProfessionId[] = ARCHETYPES.find(i => i.id === ArchetypeId.MAGE).professions;
    return mages.includes(id);
  }

  onSubmit(form): void {
    // this.firestore.update(`characters/${form.id}`, { ...form, author: this.route.snapshot.data?.user?.uid })
    //   .pipe(
    //     tap(() => this.router.navigate(['characters/list']))
    //   )
    //   .subscribe();
    console.log(this.form.getRawValue());
  }
}
