import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Tom } from '../components/tom/tom';

@Injectable({
  providedIn: 'root'
})
export class TomService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getTom(){
    return this.http.get<Tom>("http://");
  }

}
