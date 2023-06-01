import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { PermissionId, User } from '@shared';
import { FormControl, FormGroup } from '@angular/forms';
import { PERMISSIONS } from '../../const';

@Component({
  templateUrl: './admin-users-edit.component.html',
  styleUrls: ['./admin-users-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup<any>({
    permissions: new FormControl<PermissionId[]>([])
  });
  readonly permissions = PERMISSIONS;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit(): void {
    this.form.patchValue({
      permissions: this.data?.permissions ?? []
    });
  }
}
