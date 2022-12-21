import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentType } from 'src/app/student/models/Student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<StudentType[]>(environment.apiURL + '/admin/student');
  }

  deleteStudent(studentId: number) {
    return this.http.delete(environment.apiURL + '/admin/student/' + studentId);
  }
}
