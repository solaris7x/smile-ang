import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffNavbarComponent } from './staff-navbar/staff-navbar.component';
import { StaffTimetableComponent } from './staff-timetable/staff-timetable.component';


@NgModule({
  declarations: [
    StaffProfileComponent,
    StaffNavbarComponent,
    StaffTimetableComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
