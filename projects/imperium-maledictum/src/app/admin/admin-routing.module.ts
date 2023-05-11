import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ItemFlawsComponent } from './item-flaws/item-flaws.component';
import { ItemQualitiesComponent } from './item-qualities/item-qualities.component';
import { ItemTraitsComponent } from './item-traits/item-traits.component';
import { TalentsComponent } from './talents/talents.component';
import { AdminBaseComponent } from '../../../../std/src/lib/shared/admin-base/admin-base.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { SkillsComponent } from './skills/skills.component';
import { PsychicPhenomenasComponent } from './psychic-phenomenas/psychic-phenomenas.component';
import { PerilsOfTheWarpComponent } from './perils-of-the-warp/perils-of-the-warp.component';
import { MutationsComponent } from './mutations/mutations.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'conditions',
        component: AdminBaseComponent,
        data: { path: '/data/conditions.json', component: ConditionsComponent }
      },
      {
        path: 'item-qualities',
        component: AdminBaseComponent,
        data: { path: '/data/item-qualities.json', component: ItemQualitiesComponent }
      },
      {
        path: 'item-flaws',
        component: AdminBaseComponent,
        data: { path: '/data/item-flaws.json', component: ItemFlawsComponent }
      },
      {
        path: 'item-traits',
        component: AdminBaseComponent,
        data: { path: '/data/item-traits.json', component: ItemTraitsComponent }
      },
      {
        path: 'malignancies',
        component: AdminBaseComponent,
        data: { path: '/data/malignancies.json', component: SkillsComponent }
      },
      {
        path: 'mutations',
        component: AdminBaseComponent,
        data: { path: '/data/mutations.json', component: MutationsComponent }
      },
      {
        path: 'perils-of-the-warp',
        component: AdminBaseComponent,
        data: { path: '/data/perils-of-the-warp.json', component: PerilsOfTheWarpComponent }
      },
      {
        path: 'psychic-phenomenas',
        component: AdminBaseComponent,
        data: { path: '/data/psychic-phenomenas.json', component: PsychicPhenomenasComponent }
      },
      {
        path: 'skills',
        component: AdminBaseComponent,
        data: { path: '/data/skills.json', component: SkillsComponent }
      },
      {
        path: 'specialisations',
        component: AdminBaseComponent,
        data: { path: '/data/specialisations.json', component: SpecialisationsComponent }
      },
      {
        path: 'talents',
        component: AdminBaseComponent,
        data: { path: '/data/talents.json', component: TalentsComponent }
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
