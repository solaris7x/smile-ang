import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTimetableComponent } from './components/add-timetable/add-timetable.component';
import { HomeComponent } from './components/home/home.component';
import { ViewTimetableComponent } from './components/view-timetable/view-timetable.component';

const routes: Routes = [
  {
    path: 'staff',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ViewTimetableComponent,
      },
      {
        path: 'view-timetable',
        component: ViewTimetableComponent,
      },
      {
        path: 'add-timetable',
        component: AddTimetableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
