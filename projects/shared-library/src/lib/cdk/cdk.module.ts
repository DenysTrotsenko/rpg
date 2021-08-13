import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  exports: [
    ClipboardModule,
    DragDropModule
  ]
})
export class CdkModule {}
