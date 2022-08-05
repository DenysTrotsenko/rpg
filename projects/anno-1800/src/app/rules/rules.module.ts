import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';


@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    SharedModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
