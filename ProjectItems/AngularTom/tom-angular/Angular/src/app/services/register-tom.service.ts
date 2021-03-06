import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Tom } from '../components/tom/tom';
import { RegisterResponse } from '../components/register/register-response/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterTomService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  addFreshNewTom(username:string, password:string, passwordConfirm:string, privId:number){
    let body = new HttpParams();
    /* Point to tomcat server */
    let headers = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    );

      body = body.set('username', username);
      body = body.set('password', password);
      body = body.set('passwordConfirm', passwordConfirm)
      body = body.set('privId', privId.toString());
      /* Point to tomcat server */
    return this.http.post<RegisterResponse>("http://18.219.234.217:8085/AskTOM/RegisterServlet",
    body,
    {headers:headers});
  }
  
}
