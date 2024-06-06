import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { getId16 } from '@std';

@Component({
  templateUrl: './endeavours.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndeavoursComponent {
  readonly data = inject(MAT_DIALOG_DATA);
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
