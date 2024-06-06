import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Talent } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
  templateUrl: './talents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    multiple: new UntypedFormControl(null),
    cost: new UntypedFormControl(100),
    labels: new UntypedFormGroup({
      requirements: new UntypedFormControl(null),
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Talent) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
