import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {
  Character,
  CharacterMetamagic,
  METAMAGIC,
  Metamagic,
  METAMAGIC_ID
} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-initiation',
  templateUrl: './create-pc-initiation.component.html',
  styleUrls: ['./create-pc-initiation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcInitiationComponent),
      multi: true
    }
  ]
})
export class CreatePcInitiationComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly metamagic: Metamagic[] = METAMAGIC;
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        const allowed: string[] = ['id', 'rating'];
        const value: CharacterMetamagic[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
        this.onChange(value);
      } else {
        this.onChange(null);
      }
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const metamagic: Metamagic = METAMAGIC.find(s => !this.form.value.find(i => i.id === s.id && !s.multiple));
    if (!metamagic) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(metamagic.id),
      rating: new FormControl(metamagic.multiple ? 1 : null),
      readonly: new FormControl(false)
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isOptionDisabled(id: METAMAGIC_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !METAMAGIC.find(i => i.id === id).multiple;
  }

  private setInitial(previous: Character): void {
    const starting: CharacterMetamagic[] = previous?.metamagic ?? [];
    this.form.clear({ emitEvent: false });
    starting.forEach(metamagic => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(metamagic.id),
        rating: new FormControl(metamagic.rating ?? null),
        readonly: new FormControl(true)
      });
      this.form.push(group);
      group.disable();
    });
  }
}
