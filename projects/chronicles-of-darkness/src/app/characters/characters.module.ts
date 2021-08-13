import { NgModule } from '@angular/core';
import { SharedModule } from '@cod/app/shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CreatePcComponent } from './create-pc/create-pc.component';
import { SpecialtyDialogComponent } from './specialty-dialog/specialty-dialog.component';
import { ViewPcComponent } from './view-pc/view-pc.component';
import { ListComponent } from './list/list.component';
import { GetDownloadURLPipeModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    CharactersComponent,
    CreatePcComponent,
    SpecialtyDialogComponent,
    ViewPcComponent,
    ListComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule,
    GetDownloadURLPipeModule
  ]
})
export class CharactersModule { }
