import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
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

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireFunctionsModule,
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
    SettingService
  ]
})
export class CoreModule {}
