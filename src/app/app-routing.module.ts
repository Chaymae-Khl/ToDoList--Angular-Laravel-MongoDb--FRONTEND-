import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { ListComponenentComponent } from './list-componenent/list-componenent.component';
import { AuthGuardService } from './Services/Guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/signIn-signUp', pathMatch: 'full' },

  { path: 'signIn-signUp', component: SignInSignUpComponent  },
  { path: 'list-page', component: ListComponenentComponent  ,canActivate: [AuthGuardService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
