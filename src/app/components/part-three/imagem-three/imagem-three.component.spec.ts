import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemThreeComponent } from './imagem-three.component';

describe('ImagemThreeComponent', () => {
  let component: ImagemThreeComponent;
  let fixture: ComponentFixture<ImagemThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
