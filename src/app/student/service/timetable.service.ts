import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timetable } from 'src/app/models/timetable';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimetables(course: string) {
    return this.http.get<Timetable[]>(
      'http://localhost:8081/admin/timetable/find/' + course
    );
  }
}
