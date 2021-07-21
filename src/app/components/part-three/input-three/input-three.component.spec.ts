import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartThreeService } from 'src/app/shared/services/part-three/part-three.service';

import { InputThreeComponent } from './input-three.component';

describe('InputThreeComponent', () => {
  let component: InputThreeComponent;
  let fixture: ComponentFixture<InputThreeComponent>;
  let service: PartThreeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThreeComponent ]
    })
    .compileComponents();
    service = TestBed.inject(PartThreeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterNumbers() when input different is empty', () => {
    spyOn(service, "filterNumbers")
    const input = fixture.debugElement.nativeElement.querySelector('.form-control');
    input.value = '1';
    component.onSubmit();
    fixture.detectChanges();
    expect(service.filterNumbers).toHaveBeenCalled();
  })
});
