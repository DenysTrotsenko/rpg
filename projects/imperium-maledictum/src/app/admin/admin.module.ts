import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
import { ItemTraitsEditComponent } from './item-traits/item-traits-edit.component';
import { ItemQualitiesComponent } from './item-qualities/item-qualities.component';
import { ItemQualitiesEditComponent } from './item-qualities/item-qualities-edit.component';
import { ItemFlawsComponent } from './item-flaws/item-flaws.component';
import { ItemFlawsEditComponent } from './item-flaws/item-flaws-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    ItemTraitsComponent,
    ItemTraitsEditComponent,
    ItemQualitiesComponent,
    ItemFlawsComponent,
    ItemQualitiesEditComponent,
    ItemFlawsEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
