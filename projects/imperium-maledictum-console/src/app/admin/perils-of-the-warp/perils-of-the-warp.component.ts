import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerilOfTheWarp } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './perils-of-the-warp.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PerilsOfTheWarpComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    order: new UntypedFormControl(1, [Validators.required]),
    weight: new UntypedFormControl(1, [Validators.required]),
    corruption: new UntypedFormControl(1, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: PerilOfTheWarp) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
