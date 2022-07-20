import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { CoreModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '@sr/environments/environment';
import {FifthEditionModule} from '@sr/app/5e/5e.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'shadowrun'),
    FifthEditionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
