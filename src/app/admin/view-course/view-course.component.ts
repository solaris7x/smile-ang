import { HttpClientService } from '../http-client.service';
import { Component, OnInit } from '@angular/core';
import { CourseType } from '../course';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  course: CourseType[] = [];
  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.httpService.getCourse().subscribe(data => {
      this.course = data;
    });

  }
}
