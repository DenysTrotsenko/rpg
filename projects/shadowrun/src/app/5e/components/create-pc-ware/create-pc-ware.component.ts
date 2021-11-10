import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {Augmentation, Character, CharacterSkill, CharacterSpell, ComplexForm, Gear, GearView} from '@shadowrun/app/5e/5e.models';
import {COMPLEX_FORMS} from '@shadowrun/app/5e/5e.complex-forms';
import {AUGMENTATION_ID, COMPLEX_FORM_ID} from '@shadowrun/app/5e/5e.enums';
import {GEAR} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CreatePc, CreatePcBase} from '@shadowrun/app/5e/components/create-pc-base';
import {AUGMENTATIONS} from '@shadowrun/app/5e/5e.augmentations';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-ware',
  templateUrl: './create-pc-ware.component.html',
  styleUrls: ['./create-pc-ware.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcWareComponent),
      multi: true
    }
  ]
})
export class CreatePcWareComponent extends CreatePcBase implements CreatePc {
  readonly allowed: string[] = ['id'];
  readonly form: FormArray = new FormArray([]);
  readonly items: Augmentation[] = AUGMENTATIONS;

  constructor() {
    super();
  }

  isAddDisabled(form): boolean {
    return false;
  }

  isOptionDisabled(id): boolean {
    return false;
  }

  onAddClick(): void {
    const item: Augmentation = AUGMENTATIONS.find(s => !this.form.value.find(i => i.id === s.id));
    const group: FormGroup = new FormGroup({
      id: new FormControl(item.id, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
    });
    this.form.push(group);
  }

  onRemoveClick(index: number): void {
    this.form.removeAt(index);
  }

  onSetInitial(character: Character): void {
    this.form.clear({ emitEvent: false });
    // starting.forEach(spell => {
    //   const group: FormGroup = new FormGroup({
    //     id: new FormControl(spell.id),
    //     specialty: new FormControl(spell.specialty),
    //     /* *** */
    //     readonly: new FormControl(true)
    //   });
    //   this.form.push(group);
    //   group.disable();
    // });
  }
}
