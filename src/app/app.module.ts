import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, } from '@angular/common';
import { ListComponenentComponent } from './list-componenent/list-componenent.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInSignUpComponent,
    ListComponenentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
