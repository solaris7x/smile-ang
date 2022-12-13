import { HttpClientService } from 'src/app/admin/http-client.service';
import { Faculty } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  staff: Faculty[]=[];

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getStaff();
  }
 private getStaff()
 {
    this.httpService.getFaculty().subscribe(data=> {
      this.staff=data;
  });
 }





}
