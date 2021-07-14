import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponentTwo } from './image.component';

describe('ImageComponentTwo', () => {
  let component: ImageComponentTwo;
  let fixture: ComponentFixture<ImageComponentTwo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageComponentTwo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
