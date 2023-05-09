import { NgModule } from '@angular/core';
import { CoreModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { USE_EMULATOR } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    { provide: USE_EMULATOR, useValue: environment.production ? undefined : ['localhost', 5001] }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
