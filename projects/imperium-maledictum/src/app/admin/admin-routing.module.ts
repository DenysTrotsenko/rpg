import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileName } from '@imperium-maledictum-1e/models/enums';
import { AdminComponent } from './admin.component';
import { AdminBaseComponent } from '../../../../std/src/lib/shared/admin-base/admin-base.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FactionsComponent } from './factions/factions.component';
import { ItemFlawsComponent } from './item-flaws/item-flaws.component';
import { ItemQualitiesComponent } from './item-qualities/item-qualities.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
import { MalignanciesComponent } from './malignancies/malignancies.component';
import { MutationsComponent } from './mutations/mutations.component';
import { PerilsOfTheWarpComponent } from './perils-of-the-warp/perils-of-the-warp.component';
import { PsychicPhenomenasComponent } from './psychic-phenomenas/psychic-phenomenas.component';
import { SkillsComponent } from './skills/skills.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { TalentsComponent } from './talents/talents.component';
import { BestiaryRolesComponent } from './bestiary-roles/bestiary-roles.component';
import { BestiaryTraitsComponent } from './bestiary-traits/bestiary-traits.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { AdminUsersComponent } from '../../../../std/src/lib/shared/admin-users/admin-users.component';
import { PsychicPowersComponent } from './psychic-powers/psychic-powers.component';
import { PsychicDisciplinesComponent } from './psychic-disciplines/psychic-disciplines.component';
import { ItemAvailabilitiesComponent } from './item-availabilities/item-availabilities.component';
import { RangesComponent } from './ranges/ranges.component';
import { SpeedComponent } from './speed/speed.component';
import { SizesComponent } from './sizes/sizes.component';
import { ItemsComponent } from './items/items.component';
import { ItemTypesComponent } from './item-types/item-types.component';
import { BestiaryFactionsComponent } from './bestiary-factions/bestiary-factions.component';
import { BestiaryTypesComponent } from './bestiary-types/bestiary-types.component';
import { DifficultiesComponent } from './difficulties/difficulties.component';
import { DurationsComponent } from './durations/durations.component';
import { TargetsComponent } from './targets/targets.component';
import { permissionGuard } from '../common/guards';
import { PermissionId } from '@shared';
import { AdminSettingsComponent } from '../../../../std/src/lib/shared/admin-settings/admin-settings.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [permissionGuard(PermissionId.ADMIN)],
    children: [
      {
        path: 'availability',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.AVAILABILITIES, component: ItemAvailabilitiesComponent }
      },
      {
        path: 'bestiary-roles',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.BESTIARY_ROLES, component: BestiaryRolesComponent }
      },
      {
        path: 'bestiary-factions',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.BESTIARY_FACTIONS, component: BestiaryFactionsComponent }
      },
      {
        path: 'bestiary-types',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.BESTIARY_TYPES, component: BestiaryTypesComponent }
      },
      {
        path: 'bestiary-traits',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.BESTIARY_TRAITS, component: BestiaryTraitsComponent }
      },
      {
        path: 'bestiary',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.BESTIARY, component: BestiaryComponent }
      },
      {
        path: 'characteristics',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.CHARACTERISTICS, component: CharacteristicsComponent }
      },
      {
        path: 'conditions',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.CONDITIONS, component: ConditionsComponent }
      },
      {
        path: 'difficulties',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.DIFFICULTIES, component: DifficultiesComponent }
      },
      {
        path: 'durations',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.DURATIONS, component: DurationsComponent }
      },
      {
        path: 'factions',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.FACTIONS, component: FactionsComponent }
      },
      {
        path: 'items',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.ITEMS, component: ItemsComponent }
      },
      {
        path: 'item-qualities',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.ITEM_QUALITIES, component: ItemQualitiesComponent }
      },
      {
        path: 'item-flaws',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.ITEM_FLAWS, component: ItemFlawsComponent }
      },
      {
        path: 'item-traits',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.ITEM_TRAITS, component: ItemTraitsComponent }
      },
      {
        path: 'item-types',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.ITEM_TYPES, component: ItemTypesComponent }
      },
      {
        path: 'malignancies',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.MALIGNANCIES, component: MalignanciesComponent }
      },
      {
        path: 'mutations',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.MUTATIONS, component: MutationsComponent }
      },
      {
        path: 'perils-of-the-warp',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.PERILS_OF_THE_WARP, component: PerilsOfTheWarpComponent }
      },
      {
        path: 'psychic-phenomenas',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.PSYCHIC_PHENOMENAS, component: PsychicPhenomenasComponent }
      },
      {
        path: 'psychic-disciplines',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.PSYCHIC_DISCIPLINES, component: PsychicDisciplinesComponent }
      },
      {
        path: 'psychic-powers',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.PSYCHIC_POWERS, component: PsychicPowersComponent }
      },
      {
        path: 'ranges',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.RANGES, component: RangesComponent }
      },
      {
        path: 'sizes',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.SIZES, component: SizesComponent }
      },
      {
        path: 'skills',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.SKILLS, component: SkillsComponent }
      },
      {
        path: 'speed',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.SPEED, component: SpeedComponent }
      },
      {
        path: 'specialisations',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.SPECIALISATIONS, component: SpecialisationsComponent }
      },
      {
        path: 'talents',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.TALENTS, component: TalentsComponent }
      },
      {
        path: 'targets',
        component: AdminBaseComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)],
        data: { path: FileName.TARGETS, component: TargetsComponent }
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_SETTING)]
      },
      {
        path: 'users',
        component: AdminUsersComponent,
        canActivate: [permissionGuard(PermissionId.ADMIN_USERS)]
      },
      {
        path: '**',
        redirectTo: 'availability',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
