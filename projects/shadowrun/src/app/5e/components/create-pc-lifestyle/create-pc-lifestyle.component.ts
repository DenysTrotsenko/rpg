import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {
  Character,
  CharacterLifestyle,
  Lifestyle,
  LifestyleOption
} from '@shadowrun/app/5e/5e.models';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {LIFESTYLE_OPTIONS, LIFESTYLES} from '@shadowrun/app/5e';
import {LIFESTYLE_ID} from '@shadowrun/app/5e/5e.enums';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-lifestyle',
  templateUrl: './create-pc-lifestyle.component.html',
  styleUrls: ['./create-pc-lifestyle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcLifestyleComponent),
      multi: true
    }
  ]
})
export class CreatePcLifestyleComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly LIFESTYLES: Lifestyle[] = LIFESTYLES;
  readonly LIFESTYLE_OPTIONS: LifestyleOption[] = LIFESTYLE_OPTIONS;
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.setChange();
      } else {
        this.onChange(null);
      }
    });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getFormControl(abstract: AbstractControl, name: string): FormControl {
    return abstract.get(name) as FormControl;
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  onAddClick(): void {
    const lifestyle: Lifestyle = LIFESTYLES[0];
    const group: FormGroup = new FormGroup({
      id: new FormControl(lifestyle.id, [Validators.required]),
      options: new FormControl(null),
      details: new FormControl(null),
      term: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)]),
      readonly: new FormControl(false)
    });
    this.form.push(group);
  }

  onRemoveClick(id: LIFESTYLE_ID): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  private setInitial(previous: Character): void {
    const lifestyles: CharacterLifestyle[] = previous?.lifestyles ?? [];
    this.form.clear({ emitEvent: false });
    lifestyles.forEach(i => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(i.id),
        options: new FormControl(i.options),
        details: new FormControl(i.details),
        term: new FormControl(i.term),
        /* *** */
        readonly: new FormControl(true)
      });
      this.form.push(group);
      group.disable();
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id', 'options', 'details', 'term'];
    const value: CharacterLifestyle[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
