import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { SharedModule } from '@shared';

const DECLARATIONS = [
  NumberInputComponent
];

@NgModule({
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  imports: [CommonModule, SharedModule]
})
export class UiModule {}
