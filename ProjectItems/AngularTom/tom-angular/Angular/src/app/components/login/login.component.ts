import { Component, OnInit } from '@angular/core';
import { Tom } from '../tom/tom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newTom:Tom = new Tom("","");

  addTom(){
    new Tom(
      this.newTom.username,
      this.newTom.password
    )
  }

  constructor() { }

  ngOnInit() {
  }

}
