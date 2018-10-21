import { Topic } from './topic/topic';
import { TomService } from './../../services/tom.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics:Topic[] = [];

  constructor(private TomService:TomService) { }

  ngOnInit() {
    this.TomService
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