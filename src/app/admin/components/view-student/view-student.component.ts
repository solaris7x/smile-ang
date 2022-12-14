import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student/models/student';
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

  students: Student[] = [];

  deleteStudent(studentId: number) {
    console.log(studentId);
  }
}
