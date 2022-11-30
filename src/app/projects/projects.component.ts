import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { fadeInStagger } from './projects.animatons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[
    fadeInStagger
  ]
})
export class ProjectsComponent implements OnInit {
projects:any;
  constructor(private service:ProjectsService) { }

  ngOnInit(): void {
    this.projects=this.service.getProjects();
  }

}
