import { RegisterTomService } from './../../services/register-tom.service';
import { Option } from './../option/option';
import { DropdownMenu } from './../dropdown-menu/dropdown-menu';
import { Tom } from './../tom/tom';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewTom } from '../tom/newTom';
import { RegisterResponse } from './register-response/registerResponse';
@Component({
  selector: '[app-register],[ngbd-dropdown-basic]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  feedback:RegisterResponse = new RegisterResponse(false);
  newTom:Tom = new Tom("","",0);
  addNewTom:NewTom = new NewTom("","","",0);

  privileges:DropdownMenu = new DropdownMenu("Privilege Level");

  options:Option[] = [
    {id:1, name:"Admin"},
    {id:2, name:"User"}
  ];

  setDropdownText(name:string){
    this.privileges.name = name;
  }

  constructor(private registerTomService:RegisterTomService) { }

  ngOnInit() {
  }

  addTom(){
    for(var item of this.options){
      console.trace('Check for assigned option.');
      if(item.name == this.privileges.name){
        console.log('Options match in getTom().');
        this.addNewTom.privId = item.id;
      }
    }
    
    if(this.addNewTom.privId != 0){
      if(this.addNewTom.password == this.addNewTom.passwordConfirm){
        console.debug('Passwords match in getTom().');
        new NewTom(
          this.addNewTom.username,
          this.addNewTom.password,
          this.addNewTom.passwordConfirm,
          this.addNewTom.privId
        )

        console.warn('Calling addFreshNewTom()');

        this.registerTomService.addFreshNewTom( this.addNewTom.username,
          this.addNewTom.password,
          this.addNewTom.passwordConfirm,
          this.addNewTom.privId).subscribe(
            data=>{
              /* 
                Route back to login 
                AND 
                at login, 
                notify user of result w/ an HTML message
              */
             this.feedback = data;
             if(this.feedback){
              console.log('Received response from servlet with the following data: ',data);
             } else {
              console.log('send an addFreshNewTom with response: ',data);
             }
            },
            error=>{
              console.error(error.message);
            }
          );

      } else {
        /* */
        console.debug('Passwords do not match.');
      }
    } else {
      console.debug('No privId is assigned to addNewTom.');
    }
  }

  checkPrivSelection(name:string){

  }
}
