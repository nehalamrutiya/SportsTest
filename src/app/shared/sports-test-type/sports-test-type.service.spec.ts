import { TestBed } from '@angular/core/testing';

import { SportsTestTypeService } from './sports-test-type.service';

describe('SportsTestTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsTestTypeService = TestBed.get(SportsTestTypeService);
    expect(service).toBeTruthy();
  });
});
