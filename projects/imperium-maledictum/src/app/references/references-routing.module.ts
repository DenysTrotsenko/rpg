import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { SkillsComponent } from './skills/skills.component';
import { TalentsComponent } from './talents/talents.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      { path: 'characteristics', component: CharacteristicsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'talents', component: TalentsComponent },
      { path: 'item-traits', component: ItemTraitsComponent },
      { path: '**', redirectTo: 'characteristics', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
