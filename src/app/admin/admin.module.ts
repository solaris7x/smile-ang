import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
