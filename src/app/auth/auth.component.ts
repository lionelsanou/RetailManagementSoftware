import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import { Router } from '@angular/router';
import {User} from '../models/user';
import {BackendcallsService} from '../backendcalls.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usernameAttributes = "email"; 
  signedIn: boolean;
  user: any;
  greeting: string;
  test:string="lionel";
  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      }
    ]
  }
  result:any;
  constructor(public amplifyService: AmplifyService,private router:Router,private backendservice:BackendcallsService) {
   
    this.result =this.backendservice.getAuthStatus()
    .subscribe(authState => {
      if (!authState.user) {
          this.user = null;
          console.log("This user did not signup yet");
          
      } else {
        console.log(JSON.stringify(authState));
        console.log("Auth is successfull "+JSON.stringify(authState.user.attributes.email));
        this.backendservice.user = {id:authState.user.username,firstname:'',lastname:'',email:authState.user.attributes.email};
        router.navigateByUrl('/home');
     
         
      }
    
});
   
     

    
 
   }

  ngOnInit() {
  }

}
