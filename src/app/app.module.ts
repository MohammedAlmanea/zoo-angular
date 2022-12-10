import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
import { AboutComponent } from './about/about.component';
import { LikedPageComponent } from './liked-page/liked-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { CreateAnimalComponent } from './create-animal/create-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
    ZooAnimalComponent,
    AboutComponent,
    LikedPageComponent,
    NavBarComponent,
    UsersComponent,
    CreateAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
