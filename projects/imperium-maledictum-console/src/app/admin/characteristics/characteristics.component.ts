import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characteristic } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './characteristics.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacteristicsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      abbreviation: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Characteristic) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
