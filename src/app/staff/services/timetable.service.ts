import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timetable } from '../../models/timetable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimetable() {
    return this.http.get<Timetable[]>(environment.apiURL + '/admin/timetable');
  }

  addTimetable(timetable: Timetable) {
    return this.http.post<Timetable>(
      environment.apiURL + '/admin/timetable',
      timetable
    );
  }

  deleteTimetable(id: number) {
    return this.http.delete(`http://localhost:8081/admin/timetable/${id}`);
  }
}
