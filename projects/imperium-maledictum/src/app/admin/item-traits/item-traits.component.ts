import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { ItemTraitsEditComponent } from './item-traits-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemTraitsComponent {
  config: AdminServiceConfig<ItemTrait> = {
    path: '/data/item-traits.json',
    component: ItemTraitsEditComponent
  };
}
