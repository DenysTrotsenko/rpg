import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '@shared';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  constructor(private auth: AuthService, private router: Router) {}

  onSignOutClick(): void {
    this.auth.signOut()
      .pipe(
        tap(() => this.router.navigate(['/']))
      )
      .subscribe();
  }

  onDeleteProfileClick(): void {}
}
