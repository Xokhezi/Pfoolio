import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MeComponent } from './me/me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    NavbarComponent,
    MeComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'me', component:MeComponent},
      {path:'projects', component:ProjectsComponent},
      {path:'skills', component:SkillsComponent},
      {path:'**',component:NotFoundComponent}      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
