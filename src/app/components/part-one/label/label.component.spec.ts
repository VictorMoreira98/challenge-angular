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
});
