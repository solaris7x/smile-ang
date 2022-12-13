import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { HomeComponent } from './components/home/home.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
      {
        path: 'view-course',
        component: ViewCourseComponent,
      },
      {
        path: 'view-staff',
        component: ViewStaffComponent,
      },
      {
        path: 'add-staff',
        component: AddStaffComponent,
      },
      {
        path: 'add-department',
        component: AddDepartmentComponent,
      },
      {
        path: 'view-department',
        component: ViewDepartmentComponent,
      },
      {
        path: 'add-staff',
        component: AddStaffComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes), FormsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
