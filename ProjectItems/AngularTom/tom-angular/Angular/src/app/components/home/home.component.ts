import { ActiveTom } from './../tom/activeTom';
import { appRoutes } from './../../routes';
import { NavbarComponent } from './../navbar/navbar.component';
import { Topic } from './topic/topic';
import { TomService } from './../../services/tom.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicToResponseService } from 'src/app/services/topic-to-response.service';
import { TokensService } from 'src/app/services/tokens.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // for populating the list of topics.
  topics:Topic[] = [];
  // for checking authorized access.
  authorizedTom:ActiveTom=null;
  // for updating navbar UI
  logOption:string = "Login";

  constructor(private tomService:TomService,
    private router:Router,
    private data: TopicToResponseService,
    private credential:TokensService) { 
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

    this.credential.currentTom.subscribe(
      data => {
        console.trace('Inside credential.currentTom. Getting the current tom.');
        if(data != null){
          console.trace('Recieved Tom with name and privilige: ', data.username, data.privId);
          this.authorizedTom=data;
        }
      }
    )
    this.logOption="Login";
  }

  // Load 
  loadResponses(topic:Topic){
    console.trace('Entered load responses.');
    console.debug('contents of topicSelect: ' + topic.name);
    this.data.changeTopic(topic);
    console.warn('About to route to response');
    this.router.navigateByUrl('/responses');
  }

  // if 
  logout(){
    if(this.authorizedTom != null){
      console.trace('Logout clicked and a user is present.');
      // make the toms null in the local and service.
      this.authorizedTom = null;
      this.credential.currentTom = null;
      // remove actions/UI functionality to add topic.
      this.topics[0] = null;
      // update navbar 
      this.showLogin();
      console.trace('Exiting logout.');
    }
  }

  showLogout(){
    console.trace('Inside showLogout.');
    this.logOption = "Logout";
    this.topics[0] = new Topic(0,"+",1);
    console.trace('Exiting showLogout.');
  }
  showLogin(){
    console.trace('Inside showLogin.');
    this.logOption = "Login";
    console.trace('Exiting showLogin.');
  }
}

