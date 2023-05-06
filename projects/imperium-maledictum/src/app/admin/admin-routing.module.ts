import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemQualitiesComponent } from './item-qualities/item-qualities.component';
import { ItemFlawsComponent } from './item-flaws/item-flaws.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';

export enum AdminPaths {}

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'item-qualities', component: ItemQualitiesComponent },
      { path: 'item-flaws', component: ItemFlawsComponent },
      { path: 'item-traits', component: ItemTraitsComponent },
      { path: '**', redirectTo: 'item-qualities', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
