import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthGuard } from './auth.guard';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CacheService } from './cache.service';
import { HttpService } from './http.service';
import { FirestoreService } from './firestore.service';
import { StorageService } from './storage.service';
import { DialogModule } from '../dialog/dialog.module';
import { SnackbarModule } from '../snackbar/snackbar.module';
import { FunctionsService } from './functions.service';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    DialogModule,
    SnackbarModule
  ],
  providers: [
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
