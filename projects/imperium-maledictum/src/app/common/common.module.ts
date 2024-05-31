import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PortraitComponent } from './components/portrait/portrait.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { NumberInputCellComponent } from './components/number-input-cell/number-input-cell.component';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { InteractiveComponent } from './components/interactive/interactive.component';
import { MaterialModule } from '../../../../std/src/lib/material/material.module';

const DECLARATIONS = [
  PortraitComponent,
  NumberInputComponent,
  NumberInputCellComponent,
  GetByIdPipe,
  InteractiveComponent
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class CommonModule { }
