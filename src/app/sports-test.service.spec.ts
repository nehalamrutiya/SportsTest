import { TestBed } from '@angular/core/testing';

import { SportsTestService } from './sports-test.service';

describe('SportsTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsTestService = TestBed.get(SportsTestService);
    expect(service).toBeTruthy();
  });
});
