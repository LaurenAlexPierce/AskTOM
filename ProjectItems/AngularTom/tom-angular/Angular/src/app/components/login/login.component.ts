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

  newTom:Tom = new Tom("","",2);

  option:Option={id:1,name:"true"};
  options:Option[]=[
    {id:1, name: "Info"}
  ];

  addTom(){
    new Tom(
      this.newTom.username,
      this.newTom.password,
      this.newTom.privId
    )
  }

  constructor() { }

  ngOnInit() {
    this.option;
    this.options;
  }
}
