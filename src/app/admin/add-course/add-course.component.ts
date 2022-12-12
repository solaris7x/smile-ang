import { Component, OnInit } from '@angular/core';
import { Course, HttpClientService } from 'src/app/admin/http-client.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private httpClient:HttpClientService) {
   }

  ngOnInit(): void {
  }

  model = new Course("");

  createCourses(){
    this.httpClient.createCourses(this.model).subscribe(data =>
      {
        console.log("Course added successfully")
        console.log(data)
      })
    console.log(this.model)
  }
}
