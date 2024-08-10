import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmouryComponent } from './armoury/armoury.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ReferencesComponent } from './references.component';
import { SkillsComponent } from './skills/skills.component';
import { TalentsComponent } from './talents/talents.component';
import { ConditionsComponent } from './conditions/conditions.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      { path: 'armoury', component: ArmouryComponent },
      { path: 'bestiary', component: BestiaryComponent },
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
