import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FeesComponent } from './fees/fees.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    ProfileComponent,
    TimetableComponent,
    FeesComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
