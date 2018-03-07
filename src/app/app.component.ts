import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! and has been modified';
  getReversed(str:String){
    let reserved = '';
    for(let i=str.length -1 ;i>=0;i--)
      reserved += str.substring(i,i+1);

    return reserved;
  }
}
