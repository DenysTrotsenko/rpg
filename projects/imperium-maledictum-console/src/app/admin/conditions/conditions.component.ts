import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Condition } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './conditions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ConditionsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Condition) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
