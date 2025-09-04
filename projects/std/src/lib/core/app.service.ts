import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppConfig {
  name?: string;
  logo?: string;
}

@Injectable()
export class AppService {
  configSrc: BehaviorSubject<AppConfig> = new BehaviorSubject({});
  config$: Observable<AppConfig> = this.configSrc.asObservable();

  setConfig(value: AppConfig): void {
    this.configSrc.next(value);
  }
}
