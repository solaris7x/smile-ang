import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentType } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8081/admin/department';

  addDepartment(department: DepartmentType) {
    console.log('addDepartment', department);
    return this.http.post(this.baseUrl, department);
  }

  getDepartments() {
    return this.http.get(this.baseUrl);
  }
}
