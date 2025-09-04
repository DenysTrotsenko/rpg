import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './item-traits.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ItemTraitsComponent implements OnInit {
  readonly data: ItemTrait = inject(MAT_DIALOG_DATA);
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl<string>('', [Validators.required]),
    labels: new FormGroup({
      flavor: new FormControl<string>(null),
      description: new FormControl<string>(null),
    }),
    system: new FormControl({})
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
