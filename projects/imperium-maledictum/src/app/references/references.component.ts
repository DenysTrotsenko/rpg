import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NavListItemData, Setting, SettingService } from '@shared';

@Component({
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent implements OnInit, OnDestroy {
  readonly control: FormControl = new FormControl(null);
  readonly settings$: Observable<Setting[]> = this.setting.all$;
  private readonly destroy$: Subject<void> = new Subject<void>();
  readonly options: NavListItemData[] = [
    { link: './skills', label: 'Skills' },
    { link: './talents', label: 'Talents' }
  ];

  constructor(
    private readonly setting: SettingService
  ) {}

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
