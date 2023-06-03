import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { BestiaryRole, Characteristic } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@shared';

@Component({
  templateUrl: './beastiary-roles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeastiaryRolesComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    characteristic_maximum: new UntypedFormControl(50, [Validators.required]),
    characteristics_total: new UntypedFormControl(280, [Validators.required]),
    skill_spec_advances: new UntypedFormControl(5, [Validators.required]),
    critical_wounds_max: new UntypedFormControl(0, [Validators.required]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: BestiaryRole) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }
}
