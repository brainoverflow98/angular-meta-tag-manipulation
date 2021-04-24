import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  version = 0;

  ngOnInit()
  { 
    setTimeout(()=>this.version = Math.random() ,200);
  }
}
