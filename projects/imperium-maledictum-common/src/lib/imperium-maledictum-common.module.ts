import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SharedModule } from '@std';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { NumberInputCellComponent } from './components/number-input-cell/number-input-cell.component';
import { GetByIdPipe } from './pipes/get-by-id.pipe';

const DECLARATION = [
  NumberInputComponent,
  NumberInputCellComponent,
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
