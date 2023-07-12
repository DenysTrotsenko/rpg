import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AuthService, CampaignService, DialogService } from '@shared';
import { DataService } from '../common/data.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;

  constructor(
    private auth: AuthService,
    private campaign: CampaignService,
    private data: DataService,
    private dialog: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data.init();
  }

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
        tap(() => this.router.navigate(['/auth/sign-in']))
      )
      .subscribe();
  }

  // onSaveDataClick(): void {
  //   const path = StoragePath.THREAT_TYPES;
  //   this.storage.download<any[]>(path).pipe(
  //     switchMap(items => {
  //       const data = JSON.stringify(items, null, 2);
  //       const blob = new Blob([data], { type: 'application/json' });
  //       return this.storage.upload(path.replace('_', '-'), blob);
  //     }),
  //     tap(() => this.snackbar.success('Data successfully saved!')),
  //     catchError(() => {
  //       this.snackbar.error('Some error occurred, try again later!');
  //       return of(null);
  //     })
  //   ).subscribe();
  // }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
