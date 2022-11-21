import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { AfflictionsComponent } from './afflictions/afflictions.component';
import { AilmentsComponent } from './ailments/ailments.component';
import { AttributesComponent } from './attributes/attributes.component';
import { DrugsComponent } from './drugs/drugs.component';
import { InjuriesComponent } from './injuries/injuries.component';
import { ProfessionsComponent } from './professions/professions.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { QuirksComponent } from './quirks/quirks.component';
import { SkillsComponent } from './skills/skills.component';
import { SpellsComponent } from './spells/spells.component';
import { TalentsComponent } from './talents/talents.component';
import { TraitsComponent } from './traits/traits.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      { path: 'afflictions', component: AfflictionsComponent },
      { path: 'ailments', component: AilmentsComponent },
      { path: 'attributes', component: AttributesComponent },
      { path: 'drugs', component: DrugsComponent },
      { path: 'injuries', component: InjuriesComponent },
      { path: 'professions', component: ProfessionsComponent },
      { path: 'qualities', component: QualitiesComponent },
      { path: 'quirks', component: QuirksComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'spells', component: SpellsComponent },
      { path: 'talents', component: TalentsComponent },
      { path: 'traits', component: TraitsComponent },
      { path: '**', redirectTo: 'afflictions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
