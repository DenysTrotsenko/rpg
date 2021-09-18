import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from '@shared';
import { Character, CharacterAttribute, CharacterSkill, CharacterSpell } from '@shadowrun/app/5e/5e.models';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      tap(res => console.log(res)),
      shareReplay(1)
    );
  readonly attributes$: Observable<CharacterAttribute[]> = this.character$.pipe(map(res => res.attributes));
  readonly skills$: Observable<CharacterSkill[]> = this.character$.pipe(map(res => res.skills));
  readonly spells$: Observable<CharacterSpell[]> = this.character$.pipe(map(res => res.spells));
  readonly view$: BehaviorSubject<'concise' | 'full'> = new BehaviorSubject('full');

  constructor(private readonly route: ActivatedRoute, private readonly firestore: FirestoreService) {}
}
