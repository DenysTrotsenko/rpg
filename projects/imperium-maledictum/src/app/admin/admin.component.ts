import { Component, ChangeDetectionStrategy } from '@angular/core';
import { getId16, NavListItemData } from '@shared';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  readonly options: NavListItemData[] = [
    { link: './skills', label: 'Skills' },
    { link: './specialisations', label: 'Specialisations' },
    { link: './talents', label: 'Talents' },
    { link: './item-qualities', label: 'Item Qualities' },
    { link: './item-flaws', label: 'Item Flaws' },
    { link: './item-traits', label: 'Item Traits' },
    { link: './malignancies', label: 'Malignancies' },
    { link: './mutations', label: 'Mutations' },
    { link: './perils-of-the-warp', label: 'Perils of the Warp' },
    { link: './psychic-phenomenas', label: 'Psychic Phenomenas' },
    { link: './conditions', label: 'Conditions' },
  ];

  constructor(private readonly aff: AngularFireFunctions) {
    // aff.httpsCallable('helloWorld')(null)
    //   .pipe(
    //     catchError(err => {
    //       console.log(err);
    //       return of(null);
    //     })
    //   )
    //   .subscribe(res => console.log(res));
  }
}
