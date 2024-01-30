import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NavListItemData, Setting, SettingService } from '@shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly control: FormControl = new FormControl(null);
  readonly settings$: Observable<Setting[]> = this.setting.all$;
  readonly options: NavListItemData[] = [
    { link: './characteristics', label: 'Characteristics' },
    { link: './skills', label: 'Skills' },
    { link: './talents', label: 'Talents' },
    { link: './item-traits', label: 'Item Traits' }
  ];

  constructor(
    private readonly setting: SettingService
  ) {
    this.setting.selected$
      .pipe(
        takeUntilDestroyed(),
        tap(res => this.control.patchValue(!!res ? res.id : null, { emitEvent: false }))
      )
      .subscribe();
    this.control.valueChanges
      .pipe(
        takeUntilDestroyed(),
        tap(id => this.setting.set(id))
      )
      .subscribe();
  }

  trackById(_, i): string { return i.id; }
}
