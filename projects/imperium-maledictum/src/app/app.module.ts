import { NgModule } from '@angular/core';
import { CoreModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { USE_EMULATOR } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(
      () => initializeApp(environment.firebase),
      provideAuth(() => getAuth()),
      provideFirestore( () => getFirestore()),
      provideStorage(() => getStorage()),
      provideFunctions(() => getFunctions())
    ),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    // { provide: USE_EMULATOR, useValue: environment.production ? undefined : ['localhost', 5001] }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
