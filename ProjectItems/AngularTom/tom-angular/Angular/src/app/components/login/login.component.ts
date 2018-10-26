import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Tom } from '../tom/tom';
import { Option } from '../option/option';
import { Router } from '@angular/router';
import { TomService } from 'src/app/services/tom.service';

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
    
    this.loginTom.getTom(
      this.newTom.username,
      this.newTom.password
    ).subscribe(
      data => {
        /**
         * Pass result to home with a 
         * logged-in user 
         *  to P         * Pass result to 
outer.navigateByUrl('/home');
        }
      },
      error => {

      }
    );

  }

  constructor(private loginTom:TomService,
    private router:Router) { }

  ngOnInit() {
    this.option;
    this.options;
