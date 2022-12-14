import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { HomeComponent } from './components/home/home.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    AddStaffComponent,
    HomeComponent,
    ViewStaffComponent,
    ViewCourseComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    ViewStudentComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule],
})
export class AdminModule {}
