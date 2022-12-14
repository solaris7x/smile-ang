import { Component, OnInit } from '@angular/core';
import { Timetable } from '../../../models/timetable';
import { TimetableService } from '../../services/timetable.service';

@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.component.html',
  styleUrls: ['./view-timetable.component.css'],
})
export class ViewTimetableComponent implements OnInit {
  constructor(private timetableService: TimetableService) {}

  timetables: Timetable[] = [];

  ngOnInit(): void {
    this.timetableService.getTimetable().subscribe(
      (data) => {
        this.timetables = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTimetable(id: number) {
    this.timetableService.deleteTimetable(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
