import { Option } from './../option/option';
import { DropdownMenu } from './../dropdown-menu/dropdown-menu';
import { Tom } from './../tom/tom';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: '[app-register],[ngbd-dropdown-basic]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  newTom:Tom = new Tom("","",0);

  privileges:DropdownMenu = new DropdownMenu("Privilege Level");

  options:Option[] = [
    {id:1, name:"Admin"},
    {id:2, name:"User"}
  ];

  setDropdownText(name:string){
    this.privileges.name = name;
  }

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
