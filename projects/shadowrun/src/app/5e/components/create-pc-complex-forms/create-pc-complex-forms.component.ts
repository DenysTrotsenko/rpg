import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared';
import { Character, CharacterComplexForm, ComplexForm, COMPLEX_FORMS, COMPLEX_FORM_ID } from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-complex-forms',
  templateUrl: './create-pc-complex-forms.component.html',
  styleUrls: ['./create-pc-complex-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcComplexFormsComponent),
      multi: true
    }
  ]
})
export class CreatePcComplexFormsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.character$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly items: ComplexForm[] = COMPLEX_FORMS;
  private readonly character$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.character$.pipe(tap(res => this.setInitial(res)));

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
    });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getId(group: AbstractControl): FormControl {
    return group.get('id') as FormControl;
  }

  isAddDisabled(value: { id: COMPLEX_FORM_ID; }[]): boolean {
    return COMPLEX_FORMS.every(cf => value.find(i => i.id === cf.id));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isOptionDisabled(id: COMPLEX_FORM_ID): boolean {
    return !!this.form.value.find(i => i.id === id);
  }

  onAddClick(): void {
    const cf: ComplexForm = COMPLEX_FORMS.find(s => !this.form.value.find(i => i.id === s.id));
    const group: FormGroup = new FormGroup({
      id: new FormControl(cf.id),
      readonly: new FormControl(false)
    });
    this.form.push(group);
  }

  onRemoveClick(id: COMPLEX_FORM_ID): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  private setInitial(character: Character): void {
    const starting: CharacterComplexForm[] = character?.complex_forms ?? [];
    starting.forEach(cf => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(cf.id),
        readonly: new FormControl(true)
      });
      this.form.push(group);
      group.disable();
    });
  }
}
