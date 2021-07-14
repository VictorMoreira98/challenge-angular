import { TestBed } from '@angular/core/testing';

import { PartThreeService } from './part-three.service';

describe('PartThreeService', () => {
  let service: PartThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
