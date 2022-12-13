import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { HomeComponent } from './components/home/home.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';

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
