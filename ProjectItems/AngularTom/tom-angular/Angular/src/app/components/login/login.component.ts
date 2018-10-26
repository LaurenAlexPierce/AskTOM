import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Tom } from '../tom/tom';
import { Option } from '../option/option';
import { Router } from '@angular/router';
import { TomService } from 'src/app/services/tom.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[NGXLogger]
})
export class LoginComponent implements OnInit {
  message:string="";
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
         */
        if(data != null){
          this.router.navigateByUrl('/home');
        }
      },
      error => {
        this.message = "Something went wrong. Please try again later.";
      }
    );

  }

  constructor(private loginTom:TomService,
    private router:Router,
    private logger:NGXLogger) {
      this.logger.debug('Inside LoginComponent Constructor.');
     }

  ngOnInit() {
    this.option;
    this.options;
    this.logger.debug('Inside ngOnInit in the LoginComponent.');
  }
}
