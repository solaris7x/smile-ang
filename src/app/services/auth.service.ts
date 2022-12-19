import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StudentType } from '../student/models/Student';
import { StaffType } from '../admin/models/Staff';
import { AdminType } from '../admin/models/AdminType';
import { Router } from '@angular/router';

export interface loginModel {
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  userDetails: StudentType | StaffType | AdminType | null = null;

  register = (data: StudentType) => {
    console.log(data);
    return this.http.post<StudentType>('http://localhost:8081/register', data);
  };

  login = (creds: loginModel) => {
    console.log('Logged In');
    return this.http.post('http://localhost:8081/login', creds);
    // this.loggedIn = true;
  };

  logout = () => {
    console.log('Logged Out');
    this.userDetails = null;
    // Redirect to login page
    this.router.navigate(['/login']);

    // this.loggedIn = false;
  };
}
