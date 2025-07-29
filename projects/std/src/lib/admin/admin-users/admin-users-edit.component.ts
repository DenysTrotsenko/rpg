import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PermissionId, User } from '@std';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    templateUrl: './admin-users-edit.component.html',
    styleUrls: ['./admin-users-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        MatButtonModule,
        MatListModule,
        MatDialogModule
    ]
})
export class AdminUsersEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup<any>({
    permissions: new FormControl<PermissionId[]>([])
  });
  readonly permissions = Object.values(PermissionId);

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit(): void {
    this.form.patchValue({
      permissions: this.data?.permissions ?? []
    });
  }
}
