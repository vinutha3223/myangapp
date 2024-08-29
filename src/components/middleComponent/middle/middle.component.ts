import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }
btnToggle: boolean = true; 
  ngOnInit(): void {
     setTimeout(()=>{
         this.btnToggle = false;
     },5000) 
  }
   
  bookId: number = 99;
  bookName: string = "Wings of Fire";
  author: string = "Dr.A.P.J.Kalam";
  bookStatus: string = "Available" ;

  onToggle(){
    if(this.bookStatus == "Available")
    {
      this.bookStatus = "Not Available";
    }
    else{
      this.bookStatus = "Available"
    }
  }

}
