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
    // FIXME: Course hardcoded
    this.timetableService.getTimetables('PPE').subscribe(
      (data) => {
        console.log(data);
        this.timetables = data;
      },
      (error) => (this.errorMessage = error.message)
    );
  }

  timetables: Timetable[] = [];

  errorMessage: string | null = null;
}
