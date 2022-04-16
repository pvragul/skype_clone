import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginorsignupComponent } from './components/loginorsignup/loginorsignup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/login-or-signup', pathMatch: 'full'},
  {path: 'login-or-signup', component: LoginorsignupComponent},
  {path: 'skype', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
