import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { BestiaryFaction } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@shared';

@Component({
  templateUrl: './bestiary-factions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestiaryFactionsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: BestiaryFaction) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
