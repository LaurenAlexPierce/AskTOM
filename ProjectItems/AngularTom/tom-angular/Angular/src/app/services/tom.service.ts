import { Topic } from './../components/home/topic/topic';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Tom } from '../components/tom/tom';

@Injectable({
  providedIn: 'root'
})
export class TomService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getTopics(){
    return this.http.get<Topic[]>("http://localhost:8085/AskTOM/GetTopics");
  }
  
  getTom(username:string, password:string){
    let body = new HttpParams();
    /* Point to tomcat server */
    let headers = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    );

      body = body.set('username', username);
      body = body.set('password', password);
      /* Point to tomcat server */
    return this.http.post<Tom>("http://loaclhost:8085/AskTOM/LoginServlet",
    body,
    {headers:headers});
  }

  
}
