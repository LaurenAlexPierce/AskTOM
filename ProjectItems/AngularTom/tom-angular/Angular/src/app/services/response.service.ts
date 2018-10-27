import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Response } from './../components/response/response/response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getResponses(){
    return this.http.get<Response>("http://18.219.234.217:8085/AskTOM/GetAllResponsesForTopicServlet");
  }

}
