import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-two',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponentTwo implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventHideImage = new EventEmitter();

  hideImage(){
    this.eventHideImage.emit();
  }

}
