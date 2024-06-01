import { NgModule } from '@angular/core';
import { CoreModule, LoggerModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MatDialogRef } from '@angular/material/dialog';
import {
  ImperiumMaledictumCommonModule
} from '../../../imperium-maledictum-common/src/lib/imperium-maledictum-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    provideFirebaseApp(
      () => initializeApp(environment.firebase),
      provideAuth(() => getAuth()),
      provideFirestore( () => getFirestore()),
      provideStorage(() => getStorage()),
      provideFunctions(() => getFunctions())
    ),
    LoggerModule.forRoot(!environment.production),
    ImperiumMaledictumCommonModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
