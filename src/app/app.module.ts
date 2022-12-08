import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
import { AboutComponent } from './about/about.component';
import { LikedPageComponent } from './liked-page/liked-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
    ZooAnimalComponent,
    AboutComponent,
    LikedPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
