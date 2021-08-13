import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IData } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';
import { Observable } from 'rxjs';

@Injectable()
export class DataResolver implements Resolve<IData> {
  constructor(private data: DataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IData> {
    return this.data.data$;
  }
}
