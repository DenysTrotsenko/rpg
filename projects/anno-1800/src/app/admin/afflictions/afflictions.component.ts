import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Affliction, AfflictionId } from '@grim-and-perilous/models/common';
import { AdminService, DialogService } from '@shared';
import { AfflictionsEditComponent } from '@ti/app/admin/afflictions/afflictions-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class AfflictionsComponent implements OnInit {
  readonly items$: BehaviorSubject<Affliction[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<Affliction, AfflictionId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.AFFLICTIONS,
      responseFn: (data): Observable<Affliction> => this.dialog
        .open(AfflictionsEditComponent, { data })
        .afterClosed()
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: AfflictionId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Affliction): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
