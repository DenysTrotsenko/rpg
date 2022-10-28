import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@ti/app/admin/admin.component';
import { QualitiesComponent } from '@ti/app/admin/qualities/qualities.component';
import { AilmentsComponent } from '@ti/app/admin/ailments/ailments.component';
import { DrugsComponent } from '@ti/app/admin/drugs/drugs.component';
import { QuirksComponent } from '@ti/app/admin/quirks/quirks.component';
import { TalentsComponent } from '@ti/app/admin/talents/talents.component';
import { TraitsComponent } from '@ti/app/admin/traits/traits.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'ailments', component: AilmentsComponent },
      { path: 'drugs', component: DrugsComponent },
      { path: 'qualities', component: QualitiesComponent },
      { path: 'quirks', component: QuirksComponent },
      { path: 'talents', component: TalentsComponent },
      { path: 'traits', component: TraitsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
