import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { PortraitSelectComponent } from './components/portrait-select/portrait-select.component';
import { PortraitSelectDialogComponent } from './components/portrait-select/portrait-select-dialog.component';

const DECLARATIONS = [
  NumberInputComponent,
  PortraitSelectComponent
];

@NgModule({
  declarations: [...DECLARATIONS, PortraitSelectDialogComponent],
  exports: [...DECLARATIONS],
  imports: [SharedModule]
})
export class UiModule {}
