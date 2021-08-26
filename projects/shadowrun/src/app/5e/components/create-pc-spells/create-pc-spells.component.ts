import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {FifthEditionService} from '@shadowrun/app/5e/5e.service';
import {UnsubscribeDirective} from '@shared';
import {Spell} from '@shadowrun/app/5e/5e.models';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-spells',
  templateUrl: './create-pc-spells.component.html',
  styleUrls: ['./create-pc-spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcSpellsComponent),
      multi: true
    }
  ]
})
export class CreatePcSpellsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  readonly form: FormArray = new FormArray([]);
  propagateChange = (_: any) => {};

  constructor(public data: FifthEditionService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const first: Spell = this.data.spells.find(i => true);
    this.form.push(new FormGroup({
      id: new FormControl(first.id, [Validators.required]),
      name: new FormControl(first.name, [Validators.required]),
    }));
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }
}
