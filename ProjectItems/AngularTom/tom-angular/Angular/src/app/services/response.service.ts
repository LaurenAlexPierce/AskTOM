import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Response } from './../components/response/response/response';
import { Injectable } from '@angular/core';
import { Topic } from '../components/home/topic/topic';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getResponses(topic:Topic){
    console.trace('Entering getResponses.');
    let body = new HttpParams();
    /* Point to tomcat server */
    let headers = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    );
    console.trace('assigning to body.');
    body = body.set('topicId', topic.id.toString());

    console.trace('Posting response.');
    return this.http.post<Response[]>("http://18.219.234.217:8085/AskTOM/GetAllResponsesForTopicServlet",
    body,
    {headers:headers});
  }

}
