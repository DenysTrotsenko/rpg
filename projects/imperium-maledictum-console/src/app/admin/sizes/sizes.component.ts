import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Size } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './sizes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SizesComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Size) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
