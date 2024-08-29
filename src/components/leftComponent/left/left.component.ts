import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }
switchBtn: boolean= true;
  ngOnInit(): void {
setTimeout(()=>{
this.switchBtn=false;
},5000)
  }
  
  empId : number = 1;
  empName : string = "Vinutha";
  dept: string = "Full Stack Developer";
  projectStatus : string = "Completed"
  
proStatus(){
  if (this.projectStatus == "Completed")
  {
    this.projectStatus = "Not Completed"
  }
  else{
    this.projectStatus = "Completed"
  }
}
}
