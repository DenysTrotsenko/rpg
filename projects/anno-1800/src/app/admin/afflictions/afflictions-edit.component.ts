import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Affliction } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './afflictions-edit.component.html',
  styleUrls: ['./afflictions-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfflictionsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Affliction) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue({
        name: this.data.name ?? '',
        labels: {
          description: this.data.labels?.description ?? '',
          effect: this.data.labels?.effect ?? ''
        }
      });
    }
  }
}
