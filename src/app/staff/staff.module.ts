import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddTimetableComponent } from './components/add-timetable/add-timetable.component';
import { ViewTimetableComponent } from './components/view-timetable/view-timetable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AddTimetableComponent, ViewTimetableComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, StaffRoutingModule],
})
export class StaffModule {}
