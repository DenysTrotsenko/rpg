import { NgModule } from '@angular/core';
import { SharedModule as Shared } from '@shared';
import { EquipmentCardComponent } from './components/equipment-card/equipment-card.component';
import { EquipmentExpansionPanelComponent } from './components/equipment-expansion-panel/equipment-expansion-panel.component';
import { MeritCardComponent } from './components/merit-card/merit-card.component';
import { MeritExpansionPanelComponent } from './components/merit-expansion-panel/merit-expansion-panel.component';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { DotsPipe } from './pipes/dots.pipe';
import { GetUrlPipe } from './pipes/get-url.pipe';
import { FileInputComponent } from './components/file-input/file-input.component';

const DECLARATIONS = [
  EquipmentCardComponent,
  EquipmentExpansionPanelComponent,
  MeritCardComponent,
  MeritExpansionPanelComponent,
  FileInputComponent,
  GetByIdPipe,
  DotsPipe,
  GetUrlPipe
];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [ Shared ],
  exports: [ ...DECLARATIONS, Shared ]
})
export class SharedModule {}
