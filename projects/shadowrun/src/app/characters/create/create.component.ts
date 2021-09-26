import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {AuthService, FirestoreService, FunctionsService, UnsubscribeDirective} from '@shared';
import {
  Awakening, AWAKENING_ID, AWAKENINGS, MAGIC_TRADITIONS, MagicTradition, Metatype, METATYPE_ID,
  METATYPES
} from '@shadowrun/app/5e';
import {
  NEGATIVE_QUALITIES_MAX_COST,
  POSITIVE_QUALITIES_MAX_COST
} from '@shadowrun/app/5e/5e.variables';
import {FifthEditionService} from '@shadowrun/app/5e/5e.service';
import {Character} from '@shadowrun/app/5e/5e.models';
import firebase from 'firebase/compat/app';
import User = firebase.User;

/** A maximum cost of positive qualities shouldn't exceed */
export function positiveQualitiesMaxCostValidator(max: number): ValidatorFn {
  return (qualities: FormControl): ValidationErrors | null => {
    const costs: number[] = (qualities.value ?? []).map(i => i.rating?.cost ?? 0);
    const positive: number[] = costs.filter(i => i >= 0);
    const sum: number = positive.reduce((acc, cur) => acc + cur, 0);

    return sum > max ? {positiveQualitiesMaxCost: {value: qualities.value}} : null;
  };
}

const DEFAULT_PORTRAIT = 'pc_humanmale_00_faceless.png';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    portrait: new FormControl(DEFAULT_PORTRAIT, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    miscellaneous: new FormGroup({
      biography: new FormControl(null),
      gender: new FormControl(null, [Validators.required]),
    }),
    metatype: new FormControl(METATYPE_ID.HUMAN, [Validators.required]),
    awakening: new FormControl(AWAKENING_ID.MUNDANE, [Validators.required]),
    magic_tradition: new FormControl(null, [Validators.required]),
    qualities: new FormControl(null, [positiveQualitiesMaxCostValidator(POSITIVE_QUALITIES_MAX_COST)]),
    attributes: new FormControl(null, [Validators.required]),
    skills: new FormControl(null, [Validators.required]),
    knowledge: new FormControl(null, [Validators.required]),
    contacts: new FormControl(null, [Validators.required]),
    spells: new FormControl(null),
    complex_forms: new FormControl(null),
    adept_powers: new FormControl(null),
    lifestyles: new FormControl(null, [Validators.required]),
    ware: new FormControl(null),
    gear: new FormControl(null),
  });
  readonly AWAKENINGS: Awakening[] = AWAKENINGS;
  readonly METATYPES: Metatype[] = METATYPES;
  readonly MAGIC_TRADITIONS: MagicTradition[] = MAGIC_TRADITIONS;
  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        this.form.patchValue({
          id: !!res ? res.id : this.service.getId(),
          portrait: !!res ? res.portrait : DEFAULT_PORTRAIT,
          name: !!res ? res.name : '',
          metatype: !!res ? res.metatype : METATYPE_ID.HUMAN,
          awakening: !!res ? res.awakening : AWAKENING_ID.MUNDANE,
          magic_tradition: !!res ? res.magic_tradition : null,
          qualities: !!res ? res.qualities : null,
          attributes: !!res ? res.attributes : null,
          skills: !!res ? res.skills : null,
          knowledge: !!res ? res.knowledge : null,
          contacts: !!res ? res.contacts : null,
          spells: !!res ? res.spells : null,
          complex_forms: !!res ? res.complex_forms : null,
          adept_powers: !!res ? res.adept_powers : null,
          lifestyles: !!res ? res.lifestyles : null,
          ware: !!res ? res.ware : null,
          gear: !!res ? res.gear : null,
        }, { emitEvent: false });
        !!res ? this.portrait.disable() : this.portrait.enable();
        !!res ? this.name.disable() : this.name.enable();
        !!res ? this.metatype.disable() : this.metatype.enable();
        !!res ? this.awakening.disable() : this.awakening.enable();
        !!res ? this.magic_tradition.disable() : this.magic_tradition.enable();
      }),
      shareReplay(1)
    );

  get portrait(): AbstractControl { return this.form.get('portrait'); }
  get name(): AbstractControl { return this.form.get('name'); }
  get metatype(): AbstractControl { return this.form.get('metatype'); }
  get awakening(): AbstractControl { return this.form.get('awakening'); }
  get magic_tradition(): AbstractControl { return this.form.get('magic_tradition'); }

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: FifthEditionService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.character$.subscribe();
    this.subscriptions = this.form.valueChanges
      .pipe(
        tap(value => {
          // console.log(value.portrait);
          // console.log(this.getCalculatedKarma(value));
        })
      )
      .subscribe();
  }

  getCalculatedEssence(): void {}
  getCalculatedKarma(form): number {
    // const metatype: number = this.data.metatypes.find(i => i.id === form.metatype).cost;
    // const awakening: number = this.data.awakenings.find(i => i.id === form.awakening).cost;
    // const qualities: number = form.qualities.reduce((acc, quality) => {
    //   const cost = quality.rating?.cost ?? 0;
    //
    //   return acc + cost;
    // }, 0);
    // const attributes: number = form.attributes.reduce((acc, attribute) => {
    //   const free: number = attribute.min * ((attribute.min + 1) / 2);
    //   const level: number = attribute.rating > 1 ? attribute.rating * ((attribute.rating + 1) / 2) - free : 0;
    //
    //   return acc + level * KARMA_PER_ATTRIBUTE;
    // }, 0);
    // const skills: number = form.skills.reduce((acc, skill) => {
    //   const level: number = skill.rating > 0 ? skill.rating * ((skill.rating + 1) / 2) : 0;
    //
    //   return acc + level * KARMA_PER_ACTIVE_SKILL;
    // }, 0);
    // const knowledge: number = form.knowledge.reduce((acc, skill) => {
    //   const level: number = skill.rating > 0 ? skill.rating * ((skill.rating + 1) / 2) : 0;
    //
    //   return acc + level * KARMA_PER_KNOWLEDGE;
    // }, 0);
    // const karma = [
    //   metatype, awakening, qualities, attributes, skills, knowledge
    // ];
    //
    // return karma.reduce((acc, cur) => acc + cur, 0);
    return 0;
  }
  getCalculatedNuyen(): void {}

  isAdeptPowersAvailable(form): boolean {
    const canUseAdeptPowers = [
      AWAKENING_ID.MYSTIC_ADEPT,
      AWAKENING_ID.ADEPT
    ];

    return canUseAdeptPowers.includes(form.awakening);
  }

  isComplexFormsAvailable(form): boolean {
    const canUseComplexForms = [
      AWAKENING_ID.TECHNOMANCER
    ];

    return canUseComplexForms.includes(form.awakening);
  }

  isMagicTraditionAvailable(form): boolean {
    const hasMagicTradition = [
      AWAKENING_ID.MYSTIC_ADEPT,
      AWAKENING_ID.MAGICIAN,
      AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
      AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER,
      AWAKENING_ID.ASPECTED_MAGICIAN_SUMMONER
    ];

    return hasMagicTradition.includes(form.awakening);
  }

  isSpellsAvailable(form): boolean {
    const canUseSpells = [
      AWAKENING_ID.MYSTIC_ADEPT,
      AWAKENING_ID.MAGICIAN,
      AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
      AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER
    ];

    return canUseSpells.includes(form.awakening);
  }

  onSubmit(form): void {
    this.firestore.update(`characters/${form.id}`, { ...form, author: this.route.snapshot.data?.user?.uid })
      .pipe(
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }
}
