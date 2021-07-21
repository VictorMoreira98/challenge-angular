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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter param number when call filterNumbers ', () => {
    service.filterNumbers(1);
    expect(service.numbers[0]).toEqual(1);
  });

  
  it('should numbers equal numbersBk', () => {
    service.clearNumbers;
    expect(service.numbers).toEqual(service.numbersBk);
  });
});
