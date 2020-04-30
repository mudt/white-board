import { Injectable } from '@angular/core';
import { ICard } from '../models/card';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  fetchCards(): ICard[] {
    const cards = [
      {
        id: 1,
        text: 'aiu',
        position: { x: 100, y: 200 },
        color: null,
        lock: false,
      },
      {
        id: 2,
        text: 'cccc',
        position: { x: 20, y: 400 },
        color: null,
        lock: false,
      },
    ] as ICard[];

    return cards;
  }
}
