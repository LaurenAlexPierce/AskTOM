import { appRoutes } from './../../routes';
import { NavbarComponent } from './../navbar/navbar.component';
import { Topic } from './topic/topic';
import { TomService } from './../../services/tom.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics:Topic[] = [];

  constructor(private tomService:TomService,
    private router:Router) { }

  goToLogin(){
    
  }

  ngOnInit() {
    this.tomService
      .getTopics()
      .subscribe(
        data => {
          this.topics = data;
        },
        error => {
          console.log(error.message);
        }
      );
  }

}
