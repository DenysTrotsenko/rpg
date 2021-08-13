import { Directive, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { AdminService } from './admin.service';
import { IBase } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

export interface AdminBaseConfig {
  filename: string;
}

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AdminBaseComponent<T extends IBase> implements OnInit {
  private readonly changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly books$ = this.data.data$.pipe(map(i => i.books || []));
  readonly data$: Observable<T[]> = this.admin.data$;
  readonly disabled$: Observable<boolean> = combineLatest([
    this.changed$.asObservable(), this.loading$.asObservable()
  ]).pipe(map(([changed, loading]) => !changed || !!loading));
  readonly form: FormGroup;

  protected constructor(public CONFIG: AdminBaseConfig, public admin: AdminService, public data: DataService) {}

  ngOnInit(): void {
    this.admin.download(this.CONFIG.filename).subscribe();
  }

  onAdd(item: T, dir: FormGroupDirective): void {
    this.changed$.next(true);
    dir.resetForm();
    this.form.reset();
    !!item.id
      ? this.admin.edit(item).subscribe()
      : this.admin.add(item).subscribe();
  }

  onCancel(): void {
    this.form.reset();
  }

  onDelete(item: Partial<T>): void {
    this.changed$.next(true);
    this.admin.delete(item.id).subscribe();
  }

  onEdit(item: Partial<T>): void {
    this.form.reset({
      ...item
    });
  }

  onSave(): void {
    this.loading$.next(true);
    this.data$
      .pipe(
        take(1),
        map(data => this.admin.getSortedItems(data)),
        map(data => this.admin.getPrettifiedStrings(data)),
        switchMap(data => this.admin.upload(this.CONFIG.filename, data)),
        finalize(() => {
          this.changed$.next(false);
          this.loading$.next(false);
        })
      )
      .subscribe();
  }
}
