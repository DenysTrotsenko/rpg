import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Character, CharacterGear, Gear, GearType, GearView} from '@shadowrun/app/5e/5e.models';
import {GEAR_ID, GEAR_TYPE_ID} from '@shadowrun/app/5e/5e.enums';
import {GEAR, GEAR_TYPES} from '@shadowrun/app/5e/5e.gear';
import {CreatePcBase} from '@shadowrun/app/5e/components/create-pc-base';
import {FifthEditionService} from '@shadowrun/app/5e';

@Component({
  selector: 's5e-create-pc-gear',
  templateUrl: './create-pc-gear.component.html',
  styleUrls: ['./create-pc-gear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcGearComponent),
      multi: true
    }
  ]
})
export class CreatePcGearComponent extends CreatePcBase {
  readonly allowed: string[] = ['id', 'rating', 'quantity'];
  readonly form: FormArray = new FormArray([]);
  readonly items: Gear[] = GEAR;
  readonly types: GearType[] = GEAR_TYPES;

  constructor(private service: FifthEditionService) {
    super();
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getItemsByType(type: GEAR_TYPE_ID): Gear[] {
    return GEAR.filter(i => i.type === type);
  }

  getView(i: CharacterGear): GearView {
    return this.service.getGearView(i);
  }

  onAddClick(): void {
    const item: Gear = GEAR[0];
    const group: FormGroup = new FormGroup({
      id: new FormControl(item.id, [Validators.required]),
      rating: new FormControl(item.ratings[0], [Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(9999)]),
      /* *** */
      readonly: new FormControl(false),
      type: new FormControl(item.type),
      min: new FormControl(item.ratings[0]),
      max: new FormControl(item.ratings[item.ratings.length - 1]),
    });
    this.form.push(group);
  }

  onRemoveClick(index: number): void {
    this.form.removeAt(index);
  }

  setInitial(previous: Character): void {
    const gear: CharacterGear[] = previous?.gear ?? [];
    this.form.clear({ emitEvent: false });
    gear.forEach(i => {
      const item: Gear = GEAR.find(g => g.id === i.id);
      this.form.push(new FormGroup({
        id: new FormControl({ value: i.id, disabled: true }, [Validators.required]),
        rating: new FormControl({ value: i.rating , disabled: true }, [Validators.required]),
        quantity: new FormControl(i.quantity, [Validators.required, Validators.min(1), Validators.max(9999)]),
        /* *** */
        readonly: new FormControl(true),
        type: new FormControl(item.type),
        min: new FormControl(i.rating),
        max: new FormControl(item.ratings[item.ratings.length - 1]),
      }));
    });
  }
}
