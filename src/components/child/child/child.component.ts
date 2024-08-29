import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: any;
  @Input() cName:any;

  @Output() messageEvent= new EventEmitter<string>();
  @Output() carName= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit("Hello From Child Component")
    console.log("clicked")
  }

  fromChild(){
    this.carName.emit("Tata From Child Component")
  }

}
