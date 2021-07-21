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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return +1 in arrNumbersFibonacci when arrNumbersFibonacci = 1', () => {
    service.calculateFibonacci();
    service.arrNumbersFibonacci.forEach((value) => {
      expect(value).toEqual(1);
    })
    expect(service.arrNumbersFibonacci.length).toEqual(2);
  });

  it('should return returns the sum of the last two values', () => {
    service.arrNumbersFibonacci.push(3)
    service.arrNumbersFibonacci.push(5)
    service.calculateFibonacci();

    let index = service.arrNumbersFibonacci.length - 1;
    
    expect(service.arrNumbersFibonacci[index]).toEqual(8);
  });
});
