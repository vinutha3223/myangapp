import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items= [
    { id: 1 , name: 'Almonds'},
    { id: 2 , name: 'Biscuits'},
    { id: 3 , name: 'Honey'}
  ];

}
