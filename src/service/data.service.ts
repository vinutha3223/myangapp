import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl ='https://jsonplaceholder.typicode.com/posts' ;
  private apiUrl2='https://jsonplaceholder.typicode.com/comments';
  private apiUrl3='https://jsonplaceholder.typicode.com/todos';
  private apiUrl4='https://jsonplaceholder.typicode.com/albums';

  constructor(private http : HttpClient ) { }


getPosts():Observable<any>{
  return this.http.get(this.apiUrl);
 }

getComments():Observable<any>{
  return this.http.get(this.apiUrl2);
}

getTodos():Observable<any>{
  return this.http.get(this.apiUrl3);
}

getAlbum():Observable<any>{
  return this.http.get(this.apiUrl4);
}

}
