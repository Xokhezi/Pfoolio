import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
projects:any;
  constructor() { 
    this.projects =[
      {id:1,name:'Company Web',summary:'Web app as presentation of products. Includes functions like search,animations - app displaying data about products,articles etc from arrays - live',url:'https://xokhezi.github.io/NuovoWeb/',img:'assets/nw.png'},
      {id:2,name:'Notio',summary:'DEMO - Knowledge-based web app, where users could create, share and SEARCH for notes regarding tags',url:'https://xokhezi.github.io/Notio/',img:'assets/nt.png'},
      {id:3,name:'TelSor',summary:'SourceCode - MVC app used for sorting of imports for accounting. Identity & Entity Frameworks. DB on SQL server.',url:'https://github.com/Xokhezi/TelSor',img:'assets/ts.png'}
    ];
  }
  getProjects()
  {    
    return this.projects;
  }
}
