import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { IAction } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent extends AdminBaseComponent<IAction> {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    dicepool: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    penalties: new FormControl(null),
    action: new FormControl(null),
    description: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    dramatic: new FormControl(null),
    failure: new FormControl(null),
    success: new FormControl(null),
    exceptional: new FormControl(null)
  });

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'actions.json' } as AdminBaseConfig, admin, data);
  }
}
