import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
    children: [
      // { path: 'mounted-combat', component: MountedCombatComponent },
      { path: '**', redirectTo: 'mounted-combat', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
