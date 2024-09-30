import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService, SettingService } from '@std';
import { DataService } from '@im-common';
import { filter, switchMap } from 'rxjs/operators';
import { take } from 'rxjs';

const aetherId = 'f4b5281249f79091';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../../std/src/lib/auth/auth.module').then(m => m.AuthModule),
    data: { id: aetherId }
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
    resolve: { init: () => {
      const data = inject(DataService);
      const auth = inject(AuthService);
      const setting = inject(SettingService);

      return auth.option$
        .pipe(
          filter(res => !!res),
          take(1),
          switchMap(res => {
            setting.set(res as string);
            return data.data$;
          })
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
