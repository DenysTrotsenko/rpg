import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { BeastiaryRolesComponent } from './beastiary-roles/beastiary-roles.component';
import { BeastiaryTraitsComponent } from './beastiary-traits/beastiary-traits.component';
import { AdminUsersComponent } from '../../../../std/src/lib/shared/admin-users/admin-users.component';
import { PsychicPowersComponent } from './psychic-powers/psychic-powers.component';
import { PsychicDisciplinesComponent } from './psychic-disciplines/psychic-disciplines.component';
import { ItemAvailabilitiesComponent } from './item-availabilities/item-availabilities.component';
import { RangesComponent } from './ranges/ranges.component';
import { SpeedComponent } from './speed/speed.component';
import { SizesComponent } from './sizes/sizes.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'availability',
        component: AdminBaseComponent,
        data: { path: 'availabilities.json', component: ItemAvailabilitiesComponent }
      },
      {
        path: 'bestiary-roles',
        component: AdminBaseComponent,
        data: { path: 'bestiary-roles.json', component: BeastiaryRolesComponent }
      },
      {
        path: 'bestiary-traits',
        component: AdminBaseComponent,
        data: { path: 'bestiary-traits.json', component: BeastiaryTraitsComponent }
      },
      {
        path: 'characteristics',
        component: AdminBaseComponent,
        data: { path: 'characteristics.json', component: CharacteristicsComponent }
      },
      {
        path: 'conditions',
        component: AdminBaseComponent,
        data: { path: 'conditions.json', component: ConditionsComponent }
      },
      {
        path: 'factions',
        component: AdminBaseComponent,
        data: { path: 'factions.json', component: FactionsComponent }
      },
      {
        path: 'item-qualities',
        component: AdminBaseComponent,
        data: { path: 'item-qualities.json', component: ItemQualitiesComponent }
      },
      {
        path: 'item-flaws',
        component: AdminBaseComponent,
        data: { path: 'item-flaws.json', component: ItemFlawsComponent }
      },
      {
        path: 'item-traits',
        component: AdminBaseComponent,
        data: { path: 'item-traits.json', component: ItemTraitsComponent }
      },
      {
        path: 'malignancies',
        component: AdminBaseComponent,
        data: { path: 'malignancies.json', component: MalignanciesComponent }
      },
      {
        path: 'mutations',
        component: AdminBaseComponent,
        data: { path: 'mutations.json', component: MutationsComponent }
      },
      {
        path: 'perils-of-the-warp',
        component: AdminBaseComponent,
        data: { path: 'perils-of-the-warp.json', component: PerilsOfTheWarpComponent }
      },
      {
        path: 'psychic-phenomenas',
        component: AdminBaseComponent,
        data: { path: 'psychic-phenomenas.json', component: PsychicPhenomenasComponent }
      },
      {
        path: 'psychic-disciplines',
        component: AdminBaseComponent,
        data: { path: 'psychic-disciplines.json', component: PsychicDisciplinesComponent }
      },
      {
        path: 'psychic-powers',
        component: AdminBaseComponent,
        data: { path: 'psychic-powers.json', component: PsychicPowersComponent }
      },
      {
        path: 'ranges',
        component: AdminBaseComponent,
        data: { path: 'ranges.json', component: RangesComponent }
      },
      {
        path: 'sizes',
        component: AdminBaseComponent,
        data: { path: 'sizes.json', component: SizesComponent }
      },
      {
        path: 'skills',
        component: AdminBaseComponent,
        data: { path: 'skills.json', component: SkillsComponent }
      },
      {
        path: 'speed',
        component: AdminBaseComponent,
        data: { path: 'speed.json', component: SpeedComponent }
      },
      {
        path: 'specialisations',
        component: AdminBaseComponent,
        data: { path: 'specialisations.json', component: SpecialisationsComponent }
      },
      {
        path: 'talents',
        component: AdminBaseComponent,
        data: { path: 'talents.json', component: TalentsComponent }
      },
      {
        path: 'users',
        component: AdminUsersComponent
      },
      {
        path: '**',
        redirectTo: 'conditions',
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
