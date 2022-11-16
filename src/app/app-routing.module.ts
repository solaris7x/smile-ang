import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // Index page
  {
    path: '',
    component: HomeMainComponent,
  },
  // Register Page
  {
    path: 'register',
    component: RegisterComponent,
  },
  // Login Page
  {
    path: 'login',
    component: LoginComponent,
  },
  // Contact us page
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  // 404 Page
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
