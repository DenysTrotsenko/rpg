import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
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
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
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
    StorageService
  ]
})
export class CoreModule {}
