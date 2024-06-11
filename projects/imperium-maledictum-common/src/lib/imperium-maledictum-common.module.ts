import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SharedModule } from '@std';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { NumberInputCellComponent } from './components/number-input-cell/number-input-cell.component';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { InteractiveComponent } from './components/interactive/interactive.component';
import { AddItemDialogComponent } from './components/add-item-dialog.component';
import { AddSkillDialogComponent } from './components/add-skill-dialog.component';
import { AddSpecialisationDialogComponent } from './components/add-specialisation-dialog.component';
import { CharacterCharacteristicsComponent } from './components/character-characteristics/character-characteristics.component';
import { CharacterTalentsComponent } from './components/character-talents/character-talents.component';
import { CharacterSkillsSpecializationsComponent } from './components/character-skills-specializations/character-skills-specializations.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterPowersComponent } from './components/character-powers/character-powers.component';

const DECLARATION = [
  NumberInputComponent,
  NumberInputCellComponent,
  InteractiveComponent,
  AddItemDialogComponent,
  AddSkillDialogComponent,
  AddSpecialisationDialogComponent,
  CharacterCharacteristicsComponent,
  CharacterTalentsComponent,
  CharacterSkillsSpecializationsComponent,
  CharacterDetailsComponent,
  CharacterPowersComponent,
  GetByIdPipe
];

@NgModule({
  declarations: [
    ...DECLARATION
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...DECLARATION
  ],
  providers: [
    DataService
  ]
})
export class ImperiumMaledictumCommonModule { }
