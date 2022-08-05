import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService, getId } from '@shared';
import { Character } from '@ti/app/models/character.model';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  onCloneClick(i: Character): void {
    const id = getId();
    const name = `${i.name} ${id}`;
    const author = this.route.snapshot.data?.user?.uid;

    this.firestore.update(`characters/${id}`, { ...i, id, name, author });
  }

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
