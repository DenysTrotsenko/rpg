import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  exports: [
    ClipboardModule,
    DragDropModule,
    CdkTreeModule
  ]
})
export class CdkModule {}
