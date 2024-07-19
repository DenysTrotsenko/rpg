import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
  templateUrl: './item-traits.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemTraitsComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl<string>('', [Validators.required]),
    labels: new FormGroup({
      flavor: new FormControl<string>(null, [Validators.required]),
      description: new FormControl<string>(null, [Validators.required]),
    }),
    system: new FormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemTrait) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
