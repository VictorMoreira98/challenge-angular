import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-two',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponentTwo implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() receiveBoolImage;

}
