import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartOneService {

  constructor() { }

  arrNumbersFibonacci = [];

  calculateFibonacci(){
    if(this.arrNumbersFibonacci.length == 1){
      return this.arrNumbersFibonacci.push(1);
    }

    let newValue = this.arrNumbersFibonacci[this.arrNumbersFibonacci.length-1] + this.arrNumbersFibonacci[this.arrNumbersFibonacci.length-2];
    this.arrNumbersFibonacci.push(newValue);
    
  }
}