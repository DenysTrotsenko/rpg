import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {filter, switchMap, tap} from 'rxjs/operators';
import { AuthService, DialogService } from '@shared';
import {DeleteDialogComponent} from '@shadowrun/app/profile/delete-dialog/delete-dialog.component';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  constructor(private auth: AuthService, private dialog: DialogService, private router: Router) {}

  onSignOutClick(): void {
    this.auth.signOut()
      .pipe(
        tap(() => this.router.navigate(['/']))
      )
      .subscribe();
  }

  onDeleteProfileClick(): void {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => this.auth.deleteUser(res)),
        tap(() => this.router.navigate(['/']))
      )
      .subscribe();
  }
}
