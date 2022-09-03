import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionsComponent } from '@ti/app/references/professions/professions.component';
import { QuirksComponent } from '@ti/app/references/quirks/quirks.component';
import { TalentsComponent } from '@ti/app/references/talents/talents.component';
import { TraitsComponent } from '@ti/app/references/traits/traits.component';
import { AttributesComponent } from '@ti/app/references/attributes/attributes.component';
import { AfflictionsComponent } from '@ti/app/references/afflictions/afflictions.component';
import { InjuriesComponent } from '@ti/app/references/injuries/injuries.component';
import { SpellsComponent } from '@ti/app/references/spells/spells.component';
import { AilmentsComponent } from '@ti/app/references/ailments/ailments.component';
import { DrugsComponent } from '@ti/app/references/drugs/drugs.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      {
        path: 'afflictions',
        component: AfflictionsComponent
      },
      {
        path: 'ailments',
        component: AilmentsComponent
      },
      {
        path: 'attributes',
        component: AttributesComponent
      },
      {
        path: 'drugs',
        component: DrugsComponent
      },
      {
        path: 'injuries',
        component: InjuriesComponent
      },
      {
        path: 'professions',
        component: ProfessionsComponent
      },
      {
        path: 'quirks',
        component: QuirksComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'spells',
        component: SpellsComponent
      },
      {
        path: 'talents',
        component: TalentsComponent
      },
      {
        path: 'traits',
        component: TraitsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
