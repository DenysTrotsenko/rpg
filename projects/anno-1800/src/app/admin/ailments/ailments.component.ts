import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ailment, AilmentId } from '@grim-and-perilous/models/common';
import { AdminService, DialogService } from '@shared';
import { AilmentsEditComponent } from '@ti/app/admin/ailments/ailments-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class AilmentsComponent implements OnInit {
  readonly items$: BehaviorSubject<Ailment[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<Ailment, AilmentId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.AILMENTS,
      responseFn: (data): Observable<Ailment> => this.dialog
        .open(AilmentsEditComponent, { data })
        .afterClosed()
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: AilmentId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Ailment): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
