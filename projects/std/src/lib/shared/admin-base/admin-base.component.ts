import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HasCommonFields, HasId, HasSystem } from '@shared';
import { AdminBaseService } from './admin-base.service';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'std-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss'],
  providers: [AdminBaseService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseComponent<T extends HasId<K> & HasCommonFields & HasSystem, K> {
  readonly items$: BehaviorSubject<T[]> = this.admin.items$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;
  readonly changed$: BehaviorSubject<boolean> = this.admin.changed$;

  constructor(
    private admin: AdminBaseService<T, K>,
    private route: ActivatedRoute
  ) {
    this.route.data
      .pipe(
        take(1),
        tap(data => this.admin.init({
          path: data.path,
          component: data.component
        }))
      )
      .subscribe();
  }

  onAddClick(): void {
    this.admin.add();
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
