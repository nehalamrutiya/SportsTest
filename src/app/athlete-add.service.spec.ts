import { TestBed } from '@angular/core/testing';

import { AthleteAddService } from './athlete-add.service';

describe('AthleteAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthleteAddService = TestBed.get(AthleteAddService);
    expect(service).toBeTruthy();
  });
});
