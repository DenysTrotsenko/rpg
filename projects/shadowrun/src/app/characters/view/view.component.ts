import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {FirestoreService} from '@shared';
import {Character, CharacterSpell} from '@shadowrun/app/5e/5e.models';


@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
  readonly character$: Observable<any> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      tap(res => console.log(res)),
      shareReplay(1)
    );
  readonly spells$: Observable<CharacterSpell[]> = this.character$
    .pipe(
      map(res => res.spells)
    );

  constructor(private readonly route: ActivatedRoute, private readonly firestore: FirestoreService) {}

  ngOnInit(): void {
  }

}
