import { StaffTimetableComponent } from './staff-timetable/staff-timetable.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffNavbarComponent } from './staff-navbar/staff-navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"staff-navbar", component:StaffNavbarComponent},
  {path:"staff-profile", component:StaffProfileComponent},
  {path:"staff-timetable", component:StaffTimetableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
