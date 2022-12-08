import { Component, OnInit } from '@angular/core';
import { Student, User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model = new User('', '','', '', '', '');
  // model = new Student('', '', '', '', '', '', ['Computer Science']);

  submitted = false;

  onSubmit() {
    console.log(this.model);
    this.submitted = true;
  }

  resetFormModel() {
    this.model = new User('', '','', '', '', '');
    // this.model = new Student('', '', '', '', '', '', ['Computer Science']);
  }

  /////// NOT SHOWN IN DOCS ///////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(regisForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }


  constructor() {}

  ngOnInit(): void {}
}
