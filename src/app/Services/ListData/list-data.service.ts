import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/Entities/list';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  http: any;

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
  deleteData(id:any){
    return this.httpClient.delete('http://localhost:8089/Api/delete/'+id,this.httpOptions);
  }
  UpdateData(id:any,data:List){
    // console.log(id);
    return this.httpClient.put('http://localhost:8089/Api/update/'+id,data,this.httpOptions);
  }
 
}
