import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { APPROACHES } from '@bloodbound/app/scion/data/approach';
import { PATHS } from '@bloodbound/app/scion/data/paths';

@Injectable({
  providedIn: 'root'
})
export class ScionService {
  readonly approaches$ = of(APPROACHES);
  readonly paths$ = of(PATHS);
}
