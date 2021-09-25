import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable()
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  collection<T>(path: string, fn = null): Observable<T[]> {
    return this.afs.collection<T>(path, fn).valueChanges();
  }

  doc<T>(path: string): Observable<T> {
    return this.afs.doc<T>(path).valueChanges();
  }

  delete(path: string): Observable<void> {
    return from(this.afs.doc(path).delete());
  }

  update(path: string, data: object): Observable<void> {
    return from(this.afs.doc(path).set(data, { merge: true }));
  }
}
