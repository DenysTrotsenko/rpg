import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService, SnackbarService } from '@shared';
import { UserService } from '@cod/app/core/user.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  readonly form: FormGroup = new FormGroup({
    username: new FormControl('')
  });
  readonly user$ = this.user.user$.pipe(
    tap(user => !!user
      ? this.form.reset({
        username: user.username
      })
      : this.form.reset()
    )
  );
  constructor(
    private auth: AuthService,
    private user: UserService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  onSignOut(): void {
    this.auth.signOut()
      .pipe(
        tap(() => this.router.navigate(['/']))
      )
      .subscribe();
  }

  onFormSubmit(form): void {
    this.user.update({
      username: form.username.trim()
    })
      .pipe(
        tap(() => {
          this.snackbar.info('Profile successfully updated!');
        }),
        catchError(() => {
          this.snackbar.error('Failed to update Profile.');
          return EMPTY;
        })
      )
      .subscribe();
  }
}
