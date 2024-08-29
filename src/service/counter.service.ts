import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counter:number=100;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
  

}
