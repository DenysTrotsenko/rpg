import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ailment} from '@flames-of-freedom-1e/models';
import {DialogService, SnackbarService, StorageService} from '@shared';
import {AilmentId} from '@flames-of-freedom-1e/enums';
import {AdminService} from '@ti/app/admin/admin.service';

@Component({
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsComponent implements OnInit {
  readonly items$: BehaviorSubject<Ailment[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/ailments.json',
      snackbar: this.snackbar,
      storage: this.storage
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: AilmentId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Ailment): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
