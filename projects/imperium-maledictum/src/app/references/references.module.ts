import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '@std';
import { TalentsComponent } from './talents/talents.component';
import { SkillsComponent } from './skills/skills.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { ArmouryComponent } from './armoury/armoury.component';
import { ImperiumMaledictumCommonModule } from '@im-common';


@NgModule({
  declarations: [
    ReferencesComponent,
    TalentsComponent,
    SkillsComponent,
    CharacteristicsComponent,
    ConditionsComponent,
    BestiaryComponent,
    ArmouryComponent
  ],
  imports: [
    SharedModule,
    ImperiumMaledictumCommonModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
