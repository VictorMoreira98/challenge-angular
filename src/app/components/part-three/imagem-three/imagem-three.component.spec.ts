import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartThreeService } from 'src/app/shared/services/part-three/part-three.service';

import { ImagemThreeComponent } from './imagem-three.component';

describe('ImagemThreeComponent', () => {
  let component: ImagemThreeComponent;
  let fixture: ComponentFixture<ImagemThreeComponent>;
  let service: PartThreeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemThreeComponent ]
    })
    .compileComponents();
    service = TestBed.inject(PartThreeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create div image', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.container-buttons-actions');
    expect(div).toBeDefined();
  })

  it('should call emit when click in button submit', () => {
    spyOn(component.submit, "emit")
    const button = fixture.debugElement.nativeElement.querySelector('.submit');
    button.click();
    fixture.detectChanges();
    expect(component.submit.emit).toHaveBeenCalled();
  })

  it('should call clearNumbers() when click in button clear', () => {
    spyOn(service, "clearNumbers")
    const button = fixture.debugElement.nativeElement.querySelector('.clear');
    button.click();
    fixture.detectChanges();
    expect(service.clearNumbers).toHaveBeenCalled();
  })

});
