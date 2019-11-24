import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path:"",component:LandingpageComponent},
  {path:"auth",component:AuthComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"landing",component:LandingpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
