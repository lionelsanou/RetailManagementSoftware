import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() userIsLoggedIn :boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    Auth.signOut({global:true})
    .then(data=>{
      this.router.navigate(['/landing']);
    })
    .catch(error=>{
      console.log(error);
    })
  }

}
