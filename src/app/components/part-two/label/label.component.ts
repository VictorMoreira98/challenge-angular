import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-two',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponentTwo implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() receiveBoolImage;

}
