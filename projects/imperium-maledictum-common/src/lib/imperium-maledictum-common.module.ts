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
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';

const DECLARATION = [
  NumberInputComponent,
  NumberInputCellComponent,
  InteractiveComponent,
  AddItemDialogComponent,
  AddSkillDialogComponent,
  AddSpecialisationDialogComponent,
  CharacteristicsComponent,
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
