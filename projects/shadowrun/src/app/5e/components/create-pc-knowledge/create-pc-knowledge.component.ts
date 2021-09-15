import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {UnsubscribeDirective} from '@shared';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {SKILL_CATEGORY_ID} from '@shadowrun/app/5e/5e.enums';
import {Character, SKILL_CATEGORIES, SkillCategory} from '@shadowrun/app/5e';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

const SPECIALIZATIONS_MAX = 1;
const SPECIALIZATIONS_MIN_SKILL_RANK = 3;

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-knowledge',
  templateUrl: './create-pc-knowledge.component.html',
  styleUrls: ['./create-pc-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcKnowledgeComponent),
      multi: true
    }
  ]
})
export class CreatePcKnowledgeComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.initial$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly categories: SkillCategory[] = SKILL_CATEGORIES;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  private readonly initial$: BehaviorSubject<Character> = new BehaviorSubject(null);
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setInitialValue();
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
        this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
      });
  }

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

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  onAddKnowledgeClick(): void {
    this.form.push(new FormGroup({
      id: new FormControl(`knowledge:${Date.now()}`),
      name: new FormControl('', [Validators.required]),
      category: new FormControl(SKILL_CATEGORY_ID.ACADEMIC, [Validators.required]),
      min: new FormControl(1),
      max: new FormControl(6),
      rating: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
      specializations: new FormControl(null),
      readonly: new FormControl(false)
    }));
  }

  onRemoveKnowledgeClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  setInitialValue(): void {
    const readonly = true;
    const group = new FormGroup({
      id: new FormControl(`knowledge:${Date.now()}`),
      name: new FormControl('', [Validators.required]),
      category: new FormControl(SKILL_CATEGORY_ID.LANGUAGE, [Validators.required]),
      min: new FormControl(6),
      max: new FormControl(6),
      rating: new FormControl(6, [Validators.required, Validators.min(6), Validators.max(6)]),
      specializations: new FormControl(null),
      readonly: new FormControl(readonly)
    });
    this.form.push(group);
    !!readonly ? group.get('category').disable() : group.get('category').enable();
    !!readonly ? group.get('rating').disable() : group.get('rating').enable();
  }
}
