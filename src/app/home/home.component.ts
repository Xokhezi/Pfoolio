import { Component, OnInit } from '@angular/core';
import { appear, fadeMain, fadeSecond, mainDivUp, meDivUp } from './home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    fadeMain,
    fadeSecond,
    appear,
    mainDivUp,
    meDivUp
  ]
})
export class HomeComponent implements OnInit {
  start=true;
  tour=false;  

  constructor() { }

  ngOnInit(): void {
  }
  startTour()
  {
    this.start=false;
    this.tour= true;
  }
 

}
