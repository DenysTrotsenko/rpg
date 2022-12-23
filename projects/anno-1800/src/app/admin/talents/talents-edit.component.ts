import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Talent } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './talents-edit.component.html',
  styleUrls: ['./talents-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      description: new FormControl('', []),
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    system: new FormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Talent) {}

  ngOnInit(): void {
    if (!!this.data) {
      const value = {
        name: this.data.name ?? '',
        labels: {
          description: this.data.labels?.description ?? '',
          effect: this.data.labels?.effect ?? ''
        },
        system: this.data.system
      };
      this.form.patchValue(value);
    }
  }
}
