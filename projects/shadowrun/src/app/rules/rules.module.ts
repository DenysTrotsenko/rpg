import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { GeneralComponent } from './general/general.component';
import { MeatComponent } from './meat/meat.component';
import { MatrixComponent } from './matrix/matrix.component';
import { AstralComponent } from './astral/astral.component';


@NgModule({
  declarations: [RulesComponent, GeneralComponent, MeatComponent, MatrixComponent, AstralComponent],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
