import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ailment } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './ailments-edit.component.html',
  styleUrls: ['./ailments-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      resist: new FormControl('', [Validators.required, Validators.minLength(3)]),
      effect: new FormControl('', [Validators.required, Validators.minLength(3)]),
      critical_success: new FormControl('', [Validators.required, Validators.minLength(3)]),
      critical_failure: new FormControl('', [Validators.required, Validators.minLength(3)]),
      other_considerations: new FormControl('', [Validators.required, Validators.minLength(3)]),
      duration: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ailment) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
