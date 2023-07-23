import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/signIn-signUp', pathMatch: 'full' },

  { path: 'signIn-signUp', component: SignInSignUpComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
