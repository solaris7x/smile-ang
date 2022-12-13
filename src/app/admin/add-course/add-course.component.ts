import { Component, OnInit } from '@angular/core';
import { CourseType } from 'src/app/admin/course';
import { CourseService } from 'src/app/admin/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  model: CourseType = {
    name: '',
    // id: '',
  };

  createCourses() {
    // console.log('createCourse', this.model);
    const res = this.courseService.addCourse(this.model);
    res.subscribe((data) => console.log(data));
  }
}