import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Craftsmanship } from '@imperium-maledictum-1e/models/common';
import { CraftsmanshipEditComponent } from './craftsmanship-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CraftsmanshipComponent {
  config: AdminServiceConfig<Craftsmanship> = {
    path: '/data/craftsmanship.json',
    component: CraftsmanshipEditComponent
  };
}
