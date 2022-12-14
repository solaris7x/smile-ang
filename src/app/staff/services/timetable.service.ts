import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timetable } from '../../models/timetable';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimetable() {
    return this.http.get<Timetable[]>('http://localhost:8081/admin/timetable');
  }

  addTimetable(timetable: Timetable) {
    return this.http.post<Timetable>(
      'http://localhost:8081/admin/timetable',
      timetable
    );
  }

  deleteTimetable(id: number) {
    return this.http.delete(`http://localhost:8081/admin/timetable/${id}`);
  }
}
