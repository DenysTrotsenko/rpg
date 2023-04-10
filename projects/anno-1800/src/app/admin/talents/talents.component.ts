import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Talent, TalentId } from '@grim-and-perilous/models/common';
import { AdminService } from '@ti/app/admin/admin.service';
import { DialogService } from '@shared';
import { TalentsEditComponent } from '@ti/app/admin/talents/talents-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class TalentsComponent implements OnInit {
  readonly items$: BehaviorSubject<Talent[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.TALENTS,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Talent> {
    return this.dialog.open(TalentsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: TalentId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Talent): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
