import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { getFilteredObject, UnsubscribeDirective } from '@shared';
import {
  ACTIVE_SKILLS,
  ATTRIBUTE_ID,
  Awakening,
  AWAKENING_ID,
  AWAKENINGS, Character, CharacterSkill,
  Skill,
  SKILL_ID, SKILL_MAX_ON_CREATION, SKILL_MAX_ON_UPGRADE, SKILL_MIN, SPECIALIZATIONS_MAX
} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-skills',
  templateUrl: './create-pc-skills.component.html',
  styleUrls: ['./create-pc-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcSkillsComponent),
      multi: true
    }
  ]
})
export class CreatePcSkillsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.character$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly form: FormArray = new FormArray([]);
  readonly skills: Skill[] = ACTIVE_SKILLS;
  private readonly character$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly skills$ = combineLatest([
    this.awakening$.asObservable(),
    this.character$.asObservable()
  ]).pipe(
    map(res => {
      this.setInitialValue(res[0], res[1]);
    })
  );

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.skills$.subscribe();
    this.subscriptions = this.form.valueChanges
      .subscribe(() => {
        if (this.form.valid) {
          const allowed: string[] = ['id', 'rating', 'specializations'];
          const value: CharacterSkill[] = this.form.getRawValue().map(res => getFilteredObject<CharacterSkill>(res, allowed));
          this.onChange(value);
        } else {
          this.onChange(null);
        }
      });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getSpecializations(control: AbstractControl): string[] {
    return control.value ?? [];
  }

  isSpecializationDisabled(control: AbstractControl, specialization: string): boolean {
    return (control.get('initialSpecializations').value ?? []).includes(specialization);
  }

  onAddSpecialization(event: MatChipInputEvent, control: AbstractControl): void {
    const value: string = (event.value ?? '').trim();
    const specializations: string[] = control.value ?? [];

    if (!!value && specializations.length < SPECIALIZATIONS_MAX) {
      control.setValue([...specializations, value]);
    }

    event.input.value = '';
  }

  onRemoveSpecialization(specialization: string, control: AbstractControl): void {
    control.setValue((control.value ?? []).filter(i => i !== specialization));
  }

  private setInitialValue(
    awakeningId: AWAKENING_ID,
    character: Character
  ): void {
    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);

    this.form.clear();

    ACTIVE_SKILLS
      .filter(skill => {
        if (skill.attribute === ATTRIBUTE_ID.MAGIC || [SKILL_ID.ARCANA, SKILL_ID.ASSENSING, SKILL_ID.ASTRAL_COMBAT].includes(skill.id)) {
          return awakening.attributes[ATTRIBUTE_ID.MAGIC][0] > 0;
        } else if (skill.attribute === ATTRIBUTE_ID.RESONANCE) {
          return awakening.attributes[ATTRIBUTE_ID.RESONANCE][0] > 0;
        } else {
          return true;
        }
      })
      .forEach(skill => {
        const previous: CharacterSkill | null = (character?.skills ?? []).find(i => i.id === skill.id);
        const min: number = !!previous ? previous.rating : SKILL_MIN;
        const max: number = !!previous ? SKILL_MAX_ON_UPGRADE : SKILL_MAX_ON_CREATION;
        const rating: number = !!previous ? previous.rating : min;
        const specializations: string[] = !!previous ? previous.specializations : null;

        this.form.push(new FormGroup({
          id: new FormControl(skill.id),
          rating: new FormControl(rating, [Validators.required, Validators.min(min), Validators.max(max)]),
          specializations: new FormControl(specializations),
          min: new FormControl(min),
          max: new FormControl(max),
          initialSpecializations: new FormControl(specializations),
        }));
      });
  }
}
