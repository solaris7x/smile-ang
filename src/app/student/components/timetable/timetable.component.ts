import { Component, OnInit } from '@angular/core';
import { Timetable } from 'src/app/models/timetable';
import { TimetableService } from '../../service/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent implements OnInit {
  constructor(private timetableService: TimetableService) {}

  ngOnInit(): void {
    this.getTimetables();
  }

  timetables: Timetable[] = [];

  courseName: string = 'PPE';

  errorMessage: string | null = null;

  getTimetables() {
    // FIXME: Course hardcoded
    console.log(this.courseName);
    this.timetableService.getTimetables(this.courseName).subscribe(
      (data) => {
        console.log(data);
        this.timetables = data;
      },
      (error) => (this.errorMessage = error.message)
    );
  }
}
