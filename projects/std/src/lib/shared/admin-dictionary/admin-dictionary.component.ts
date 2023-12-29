import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { Setting, SettingService } from '@shared';
import { AdminDictionaryService } from './admin-dictionary.service';

@Component({
  templateUrl: './admin-dictionary.component.html',
  styleUrls: ['./admin-dictionary.component.scss'],
  providers: [AdminDictionaryService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDictionaryComponent implements OnInit, OnDestroy {
  private readonly admin = inject(AdminDictionaryService);
  private readonly route = inject(ActivatedRoute);
  private readonly setting = inject(SettingService);
  readonly dictionary$: BehaviorSubject<Record<string, string>> = this.admin.dictionary$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;
  readonly changed$: BehaviorSubject<boolean> = this.admin.changed$;
  readonly data$: Observable<Data> = this.route.data;
  readonly setting$: Observable<Setting | null> = this.setting.selected$;
  readonly destroy$: Subject<void> = new Subject();
  readonly form = new FormGroup({});

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

    this.dictionary$
      .pipe(
        takeUntil(this.destroy$),
        filter(res => !!res),
        tap(res => {
          Object.entries(res).forEach(entry => {
            this.form.addControl(entry[0], new FormControl(entry[1], Validators.required));
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEditorClick(): void {
    this.admin.editor();
  }

  onSaveClick(): void {
    this.admin.save();
  }
}