import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome to the world of diKash"
  constructor() { }

  ngOnInit(): void {
    console.log(this.message)
  }

}
