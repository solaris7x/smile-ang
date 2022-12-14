import { Component, OnInit } from '@angular/core';
import { StaffType } from '../../models/Staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  /* department: any = [
    { id: null, name: '--Select--' },
    { id: 'btech', name: 'B.Tech' },
    { id: 'mtech', name: 'M.Tech' },
    { id: 'mba', name: 'MBA' },
    { id: 'mca', name: 'MCA' },
  ]; */


  constructor(private staffService: StaffService) {}

  model:StaffType={
    id:'',
    firstName:'',
    lastName:'',
    gender:'',
    dob:'',
    phone:'',
    email:'',
    password:'',
    experiance:'',
    qualification:'',
    designation:''
    };

  ngOnInit(): void {}

  createStaff() {
    const data={
      id:this.model.id,
    firstName:this.model.firstName,
    lastName:this.model.lastName,
    gender:this.model.gender,
    dob:this.model.dob,
    phone:this.model.phone,
    email:this.model.email,
    password:this.model.password,
    experiance:this.model.experiance,
    qualification:this.model.qualification,
    designation:this.model.designation
    };

    this.staffService.addStaff(data)
      .subscribe({
        next:(res) => {
          console.log(res);
        }
      });
    /* console.log('createStaff',this.model);
    const res=this.staffService.addStaff(this.model);
    res.subscribe((data) => console.log(data)); */
  }
}
