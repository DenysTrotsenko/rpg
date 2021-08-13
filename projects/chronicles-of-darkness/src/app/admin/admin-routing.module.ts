import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActionsComponent } from './actions/actions.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentQualitiesComponent } from './equipment-qualities/equipment-qualities.component';
import { MeritsComponent } from './merits/merits.component';
import { TiltsComponent } from './tilts/tilts.component';
import { VirtuesAndVicesComponent } from './virtues-and-vices/virtues-and-vices.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'actions', component: ActionsComponent },
      { path: 'conditions', component: ConditionsComponent },
      { path: 'equipment', component: EquipmentComponent },
      { path: 'equipment-qualities', component: EquipmentQualitiesComponent },
      { path: 'merits', component: MeritsComponent },
      { path: 'tilts', component: TiltsComponent },
      { path: 'anchors', component: VirtuesAndVicesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
