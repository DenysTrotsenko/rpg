import { NgModule } from '@angular/core';
import { CoreModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@ti/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'terra-incognita'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
