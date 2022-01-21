import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService } from '@shared';
import { Character } from '@dm/app/app.models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  readonly characters$: Observable<Character[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Character>('characters', ref => ref.where('author', '==', user.uid)))
  );

  constructor(
    private readonly auth: AuthService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute
  ) {}

  onDeleteClick(i: Character): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Character',
          description: `Are sure you want to delete this character (${i.name})?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => this.firestore.delete(`characters/${i.id}`))
      )
      .subscribe();
  }
}
