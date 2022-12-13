import { Component, OnInit } from '@angular/core';
import { Staff } from '../../models/Staff';
import { HttpClientService } from '../../services/http-client.service';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staff: Staff[] = [];

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.staffService.getStaff().subscribe((data) => {
      this.staff = data;
    });
  }
}
