import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timetable } from 'src/app/models/timetable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimetables(course: string) {
    return this.http.get<Timetable[]>(
      environment.apiURL + '/admin/timetable/find/' + course
    );
  }
}
