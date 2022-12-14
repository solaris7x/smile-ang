import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffType } from '../models/Staff';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/admin/staff';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}



  getStaff():Observable<StaffType[]>{
    return this.http.get<StaffType[]>(baseUrl);
  }

  addStaff(data: any) : Observable<any>{
    console.log('addStaff',data);
    return this.http.post(baseUrl, data);
  }
}
