import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavListItemData } from '@shared';
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
    { link: './item-qualities', label: 'Qualities' },
    { link: './item-flaws', label: 'Flaws' },
    { link: './item-traits', label: 'Traits' },
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
