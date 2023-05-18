import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { PsychicPhenomena } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@shared';

@Component({
  templateUrl: './psychic-phenomenas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychicPhenomenasComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    weight: new UntypedFormControl(1, [Validators.required]),
    labels: new UntypedFormGroup({
      lingering: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: PsychicPhenomena) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
