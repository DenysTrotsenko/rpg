import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminService, HasId, HasName } from '@shared';

@Component({ template: '' })
export abstract class AdminBaseComponent<T extends HasId<K> & HasName, K> {
  readonly items$: BehaviorSubject<T[]> = this.admin.items$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;

  protected constructor(
    public admin: AdminService<T, K>
  ) {}

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: K): void {
    this.admin.delete(id);
  }

  onEditClick(item: T): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
