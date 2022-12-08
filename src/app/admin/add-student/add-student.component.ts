import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
  model={
    firstName:'',
    lastName:'',
    id:'',
    gender:'',
    dob:'',
    phno:'',
    email:'',
    branch:'',
    course:'',
    batch:''
  }
  ngOnInit(): void {
  }
  createStudent(){
    console.log(this.model)
  }
}
