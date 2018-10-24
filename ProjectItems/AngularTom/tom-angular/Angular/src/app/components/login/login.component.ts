import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Tom } from '../tom/tom';
import { Option } from '../option/option';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newTom:Tom = new Tom("","");

  option:Option={name:"true"};
  options:Option[]=[
    {name: "Info"}
  ];

  addTom(){
    new Tom(
      this.newTom.username,
      this.newTom.password
    )
  }

  constructor() { }

  ngOnInit() {
    this.option;
    this.options;
  }
}
