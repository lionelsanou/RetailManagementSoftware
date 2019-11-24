import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AmplifyAngularModule,AmplifyService} from 'aws-amplify-angular';
import {BackendcallsService} from './backendcalls.service';
import {APIService} from './API.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

//HttpClientModule
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavigationComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
    HttpClientModule
  ],
  providers: [AmplifyService,BackendcallsService,APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
