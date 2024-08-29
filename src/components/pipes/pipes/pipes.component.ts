import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today:Date=new Date();
  upperCase:string="vinutha";
  lowerCase:string="Ram";
  titleCase:string="anguLaR";
  a:number=0.2;
  pi:number=3.1415926539;
  
  object :Object={name:'Vinutha',age:'25',courseOpted:'Java FullStack Development',courseStatus:{frontend:['Html', 'CSS' ,'JavaScript'] ,libaraies:'ReactJs',framework:'Angular'}};
  name: string[]=['R','a','m'];

  names:{[key:number]:any}={1:'raj' ,2:'sita',3:4};

  stu:any=([
    [1,'ram'],
    [2,'vinu'],
  ]);
 
select:string='Frontend';

courses:any={'Frontend':'Angular' ,'Backend':'Java','other': 'FullStack'}



}
