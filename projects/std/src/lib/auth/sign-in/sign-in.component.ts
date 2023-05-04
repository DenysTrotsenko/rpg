import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, AuthWithEmailAndPassword } from '@shared';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';

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

  onSignIn(model: AuthWithEmailAndPassword): void {
    this.progress$.next(true);
    this.auth.signIn(model)
      .pipe(
        tap((res) => res ? this.router.navigate(['/']) : null),
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
