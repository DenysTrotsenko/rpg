import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService, getId } from '@shared';
import { Character } from '@ti/app/game/models/character';
import { Campaign } from '@ti/app/game/models/campaign';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly campaigns$: Observable<Campaign[]> = this.firestore.collection<Campaign>('campaigns');
  readonly characters$: Observable<Character[]> = combineLatest([
    this.campaigns$, this.auth.auth$
  ]).pipe(
    switchMap(([campaigns, user]) => {
      console.log('HERE!');
      const author = user.uid;
      const master = campaigns.filter(i => i.author === user.uid).map(i => i.id);
      return this.firestore
        .collection<Character>('characters', ref => ref.where('author', '==', author) || ref.where('campaign', 'in', master));
    })
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
