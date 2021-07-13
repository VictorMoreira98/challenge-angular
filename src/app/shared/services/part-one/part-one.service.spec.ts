import { TestBed } from '@angular/core/testing';

import { PartOneService } from './part-one.service';

describe('PartOneService', () => {
  let service: PartOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
