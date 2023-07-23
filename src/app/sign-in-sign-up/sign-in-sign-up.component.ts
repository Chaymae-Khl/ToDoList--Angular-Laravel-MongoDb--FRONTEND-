import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../Entities/user';
import { AuthService } from '../Services/authentication/auth.service';

@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.css']
})
export class SignInSignUpComponent {
  user=new User;
  registerForm: any;
  constructor(private authService:AuthService){}

  signupUser(){
    // console.log(this.user);
    this.authService.signUp(this.user).subscribe(res =>{
        console.log("success");
         this.onLoginClick();
    })
   
        
}





  // form Animations
  onSignupClick(): void {
    const loginForm = document.querySelector("form.login") as HTMLElement;
    const loginText = document.querySelector(".title-text .login") as HTMLElement;
    if (loginForm && loginText) {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    }
  }

  onLoginClick(): void {
    const loginForm = document.querySelector("form.login") as HTMLElement;
    const loginText = document.querySelector(".title-text .login") as HTMLElement;
    if (loginForm && loginText) {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    }
  }

  onSignupLinkClick(event: Event): void {
    event.preventDefault();
    const signupBtn = document.querySelector("label.signup") as HTMLElement;
    if (signupBtn) {
      signupBtn.click();
    }
  }
}
