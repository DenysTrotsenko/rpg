import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable, Subject } from 'rxjs';
import { finalize, switchMap, take } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable()
export class StorageService {
  constructor(private readonly http: HttpService, private readonly storage: AngularFireStorage) {}

  download<T>(path: string): Observable<T> {
    return this.storage
      .ref(path)
      .getDownloadURL()
      .pipe(
        switchMap(url => this.http.get<T>(url, { responseType: 'json' })),
      );
  }

  upload(path: string, content: File | Blob): Observable<string> {
    const task: AngularFireUploadTask = this.storage.upload(path, content);
    const result$: Subject<void> = new Subject();

    task.snapshotChanges().pipe(
      finalize(() => result$.next())
    ).subscribe();

    return result$.asObservable()
      .pipe(
        take(1),
        switchMap(() => this.storage.ref(path).getDownloadURL())
      );
  }
}
