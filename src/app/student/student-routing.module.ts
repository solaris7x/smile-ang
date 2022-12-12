import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
 
export const studentRoutes: Routes = [
  {
    path: "student",
    component: ProfileComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "timetable",
    component: TimetableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
