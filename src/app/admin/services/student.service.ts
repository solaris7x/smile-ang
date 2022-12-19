import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentType } from 'src/app/student/models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<StudentType[]>('http://localhost:8081/admin/student');
  }

  deleteStudent(studentId: number) {
    return this.http.delete('http://localhost:8081/admin/student/' + studentId);
  }
}
