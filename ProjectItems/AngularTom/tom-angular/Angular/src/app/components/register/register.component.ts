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
      if(item.name == this.privileges.name){
        this.addNewTom.privId = item.id;
      }
    }
    
    if(this.addNewTom.privId != 0){
      if(this.addNewTom.password == this.addNewTom.passwordConfirm){
        new NewTom(
          this.addNewTom.username,
          this.addNewTom.password,
          this.addNewTom.passwordConfirm,
          this.addNewTom.privId
        )

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
              
             } else {

             }
            },
            error=>{
              console.log(error.message);
            }
          );

      } else {
        /* */
      }
    } else {
      
    }
  }

  checkPrivSelection(name:string){

  }
}
