import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AmplifyService} from 'aws-amplify-angular';
import {User} from './models/user';
@Injectable({
  providedIn: 'root'
})
export class BackendcallsService {
  public user:User;
  constructor(private amplifyService:AmplifyService) {

   }

   public getAuthStatus(){
     return this.amplifyService.authStateChange$;    
   }


}
