import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Quirk} from '@flames-of-freedom-1e/models';
import {AdminService} from '@ti/app/admin/admin.service';
import {DialogService, SnackbarService, StorageService} from '@shared';
import {QuirkId} from '@flames-of-freedom-1e/enums';

@Component({
  selector: 'app-quirks',
  templateUrl: './quirks.component.html',
  styleUrls: ['./quirks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuirksComponent implements OnInit {
  readonly items$: BehaviorSubject<Quirk[]> = this.admin.items$;

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
      storage: this.storage
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: QuirkId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Quirk): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
