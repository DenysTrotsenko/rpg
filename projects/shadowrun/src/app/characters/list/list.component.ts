import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogService} from '@shared';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  characters$ = of([])
    .pipe(
      map(res => res.map(i => ({
        id: i.id,
        karma: i.karma,
        name: i.name,
        portrait: i.portrait
      })))
    );

  constructor(private dialog: DialogService) {}

  onDeleteClick(id: string): void {
    // this.dialog.open(DialogConfirmComponent, {
    //   data: {
    //     title: 'Delete this Character',
    //     description: 'Are you sure you want to delete this character?'
    //   }
    // }).afterClosed()
    //   .pipe(
    //     filter(res => !!res),
    //     switchMap(() => this.store.onCharacterDelete(id)
    //       .then(() => { console.log('Character successfully deleted.'); })
    //       .catch(() => { console.log('Character delete Error!'); })
    //     )
    //   )
    //   .subscribe();
  }
}
