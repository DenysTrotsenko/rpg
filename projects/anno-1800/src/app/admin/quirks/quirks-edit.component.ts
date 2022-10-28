import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Quirk} from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './quirks-edit.component.html',
  styleUrls: ['./quirks-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuirksEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Quirk) {}

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
