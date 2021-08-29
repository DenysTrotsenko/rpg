import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {UnsubscribeDirective} from '@shared';
import {
  ACTIVE_SKILLS,
  ATTRIBUTE_ID,
  Awakening,
  AWAKENING_ID,
  AWAKENINGS,
  Metatype,
  METATYPE_ID,
  METATYPES,
  Skill,
  SKILL_ID
} from '@shadowrun/app/5e';

const SKILL_MIN = 0;
const SKILL_MAX = 6;
const SPECIALIZATIONS_MAX = 1;
const SPECIALIZATIONS_MIN_SKILL_RANK = 3;

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
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly form: FormArray = new FormArray([]);
  readonly skills: Skill[] = ACTIVE_SKILLS;
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  private readonly skills$ = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
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
      .pipe(
        tap((res: any[]) => {
          res.forEach((e, i) => {
            const control: AbstractControl = this.form.controls[i].get('specializations');
            e.rating < SPECIALIZATIONS_MIN_SKILL_RANK
              ? control.disable({ emitEvent: false })
              : control.enable({ emitEvent: false });
          });
        })
      )
      .subscribe(() => {
        const value = this.form.getRawValue();
        this.onChange(value);
      });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getSpecializations(control: AbstractControl): string[] {
    return control.value ?? [];
  }

  onAddSpecialization(event: MatChipInputEvent, control: AbstractControl): void {
    const value: string = (event.value ?? '').trim();
    const specializations: string[] = control.value ?? [];

    if (value && specializations.length < SPECIALIZATIONS_MAX) {
      control.setValue([...specializations, value]);
    }

    event.input.value = '';
  }

  onRemoveSpecialization(specialization: string, control: AbstractControl): void {
    control.setValue((control.value ?? []).filter(i => i !== specialization));
  }

  private setInitialValue(awakeningId: AWAKENING_ID, metatypeId: METATYPE_ID): void {
    this.form.clear();

    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);

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
        this.form.push(new FormGroup({
          id: new FormControl(skill.id),
          min: new FormControl(SKILL_MIN),
          max: new FormControl(SKILL_MAX),
          rating: new FormControl(SKILL_MIN, [Validators.required, Validators.min(SKILL_MIN), Validators.max(SKILL_MAX)]),
          specializations: new FormControl(null)
        }));
      });
  }
}
