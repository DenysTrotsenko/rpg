import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { getId16 } from '@shared';

@Component({
  templateUrl: './doomings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoomingsComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
