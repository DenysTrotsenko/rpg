import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '@std';
import { TalentsComponent } from './talents/talents.component';
import { SkillsComponent } from './skills/skills.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CareersComponent } from './careers/careers.component';


@NgModule({
  declarations: [
    ReferencesComponent,
    TalentsComponent,
    SkillsComponent,
    CharacteristicsComponent,
    ConditionsComponent,
    CareersComponent,
  ],
  imports: [
    SharedModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
