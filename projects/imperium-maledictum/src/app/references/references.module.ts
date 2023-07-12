import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '@shared';
import { TalentsComponent } from './talents/talents.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    ReferencesComponent,
    TalentsComponent,
    SkillsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
