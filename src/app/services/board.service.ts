import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  fetchCards(): Observable<ICard[]> {
    const cards = [
      {
        id: 1,
        text: 'aiu',
        position: { x: 100, y: 200 },
        color: 'white',
        lock: false,
      },
      {
        id: 2,
        text: 'cccc',
        position: { x: 20, y: 400 },
        color: 'white',
        lock: false,
      },
    ] as ICard[];

    return of(cards);
  }

  createCard() {
    return of({
      id: 3,
      text: 'Write label',
      position: {
        x: Math.floor(Math.random() * (200 - 80) + 80),
        y: Math.floor(Math.random() * (200 - 80) + 80),
      },
      color: 'white',
      lock: false,
    });
  }
}
