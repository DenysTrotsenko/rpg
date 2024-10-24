import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
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
import { BestiaryRolesComponent } from './bestiary-roles/bestiary-roles.component';
import { BestiaryTraitsComponent } from './bestiary-traits/bestiary-traits.component';
import { PsychicPowersComponent } from './psychic-powers/psychic-powers.component';
import { PsychicDisciplinesComponent } from './psychic-disciplines/psychic-disciplines.component';
import { RangesComponent } from './ranges/ranges.component';
import { ItemAvailabilitiesComponent } from './item-availabilities/item-availabilities.component';
import { SizesComponent } from './sizes/sizes.component';
import { SpeedComponent } from './speed/speed.component';
import { ItemsComponent } from './items/items.component';
import { ItemTypesComponent } from './item-types/item-types.component';
import { ItemModificationsComponent } from './item-modifications/item-modifications.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { BestiaryFactionsComponent } from './bestiary-factions/bestiary-factions.component';
import { BestiaryTypesComponent } from './bestiary-types/bestiary-types.component';
import { DifficultiesComponent } from './difficulties/difficulties.component';
import { DurationsComponent } from './durations/durations.component';
import { TargetsComponent } from './targets/targets.component';
import { FlawsComponent } from './flaws/flaws.component';
import { EnvironmentalTraitsComponent } from './environmental-traits/environmental-traits.component';
import { EventsComponent } from './events/events.component';
import { EndeavoursComponent } from './endeavours/endeavours.component';
import { ActionsComponent } from './actions/actions.component';
import { GetByIdPipe, ImperiumMaledictumCommonModule } from '@im-common';
import { RolesComponent } from './roles/roles.component';
import { OriginsComponent } from './origins/origins.component';
import {
  AdminBaseComponent,
  AdminDictionaryComponent,
  AdminSettingsComponent,
  AdminUsersComponent,
  SharedModule
} from '@std';


@NgModule({
  declarations: [
    AdminComponent,
    ItemTraitsComponent,
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
    ItemModificationsComponent,
    BestiaryFactionsComponent,
    BestiaryTypesComponent,
    BestiaryComponent,
    DifficultiesComponent,
    DurationsComponent,
    TargetsComponent,
    FlawsComponent,
    EnvironmentalTraitsComponent,
    EventsComponent,
    EndeavoursComponent,
    ActionsComponent,
    RolesComponent,
    OriginsComponent,
  ],
  imports: [
    ImperiumMaledictumCommonModule,
    AdminRoutingModule,
    GetByIdPipe,
    AdminBaseComponent,
    AdminSettingsComponent,
    AdminDictionaryComponent,
    AdminUsersComponent,
    SharedModule
  ]
})
export class AdminModule {}
