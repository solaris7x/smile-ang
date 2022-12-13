import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseType } from 'src/app/admin/models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8081/admin/course';

  addCourse(course: CourseType) {
    console.log('addCourse', course);
    return this.http.post(this.baseUrl, course);
  }

  getCourse() {
    return this.http.get<CourseType[]>(this.baseUrl);
  }
}
