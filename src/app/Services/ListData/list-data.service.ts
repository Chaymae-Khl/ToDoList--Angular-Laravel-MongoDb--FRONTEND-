import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/Entities/list';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  http: any;

  

  token:any=localStorage.getItem('token');
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${this.token}` })};
  constructor(private httpClient:HttpClient) { }
 


  authUser(){
    return this.httpClient.get('http://127.0.0.1:8000/api/user',this.httpOptions);
  }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tasks',this.httpOptions);
  }

  addData(data:any){
    console.log(data);
    return this.httpClient.post('http://127.0.0.1:8000/api/tasks',data,this.httpOptions);
  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/tasks/'+id,this.httpOptions);
  }
  UpdateData(id:any,data:List){
    return this.httpClient.put('http://127.0.0.1:8000/api/tasks/'+id,data,this.httpOptions);
  }
 
}
