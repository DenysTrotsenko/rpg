import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Origin } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './origins.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class OriginsComponent {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    weight: new UntypedFormControl(1, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl(''),
    }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Origin) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
