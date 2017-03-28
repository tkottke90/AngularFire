import { TestBed, inject } from '@angular/core/testing';

import { UserHandlerService } from './user-handler.service';

describe('UserHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHandlerService]
    });
  });

  it('should ...', inject([UserHandlerService], (service: UserHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
