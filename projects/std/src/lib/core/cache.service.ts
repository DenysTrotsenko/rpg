import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  private readonly cache: Map<any, any> = new Map<any, any>();

  clear(): void {
    this.cache.clear();
  }

  delete(key: any): boolean {
    return this.cache.delete(key);
  }

  get(key: any): any {
    return this.cache.get(key);
  }

  has(key: any): boolean {
    return this.cache.has(key);
  }

  set(key: any, value: any): Map<any, any> {
    return this.cache.set(key, value);
  }
}
