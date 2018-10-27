import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Topic } from '../components/home/topic/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicToResponseService {

  topic:Topic= new Topic(0,"",0);

  private topicToComponent = new BehaviorSubject(new Topic(0,"",0));
  currentTopic = this.topicToComponent.asObservable();

  constructor() { }

  changeTopic(topic:Topic){
    this.topic=topic;
    this.topicToComponent.next(this.topic);
  }

}
