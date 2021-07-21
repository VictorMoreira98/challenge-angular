import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponentTwo } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponentTwo;
  let fixture: ComponentFixture<LabelComponentTwo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelComponentTwo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hidden label when receiveBoolImage equal false', () => {
    component.receiveBoolImage = false;
    fixture.detectChanges();
    const label = fixture.debugElement.nativeElement.querySelector('.label-image');
    expect(label).toBeTruthy();
  });
});
