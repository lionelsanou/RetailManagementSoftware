import { Component, OnInit } from '@angular/core';
import { BackendcallsService } from '../backendcalls.service';
import { IUser } from '../models/IUser';
import { FormGroup, FormControl } from '@angular/forms';
import { API } from 'aws-amplify';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  email: string;
  user: IUser;
  userId: string;
  userCreated: boolean;
  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  }
  );
  params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {}

  };

  constructor(public backendservice: BackendcallsService, public API: APIService, private router: Router) {
  }


  ngOnInit() {
    console.log("ng oninit get called");

    Auth.currentAuthenticatedUser({ bypassCache: false }).then(async user => {
      console.log("the user information is " + JSON.stringify(user));
      if (user) {
        this.isLoggedIn = true;
        console.log("the user loggin status is " + this.isLoggedIn);
        console.log("HomeController user id " + JSON.stringify(user.attributes.sub));
        console.log("HomeController user id " + JSON.stringify(user.attributes.email));
        this.email = user.attributes.email;
        this.userId = user.attributes.sub;

        let result = await this.API.GetUser(this.userId);
        if (!result) {
          console.log("User API has not been called yet");
        } else {
          this.userCreated = true;
          console.log('User API was called at least once');
          console.log("Let's see what inside the user API " + JSON.stringify(result));
          this.userForm = new FormGroup({ firstname: new FormControl(result.firstname), lastname: new FormControl(result.lastname) });
        }

      } else {
        console.log("the user is not logged in");
      }
    }).catch(err => console.log("there is an error on profile component " + err));

  }
  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }
  async onSubmit() {
    this.user = this.userForm.value;
    console.log("The form is " + JSON.stringify(this.user));
    console.log("the user input form is " + JSON.stringify(this.userForm.value));
    this.user = { firstname: this.userForm.get('firstname').value, lastname: this.userForm.get('lastname').value, email: this.email, id: this.userId };
    console.log("the finale " + JSON.stringify(this.user));
    await this.API[this.getType()](this.user);
    this.router.navigate(['/home']);

  }

}
