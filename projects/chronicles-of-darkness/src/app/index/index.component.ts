import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@shared';
import { UserService } from '@cod/app/core/user.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;
  readonly admin$: Observable<boolean> = this.user.isAdmin();

  constructor(private auth: AuthService, private user: UserService) {}

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }
}
