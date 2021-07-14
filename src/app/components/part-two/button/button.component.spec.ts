import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentTwo } from './button.component';

describe('ButtonComponentTwo', () => {
  let component: ButtonComponentTwo;
  let fixture: ComponentFixture<ButtonComponentTwo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponentTwo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
