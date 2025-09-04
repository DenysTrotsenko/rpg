import { NgModule } from '@angular/core';
import { RulesRoutingModule } from './rules-routing.module';
import { SharedModule } from '@std';
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
