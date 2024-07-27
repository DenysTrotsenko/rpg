import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthGuard } from './auth.guard';
import { AuthResolver } from './auth.resolver';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { CacheService } from './cache.service';
import { HttpService } from './http.service';
import { FirestoreService } from './firestore.service';
import { StorageService } from './storage.service';
import { DialogModule } from '../dialog/dialog.module';
import { SnackbarModule } from '../snackbar/snackbar.module';
import { FunctionsService } from './functions.service';
import { SettingService } from './setting.service';
import { MaterialIconFont } from '../enums';

export const NAVIGATOR = new InjectionToken<Navigator>('Navigator');

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DialogModule,
    SnackbarModule
  ],
  providers: [
    AppService,
    AuthGuard,
    AuthResolver,
    AuthService,
    CacheService,
    HttpService,
    FirestoreService,
    FunctionsService,
    StorageService,
    SettingService,
    { provide: NAVIGATOR, useValue: navigator },
    provideHttpClient()
  ]
})
export class CoreModule {
  constructor(icons: MatIconRegistry) {
    icons.setDefaultFontSetClass(MaterialIconFont.SYMBOLS_OUTLINED);
  }
}
