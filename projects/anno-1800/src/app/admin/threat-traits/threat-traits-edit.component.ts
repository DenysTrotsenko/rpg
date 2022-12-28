import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThreatTrait } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './threat-traits-edit.component.html',
  styleUrls: ['./threat-traits-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatTraitsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantifiable: new FormControl(null),
    specifiable: new FormControl(null),
    labels: new FormGroup({
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    system: new FormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: ThreatTrait) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
