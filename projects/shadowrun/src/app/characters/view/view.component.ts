import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from '@shared';
import { Character } from '@shadowrun/app/5e/5e.models';

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
      shareReplay(1)
    );
  readonly view$: BehaviorSubject<'concise' | 'full'> = new BehaviorSubject('full');

  readonly isAdeptPowers$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.adept_powers?.length)
  );
  readonly isComplexForms$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.complex_forms?.length)
  );
  readonly isEchoes$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.echoes?.length)
  );
  readonly isMetamagic$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.metamagic?.length)
  );
  readonly isRituals$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.rituals?.length)
  );
  readonly isSpells$: Observable<boolean> = this.character$.pipe(
    map(character => !!character.spells?.length)
  );

  constructor(private readonly route: ActivatedRoute, private readonly firestore: FirestoreService) {}
}
