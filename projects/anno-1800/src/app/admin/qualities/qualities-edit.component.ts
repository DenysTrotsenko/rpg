import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Quality } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './qualities-edit.component.html',
  styleUrls: ['./qualities-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Quality) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
