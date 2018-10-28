import { appRoutes } from './../../routes';
import { NavbarComponent } from './../navbar/navbar.component';
import { Topic } from './topic/topic';
import { TomService } from './../../services/tom.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicToResponseService } from 'src/app/services/topic-to-response.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics:Topic[] = [];

  topicSelect:Topic;

  constructor(private tomService:TomService,
    private router:Router,
    private data: TopicToResponseService) { 
    }

  goToLogin(){
    
  }

  ngOnInit() {
    this.tomService
      .getTopics()
      .subscribe(
        data => {
          // get the topics. 
          console.log('In ngOnInit in home. Successful get topics.', data);
          this.topics = data;
        },
        error => {
          // Log the error
          console.log(error.message);
        }
      );

      // this is the key service for listening to 
      // topic selection for sending to the topics 
      // component
    this.data.currentTopic.subscribe(
      data => {
        console.trace('inside the ngOnInit data service call instantiation.');
        // listen for changes to current topic
      }
    )
  }

  // Load 
  loadResponses(topic:Topic){
    console.trace('Entered load responses.');
    console.debug('contents of topicSelect: ' + this.topicSelect.name);
    this.data.changeTopic(this.topicSelect);
    console.warn('About to route to response');
    this.router.navigateByUrl('/response');
  }

  signedOn(){
    // this is where we handle the logout by invalidating the user from service.

  }
}

