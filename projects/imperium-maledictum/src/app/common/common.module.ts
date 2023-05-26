import { NgModule } from '@angular/core';
import { PortraitComponent } from './components/portrait/portrait.component';
import { SharedModule } from '@shared';

const DECLARATION = [
  PortraitComponent
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
