import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  fName ='Vinutha';

courseName:object=[
  {
    id:1,
    name:'JavaScript'
  },
  {
    id:2,
    name:'AngularJs'
  },
  {
    id:1,
    name:'ReactJs'
  }
]

message:string=''
  receiveMessage(event:string){
    this.message=event
  }

  message2:string=''
  receiveMessage2(event:string){
    this.message2=event
  }

  square:number=49;


}
