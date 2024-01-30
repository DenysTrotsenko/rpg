import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '@shared';
import { TalentsComponent } from './talents/talents.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '../common/common.module';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
import { ConditionsComponent } from './conditions/conditions.component';


@NgModule({
  declarations: [
    ReferencesComponent,
    TalentsComponent,
    SkillsComponent,
    CharacteristicsComponent,
    ItemTraitsComponent,
    ConditionsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
