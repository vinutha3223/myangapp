import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/service/counter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [CounterService]
})
export class AboutComponent implements OnInit {
  @Input() Vinutha: any;
  @Input() subChild :any;

  constructor(public _counter:CounterService) { }

  ngOnInit(): void {
  }
  
  increase(){
    this._counter.increment();
    console.log("logged");
  }
  decrease(){
    this._counter.decrement();
  }


}
