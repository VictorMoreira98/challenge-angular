import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentOne } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponentOne;
  let fixture: ComponentFixture<ButtonComponentOne>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponentOne ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponentOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
