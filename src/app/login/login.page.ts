import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService : AuthenticationService,
              private router : Router) { }
  ngOnInit() {
  }
  onLogin(form){
  //  this.router.navigateByUrl('/menu') //menu
    //console.log(form)
   let authorized =this.authService.login(form.login,form.password)
   if (authorized){
     this.router.navigateByUrl('/menu') //menu
    }
   else {
    this.router.navigateByUrl('login')
   }
  }
}

