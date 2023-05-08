import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Talent } from '@imperium-maledictum-1e/models/common';
import { TalentsEditComponent } from './talents-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  config: AdminServiceConfig<Talent> = {
    path: '/data/talents.json',
    component: TalentsEditComponent
  };
}
