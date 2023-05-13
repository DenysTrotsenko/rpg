import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { getId16, NavListItemData, Setting } from '@shared';
// import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../../std/src/lib/core/setting.service';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit, OnDestroy {
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

  readonly control: FormControl = new FormControl(null);

  readonly settings$: Observable<Setting[]> = this.setting.all$;

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly setting: SettingService,
    // private readonly aff: AngularFireFunctions
  ) {
    // aff.httpsCallable('helloWorld')(null)
    //   .pipe(
    //     catchError(err => {
    //       console.log(err);
    //       return of(null);
    //     })
    //   )
    //   .subscribe(res => console.log(res));
    // console.log(getId16());
  }

  ngOnInit(): void {
    this.setting.selected$
      .pipe(
        takeUntil(this.destroy$),
        tap(res => this.control.patchValue(!!res ? res.id : null, { emitEvent: false }))
      )
      .subscribe();
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(id => this.setting.set(id))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackById(_, i): string { return i.id; }
}
