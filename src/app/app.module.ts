import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    NavbarComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'me', component:MeComponent},
      {path:'**',component:NotFoundComponent}      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
