import { NgModule } from '@angular/core';
import { PortraitComponent } from './components/portrait/portrait.component';
import { SharedModule } from '@shared';
import { FileInputComponent } from './components/file-input/file-input.component';

const DECLARATION = [
  PortraitComponent
];

@NgModule({
  declarations: [
    ...DECLARATION,
    FileInputComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...DECLARATION
  ]
})
export class CommonModule { }
