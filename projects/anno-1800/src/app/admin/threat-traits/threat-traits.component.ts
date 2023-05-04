import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService, DialogService } from '@shared';
import { ThreatTrait, ThreatTraitId, Trait } from '@grim-and-perilous/models/common';
import { ThreatTraitsEditComponent } from '@ti/app/admin/threat-traits/threat-traits-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './threat-traits.component.html',
  styleUrls: ['./threat-traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class ThreatTraitsComponent implements OnInit {
  readonly items$: BehaviorSubject<Trait[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<ThreatTrait, ThreatTraitId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.THREAT_TRAITS,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<ThreatTrait> {
    return this.dialog.open(ThreatTraitsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: ThreatTraitId): void {
    this.admin.delete(id);
  }

  onEditClick(item: ThreatTrait): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
