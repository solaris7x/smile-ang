import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor() { }

  model={
    branchName:''
  }
  ngOnInit(): void {
  }
  createBranches(){
    console.log(this.model)
  }
}
