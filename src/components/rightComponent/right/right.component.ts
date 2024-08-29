import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
cars1 =undefined;
  cars =[
    {
      'carName':'TATA nano',
      'carTyre':'Apollo',
      'CarEngine':'1799cc',
      'carMileage':'40 Kmpl',
      'carStatus':'Available'
    },
    {
      'carName':'Maruthi',
      'carTyre':'MRF Tyres',
      'CarEngine':'1600cc',
      'carMileage':'60 Kmpl',
      'carStatus':'Not Available'
    },
    {
      'carName':'BMW',
      'carTyre':'CEAT',
      'CarEngine':'1899cc',
      'carMileage':'80 Kmpl',
      'carStatus':'Available'
    }
  ];
  courses=[
    {
      'courseName':'ReactJs',
      'courseStatus':'Completed'
    },
    {
      'courseName':'Angular',
      'courseStatus':'Not Completed'
    },
    {
      'courseName':'JavaScript',
      'courseStatus':'Completed'
    },
    {
      'courseName':'Java',
      'courseStatus':'Not Completed'
    },
    {
      'courseName':'SpringBoot',
      'courseStatus':'Not Started'
    }

  ];


}
