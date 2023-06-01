import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AuthService, SnackbarService } from '@shared';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { filter, take, tap } from 'rxjs/operators';
import { NAVIGATOR } from '../core/core.module';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    displayName: new UntypedFormControl(null),
    email: new UntypedFormControl(null),
    uid: new UntypedFormControl(null),
  });

  constructor(
    private auth: AuthService,
    private snackbar: SnackbarService,
    @Inject(NAVIGATOR) private navigator: Navigator
  ) {}

  ngOnInit(): void {
    this.auth.auth$
      .pipe(
        take(1),
        filter(user => !!user),
        tap(user => this.form.patchValue({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })),
      )
      .subscribe();
  }

  onCopyToClipboardClick(content: string): void {
    this.navigator.clipboard
      .writeText(`${content}`)
      .then(
        () => this.snackbar.success('Successfully copied to clipboard!'),
        () => this.snackbar.error('Error while copied to clipboard!')
      );
  }
}
