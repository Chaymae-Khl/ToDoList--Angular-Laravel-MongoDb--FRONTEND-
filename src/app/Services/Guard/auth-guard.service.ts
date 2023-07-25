import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  sessionId:any=localStorage.getItem('sessionId');
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${this.sessionId}` })};

  canActivate() {
    if (this.sessionId) {
      return true;
    } else {
      this.router.navigate(['/signIn-signUp']);
      return false;
    }
  }

}
