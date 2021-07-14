import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PartThreeService } from 'src/app/shared/services/part-three/part-three.service';

@Component({
  selector: 'app-input-three',
  templateUrl: './input-three.component.html',
  styleUrls: ['./input-three.component.css']
})
export class InputThreeComponent implements OnInit {

  constructor(public service: PartThreeService) { }

  @ViewChild("number") number: ElementRef;

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.number.nativeElement.value){
      this.service.filterNumbers(this.number.nativeElement.value);
    }
  }

}
