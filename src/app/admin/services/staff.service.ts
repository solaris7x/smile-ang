import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/Staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8081/admin/staff';

  getStaff(): Observable<Staff[]> {
    return this.http.get(this.baseUrl) as Observable<Staff[]>;
  }

  addStaff(staff: Staff) {
    return this.http.post(this.baseUrl, staff);
  }
}
