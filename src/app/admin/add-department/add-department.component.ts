import { Component, OnInit } from '@angular/core';
import { DepartmentType } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {}

  model: DepartmentType = {
    name: '',
    code: '',
  };

  createDepartment() {
    // console.log('createDepartment', this.model);
    const res = this.departmentService.addDepartment(this.model);
    res.subscribe((data) => console.log(data));
  }
}
