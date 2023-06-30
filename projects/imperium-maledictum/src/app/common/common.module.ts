import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PortraitComponent } from './components/portrait/portrait.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { NumberInputCellComponent } from './components/number-input-cell/number-input-cell.component';

const DECLARATION = [
  PortraitComponent,
  FileInputComponent,
  NumberInputComponent,
  NumberInputCellComponent
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
  ]
})
export class CommonModule { }
