import { TestBed, inject } from '@angular/core/testing';

import { CommonMethodsService } from './common-methods.service';

describe('CommonMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonMethodsService]
    });
  });

  it('should be created', inject([CommonMethodsService], (service: CommonMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
