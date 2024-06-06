import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService, Campaign, CampaignId, CampaignService } from '@std';
import { DataService } from '@im-common';
import { tap } from 'rxjs/operators';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../../../std/src/lib/auth/auth.module').then(m => m.AuthModule),
  //   data: { label: 'Campaign' },
  //   resolve: { options: () => inject(CampaignService).all$ }
  // },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
    // resolve: { init: () => {
    //   const data = inject(DataService);
    //   const auth = inject(AuthService);
    //   const campaign = inject(CampaignService);
    //
    //   data.init();
    //   auth.option$
    //     .pipe(
    //       tap(res => campaign.set(res as CampaignId))
    //     )
    //     .subscribe();
    // }}
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
