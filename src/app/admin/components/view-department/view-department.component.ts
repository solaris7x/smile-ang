import { Component, OnInit } from '@angular/core';
import { DepartmentType } from '../../models/department';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css'],
})
export class ViewDepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) {}

  departments: DepartmentType[] = [];
  // TODO:
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((data) => {
      // TODO: check for properties
      this.departments = data as DepartmentType[];
    });
  }
}
