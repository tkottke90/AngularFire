import { TestBed, inject } from '@angular/core/testing';

import { CardManagerService } from './card-manager.service';

describe('CardManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardManagerService]
    });
  });

  it('should ...', inject([CardManagerService], (service: CardManagerService) => {
    expect(service).toBeTruthy();
  }));
});
