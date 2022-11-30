import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { arrowFade, slideMe, slideProjects } from './me.animations';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  animations:[
    slideMe,
    slideProjects,
    arrowFade
  ]
})
export class MeComponent implements OnInit {
hover=false;
page=1;
project:any;
projects:any;
switch=false;
hoverOnLeft=false;
hoverOnRight=false;
  constructor(private service:ProjectsService) { 
    this.projects=service.getProjects();
    this.project=this.findProject(this.page);
  }

  ngOnInit(): void {
  }
  hoverSwitch()
  {
    this.hover=!this.hover;
  }
  hoverSwitchLeft() {
    this.hoverOnLeft = !this.hoverOnLeft;
  }
  hoverSwitchRight() {
    this.hoverOnRight = !this.hoverOnRight;
  }
  move()
  {
    this.switch=!this.switch;
  }
  switchProject(method:any)
  {
    if(method==='next')
    { 
      if(this.page < this.projects.length)
      this.page++
    }
    else if(method==='previous')
    {
      if(this.page-1 !=0)  
        this.page--;

    }
    this.project=this.findProject(this.page);
    
         
  }
  findProject(id:any)
  {
    let article = this.projects.find((obj: { id: any; })=>obj.id===id)
    return article;
  }
}
