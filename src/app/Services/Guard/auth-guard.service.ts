import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  token:any=localStorage.getItem('token');
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${this.token}` })};

  canActivate() {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/signIn-signUp']);
      return false;
    }
  }

}
