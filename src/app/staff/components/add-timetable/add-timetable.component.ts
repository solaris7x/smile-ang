import { Component, OnInit } from '@angular/core';
import { Timetable } from '../../models/timetable';
import { TimetableService } from '../../services/timetable.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css'],
})
export class AddTimetableComponent implements OnInit {
  constructor(private timetableService: TimetableService) {}

  ngOnInit(): void {}

  model: Timetable = {
    name: '',
    course: '',
    date: '',
    time: '',
  };

  success: string | null = null;
  error: string | null = null;

  onSubmit() {
    console.log(this.model);
    this.timetableService.addTimetable(this.model).subscribe(
      (data) => {
        console.log(data);
        this.success = `Timetable saved with id ${data.id}`;
      },
      (err) => (this.error = err.message)
    );
  }
}
