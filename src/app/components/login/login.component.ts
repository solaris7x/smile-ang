import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.model);
    this.authService.login();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
