import { Component, OnInit } from '@angular/core';
import { Staff } from '../../models/Staff';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staff: Staff[] = [];

  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    this.getStaff();
  }
  private getStaff() {
    this.httpService.getStaff().subscribe((data) => {
      this.staff = data;
    });
  }
}
