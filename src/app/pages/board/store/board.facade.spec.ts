import { TestBed } from '@angular/core/testing';

import { BoardFacade } from './board.facade';

describe('BoardFacard', () => {
  let service: BoardFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
