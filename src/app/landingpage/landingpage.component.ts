import { Component, OnInit } from '@angular/core';
import { BackendcallsService } from '../backendcalls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  result: any;

  constructor(private backendcallsService: BackendcallsService, private router: Router) { 
    this.backendcallsService.getAuthStatus()
    .subscribe(authState => {
      if (!authState.user) {
        console.log("This user is not signup yet");
      } else {
        console.log(JSON.stringify(authState));
        //console.log("this is a sign in user, user email is " + JSON.stringify(authState.user.attributes.email));
        this.router.navigateByUrl('/home');


      }

    });
  }

  ngOnInit() {
    console.log("Welcome to the Landing Page");
   
  }

}
