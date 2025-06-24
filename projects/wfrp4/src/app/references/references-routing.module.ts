import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ReferencesComponent } from './references.component';
import { SkillsComponent } from './skills/skills.component';
import { TalentsComponent } from './talents/talents.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      { path: 'careers', component: CareersComponent },
      { path: 'characteristics', component: CharacteristicsComponent },
      { path: 'conditions', component: ConditionsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'talents', component: TalentsComponent },
      { path: '**', redirectTo: 'characteristics', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
