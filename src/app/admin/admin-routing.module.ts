import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { HomeComponent } from './home/home.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';

export const adminRoutes: Routes = [
  /* {
    path:'',
    component:
  }, */
  {
    path: 'admin',
    component: HomeComponent,
  },
  {
    path: 'add-course',
    component: AddCourseComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes), FormsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
