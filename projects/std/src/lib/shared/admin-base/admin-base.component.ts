import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { HasCommonFields, HasId, HasSystem, Setting } from '@shared';
import { AdminBaseService } from './admin-base.service';
import { ActivatedRoute, Data } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';
import { SettingService } from '@shared';

@Component({
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss'],
  providers: [AdminBaseService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseComponent<T extends HasId<K> & HasCommonFields & HasSystem, K> implements OnInit, OnDestroy {
  readonly admin = inject(AdminBaseService<T, K>);
  readonly route = inject(ActivatedRoute);
  readonly setting = inject(SettingService);
  readonly items$: BehaviorSubject<T[]> = this.admin.items$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;
  readonly changed$: BehaviorSubject<boolean> = this.admin.changed$;
  readonly data$: Observable<Data> = this.route.data;
  readonly setting$: Observable<Setting | null> = this.setting.selected$;
  readonly destroy$: Subject<void> = new Subject();

  ngOnInit(): void {
    combineLatest([this.data$, this.setting$])
      .pipe(
        takeUntil(this.destroy$),
        tap(([data, { storage }]) => {
          if (!!data && !!storage) {
            this.admin.init({
              path: `/${storage}/${data.path}`,
              component: data.component
            });
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onCloneClick(item: T): void {
    this.admin.clone(item);
  }

  onDeleteClick(id: K): void {
    this.admin.delete(id);
  }

  onEditClick(item: T): void {
    this.admin.edit(item);
  }

  onEditorClick(): void {
    this.admin.editor();
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
