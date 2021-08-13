import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MeritsComponent } from './merits/merits.component';
import { TiltsComponent } from './tilts/tilts.component';
import { ActionsComponent } from './actions/actions.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentQualitiesComponent } from './equipment-qualities/equipment-qualities.component';
import { VirtuesAndVicesComponent } from './virtues-and-vices/virtues-and-vices.component';

@NgModule({
  declarations: [
    AdminComponent,
    TiltsComponent,
    ConditionsComponent,
    MeritsComponent,
    ActionsComponent,
    EquipmentComponent,
    EquipmentQualitiesComponent,
    VirtuesAndVicesComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule {}
