import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from './admin/admin-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { studentRoutes } from './student/student-routing.module';

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
  {
    path: 'aboutus',
    component: AboutusComponent,
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
  // {
  //   path: 'admin',
  //   children: [...adminRoutes]
  //  },
  {
    path: 'student',
    children: [...studentRoutes],
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
