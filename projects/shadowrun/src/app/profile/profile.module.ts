import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
