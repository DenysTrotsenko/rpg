import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { AuthService, FirestoreService, SnackbarService, UserService } from '@std';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, throttleTime } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { NAVIGATOR } from '../core/core.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProfileComponent {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required]),
    email: new UntypedFormControl(null),
    uid: new UntypedFormControl(null),
  });

  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  readonly changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService,
    private readonly snackbar: SnackbarService,
    private readonly user: UserService,
    @Inject(NAVIGATOR) private readonly navigator: Navigator
  ) {
    this.init();
  }

  @HostListener('document:keydown.control.s', ['$event']) onCtrlS(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.changed$.value && !this.loading$.value) {
      this.onSubmitClick();
    }
  }

  onCopyToClipboardClick(content: string): void {
    this.navigator.clipboard
      .writeText(`${content}`)
      .then(
        () => this.snackbar.success('Successfully copied to clipboard!'),
        () => this.snackbar.error('Error while copied to clipboard!')
      );
  }

  onSubmitClick(): void {
    const form = this.form.getRawValue();

    if (!form?.uid) { return; }

    this.loading$.next(true);
    this.firestore.update(`users/${form.uid}`, { name: form?.name })
      .pipe(
        tap(() => {
          this.changed$.next(false);
          this.loading$.next(false);
        })
      )
      .subscribe();
  }

  private init(): void {
    combineLatest([this.auth.auth$, this.user.me$])
      .pipe(
        take(1),
        tap(([auth, user]) => this.form.patchValue({
          uid: auth?.uid,
          email: auth?.email,
          name: user?.name
        })),
        tap(() => {
          this.changed$.next(false);
          this.loading$.next(false);
        })
      )
      .subscribe();

    this.form.get('name').valueChanges
      .pipe(
        takeUntilDestroyed(),
        throttleTime(200),
        distinctUntilChanged(),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }
}
