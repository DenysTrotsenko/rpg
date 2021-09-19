import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { CoreModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@shadowrun/environments/environment';
import { FifthEditionModule } from '@shadowrun/app/5e/5e.module';
import {AngularFireFunctionsModule, REGION, USE_EMULATOR} from '@angular/fire/compat/functions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'shadowrun'),
    AngularFireFunctionsModule,
    CoreModule,
    FifthEditionModule
  ],
  providers: [
    // { provide: USE_EMULATOR, useValue: ['localhost', 5001] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
