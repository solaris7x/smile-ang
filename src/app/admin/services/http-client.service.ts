import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Staff } from '../models/Staff';
import { CourseType } from '../models/course';

export class Branch {
  constructor(public branchName: string) {}
}

export class Course {
  constructor(public courseName: string) {}
}

/* const baseUrl1='http://localhost:8081/api/add-branch';
const baseUrl2='http://localhost:8081/api/add-course'; */
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private baseUrl = 'http://localhost:8081/admin/staff';

  constructor(private httpClient: HttpClient) {}

  getStaff(): Observable<Staff[]> {
    console.log('test call');
    return this.httpClient.get<Staff[]>(`${this.baseUrl}`);
  }

  public deleteStaff(staff: Staff) {
    return this.httpClient.delete<Staff>(
      `${this.baseUrl}` + '/' + `${staff.firstName}`
    );
  }

  public createStaff(staff: Staff): Observable<Object> {
    console.log(staff);
    return this.httpClient.post(`${this.baseUrl}`, staff);
  }

  getBranch() {
    console.log('test call');
    return this.httpClient.get<Branch[]>(this.baseUrl + '/admin/branch');
  }

  public deleteBranch(branch: Branch) {
    return this.httpClient.delete<Branch>(
      this.baseUrl + '/' + branch.branchName
    );
  }

  public createBranches(branch: Branch) {
    return this.httpClient.post('http://localhost:3030/addBranch', branch);
  }

  getCourse(): Observable<CourseType[]> {
    console.log('test call');
    return this.httpClient.get<CourseType[]>(this.baseUrl + '/admin/course');
  }

  public deleteCourse(course: Course) {
    return this.httpClient.delete<Course>(
      this.baseUrl + '/' + course.courseName
    );
  }

  public createCourses(course: Course) {
    return this.httpClient.post(this.baseUrl, course);
  }
}
