import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogService } from '@shared';
import { AdminService } from '@ti/app/admin/admin.service';
import { Quality, QualityId } from '@grim-and-perilous/models/common';
import { QualitiesEditComponent } from '@ti/app/admin/qualities/qualities-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class QualitiesComponent implements OnInit {
  readonly items$: BehaviorSubject<Quality[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.QUALITIES,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Quality> {
    return this.dialog.open(QualitiesEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: QualityId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Quality): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
