import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService, AuthWithEmailAndPassword } from '@std';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  readonly progress$ = new BehaviorSubject(false);
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onSignUp(model: AuthWithEmailAndPassword): void {
    this.progress$.next(true);
    this.auth.signUp(model)
      .pipe(
        tap(() => this.router.navigate(['/'])),
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
