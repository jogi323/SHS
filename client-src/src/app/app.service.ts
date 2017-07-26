import { Injectable } from '@angular/core';
import { Headers,Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'Rxjs/subject';

@Injectable()
export class AppService {
  url :string;
  //finalUrl = "http://localhost:3030"+this.url;
  data:any;
  constructor(private http:Http) {

  }
  getService(){
    var headers = new Headers;
    headers.append('content-type','application/json;charset=utf-8');
    return this.http.get(this.url,{headers:headers}).map(res=>res.json());
  }
   postService(){
    var headers = new Headers;
    headers.append('content-type','application/json;charset=utf-8');
    return this.http.post(this.url,this.data,{headers:headers}).map(res=>res.json());
  }
   putService(){
    var headers = new Headers;
    headers.append('content-type','application/json;charset=utf-8');
    return this.http.post(this.url,this.data,{headers:headers}).map(res=>res.json());
  }
}
