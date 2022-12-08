import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    AddBranchComponent,
    AddStaffComponent,
    AddStudentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
