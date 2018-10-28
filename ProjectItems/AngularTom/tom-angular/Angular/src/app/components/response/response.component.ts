import { ResponseService } from './../../services/response.service';
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
    private responseService:ResponseService,
    private getResponsefromTopic: TopicToResponseService) { }

  ngOnInit() {
    this.data.currentTopic.subscribe(
      data => {
        console.info('Inside ngOnInit() of response.component.ts');
        // listen for changes to current topic
        this.topic = data;
        if(this.topic != null){
          console.info('Topic passed to response component with Id: ', this.topic.id);
          this.responseService.getResponses(this.topic).subscribe(
            data => {
              // Handle response "responses"
              if (data != null){
                console.trace('Assigning servlet response to responses');
                this.responses = data;
              } else {
                console.debug('Topic has no responses');
              }
            },
            error => {
              console.error('Servlet response error');
            }
          );
        }
        else {
          console.debug('Topic passed from home component was null');
        }
      }
    )
  }
}
