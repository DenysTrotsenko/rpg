import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './campaigns.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CampaignsComponent,
    ListComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
