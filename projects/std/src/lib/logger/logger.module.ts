import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerService } from './logger.service';

export const ENABLE_LOGGER = new InjectionToken<boolean>('ENABLE_LOGGER');
export const CONSOLE = new InjectionToken<Console>('CONSOLE');

@NgModule()
export class LoggerModule {
  static forRoot(enable: boolean = false): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: ENABLE_LOGGER,
          useValue: enable
        },
        {
          provide: CONSOLE,
          useValue: console
        },
        LoggerService
      ]
    };
  }
}
