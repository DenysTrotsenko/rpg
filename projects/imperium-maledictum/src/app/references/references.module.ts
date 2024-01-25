import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '@shared';
import { TalentsComponent } from './talents/talents.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '../common/common.module';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';


@NgModule({
  declarations: [
    ReferencesComponent,
    TalentsComponent,
    SkillsComponent,
    CharacteristicsComponent,
    ItemTraitsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
