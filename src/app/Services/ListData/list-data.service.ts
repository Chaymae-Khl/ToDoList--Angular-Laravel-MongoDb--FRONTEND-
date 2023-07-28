import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'src/app/Entities/list';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  private getHttpOptions() {
    const sessionId = localStorage.getItem('sessionId');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'sessionId': `${sessionId}`
      })
    };
  }


  constructor(private httpClient:HttpClient) { }
  httpOptions = this.getHttpOptions();
 
  getData(){
    return this.httpClient.get('http://localhost:8089/Api/userLists',this.httpOptions);
  }

  addData(data:List){
    return this.httpClient.post('http://localhost:8089/Api/save',data,this.httpOptions);
  }
}
