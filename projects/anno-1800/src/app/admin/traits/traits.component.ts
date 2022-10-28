import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Trait} from '@flames-of-freedom-1e/models';
import {AdminService} from '@ti/app/admin/admin.service';
import {DialogService, SnackbarService, StorageService} from '@shared';
import {TraitId} from '@flames-of-freedom-1e/enums';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraitsComponent implements OnInit {
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
      storage: this.storage
    });
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: TraitId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Trait): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
