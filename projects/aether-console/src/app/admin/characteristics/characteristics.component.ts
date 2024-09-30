import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characteristic } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
  templateUrl: './characteristics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacteristicsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      abbreviation: new FormControl<string>(null, [Validators.required]),
      description: new FormControl<string>(null),
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Characteristic) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
