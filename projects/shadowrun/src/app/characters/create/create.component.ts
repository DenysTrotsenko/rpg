import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {DialogService, FirestoreService} from '@shared';
import {Awakening, AWAKENING_ID, AWAKENINGS, Metatype, METATYPE_ID, METATYPES} from '@shadowrun/app/5e';
import {
  NEGATIVE_QUALITIES_MAX_COST,
  POSITIVE_QUALITIES_MAX_COST
} from '@shadowrun/app/5e/5e.variables';

/** A maximum cost of positive qualities shouldn't exceed */
export function positiveQualitiesMaxCostValidator(max: number): ValidatorFn {
  return (qualities: FormControl): ValidationErrors | null => {
    const costs: number[] = (qualities.value ?? []).map(i => i.rating?.cost ?? 0);
    const positive: number[] = costs.filter(i => i >= 0);
    const sum: number = positive.reduce((acc, cur) => acc + cur, 0);

    return sum > max ? {positiveQualitiesMaxCost: {value: qualities.value}} : null;
  };
}

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(this.id),
    portrait: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    metatype: new FormControl(METATYPE_ID.HUMAN, [Validators.required]),
    awakening: new FormControl(AWAKENING_ID.MUNDANE, [Validators.required]),
    qualities: new FormControl(null, [positiveQualitiesMaxCostValidator(POSITIVE_QUALITIES_MAX_COST)]),
    attributes: new FormControl(null, [Validators.required]),
    skills: new FormControl(null, [Validators.required]),
    knowledge: new FormControl(null, [Validators.required]),
    contacts: new FormControl(null, [Validators.required]),
    spells: new FormControl(null),
    complex_forms: new FormControl(null),
    adept_powers: new FormControl(null),
  });
  readonly AWAKENINGS: Awakening[] = AWAKENINGS;
  readonly METATYPES: Metatype[] = METATYPES;

  get id(): string {
    return (Date.now() + Math.random()).toString(36).replace('.', '');
  }

  constructor(private readonly firestore: FirestoreService, private readonly router: Router) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        tap(value => {
          // console.log(value.portrait);
          // console.log(this.getCalculatedKarma(value));
        })
      )
      .subscribe();
  }

  // getCalculatedEssence(): void {}
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

  onSubmit(character): void {
    console.log(character);
    this.firestore
      .update(`characters/${character.id}`, character)
      .pipe(
        tap(() => this.router.navigate(['..']))
      )
      .subscribe();
  }
}
