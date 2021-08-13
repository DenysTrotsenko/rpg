import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  expanded = true;
  // readonly logged$: Observable<boolean> = this.auth.logged$;
  readonly logged$: Observable<boolean> = of(true);
  // readonly admin$: Observable<boolean> = this.user.isAdmin();
  readonly admin$: Observable<boolean> = of(true);

  // constructor(private auth: AuthService, private user: UserService) {}

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }
}
