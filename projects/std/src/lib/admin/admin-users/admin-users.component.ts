import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DialogService, User, UserService } from '@std';
import { AdminUsersEditComponent } from './admin-users-edit.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    AdminUsersEditComponent,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    AsyncPipe,
    MatButtonModule,
    MatTooltipModule
]
})
export class AdminUsersComponent {
  readonly items$: Observable<User[]> = this.user.all$;
  constructor(
    private readonly dialog: DialogService,
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
