import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {combineLatest, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, shareReplay, startWith, takeUntil, tap} from 'rxjs/operators';
import {FifthEditionService} from '@shadowrun/app/5e/5e.service';
import {Awakening, AwakeningId, Metatype, MetatypeId, Quality, QualityId} from '@shadowrun/app/5e/5e.models';
import {AWAKENING_ID, METATYPE_ID, SKILL_CATEGORY_ID} from '@shadowrun/app/5e/5e.enums';
import {
  KARMA_PER_ACTIVE_SKILL,
  KARMA_PER_ATTRIBUTE,
  KARMA_PER_KNOWLEDGE,
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
    name: new FormControl('', [Validators.required]),
    metatype: new FormControl(METATYPE_ID.HUMAN, [Validators.required]),
    awakening: new FormControl(AWAKENING_ID.MUNDANE, [Validators.required]),
    qualities: new FormControl(null, [positiveQualitiesMaxCostValidator(POSITIVE_QUALITIES_MAX_COST)]),
    attributes: new FormControl(null, [Validators.required]),
    skills: new FormControl(null, [Validators.required]),
    knowledge: new FormControl(null, [Validators.required]),
    contacts: new FormControl(null, [Validators.required]),
  });

  constructor(public data: FifthEditionService) { }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        tap(value => {
          // console.log(value.attributes);
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
}
