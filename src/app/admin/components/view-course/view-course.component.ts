import { Component, OnInit } from '@angular/core';
import { CourseType } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
})
export class ViewCourseComponent implements OnInit {
  course: CourseType[] = [];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourse().subscribe((data) => {
      this.course = data;
    });
  }
}
