import { inject, Injectable } from '@angular/core';
import { CONSOLE, ENABLE_LOGGER } from './logger.module';

@Injectable()
export class LoggerService {
  readonly enable = inject(ENABLE_LOGGER);
  readonly console = inject(CONSOLE);

  error(...args): void {
    if (!(this.enable && this.console)) { return; }

    this.console.error(...args);
  }

  log(...args): void {
    if (!(this.enable && this.console)) { return; }

    this.console.log(...args);
  }

  warn(...args): void {
    if (!(this.enable && this.console)) { return; }

    this.console.warn(...args);
  }
}
