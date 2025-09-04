import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, AuthWithEmailAndPassword, SettingService } from '@std';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['../auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SignInComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly setting = inject(SettingService);

  readonly progress$ = new BehaviorSubject(false);
  readonly options$ = this.setting.all$;
  readonly form: FormGroup = new FormGroup({
    email: new FormControl<string>(null, [Validators.required, Validators.email]),
    password: new FormControl<string>(null, [Validators.required, Validators.minLength(8)]),
    resource: new FormControl<string>(null, [Validators.required]),
  });

  onSignIn(model: AuthWithEmailAndPassword & { resource: unknown; }): void {
    this.progress$.next(true);
    this.auth.signIn(model)
      .pipe(
        tap(res => res ? this.auth.setOption(model?.resource) : null),
        delay(100),
        tap(res => res ? this.router.navigate(['/']) : null),
        finalize(() => this.progress$.next(false))
      )
      .subscribe();
  }
}
