import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules.component';
import { ChaseComponent } from './chase/chase.component';
import { CombatComponent } from './combat/combat.component';
import { HazardsComponent } from './hazards/hazards.component';
import { HealingComponent } from './healing/healing.component';
import { HorrorComponent } from './horror/horror.component';
import { SocialComponent } from './social/social.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
    children: [
      { path: 'chase', component: ChaseComponent },
      { path: 'combat', component: CombatComponent },
      { path: 'hazards', component: HazardsComponent },
      { path: 'healing', component: HealingComponent },
      { path: 'horror', component: HorrorComponent },
      { path: 'social', component: SocialComponent },
      { path: 'travel', component: TravelComponent },
      { path: '**', redirectTo: 'chase', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
