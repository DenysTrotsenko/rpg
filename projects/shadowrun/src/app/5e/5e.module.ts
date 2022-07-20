import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
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
import { ViewQualitiesComponent } from './components/view-qualities/view-qualities.component';
import { ViewGeneralComponent } from './components/view-general/view-general.component';
import { ViewComplexFormsComponent } from './components/view-complex-forms/view-complex-forms.component';
import { CreatePcRitualsComponent } from './components/create-pc-rituals/create-pc-rituals.component';
import { CreatePcInitiationComponent } from './components/create-pc-initiation/create-pc-initiation.component';
import { CreatePcSubmersionComponent } from './components/create-pc-submersion/create-pc-submersion.component';
import { ViewPcGearComponent } from './components/view-pc-gear/view-pc-gear.component';
import { ViewPcWareComponent } from './components/view-pc-ware/view-pc-ware.component';
import { ViewPcKnowledgeComponent } from './components/view-pc-knowledge/view-pc-knowledge.component';
import { ViewPcContactsComponent } from './components/view-pc-contacts/view-pc-contacts.component';
import { ViewRitualsComponent } from './components/view-rituals/view-rituals.component';
import { ViewSpiritsComponent } from './components/view-spirits/view-spirits.component';
import {UiModule} from '@sr/app/ui/ui.module';

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
  CreatePcRitualsComponent,
  CreatePcInitiationComponent,
  CreatePcFinalCalculationsComponent,
  CreatePcSubmersionComponent,
  ViewAttributesComponent,
  ViewComplexFormsComponent,
  ViewGeneralComponent,
  ViewQualitiesComponent,
  ViewSkillsComponent,
  ViewSpellsComponent,
  ViewPcGearComponent,
  ViewPcWareComponent,
  ViewPcKnowledgeComponent,
  ViewPcContactsComponent,
  ViewRitualsComponent,
  ViewSpiritsComponent
];

@NgModule({
  exports: [...DECLARATIONS],
  imports: [SharedModule, UiModule],
  providers: [FifthEditionService],
  declarations: [...DECLARATIONS]
})
export class FifthEditionModule {}
