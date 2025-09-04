import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Duration, TargetId } from '@imperium-maledictum-1e/models/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getId16 } from '@std';

@Component({
    templateUrl: './targets.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
