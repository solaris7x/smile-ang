import { Component, OnInit } from '@angular/core';
import { Faculty, User } from 'src/app/models/user';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  department: any = [{id:null,name:'--Select--'},{id:'btech',name:'B.Tech'},{id:'mtech',name:'M.Tech'},
  {id:'mba',name:'MBA'},{id:'mca',name:'MCA'}]

model = new Faculty("","","","","","","","","","","")

 /* model={
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
    department:''
  } */


  constructor(private httpClService:HttpClientService) { }

  ngOnInit(): void {
  }

  createFaculty():void{
    this.httpClService.createFaculty(this.model).subscribe(data=>{
      alert("staff added successfully.")
      console.log(data)
    })
  }
}
