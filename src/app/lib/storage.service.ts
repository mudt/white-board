import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private preffix = 'white-board';

  constructor() {}

  key(key: string) {
    return `${this.preffix}.key`;
  }

  save(key: string, val: any) {
    localStorage.setItem(this.key(key), JSON.stringify(val));
  }

  load<T>(key: string) {
    const data = localStorage.getItem(this.key(key));
    return data ? (JSON.parse(data) as T) : null;
  }
}
