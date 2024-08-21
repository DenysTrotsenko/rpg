import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, Campaign, CampaignId, CampaignService } from '@std';
import { DataService } from '@im-common';
import { take } from 'rxjs';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../../std/src/lib/auth/auth.module').then(m => m.AuthModule),
    data: { label: 'Campaign' },
    resolve: { options: () => inject(CampaignService).all$ }
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
    resolve: { init: () => {
      const data = inject(DataService);
      const auth = inject(AuthService);
      const campaign = inject(CampaignService);

      return auth.option$
        .pipe(
          filter(res => !!res),
          take(1),
          switchMap(res => {
            campaign.set(res as CampaignId);
            return data.data$;
          }),
        );
    }}
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
