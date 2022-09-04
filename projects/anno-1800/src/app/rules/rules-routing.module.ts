import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from '@ti/app/rules/rules.component';
import { HazardsComponent } from '@ti/app/rules/hazards/hazards.component';
import { HorrorComponent } from '@ti/app/rules/horror/horror.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
    children: [
      {
        path: 'hazards',
        component: HazardsComponent
      },
      {
        path: 'horror',
        component: HorrorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
