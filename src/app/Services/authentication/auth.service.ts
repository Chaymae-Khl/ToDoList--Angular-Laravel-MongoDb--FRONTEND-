import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from'@angular/common/http';
import { User } from 'src/app/Entities/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient:HttpClient) { }
  
  login(data:User){
    return this.httpClient.post('http://mytodobacklara.eu-north-1.elasticbeanstalk.com/api/login',data);
  }
 
  signUp(data:User){
    return this.httpClient.post('http://mytodobacklara.eu-north-1.elasticbeanstalk.com/api/register',data);
  }

}
