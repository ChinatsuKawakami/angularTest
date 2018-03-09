import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Morning Musume.';
  imageUrl = '.src/assets/morningmusume.jpg';
  
private _id : number;
private _firstName : string;
private _lastName : string;
private _description : string;

  
}
