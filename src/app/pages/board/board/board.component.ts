import { StorageService } from 'src/app/lib/storage.service';
import { ICard } from 'src/app/models/card';

import { Component, OnInit } from '@angular/core';

import { BoardFacade } from '../store/board.facade';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cards$ = this.boardService.cards$;
  loading$ = this.boardService.loading$;

  constructor(
    private boardService: BoardFacade,
    private storage: StorageService,
  ) {}

  ngOnInit(): void {
    this.boardService.loadCards();

    this.loading$.subscribe((v) => console.log('loading', v));
    this.cards$.subscribe((v) => console.log('cards', v));
  }

  updateCard(card: ICard) {
    // this.cards = this.cards.map((c) => {
    //   if (c.id === card.id) {
    //     return card;
    //   }
    //   return c;
    // });
    // this.storage.save('cards', this.cards);
  }

  addCard() {
    // const max = this.cards.reduce((p, c) => (p.id < c.id ? p : c));
    // this.cards.push({
    //   id: max.id + 1,
    //   text: 'Add Card',
    //   color: null,
    //   lock: false,
    //   position: {
    //     x: 100,
    //     y: 100,
    //   },
    // } as ICard);
  }
}
