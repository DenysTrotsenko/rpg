import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {FirestoreService, getId, setFormControlsEditable, UnsubscribeDirective} from '@shared';
import {
  Age,
  Allegiance,
  Archetype,
  Attribute,
  Belief,
  Build,
  Culture, Eyes,
  Flaw, HairColor, HairLength, HairStyle, Mark,
  Profession, Sex, Stature,
  Style,
  Tier,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  AgeId,
  AllegianceId,
  ArchetypeId,
  AttributeId, BeliefId,
  CultureId, FlawId,
  ProfessionId, SexId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import {getAttributeBonus} from '@flames-of-freedom-1e/utils';
import {DEFAULT_ATTRIBUTE_PERCENTAGES, DEFAULT_DETERMINATION} from '@flames-of-freedom-1e/const';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Character} from '@ti/app/game/models/character';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  AGES: Age[] = this.data[DataTypes.AGES];
  ALLEGIANCES: Allegiance[] = this.data[DataTypes.ALLEGIANCES];
  ARCHETYPES: Archetype[] = this.data[DataTypes.ARCHETYPES];
  ATTRIBUTES: Attribute[] = this.data[DataTypes.ATTRIBUTES];
  BELIEFS: Belief[] = this.data[DataTypes.BELIEFS];
  BUILD: Build[] = this.data[DataTypes.BUILD];
  CULTURES: Culture[] = this.data[DataTypes.CULTURES];
  EYES: Eyes[] = this.data[DataTypes.EYES];
  FLAWS: Flaw[] = this.data[DataTypes.FLAWS];
  HAIR_LENGTH: HairLength[] = this.data[DataTypes.HAIR_LENGTH];
  HAIR_STYLE: HairStyle[] = this.data[DataTypes.HAIR_STYLE];
  HAIR_COLOR: HairColor[] = this.data[DataTypes.HAIR_COLOR];
  MARKS: Mark[] = this.data[DataTypes.MARKS];
  PROFESSIONS: Profession[] = this.data[DataTypes.PROFESSIONS];
  SEX: Sex[] = this.data[DataTypes.SEX];
  STATURE: Stature[] = this.data[DataTypes.STATURE];
  STYLE: Style[] = this.data[DataTypes.STYLE];
  TRAITS: Trait[] = this.data[DataTypes.TRAITS];
  TIERS: Tier[] = this.data[DataTypes.TIERS];

  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    miscellaneous: new FormGroup({
      portrait: new FormControl(null),
      biography: new FormControl(''),
      sex: new FormControl(SexId.MALE),
      age: new FormControl(AgeId.YOUNG),
      stature: new FormControl(null),
      build: new FormControl(null),
      style: new FormControl(null),
      eyes: new FormControl(null),
      hair_length: new FormControl(null),
      hair_style: new FormControl(null),
      hair_color: new FormControl(null),
      mark: new FormControl(null),
    }),
    determination: new FormControl(DEFAULT_DETERMINATION, [Validators.required]),
    allegiance: new FormControl(AllegianceId.THE_REBELS, [Validators.required]),
    culture: new FormControl(CultureId.BLACK, [Validators.required]),
    belief: new FormControl(BeliefId.ACHIEVEMENT, [Validators.required]),
    flaw: new FormControl(FlawId.APPREHENSION, [Validators.required]),
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
    trait: new FormControl(null, [Validators.required]),
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
    }),
    // UPDATE ONLY
    rp: new FormGroup({
      total: new FormControl(0),
      used: new FormControl(0),
    }),
    ranks: new FormGroup({
      conflict: new FormControl(0),
      belief: new FormControl(0),
      flaw: new FormControl(0),
    }),
    damage: new FormControl(0),
    peril: new FormControl(0),
    injuries: new FormGroup({
      moderate: new FormControl([]),
      serious: new FormControl([]),
      grievous: new FormControl([]),
    })
  });

  readonly determination$: Observable<number> = this.form.get('determination').valueChanges.pipe(
    startWith(DEFAULT_DETERMINATION),
    shareReplay(1)
  );
  readonly agility$: Observable<number> = this.form.get(`attributes.${AttributeId.AGILITY}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly brawn$: Observable<number> = this.form.get(`attributes.${AttributeId.BRAWN}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly perception$: Observable<number> = this.form.get(`attributes.${AttributeId.PERCEPTION}`).valueChanges.pipe(
    startWith(DEFAULT_ATTRIBUTE_PERCENTAGES),
    shareReplay(1)
  );
  readonly willpower$: Observable<number> = this.form.get(`attributes.${AttributeId.WILLPOWER}`).valueChanges.pipe(
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
      const archetype: Archetype = this.ARCHETYPES.find(i => i.id === id);
      return this.data[DataTypes.TRAITS].filter(i => archetype.traits.includes(i.id));
    }),
    shareReplay(1)
  );
  readonly basicProfessions$: Observable<Profession[]> = this.archetype$.pipe(
    map((id: ArchetypeId) => {
      const archetype: Archetype = this.ARCHETYPES.find(i => i.id === id);
      return this.PROFESSIONS.filter(i => archetype.professions.includes(i.id));
    }),
    shareReplay(1)
  );
  readonly basicProfession$: Observable<ProfessionId> = this.form.get('professions.basic').valueChanges;
  readonly intermediateProfession$: Observable<ProfessionId> = this.form.get('professions.intermediate').valueChanges;
  readonly advancedProfession$: Observable<ProfessionId> = this.form.get('professions.advanced').valueChanges;

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        const isNew = !res;

        this.form.patchValue({
          ...res,
          id: res?.id ?? getId(),
        }, { emitEvent: true });

        setFormControlsEditable(this.form, [
          'archetype', 'attributes', 'belief', 'culture', 'flaw', 'miscellaneous', 'name', 'trait'
        ], isNew);
      }),
      shareReplay(1)
    );

  constructor(
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService
  ) {
    super();
    console.clear();
  }

  ngOnInit(): void {
    this.subscriptions = this.character$.subscribe();
    this.subscriptions = this.basicProfession$
      .pipe(
        tap((id: ProfessionId) => {
          const profession: Profession = this.getProfession(id);
          this.form.get('advancements.basic').setValue({
            traits: profession.traits.slice(),
            quirks: profession.quirks.slice(),
            bonuses: [],
            skills: profession.advancements.skills.slice(),
            talents: []
          });
        })
      )
      .subscribe();
    this.subscriptions = this.intermediateProfession$
      .pipe(
        tap((id: ProfessionId) => {
          const profession: Profession = this.getProfession(id);
          this.form.get('advancements.intermediate').setValue({
            traits: profession?.traits?.slice() ?? [],
            quirks: profession?.quirks?.slice() ?? [],
            bonuses: [],
            skills: [],
            talents: []
          });
        })
      )
      .subscribe();
    this.subscriptions = this.advancedProfession$
      .pipe(
        tap((id: ProfessionId) => {
          const profession: Profession = this.getProfession(id);
          this.form.get('advancements.advanced').setValue({
            traits: profession?.traits?.slice() ?? [],
            quirks: profession?.quirks?.slice() ?? [],
            bonuses: [],
            skills: [],
            talents: []
          });
        })
      )
      .subscribe();
  }

  getArchetype(id: ArchetypeId): Archetype {
    return this.ARCHETYPES.find(i => i.id === id);
  }

  getAttributeBonus(id: AttributeId): number {
    const attribute: number = this.form.get('attributes').get(`${id}`).value;
    return getAttributeBonus(attribute);
  }

  getProfession(id: ProfessionId): Profession {
    return this.PROFESSIONS.find(i => i.id === id);
  }

  isProfessionHidden(id: ProfessionId): boolean {
    const basic: ProfessionId = this.form.get('professions.basic').value;
    const intermediate: ProfessionId = this.form.get('professions.intermediate').value;
    const advanced: ProfessionId = this.form.get('professions.advanced').value;
    return [basic, intermediate, advanced].includes(id);
  }

  isTraitHidden(id: TraitId): boolean {
    const archetypeId: ArchetypeId = this.form.get('archetype').value;
    const archetype = this.getArchetype(archetypeId);
    return !archetype.traits.includes(id);
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
    const mages: ProfessionId[] = this.getArchetype(ArchetypeId.MAGE).professions;
    return mages.includes(id);
  }

  onSubmit(form): void {
    this.firestore.update(`characters/${form.id}`, { ...form, author: this.route.snapshot.data?.user?.uid })
      .pipe(
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }
}
