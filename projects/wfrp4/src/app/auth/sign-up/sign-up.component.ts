import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService, AuthWithEmailAndPassword, SettingService } from '@std';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['../auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SignUpComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly setting = inject(SettingService);

  readonly progress$ = new BehaviorSubject(false);
  readonly options$ = this.setting.all$;

  readonly form: FormGroup = new FormGroup({
    email: new FormControl<string>(null, [Validators.required, Validators.email]),
    password: new FormControl<string>(null, [Validators.required, Validators.minLength(8)]),
  });

  onSignUp(model: AuthWithEmailAndPassword): void {
    this.progress$.next(true);
    this.auth.signUp(model)
      .pipe(
        delay(100),
        tap(() => this.router.navigate(['/'])),
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
