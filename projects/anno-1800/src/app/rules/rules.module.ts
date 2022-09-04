import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { HorrorComponent } from './horror/horror.component';
import { HazardsComponent } from './hazards/hazards.component';


@NgModule({
  declarations: [
    RulesComponent,
    HorrorComponent,
    HazardsComponent
  ],
  imports: [
    SharedModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
