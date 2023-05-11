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
    { link: './conditions', label: 'Conditions' },
    { link: './talents', label: 'Talents' },
    { link: './item-qualities', label: 'Qualities' },
    { link: './item-flaws', label: 'Flaws' },
    { link: './item-traits', label: 'Traits' }
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
