import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogService, User, UserService } from '@shared';
import { AdminUsersEditComponent } from './admin-users-edit.component';
import { filter, tap } from 'rxjs/operators';

@Component({
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersComponent {
  readonly items$: Observable<User[]> = this.user.all$.pipe(tap(res => console.log(res)));

  constructor(
    private readonly dialog: DialogService,
    private readonly route: ActivatedRoute,
    private readonly user: UserService
  ) {}

  onEditClick(user: User): void {
    this.dialog.open(AdminUsersEditComponent, { data: user }).afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => this.user.update(user.id, res))
      )
      .subscribe();
  }
}
