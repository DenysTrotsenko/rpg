import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      // { path: 'webgl', component: WebglComponent },
      // { path: 'skills', component: SkillsComponent },
      // { path: 'talents', component: TalentsComponent },
      // { path: 'item-traits', component: ItemTraitsComponent },
      // { path: '**', redirectTo: 'characteristics', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
