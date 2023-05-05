import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Craftsmanship } from '@imperium-maledictum-1e/models/common';
import { CraftsmanshipType } from '@imperium-maledictum-1e/models/enums';

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
    type: new FormControl(CraftsmanshipType.QUALITY, [Validators.required]),
    labels: new FormGroup({
      description: new FormControl('', [Validators.required]),
    })
  });
  readonly type: string[] = Object.values(CraftsmanshipType);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Craftsmanship) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue(this.data);
    }
  }
}
