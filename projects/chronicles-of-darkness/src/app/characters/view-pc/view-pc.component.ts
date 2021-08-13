import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from '@shared';
import { ICharacter } from '@cod/app/data/data.models';

@Component({
  selector: 'app-view-pc',
  templateUrl: './view-pc.component.html',
  styleUrls: ['./view-pc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPcComponent {
  readonly character$: Observable<any> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<ICharacter>),
      tap(res => console.log(res)),
      map(res => {
        // res.power = 1;
        // res.health = 8;
        // res.willpower = 6;

        return res;
      }),
      shareReplay(1)
    );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly firestore: FirestoreService
  ) {}
}
