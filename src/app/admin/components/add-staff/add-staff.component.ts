import { Component, OnInit } from '@angular/core';
import { Staff } from '../../models/Staff';
import { HttpClientService } from '../../services/http-client.service';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  department: any = [
    { id: null, name: '--Select--' },
    { id: 'btech', name: 'B.Tech' },
    { id: 'mtech', name: 'M.Tech' },
    { id: 'mba', name: 'MBA' },
    { id: 'mca', name: 'MCA' },
  ];

  model = new Staff('', '', '', '', '', '', '', '', '', '', '');

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {}

  createStaff(): void {
    this.staffService.addStaff(this.model).subscribe((data) => {
      alert('staff added successfully.');
      console.log(data);
    });
    console.log(this.model);
  }
}
