import { Component, OnInit } from '@angular/core';
import { fadeInFive, fadeInFour, fadeInOne, fadeInThree, fadeInTwo } from './skills.animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[
    fadeInOne,
    fadeInTwo,
    fadeInThree,
    fadeInFour,
    fadeInFive
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
