import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { SkillsComponent } from './skills/skills.component';
import { TalentsComponent } from './talents/talents.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      { path: 'skills', component: SkillsComponent },
      { path: 'talents', component: TalentsComponent },
      { path: '**', redirectTo: 'skills', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
