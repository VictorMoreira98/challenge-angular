import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponentOne } from './label.component';

describe('LabelComponentOne', () => {
  let component: LabelComponentOne;
  let fixture: ComponentFixture<LabelComponentOne>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelComponentOne ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponentOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defined variable "partOneService" ', () => {
    expect(component.partOneService).toBeDefined();
  });

  it('should create label', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.card-text');
    expect(button).toBeDefined();
  })
});
