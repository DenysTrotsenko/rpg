import { NgModule } from '@angular/core';
import { SharedModule } from '@std';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './campaigns.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EventEditDialogComponent } from './event-edit-dialog/event-edit-dialog.component';
import { XpEditDialogComponent } from './xp-edit-dialog/xp-edit-dialog.component';


@NgModule({
  declarations: [
    CampaignsComponent,
    ListComponent,
    ViewComponent,
    CreateComponent,
    EventEditDialogComponent,
    XpEditDialogComponent
  ],
  imports: [
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
