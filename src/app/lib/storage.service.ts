import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private preffix = 'white-board';

  constructor() {}

  private makeKey(key: string) {
    return `${this.preffix}.${key}`;
  }

  save(key: string, val: any) {
    localStorage.setItem(this.makeKey(key), JSON.stringify(val));
  }

  load<T>(key: string) {
    const data = localStorage.getItem(this.makeKey(key));
    return data ? (JSON.parse(data) as T) : null;
  }
}
