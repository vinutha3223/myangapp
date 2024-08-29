import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/service/counter.service';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})

export class HomeComponent implements OnInit {
  todos: any;
  album: any;

  constructor(public _counter:CounterService,private dataService : DataService) { }

  posts:any[]=[];
  comments:any[]=[];

  ngOnInit(): void {
      this.dataService.getPosts().subscribe({
        next:(data) =>this.posts =data,
        error:(err) => console.error('Error in Fetching Posts' , err),
      })

      this.dataService.getComments().subscribe({
        next:(data) => this.comments = data,
        error:(err) => console.error('Error in Fetching Comments' , err),
      })
 
      this.dataService.getTodos().subscribe({
        next:(data) => this.todos = data,
        error:(err) => console.error('Error in Fetching Todos' , err),
      })

      this.dataService.getAlbum().subscribe({
        next:(data) => this.album = data,
        error:(err) => console.error('Error in Fetching album' , err),
      })

  }



  increment(){
    this._counter.increment();
  }

  decrement(){
    this._counter.decrement();
  }

  

  name="parent";
  subParent:object=[
    {
      id:1,
      name:"Tamil",
    },
    {
      id:2,
      name:"Telugu",
    },
    {
      id:1,
      name:"Kannada",
    },
    {
      id:1,
      name:"English",
    },
    {
      id:1,
      name:"Hindi",
    }
  ]


}
