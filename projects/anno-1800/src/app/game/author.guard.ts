import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
// import {AuthService} from '@shared';
// import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate {
  // constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log(next);
    console.log(state);
    return of(true);
    // return this.auth.logged$
    //   .pipe(
    //     tap(logged => {
    //       if (!logged) { this.router.navigate(['/auth/sign-in']); }
    //     })
    //   );
  }
}
