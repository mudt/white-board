import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { StorageService } from '../lib/storage.service';
import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private storage: StorageService) {}

  fetchCards(): Observable<ICard[]> {
    return of(this.getCards());
  }

  createCard() {
    const card = {
      id: 3,
      text: 'Write label',
      position: {
        x: Math.floor(Math.random() * (200 - 80) + 80),
        y: Math.floor(Math.random() * (200 - 80) + 80),
      },
      color: 'white',
      lock: false,
    };
    const cards = this.getCards();
    cards.push(card);
    this.storage.save('cards', cards);

    return of(card);
  }

  updateCard(card: any) {
    let savedCard = this.getCards();
    if (savedCard) {
      savedCard = savedCard.map((c: ICard) => {
        if (c.id === card.id) {
          return card;
        }
        return c;
      });
    } else {
      savedCard = [card];
    }
    this.storage.save('cards', savedCard);
    return of(savedCard);
  }

  private getCards(): ICard[] {
    const cards = this.storage.load<ICard[]>('cards');
    return cards ? cards : [];
  }
}
