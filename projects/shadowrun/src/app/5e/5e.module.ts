import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UiModule } from '@shadowrun/app/ui/ui.module';
import { FifthEditionService } from './5e.service';
import { CreatePcAttributesComponent } from './components/create-pc-attributes/create-pc-attributes.component';
import { CreatePcSkillsComponent } from './components/create-pc-skills/create-pc-skills.component';
import { CreatePcKnowledgeComponent } from './components/create-pc-knowledge/create-pc-knowledge.component';
import { CreatePcQualitiesComponent } from './components/create-pc-qualities/create-pc-qualities.component';
import { CreatePcContactsComponent } from './components/create-pc-contacts/create-pc-contacts.component';
import { CreatePcSpellsComponent } from './components/create-pc-spells/create-pc-spells.component';
import { CreatePcComplexFormsComponent } from './components/create-pc-complex-forms/create-pc-complex-forms.component';
import { CreatePcAdeptPowersComponent } from './components/create-pc-adept-powers/create-pc-adept-powers.component';
import { CreatePcGearComponent } from './components/create-pc-gear/create-pc-gear.component';
import { CreatePcWareComponent } from './components/create-pc-ware/create-pc-ware.component';
import { CreatePcLifestyleComponent } from './components/create-pc-lifestyle/create-pc-lifestyle.component';
import { CreatePcFinalCalculationsComponent } from './components/create-pc-final-calculations/create-pc-final-calculations.component';
import { ViewSpellsComponent } from './components/view-spells/view-spells.component';
import { ViewAttributesComponent } from './components/view-attributes/view-attributes.component';
import { ViewSkillsComponent } from './components/view-skills/view-skills.component';
import { ViewPersonalComponent } from './components/view-personal/view-personal.component';
import { ViewQualitiesComponent } from './components/view-qualities/view-qualities.component';

const DECLARATIONS = [
  CreatePcAdeptPowersComponent,
  CreatePcAttributesComponent,
  CreatePcComplexFormsComponent,
  CreatePcContactsComponent,
  CreatePcGearComponent,
  CreatePcKnowledgeComponent,
  CreatePcLifestyleComponent,
  CreatePcQualitiesComponent,
  CreatePcSkillsComponent,
  CreatePcSpellsComponent,
  CreatePcWareComponent,
  CreatePcFinalCalculationsComponent,
  ViewAttributesComponent,
  ViewPersonalComponent,
  ViewSkillsComponent,
  ViewSpellsComponent
];

@NgModule({
    exports: [...DECLARATIONS, ViewQualitiesComponent],
  imports: [SharedModule, UiModule],
  providers: [FifthEditionService],
  declarations: [...DECLARATIONS, ViewQualitiesComponent]
})
export class FifthEditionModule {}
