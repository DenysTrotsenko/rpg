import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {ADEPT_POWERS, AdeptPower, Character, CharacterComplexForm, Spell, SPELL_ID, SPELLS} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-adept-powers',
  templateUrl: './create-pc-adept-powers.component.html',
  styleUrls: ['./create-pc-adept-powers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcAdeptPowersComponent),
      multi: true
    }
  ]
})
export class CreatePcAdeptPowersComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly powers: AdeptPower[] = ADEPT_POWERS;
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      // if (this.form.valid) {
      //   const allowed: string[] = ['id'];
      //   const value: CharacterComplexForm[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
      //   this.onChange(value);
      // } else {
      //   this.onChange(null);
      // }
      this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const spell: Spell = SPELLS.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
    if (!spell) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(spell.id, [Validators.required]),
      name: new FormControl(spell.name, [Validators.required]),
      specialty: new FormControl(null, !!spell.specialty ? [Validators.required] : [])
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  isOptionDisabled(id: SPELL_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !SPELLS.find(i => i.id === id).specialty;
  }

  private setInitial(character: Character): void {
    const starting: CharacterComplexForm[] = character?.adept_powers ?? [];
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
