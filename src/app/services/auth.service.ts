import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  login = () => {
    console.log('Logged In');
    this.loggedIn = true;
  };

  logout = () => {
    console.log('Logged Out');
    this.loggedIn = false;
  };

  constructor() {}
}
