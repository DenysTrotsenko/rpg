import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quirk, QuirkId } from '@grim-and-perilous/models/common';
import { AdminService, DialogService } from '@shared';
import { QuirksEditComponent } from '@ti/app/admin/quirks/quirks-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './quirks.component.html',
  styleUrls: ['./quirks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class QuirksComponent implements OnInit {
  readonly items$: BehaviorSubject<Quirk[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<Quirk, QuirkId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.QUIRKS,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Quirk> {
    return this.dialog.open(QuirksEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: QuirkId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Quirk): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
