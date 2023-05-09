import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpService, NavListItemData } from '@shared';
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

  constructor(private readonly aff: AngularFireFunctions, private http: HttpService) {
    aff.httpsCallable('helloWorld')(null)
      .pipe(
        catchError(err => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe(res => console.log(res));
    // http
    //   .get('http://127.0.0.1:5001/imperium-maledictum/us-central1/helloWorld')
    //   .subscribe(res => console.log(res));
  }
}
