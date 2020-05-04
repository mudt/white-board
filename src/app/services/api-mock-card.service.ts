import { Injectable } from '@angular/core';

import { StorageService } from '../lib/storage.service';
import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class ApiMockCardService {
  private key = 'card';

  constructor(private storage: StorageService) {}

  private cardId(): number {
    const id = this.storage.load(`${this.key}.latestId`);
    let cardId = 0;
    if (id) {
      cardId = parseInt(String(id), 10);
    }
    cardId++;
    this.storage.save(`${this.key}.latestId`, cardId);
    return cardId;
  }

  fetchAll(): ICard[] {
    return this.getCardAll();
  }

  create(): ICard {
    const card = {
      id: this.cardId(),
      text: 'Write label',
      position: {
        x: Math.floor(Math.random() * (200 - 80) + 80),
        y: Math.floor(Math.random() * (200 - 80) + 80),
      },
      size: {
        width: 160,
        height: 160,
      },
      color: '#ffffff',
      lock: false,
    };

    const cards = this.getCardAll();
    cards.push(card);

    this.putCardAll(cards);

    return card;
  }

  update(card: ICard): void {
    let cards = this.getCardAll();
    if (cards) {
      cards = cards.map((c) => {
        if (c.id === card.id) {
          return card;
        }
        return c;
      });
    } else {
      cards = [card];
    }
    this.putCardAll(cards);
  }

  delete(id: number): void {
    let cards = this.getCardAll();
    if (cards) {
      cards = cards.filter((c) => c.id !== id);
      this.putCardAll(cards);
    }
  }

  private getCardAll(): ICard[] {
    const cards = this.storage.load<ICard[]>(`${this.key}.cards`);
    return cards ? cards : [];
  }

  private putCardAll(cards: ICard[]): void {
    this.storage.save(`${this.key}.cards`, cards);
  }
}
