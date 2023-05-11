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
    SpecialisationsComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
