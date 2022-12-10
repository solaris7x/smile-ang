import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService , Branch} from '../http-client.service';
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private httpClService:HttpClientService) { }

  model=new Branch("");
  ngOnInit(): void {
  }
  
  createBranches(){
    this.httpClService.createBranches(this.model).subscribe(data=>{
      alert("branch added successfully.")
      console.log(data)
    })
  }
}
