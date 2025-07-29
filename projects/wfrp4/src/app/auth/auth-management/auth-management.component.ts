import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, AuthWithEmailAndPassword } from '@std';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
    templateUrl: './auth-management.component.html',
    styleUrls: ['../auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AuthManagementComponent {
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly modes: Map<string, (code: string) => Observable<boolean>> = new Map()
    .set('resetPassword', this.auth.verifyPasswordResetCode.bind(this.auth))
    .set('verifyEmail', this.auth.applyActionCode.bind(this.auth));

  readonly form: FormGroup = new FormGroup({
    password: new FormControl<string>(null, [Validators.required, Validators.minLength(8)]),
    confirm: new FormControl<string>(null, [Validators.required])
  }, [this.matchValidator()]);

  private readonly verification$: Observable<[boolean, string, string]> = this.route.queryParams.pipe(
    filter(params => !!params),
    switchMap(params => {
      const mode: string = params.mode;
      const code: string = params.oobCode;
      const request = this.modes.get(mode);
      const verify$ = !!request ? request(code) : of(false);
      const code$ = of(mode);
      const mode$ = of(mode);

      return forkJoin([verify$, mode$, code$]);
    }),
    shareReplay(1)
  );
  readonly isShowResetPassword$: Observable<boolean> = this.verification$.pipe(
    map(([verified, mode]) => verified && mode === 'resetPassword')
  );
  readonly isShowVerifyEmail$: Observable<boolean> = this.verification$.pipe(
    map(([verified, mode]) => verified && mode === 'verifyEmail')
  );
  readonly isShowRecoverEmail$: Observable<boolean> = this.verification$.pipe(
    map(([verified, mode]) => verified && mode === 'recoverEmail')
  );

  onConfirmPasswordReset(value: Pick<AuthWithEmailAndPassword, 'password'> & { confirm: string; }): void {
    if (value.password !== value.confirm) { return; }

    this.auth.confirmPasswordReset(this.route.snapshot.queryParams.oobCode, value.password)
      .pipe(
        tap(() => this.router.navigate(['/auth/sign-in']))
      )
      .subscribe();
  }

  private matchValidator(): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get('password');
      const matching = abstractControl.get('confirm');

      if (matching?.errors && !matching?.errors?.confirmedValidator) {
        return null;
      }

      if (control?.value !== matching?.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        matching?.setErrors(error);
        return error;
      } else {
        matching?.setErrors(null);
        return null;
      }
    };
  }
}
