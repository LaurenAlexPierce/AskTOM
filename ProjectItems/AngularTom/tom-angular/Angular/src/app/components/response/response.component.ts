import { Topic } from './../home/topic/topic';
import { TopicToResponseService } from './../../services/topic-to-response.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Response } from './response/response';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  topic: Topic;
  responses:Response[]=[];

  constructor( private data: TopicToResponseService,
    private getResponsefromTopic: TopicToResponseService) { }

  ngOnInit() {
    this.data.currentTopic.subscribe(
      data => {
        // listen for changes to current topic
        this.topic = data;
        if(this.topic != null){
          
        }
      }
    )
  }


}
