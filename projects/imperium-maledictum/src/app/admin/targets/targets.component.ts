import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Duration, TargetId } from '@imperium-maledictum-1e/models/common';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { getId16 } from '@shared';

@Component({
  templateUrl: './targets.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetsComponent {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl<TargetId>(null),
    name: new FormControl<string>(null, [Validators.required])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Duration) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
