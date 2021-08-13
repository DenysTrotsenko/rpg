import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@shadowrun/environments/environment';
import { FifthEditionModule } from '@shadowrun/app/5e/5e.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'shadowrun'),
    CoreModule,
    FifthEditionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
