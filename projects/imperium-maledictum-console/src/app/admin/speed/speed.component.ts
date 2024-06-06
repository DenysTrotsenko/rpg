import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Speed } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
  templateUrl: './speed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedComponent implements OnInit {
  readonly data: Speed = inject(MAT_DIALOG_DATA);
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
