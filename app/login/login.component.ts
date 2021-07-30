import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'kash';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;




  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if (this.username === "kash" && this.password === "dummy"){
      //Redirector to Welcome page
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
      
    } else {
      this.invalidLogin = true
    }
  }
}
