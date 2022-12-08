import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  /* courseList: any = ['B.Tech', 'M.Tech', 'MBA', 'MCA']
 */
  constructor() { }

  model={
    firstName:'',
    lastName:'',
    id:'',
    gender:'',
    dob:'',
    phno:'',
    email:'',
    experiance:'',
    qualification:'',
    designation:'',
    course:'',
    branch:''
  }

  ngOnInit(): void {
  }

  createFaculty(){
    console.log(this.model)
  }
}
