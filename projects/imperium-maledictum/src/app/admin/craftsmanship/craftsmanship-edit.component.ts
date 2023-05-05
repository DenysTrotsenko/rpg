import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Craftsmanship } from '@imperium-maledictum-1e/models/common';

@Component({
  selector: 'app-craftsmanship-edit',
  templateUrl: './craftsmanship-edit.component.html',
  styleUrls: ['./craftsmanship-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CraftsmanshipEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required]),
    })
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Craftsmanship) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
