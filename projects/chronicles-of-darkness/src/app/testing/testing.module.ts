import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { EMPTY, Observable, of } from 'rxjs';
import { SnackbarService } from '@shared';

class AngularFirestoreMock {
  collection = { valueChanges: EMPTY };
}
class AngularFireStorageMock {
  ref(path: string): Partial<AngularFireStorageReference> {
    return {
      getDownloadURL(): Observable<any> { return EMPTY; }
    };
  }
  upload(path: string, data: any): Partial<AngularFireUploadTask> {
    return {
      snapshotChanges(): Observable<any> { return EMPTY; }
    };
  }
}
class SnackbarServiceMock {
  error(): Observable<void> { return EMPTY; }
  info(): Observable<void> { return EMPTY; }
}

@NgModule({
  exports: [
    HttpClientTestingModule,
  ],
  providers: [
    { provide: AngularFirestore, useClass: AngularFirestoreMock },
    { provide: AngularFireStorage, useClass: AngularFireStorageMock },
    { provide: SnackbarService, useClass: SnackbarServiceMock }
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestingModule {}
