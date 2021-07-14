import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartThreeService {

  constructor() { }

  numbers = [0,1,2,3,4,5,6,7,8,9,10]
  numbersBk = [0,1,2,3,4,5,6,7,8,9,10]

  filterNumbers(number){
    this.numbers = this.numbersBk
    let valueFilter = this.numbers.find((i) => i == number);
    this.numbers = [valueFilter]
  }

  clearNumbers(){
    this.numbers = this.numbersBk;
  }

}
