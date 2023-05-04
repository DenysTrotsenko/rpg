import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService, DialogService } from '@shared';
import { TraitId, Trait } from '@grim-and-perilous/models/common';
import { TraitsEditComponent } from '@ti/app/admin/traits/traits-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class TraitsComponent implements OnInit {
  readonly items$: BehaviorSubject<Trait[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<Trait, TraitId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.TRAITS,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Trait> {
    return this.dialog.open(TraitsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: TraitId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Trait): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
