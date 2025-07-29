import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { switchMap } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AuthService, DialogService, NavListItemData } from '@std';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
]
})
export class SidenavComponent {
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(DialogService);

  @Input() expanded: boolean = true;
  @Input() title: string;
  @Input() options: NavListItemData[];
  @Output() logout = new EventEmitter();

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }

  onLogoutClick(): void {
    this.dialog
      .confirm({
        data: {
          title: 'Logout',
          description: 'Are you sure you want to Logout?',
          ok: 'Logout'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => this.auth.signOut()),
        tap(() => this.logout.emit())
      )
      .subscribe();
  }
}
