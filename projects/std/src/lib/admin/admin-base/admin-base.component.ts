import { ChangeDetectionStrategy, Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { HasCommonFields, HasId, HasSystem, Setting, SettingService } from '@std';
import { AdminBaseService } from './admin-base.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CodeEditorModule } from '../../shared/code-editor/code-editor.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    templateUrl: './admin-base.component.html',
    styleUrls: ['./admin-base.component.scss'],
    providers: [AdminBaseService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      AsyncPipe,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSelectModule,
      MatExpansionModule,
      MatProgressSpinnerModule,
      CodeEditorModule,
      MatTooltipModule,
      ReactiveFormsModule,
    ]
})
export class AdminBaseComponent<T extends HasId<K> & HasCommonFields & HasSystem, K> implements OnInit, OnDestroy {
  readonly admin = inject(AdminBaseService<T, K>);
  readonly route = inject(ActivatedRoute);
  readonly setting = inject(SettingService);

  readonly sort: FormControl<string> = new FormControl('name');

  readonly items$: Observable<T[]> = this.admin.items$;
  readonly properties$: BehaviorSubject<string[]> = this.admin.properties$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;
  readonly changed$: BehaviorSubject<boolean> = this.admin.changed$;
  readonly data$: Observable<Data> = this.route.data;
  readonly setting$: Observable<Setting | null> = this.setting.selected$;
  readonly destroy$: Subject<void> = new Subject();
  readonly duplicates$: BehaviorSubject<string> = this.admin.duplicates$;
  readonly valid$: BehaviorSubject<boolean> = this.admin.valid$;

  @HostListener('document:keydown.control.s', ['$event']) onCtrlS(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.changed$.value && this.valid$.value && !this.loading$.value) {
      this.onSaveClick();
    }
  }

  ngOnInit(): void {
    combineLatest([this.data$, this.setting$])
      .pipe(
        takeUntil(this.destroy$),
        tap(([data, setting]) => {
          if (!!data && !!setting?.storage) {
            this.admin.init({
              path: `/${setting.storage}/${data.path}`,
              component: data.component
            });
          }
        })
      )
      .subscribe();

    this.sort.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(key => {
          this.admin.sort(key);
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
