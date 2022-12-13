import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { HomeComponent } from './home/home.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ViewCourseComponent } from './view-course/view-course.component';

import { AddDepartmentComponent } from './add-department/add-department.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewDepartmentComponent } from './view-department/view-department.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    AddBranchComponent,
    AddStaffComponent,
    HomeComponent,
    ViewStaffComponent,
    ViewCourseComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule],
})
export class AdminModule {}
