import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/helpers/auth-guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './@shared/components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './@shared/components/register/register.component';

const routes: Routes = [
{ 
  path: '',
  component: MainPageComponent,
  canActivate: [AuthGuard] 
},
{ 
  path: 'login',
  component: LoginComponent,
},
{ 
  path: 'register',
  component: RegisterComponent,
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
