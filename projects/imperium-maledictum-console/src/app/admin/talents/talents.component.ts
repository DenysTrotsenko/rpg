import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Talent } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';

@Component({
    templateUrl: './talents.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TalentsComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl<string>('', [Validators.required]),
    multiple: new FormControl<boolean>(null),
    cost: new FormControl<number>(100),
    labels: new FormGroup({
      requirements: new FormControl<string>(null),
      flavor: new FormControl<string>(null),
      description: new FormControl<string>(null, [Validators.required]),
    }),
    system: new FormControl({})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Talent) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
