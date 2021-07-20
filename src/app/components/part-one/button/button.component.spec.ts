import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartOneService } from 'src/app/shared/services/part-one/part-one.service';

import { ButtonComponentOne } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponentOne;
  let fixture: ComponentFixture<ButtonComponentOne>;
  let service: PartOneService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponentOne ],
      providers: [PartOneService]
    })
    .compileComponents();
    service = TestBed.inject(PartOneService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponentOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.btn');
    expect(button).toBeDefined();
  })

  it('should call method calculateFibonacci()', () => {
    spyOn(service, "calculateFibonacci");
    service.calculateFibonacci();
    expect(service.calculateFibonacci).toHaveBeenCalled();
  })
  
});
