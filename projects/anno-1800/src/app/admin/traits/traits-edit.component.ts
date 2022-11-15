import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trait } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './traits-edit.component.html',
  styleUrls: ['./traits-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraitsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Trait) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue({
        name: this.data.name ?? '',
        labels: {
          description: this.data.labels?.effect ?? '',
          effect: this.data.labels?.effect ?? ''
        }
      });
    }
  }
}
