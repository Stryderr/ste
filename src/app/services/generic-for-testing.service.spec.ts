import { TestBed } from '@angular/core/testing';

import { GenericForTestingService } from './generic-for-testing.service';

describe('GenericForTestingService', () => {
  let service: GenericForTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericForTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
