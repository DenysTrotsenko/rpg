import { inject, Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { forkJoin, Observable, Subject } from 'rxjs';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable()
export class StorageService {
  private readonly http = inject(HttpService);
  private readonly storage = inject(AngularFireStorage);

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

  clone(to: string, from: string): Observable<unknown> {
    return this.storage.ref(from).listAll().pipe(
      map(res => res.items.map(i => i.name)),
      switchMap(names => forkJoin(names.map(i => this.download(`/${from}/${i}`))).pipe(
        switchMap(files => forkJoin(files.map((j, index) => {
          const data = JSON.stringify(j, null, 2);
          const blob = new Blob([data], { type: 'application/json' });
          return this.upload(`settings/${to}/${names[index]}`, blob);
        })))
      ))
    );
  }

  delete(path: string): Observable<unknown> {
    return this.storage.ref(path).delete();
  }

  getDownloadUrls(path: string): Observable<string[]> {
    return this.storage.ref(path).listAll().pipe(
      map(res => res.items.map(i => i.name)),
      switchMap(names => forkJoin(names.map(i => this.storage.ref(`/${path}/${i}`).getDownloadURL())))
    );
  }
}
