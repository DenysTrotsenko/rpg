import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogService } from '@shared';
import { ThreatId } from '@grim-and-perilous/models/common';
import { Threat } from '@grim-and-perilous/models/threat';
import { AdminService } from '@ti/app/admin/admin.service';
import { ThreatsEditComponent } from '@ti/app/admin/threats/threats-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './threats.component.html',
  styleUrls: ['./threats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class ThreatsComponent implements OnInit {
  readonly items$: BehaviorSubject<Threat[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.THREATS,
      responseFn: (data: Threat): Observable<Threat> => this.dialog
        .open(ThreatsEditComponent, { data })
        .afterClosed()
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: ThreatId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Threat): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
