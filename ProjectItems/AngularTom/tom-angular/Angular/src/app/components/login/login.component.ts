import { TokensService } from './../../services/tokens.service';
import { ActiveTom } from './../tom/activeTom';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, Output } from '@angular/core';
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
  // create options for menu.
  options:Option[]=[
    {id:1, name: "Info"}
  ];

  // for returning 

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
          this.authorizedTom.passTom(data);
          this.router.navigateByUrl('/home');
          console.debug('Data has been received in addTom().', data);
        }
        else{
          console.trace('AddTom() returned null.');
        }
      },
      error => {
        console.trace('Error with request.');
        this.message = "Something went wrong. Please try again later.";
      }
    );
  }

  constructor(private loginTom:TomService,
    private authorizedTom:TokensService,
    private router:Router,
    private logger:NGXLogger) {
      console.debug('Inside LoginComponent Constructor.');
     }

  ngOnInit() {
    this.option;
    this.options;
    console.debug('Inside ngOnInit in the LoginComponent.');
  }
}
