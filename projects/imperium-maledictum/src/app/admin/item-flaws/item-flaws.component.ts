import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { ItemFlawsEditComponent } from './item-flaws-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemFlawsComponent {
  config: AdminServiceConfig<ItemTrait> = {
    path: '/data/item-flaws.json',
    component: ItemFlawsEditComponent
  };
}
