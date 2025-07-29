import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, AuthWithEmailAndPassword } from '@std';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['../auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SignInComponent {
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly progress$ = new BehaviorSubject(false);
  readonly id = this.route.parent.snapshot.data?.id ?? null;
  readonly label = this.route.parent.snapshot.data?.label;
  readonly options = this.route.parent.snapshot.data?.options;
  readonly isResourceRequired = !!this.label && !!this.options;
  readonly form: FormGroup = new FormGroup({
    email: new FormControl<string>(null, [Validators.required, Validators.email]),
    password: new FormControl<string>(null, [Validators.required, Validators.minLength(8)]),
    resource: new FormControl<string>(this.id, this.isResourceRequired ? [Validators.required] : []),
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
