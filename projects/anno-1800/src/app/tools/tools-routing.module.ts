import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { CombatTrackerComponent } from './combat-tracker/combat-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      {
        path: 'combat-tracker',
        component: CombatTrackerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }