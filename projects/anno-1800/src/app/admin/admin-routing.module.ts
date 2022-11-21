import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { AilmentsComponent } from './ailments/ailments.component';
import { DrugsComponent } from './drugs/drugs.component';
import { QuirksComponent } from './quirks/quirks.component';
import { TalentsComponent } from './talents/talents.component';
import { TraitsComponent } from './traits/traits.component';
import { SettingsComponent } from './settings/settings.component';
import { AfflictionsComponent } from './afflictions/afflictions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'afflictions', component: AfflictionsComponent },
      { path: 'ailments', component: AilmentsComponent },
      { path: 'drugs', component: DrugsComponent },
      { path: 'qualities', component: QualitiesComponent },
      { path: 'quirks', component: QuirksComponent },
      { path: 'talents', component: TalentsComponent },
      { path: 'traits', component: TraitsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'afflictions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
