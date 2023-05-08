import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Condition } from '@imperium-maledictum-1e/models/common';

@Component({
  templateUrl: './conditions-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required]),
    }),
    system: new FormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Condition) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
