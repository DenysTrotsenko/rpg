import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Talent } from '@imperium-maledictum-1e/models/common';

@Component({
  templateUrl: './talents-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsEditComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Talent) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
