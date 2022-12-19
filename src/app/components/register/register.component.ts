import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StudentType } from 'src/app/student/models/Student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  model: StudentType = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: 0,
    dob: '',
  };

  confirmPassword = '';

  error: string | null = '';

  success: string | null = '';

  onSubmit() {
    // console.log(this.model);
    this.authService.register(this.model).subscribe(
      (data) => (this.success = `Student registered with ID ${data.id}`),
      (err) => (this.error = err.message)
    );
  }

  resetFormModel() {
    // this.model = new Student('', '', '', '', '', '', ['Computer Science']);
  }
}
