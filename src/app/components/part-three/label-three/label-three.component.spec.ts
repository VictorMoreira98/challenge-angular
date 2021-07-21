import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelThreeComponent } from './label-three.component';

describe('LabelThreeComponent', () => {
  let component: LabelThreeComponent;
  let fixture: ComponentFixture<LabelThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should defined div number-list', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.numbers-list');
    expect(div).toBeDefined();
  });
});
