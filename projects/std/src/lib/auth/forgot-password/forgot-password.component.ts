import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService, AuthWithEmailAndPassword } from '@std';

@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ForgotPasswordComponent {
  private readonly auth = inject(AuthService);

  readonly progress$ = new BehaviorSubject(false);
  readonly form: FormGroup = new FormGroup({
    email: new FormControl<string>(null, [Validators.required, Validators.email])
  });

  onResetPassword(model: Pick<AuthWithEmailAndPassword, 'email'>): void {
    this.progress$.next(true);
    this.auth.sendPasswordResetEmail(model.email)
      .pipe(
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
