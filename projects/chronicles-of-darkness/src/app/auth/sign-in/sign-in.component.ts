import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '@shared';
import { Auth } from '../auth.models';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  readonly progress$ = new BehaviorSubject(false);
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onSignIn(model: Auth): void {
    this.progress$.next(true);
    this.auth.signIn(model)
      .pipe(
        tap(() => this.router.navigate(['/'])),
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
