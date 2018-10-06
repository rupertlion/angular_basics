import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'new-app';

  video = {
    title: 'Despacito',
    views: 2,
    liked: true
  }

  videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
 ]

  isShown: boolean = false
  show: boolean = false
  selector:any = 'Show'

  constructor() { }

  handleClick(){
    console.log('Someone clicked on button on the template :-)')
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.selector = "Hide this message - it's just too dangerous...";
    else
      this.selector = "Show me the money!!!!!";
  }
}
