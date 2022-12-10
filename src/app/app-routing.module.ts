import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LikedPageComponent } from './liked-page/liked-page.component';
import { UsersComponent } from './users/users.component';
import { ZooComponent } from './zoo/zoo.component';

const routes: Routes = [
  {path: '',component: ZooComponent},
  {path: 'info',component: AboutComponent},
  {path: 'likedAnimals', component:LikedPageComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
