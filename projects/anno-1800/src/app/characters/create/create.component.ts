import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {FirestoreService, getId, setFormControlsEditable, UnsubscribeDirective} from '@shared';
import {
  Affliction,
  Age,
  AlchemicalArt,
  Archetype,
  Attribute,
  Belief,
  Build,
  Culture,
  Eyes,
  Flaw,
  HairColor,
  HairLength,
  HairStyle,
  Language,
  Mark,
  PermanentInjury,
  Profession,
  Sex,
  Spell,
  Stature,
  Style,
  Tier,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  AgeId,
  ArchetypeId,
  AttributeId,
  BeliefId,
  CultureId,
  FlawId,
  ProfessionId,
  SexId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import {getArchetype, getBonusFromAttribute, getProfession} from '@flames-of-freedom-1e/utils';
import {DEFAULT_ATTRIBUTE_PERCENTAGES, DEFAULT_DETERMINATION} from '@flames-of-freedom-1e/const';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Character} from '@ti/app/game/models/character';
import {Campaign} from '@ti/app/game/models/campaign';
// import {Disposition} from '@powered-by-zweihander/models';
// import {DEFAULT_DISPOSITION_ID} from '@powered-by-zweihander/const';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  readonly TYPES = DataTypes;
  readonly AGES: Age[] = this.data[DataTypes.AGES];
  readonly AFFLICTIONS: Affliction[] = this.data[DataTypes.AFFLICTIONS];
  // readonly ALLEGIANCES: Allegiance[] = this.data[DataTypes.ALLEGIANCES];
  readonly ALCHEMICAL_ARTS: AlchemicalArt[] = this.data[DataTypes.ALCHEMICAL_ARTS];
  readonly ARCHETYPES: Archetype[] = this.data[DataTypes.ARCHETYPES];
  readonly ATTRIBUTES: Attribute[] = this.data[DataTypes.ATTRIBUTES];
  readonly BELIEFS: Belief[] = this.data[DataTypes.BELIEFS];
  readonly BUILD: Build[] = this.data[DataTypes.BUILD];
  readonly CULTURES: Culture[] = this.data[DataTypes.CULTURES];
  readonly EYES: Eyes[] = this.data[DataTypes.EYES];
  readonly FLAWS: Flaw[] = this.data[DataTypes.FLAWS];
  readonly HAIR_LENGTH: HairLength[] = this.data[DataTypes.HAIR_LENGTH];
  readonly HAIR_STYLE: HairStyle[] = this.data[DataTypes.HAIR_STYLE];
  readonly HAIR_COLOR: HairColor[] = this.data[DataTypes.HAIR_COLOR];
  readonly LANGUAGES: Language[] = this.data[DataTypes.LANGUAGES];
  readonly MARKS: Mark[] = this.data[DataTypes.MARKS];
  readonly PERMANENT_INJURIES: PermanentInjury[] = this.data[DataTypes.PERMANENT_INJURIES];
  readonly PROFESSIONS: Profession[] = this.data[DataTypes.PROFESSIONS];
  readonly SEX: Sex[] = this.data[DataTypes.SEX];
  readonly SPELLS: Spell[] = this.data[DataTypes.SPELLS];
  readonly STATURE: Stature[] = this.data[DataTypes.STATURE];
  readonly STYLE: Style[] = this.data[DataTypes.STYLE];
  readonly TIERS: Tier[] = this.data[DataTypes.TIERS];
  readonly TRAITS: Trait[] = this.data[DataTypes.TRAITS];

  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    campaign: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    full_name: new FormControl('', [Validators.required]),
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
    allegiances: new FormControl(''),
    culture: new FormControl(CultureId.BLACK, [Validators.required]),
    languages: new FormControl([]),
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
    }),
    archetype: new FormControl(ArchetypeId.COMMONER, [Validators.required]),
    trait: new FormControl(null, [Validators.required]),
    tier: new FormControl(this.TIERS[0].id, [Validators.required]),
    professions: new FormGroup({
      basic: new FormControl(null, [Validators.required]),
      intermediate: new FormControl(null),
      advanced: new FormControl(null),
    }),
    spells: new FormControl([]),
    alchemical_arts: new FormControl([]),
    afflictions: new FormControl([]),
    permanent_injuries: new FormControl([]),
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

  // readonly character$: Observable<Character> = this.form.valueChanges.pipe(
  //   shareReplay(1)
  // );
  // readonly /damageThresholds$: Observable<string> = combineLatest([
  //   this.determination$,
  //   this.brawn$
  // ]).pipe(
  //   map(([determination, brawn]) => {
  //     const threshold: number = determination + getBonusFromAttribute(brawn);
  //     return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
  //   }),
  //   shareReplay(1)
  // );
  // readonly perilThresholds$: Observable<string> = this.willpower$.pipe(
  //   map(willpower => {
  //     const threshold: number = 3 + getBonusFromAttribute(willpower);
  //     return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
  //   }),
  //   shareReplay(1)
  // );
  // readonly encumbranceLimit$: Observable<string> = this.brawn$.pipe(
  //   map(brawn => {
  //     const limit: number = 3 + getBonusFromAttribute(brawn);
  //     return `${limit}`;
  //   }),
  //   shareReplay(1)
  // );
  // readonly initiative$: Observable<string> = this.perception$.pipe(
  //   map(perception => {
  //     const initiative: number = 3 + getBonusFromAttribute(perception);
  //     return `${initiative}`;
  //   }),
  //   shareReplay(1)
  // );
  // readonly movement$: Observable<string> = this.agility$.pipe(
  //   map(agility => {
  //     const movement: number = 3 + getBonusFromAttribute(agility);
  //     return `${movement}`;
  //   }),
  //   shareReplay(1)
  // );
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
          'archetype',
          // 'attributes',
          // 'belief',
          // 'culture',
          // 'flaw',
          // 'miscellaneous',
          // 'name',
          'trait'
        ], isNew);
      }),
      shareReplay(1)
    );
  readonly campaigns$: Observable<Campaign[]> = this.data.campaignsAll$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly firestore: FirestoreService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.character$.subscribe();
    this.subscriptions = this.basicProfession$
      .pipe(
        tap((id: ProfessionId) => {
          const profession: Profession = getProfession(id);
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
          const profession: Profession = getProfession(id);
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
          const profession: Profession = getProfession(id);
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

  getAllegiances(): string[] {
    return  Object.keys(this.form.get('allegiances').value);
  }

  getAttributeBonus(id: AttributeId): number {
    return this.getBonusFromAdvances(id) + this.getBonusFromAttribute(id);
  }

  getBonusFromAttribute(id: AttributeId): number {
    const attribute: number = this.form.get('attributes').get(`${id}`).value;
    return getBonusFromAttribute(attribute);
  }

  getBonusFromAdvances(id: AttributeId): number {
    const advancements = this.form.get('advancements').value;
    const basic: number = advancements.basic?.bonuses.filter(i => i === id).length;
    const intermediate: number = advancements.intermediate?.bonuses.filter(i => i === id).length;
    const advanced: number = advancements.advanced?.bonuses.filter(i => i === id).length;
    return basic + intermediate + advanced;
  }

  isProfessionHidden(id: ProfessionId): boolean {
    const basic: ProfessionId = this.form.get('professions.basic').value;
    const intermediate: ProfessionId = this.form.get('professions.intermediate').value;
    const advanced: ProfessionId = this.form.get('professions.advanced').value;
    return [basic, intermediate, advanced].includes(id);
  }

  isTraitHidden(id: TraitId): boolean {
    const archetypeId: ArchetypeId = this.form.get('archetype').value;
    const archetype = getArchetype(archetypeId);
    return !archetype.traits.includes(id);
  }

  isAdvancesAvailable(control: string): Profession | null {
    const id: ProfessionId = this.form.get(control).value;
    return getProfession(id);
  }

  isMagicalProfession(id: ProfessionId): boolean {
    const mageIds: ProfessionId[] = getArchetype(ArchetypeId.MAGE).professions;
    return mageIds.includes(id);
  }

  onSubmit(form): void {
    if (!this.form.valid) { return; }

    combineLatest([this.character$, this.campaigns$])
      .pipe(
        map(([character, campaigns]) => [character, campaigns.find(i => i.id === form.campaign)]),
        switchMap(([character, campaign]: [Character, Campaign]) => {
          return this.firestore.update(`characters/${form.id}`, {
            ...form,
            authors: !!character?.authors ? [...character.authors] : [this.route.snapshot.data?.user?.uid, campaign.author],
          });
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }
}
