import { Tom } from './../tom/tom';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  newTom:Tom = new Tom("","",0);

  constructor() { }

  ngOnInit() {
  }

  addTom(){
    new Tom(
      this.newTom.username,
      this.newTom.password,
      this.newTom.privId
    )
  }
}
