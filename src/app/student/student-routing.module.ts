import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeesComponent } from './fees/fees.component';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
 
export const studentRoutes: Routes = [
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "fees",
    component: FeesComponent
  },
  {
    path: "profile",
    component: ProfileComponent
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
