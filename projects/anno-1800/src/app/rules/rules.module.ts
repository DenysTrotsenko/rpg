import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { HorrorComponent } from './horror/horror.component';
import { HazardsComponent } from './hazards/hazards.component';
import { CombatComponent } from './combat/combat.component';
import { ChaseComponent } from './chase/chase.component';
import { SocialComponent } from './social/social.component';
import { HealingComponent } from './healing/healing.component';
import { TravelComponent } from './travel/travel.component';


@NgModule({
  declarations: [
    RulesComponent,
    HorrorComponent,
    HazardsComponent,
    CombatComponent,
    ChaseComponent,
    SocialComponent,
    HealingComponent,
    TravelComponent
  ],
  imports: [
    SharedModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
