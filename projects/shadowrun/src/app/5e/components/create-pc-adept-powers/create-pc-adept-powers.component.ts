import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {UnsubscribeDirective} from '@shared';
import {Spell, SPELL_ID, SPELLS} from '@shadowrun/app/5e';

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
  readonly form: FormArray = new FormArray([]);
  readonly spells: Spell[] = SPELLS;
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      const value = this.form.getRawValue();
      this.onChange(value);
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const spell: Spell = SPELLS.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
    const group: FormGroup = new FormGroup({
      id: new FormControl(spell.id, [Validators.required]),
      name: new FormControl(spell.name, [Validators.required]),
      specialty: new FormControl(null, !!spell.specialty ? [Validators.required] : [])
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }

  isOptionDisabled(id: SPELL_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !SPELLS.find(i => i.id === id).specialty;
  }
}
