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
        text: 'aiu',
        position: { x: 100, y: 200 },
        color: null,
        lock: false,
      },
      {
        text: 'cccc',
        position: { x: 20, y: 400 },
        color: null,
        lock: false,
      },
    ] as ICard[];

    return cards;
  }
}
