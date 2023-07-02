import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
import { ItemQualitiesComponent } from './item-qualities/item-qualities.component';
import { ItemFlawsComponent } from './item-flaws/item-flaws.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { TalentsComponent } from './talents/talents.component';
import { MutationsComponent } from './mutations/mutations.component';
import { MalignanciesComponent } from './malignancies/malignancies.component';
import { PsychicPhenomenasComponent } from './psychic-phenomenas/psychic-phenomenas.component';
import { PerilsOfTheWarpComponent } from './perils-of-the-warp/perils-of-the-warp.component';
import { SkillsComponent } from './skills/skills.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { FactionsComponent } from './factions/factions.component';
import { BestiaryRolesComponent } from './beastiary-roles/beastiary-roles.component';
import { BestiaryTraitsComponent } from './beastiary-traits/beastiary-traits.component';
import { PsychicPowersComponent } from './psychic-powers/psychic-powers.component';
import { PsychicDisciplinesComponent } from './psychic-disciplines/psychic-disciplines.component';
import { RangesComponent } from './ranges/ranges.component';
import { ItemAvailabilitiesComponent } from './item-availabilities/item-availabilities.component';
import { SizesComponent } from './sizes/sizes.component';
import { SpeedComponent } from './speed/speed.component';
import { ItemsComponent } from './items/items.component';
import { ItemTypesComponent } from './item-types/item-types.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { CommonModule } from '../common/common.module';
import { BestiaryFactionsComponent } from './bestiary-factions/bestiary-factions.component';
import { BestiaryTypesComponent } from './bestiary-types/bestiary-types.component';


@NgModule({
  declarations: [
    AdminComponent,
    ItemTraitsComponent,
    ItemQualitiesComponent,
    ItemFlawsComponent,
    ConditionsComponent,
    TalentsComponent,
    MutationsComponent,
    MalignanciesComponent,
    PsychicPhenomenasComponent,
    PerilsOfTheWarpComponent,
    SkillsComponent,
    SpecialisationsComponent,
    CharacteristicsComponent,
    FactionsComponent,
    BestiaryRolesComponent,
    BestiaryTraitsComponent,
    PsychicPowersComponent,
    PsychicDisciplinesComponent,
    RangesComponent,
    ItemAvailabilitiesComponent,
    SizesComponent,
    SpeedComponent,
    ItemsComponent,
    ItemTypesComponent,
    BestiaryComponent,
    BestiaryFactionsComponent,
    BestiaryTypesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
