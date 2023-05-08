import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Condition } from '@imperium-maledictum-1e/models/common';
import { ConditionsEditComponent } from './conditions-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent {
  config: AdminServiceConfig<Condition> = {
    path: '/data/conditions.json',
    component: ConditionsEditComponent
  };
}
