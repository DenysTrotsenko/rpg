import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { ICondition } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent extends AdminBaseComponent<ICondition> {
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    resolution: new FormControl(null),
    beat: new FormControl(null),
    sources: new FormControl(null)
  });

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'conditions.json' } as AdminBaseConfig, admin, data);
  }
}
