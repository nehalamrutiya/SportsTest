import { TestBed } from '@angular/core/testing';

import { SportsTestDetailService } from './sports-test-detail.service';

describe('SportsTestDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsTestDetailService = TestBed.get(SportsTestDetailService);
    expect(service).toBeTruthy();
  });
});
