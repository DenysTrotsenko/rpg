import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CoreModule, SharedModule } from '@shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@ti/environments/environment';
import { DataService } from '@ti/app/game/data.service';

export function appInit(data: DataService): () => Promise<any> {
  return () => data.onInit();
}

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
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [DataService]
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
