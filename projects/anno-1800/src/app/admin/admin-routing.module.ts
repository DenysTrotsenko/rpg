import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AfflictionsComponent } from './afflictions/afflictions.component';
import { AilmentsComponent } from './ailments/ailments.component';
import { DrugsComponent } from './drugs/drugs.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { QuirksComponent } from './quirks/quirks.component';
import { SettingsComponent } from './settings/settings.component';
import { TalentsComponent } from './talents/talents.component';
import { ThreatTraitsComponent } from './threat-traits/threat-traits.component';
import { TraitsComponent } from './traits/traits.component';
import { ThreatsComponent } from './threats/threats.component';
import { SettingsEditComponent } from '@ti/app/admin/settings/settings-edit.component';

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
      { path: 'settings', component: SettingsComponent },
      { path: 'settings/:id', component: SettingsEditComponent },
      { path: 'talents', component: TalentsComponent },
      { path: 'traits', component: TraitsComponent },
      { path: 'threats', component: ThreatsComponent },
      { path: 'threat-traits', component: ThreatTraitsComponent },
      { path: '**', redirectTo: 'afflictions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
