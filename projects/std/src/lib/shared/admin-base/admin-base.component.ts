import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HasCommonFields, HasId, HasSystem } from '@shared';
import { AdminBaseService } from './admin-base.service';
import { AdminServiceConfig } from './admin-base.models';

@Component({
  selector: 'std-admin-base',
  templateUrl: './admin-base.component.html',
  providers: [AdminBaseService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseComponent<T extends HasId<K> & HasCommonFields & HasSystem, K> {
  @Input() set config(options: AdminServiceConfig<T>) {
    if (!options) { return; }
    this.admin.init(options);
  }

  readonly items$: BehaviorSubject<T[]> = this.admin.items$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;
  readonly changed$: BehaviorSubject<boolean> = this.admin.changed$;

  constructor(public admin: AdminBaseService<T, K>) {}

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
