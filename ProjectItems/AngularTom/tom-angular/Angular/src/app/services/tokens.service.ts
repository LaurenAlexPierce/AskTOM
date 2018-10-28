import { BehaviorSubject } from 'rxjs';
import { ActiveTom } from './../components/tom/activeTom';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  
  tom:ActiveTom= new ActiveTom("",0);

  private trackTom = new BehaviorSubject(new ActiveTom("",0));
  currentTom = this.trackTom.asObservable();

  constructor() { }

  // get the current tom 
  passTom(tom:ActiveTom){
    console.debug('Topic name in changeTopic: ', tom.username, ', ', tom.privId);
    console.warn('Calling topicToComponent.next.');
    this.trackTom.next(tom);
  }
}
