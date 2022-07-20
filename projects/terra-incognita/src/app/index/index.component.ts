import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '@shared';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;

  constructor(private auth: AuthService) {}

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }
}
