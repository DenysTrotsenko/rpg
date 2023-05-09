import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CoreModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
// import { DataService } from './game/data.service';
import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase)
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
