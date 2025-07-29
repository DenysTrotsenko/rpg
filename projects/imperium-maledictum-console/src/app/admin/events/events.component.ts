import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { getId16 } from '@std';

@Component({
    templateUrl: './events.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class EventsComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    order: new UntypedFormControl(1, [Validators.required]),
    weight: new UntypedFormControl(1, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
