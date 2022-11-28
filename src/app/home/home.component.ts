import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
