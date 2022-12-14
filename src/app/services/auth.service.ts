import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Student } from '../student/models/student';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedIn = false;

  register = (data: Student) => {
    console.log(data);
    return this.http.post<Student>('http://localhost:8081/register', data);
  };

  login = () => {
    console.log('Logged In');
    this.loggedIn = true;
  };

  logout = () => {
    console.log('Logged Out');
    this.loggedIn = false;
  };
}
