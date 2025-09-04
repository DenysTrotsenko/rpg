import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getId16 } from '@std';

@Component({
    templateUrl: './flaws.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class FlawsComponent {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
