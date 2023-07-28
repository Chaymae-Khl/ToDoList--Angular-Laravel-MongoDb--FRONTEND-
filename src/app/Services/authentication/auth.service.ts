import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from'@angular/common/http';
import { User } from 'src/app/Entities/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient:HttpClient) { }
  
  login(data:User){
    return this.httpClient.post('http://localhost:8089/authentication/login',data);
  }
 
  signUp(data:User){
    return this.httpClient.post('http://localhost:8089/authentication/signup',data);
  }
}
