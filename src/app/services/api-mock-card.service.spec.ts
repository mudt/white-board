import { TestBed } from '@angular/core/testing';

import { ApiMockCardService } from './api-mock-card.service';

describe('MockApiService', () => {
  let service: ApiMockCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMockCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
