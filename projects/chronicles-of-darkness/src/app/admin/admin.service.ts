import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { finalize, map, mapTo, switchMap, take, tap } from 'rxjs/operators';
import { SnackbarService } from '@shared';
import { IBase } from '@cod/app/data/data.models';

@Injectable()
export class AdminService {
  private readonly dataSource: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly data$ = this.dataSource.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly storage: AngularFireStorage,
    private readonly snackbar: SnackbarService
  ) {}

  download(filename: string): Observable<null> {
    this.dataSource.next(null);

    return this.storage
      .ref(`data/${filename}`)
      .getDownloadURL()
      .pipe(
        switchMap(url => this.http.get(url, { responseType: 'json' })),
        tap(res => this.dataSource.next(res)),
        mapTo(null)
      );
  }

  upload(filename: string, content: any): Observable<string> {
    const path = `data/${filename}`;
    const blob = new Blob([JSON.stringify(content, null, 2)], { type : 'application/json' });
    const ref = this.storage.ref(path);
    const task: AngularFireUploadTask = this.storage.upload(path, blob);
    const result$: Subject<void> = new Subject();

    task.snapshotChanges().pipe(
      finalize(() => {
        this.snackbar.info('Changes successfully saved.');
        result$.next();
      })
    ).subscribe();

    return result$.asObservable()
      .pipe(
        take(1),
        switchMap(() => ref.getDownloadURL())
      );
  }

  add(value: any): Observable<void> {
    const item = {
      ...value,
      id: Date.now() // Math.floor(performance.now() * 10000000),
    };

    return this.data$.pipe(
      take(1),
      map((data: any[]) => !!data ? [item, ...data] : [item]),
      tap(res => this.dataSource.next(res)),
      mapTo(null)
    );
  }

  edit(value: any): Observable<void> {
    return this.data$.pipe(
      take(1),
      map((data: any[]) => !!data ? data.map(i => i.id === value.id ? value : i) : [value]),
      tap(res => this.dataSource.next(res)),
      mapTo(null)
    );
  }

  delete(id: number): Observable<void> {
    return this.data$.pipe(
      take(1),
      map((data: any[]) => !!data ? data.filter(i => i.id !== id) : data),
      tap(res => this.dataSource.next(res)),
      mapTo(null)
    );
  }

  /* Sort items in array (name is a key) by alphabet in asc order */
  getSortedItems<T extends IBase>(data: T[]): T[] {
    return data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      if (b.name.toLowerCase() > a.name.toLowerCase()) { return -1; }
      return 0;
    });
  }

  /* Trim & remove word wraps in strings from object values */
  getPrettifiedStrings<T extends object>(data: T[]): T[] {
    return data.map(i => {
      const entries = Object.entries(i);
      const wordwrap = /- /gi; /* Regex for word wraps */

      entries.forEach(([k, v]) => {
        if (typeof v === 'string') {
          i[k] = v
            .trim()
            .replace(wordwrap, '');
        }
      });

      return i;
    });
  }
}
