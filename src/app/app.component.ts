import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangapp';

  onSubmit(myForm:NgForm){
    console.log('Submitted the form',myForm);
  }
}
