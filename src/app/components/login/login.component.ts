import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminType } from 'src/app/admin/models/AdminType';
import { StaffType } from 'src/app/admin/models/Staff';
import { AuthService, loginModel } from 'src/app/services/auth.service';
import { StudentType } from 'src/app/student/models/Student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg: string | null = null;

  model: loginModel = {
    email: '',
    password: '',
    role: '',
  };

  onSubmit() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      (res: any) => {
        console.log(res.role);
        // If admin
        if (res.role === 'Admin') {
          this.authService.userDetails = res as AdminType;
          this.router.navigate(['/admin']);
        }
        // If staff
        else if (res.role === 'Staff') {
          this.authService.userDetails = res as StaffType;
          this.router.navigate(['/staff']);
        }
        // If student
        else if (res.role === 'Student') {
          this.authService.userDetails = res as StudentType;
          this.router.navigate(['/student']);
        } else {
          this.errorMsg = res.message || 'Invalid Credentials';
        }
        console.log(this.authService.userDetails);
      },
      (err) => (this.errorMsg = err.message)
    );
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
