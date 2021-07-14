import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputThreeComponent } from './input-three.component';

describe('InputThreeComponent', () => {
  let component: InputThreeComponent;
  let fixture: ComponentFixture<InputThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
