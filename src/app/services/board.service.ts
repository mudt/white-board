import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { StorageService } from '../lib/storage.service';
import { ICard } from '../models/card';
import { ApiMockCardService } from './api-mock-card.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private cardApi: ApiMockCardService) {}

  fetchCards(): Observable<ICard[]> {
    return of(this.cardApi.fetchAll());
  }

  createCard(): Observable<ICard> {
    const card = this.cardApi.create();
    return of(card);
  }

  updateCard(card: ICard): Observable<boolean> {
    this.cardApi.update(card);
    return of(true);
  }

  deleteCard(id: number): Observable<boolean> {
    this.cardApi.delete(id);
    return of(true);
  }
}
