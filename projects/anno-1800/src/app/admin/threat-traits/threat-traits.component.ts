import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { Trait, TraitId } from '@grim-and-perilous/models/common';
import { AdminService } from '@ti/app/admin/admin.service';
import { TraitsEditComponent } from '@ti/app/admin/traits/traits-edit.component';

@Component({
  selector: 'app-threat-traits',
  templateUrl: './threat-traits.component.html',
  styleUrls: ['./threat-traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatTraitsComponent implements OnInit {
  readonly items$: BehaviorSubject<Trait[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/quirks.json',
      snackbar: this.snackbar,
      storage: this.storage,
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
