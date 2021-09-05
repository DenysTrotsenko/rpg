import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService, AuthWithEmailAndPassword } from '@shared';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  readonly progress$ = new BehaviorSubject(false);
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
