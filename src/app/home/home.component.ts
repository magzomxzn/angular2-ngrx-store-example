import { Component, OnInit } from '@angular/core';
import { TodoAppComponent } from './todo';

@Component({
  selector: 'my-home',
  directives: [TodoAppComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
