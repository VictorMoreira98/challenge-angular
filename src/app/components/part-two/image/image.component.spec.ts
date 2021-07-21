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

  it('should hidden image when receiveBoolImage equal false', () => {
    const img = fixture.debugElement.nativeElement.querySelector('.img-alternate');
    component.receiveBoolImage = false;
    fixture.detectChanges();
    expect(img.hasAttribute('hidden')).toEqual(true);
  });

});
