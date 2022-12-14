import { Component, OnInit } from '@angular/core';
import { StaffType } from '../../models/Staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staff: StaffType[] = [];

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.staffService.getStaff().subscribe((data) => {
      this.staff = data;
    });
  }
}
