import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimetableComponent } from './components/timetable/timetable.component';

export const studentRoutes: Routes = [
  {
    path: 'student',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'timetable',
        component: TimetableComponent,
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
    ],
  },
  // {
  //   path: 'timetable',
  //   component: TimetableComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
