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

const DECLARATIONS = [
  CreatePcAttributesComponent,
  CreatePcContactsComponent,
  CreatePcKnowledgeComponent,
  CreatePcQualitiesComponent,
  CreatePcSkillsComponent,
  CreatePcSpellsComponent
];

@NgModule({
  exports: [...DECLARATIONS, CreatePcComplexFormsComponent, CreatePcAdeptPowersComponent],
  imports: [SharedModule, UiModule],
  providers: [FifthEditionService],
  declarations: [...DECLARATIONS, CreatePcComplexFormsComponent, CreatePcAdeptPowersComponent]
})
export class FifthEditionModule {}
