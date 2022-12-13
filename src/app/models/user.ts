export interface UserType {
  id: string;
  name: string;
  email: string;
  gender:string;
  password: string;
  dob?: string;
}

export interface Student extends UserType {
  batch: string;
  subjects: string[];
}

// export interface Faculty extends UserType {
//   department: string;
//   subjects: string[];
// }

export class User {
  constructor(
    /* public id:Number, */
    public name: string,
    public gender:string,
    public email: string,
    public password: string,
    public cpassword: string,
    public dob?: string
  ) {}
}

export class Student implements Student {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public cpassword: string,
    public batch: string,
    public subjects: string[],
    public dob?: string
  ) {}
}

/* export class Faculty implements Faculty {
  constructor(
    public id: string,
    public firstName:string,
    public lastName:string,
    public gender:string,
    public email: string,
    public phno:string,
    public experiance:string,
    public qualification:string,
    public designation:string,
    public password: string,
    public subjects: string[],
    public dob?: string
  ) {}
} */
