import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { GameModule } from '@ti/app/game/game.module';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionsComponent } from './professions/professions.component';
import { TalentsComponent } from './talents/talents.component';
import { TraitsComponent } from './traits/traits.component';
import { QuirksComponent } from './quirks/quirks.component';
import { AttributesComponent } from './attributes/attributes.component';
import { AfflictionsComponent } from './afflictions/afflictions.component';
import { InjuriesComponent } from './injuries/injuries.component';
import { SpellsComponent } from './spells/spells.component';


@NgModule({
  declarations: [
    ProfessionsComponent,
    QuirksComponent,
    ReferencesComponent,
    SkillsComponent,
    TalentsComponent,
    TraitsComponent,
    AttributesComponent,
    AfflictionsComponent,
    InjuriesComponent,
    SpellsComponent
  ],
  imports: [
    SharedModule,
    GameModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
