import { Component, OnInit } from '@angular/core';
import { PartOneService } from 'src/app/shared/services/part-one/part-one.service';

@Component({
  selector: 'app-button-one',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponentOne implements OnInit {

  constructor(private partOneService: PartOneService) { }

  arrNumbersFibonacci = [];

  ngOnInit(): void {
  }

  
  callCalculateFibonacci(){
    this.partOneService.calculateFibonacci();
  }


}
