import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CoreModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
// import { DataService } from './game/data.service';
import { environment } from '../environments/environment';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getFunctions, provideFunctions } from '@angular/fire/functions';

// export function appInit(data: DataService): () => Promise<any> {
//   return () => data.onInit();
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideStorage(() => getStorage())
  ],
  providers: [
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: appInit,
  //     multi: true,
  //     deps: [DataService]
  //   }
  // ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
