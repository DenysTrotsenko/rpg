import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { ItemQualitiesEditComponent } from './item-qualities-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemQualitiesComponent {
  config: AdminServiceConfig<ItemTrait> = {
    path: '/data/item-qualities.json',
    component: ItemQualitiesEditComponent
  };
}
