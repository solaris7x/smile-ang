import { ViewStaffComponent } from './view-staff/view-staff.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { HomeComponent } from './home/home.component';

export const adminRoutes: Routes = [
  /* {
    path:'',
    component:
  }, */
  {
    path: 'admin',
    component: HomeComponent
  },
  {
    path:'add-course',
    component:AddCourseComponent
  },
  {
    path:'add-branch',
    component:AddBranchComponent
  },
  {
    path:'view-staff',
    component:ViewStaffComponent
  },
  {
    path:'add-staff',
    component:AddStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes),FormsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
