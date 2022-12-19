import { Component, OnInit } from '@angular/core';
import { StudentType } from 'src/app/student/models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      console.log(data);
      this.students = data;
    });
  }

  students: StudentType[] = [];

  deleteStudent(studentId: number) {
    console.log(studentId);
    this.studentService.deleteStudent(studentId).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
