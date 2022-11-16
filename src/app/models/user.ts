export interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  dob?: string;
}

export interface Student extends UserType {
  batch: string;
  subjects: string[];
}

export interface Faculty extends UserType {
  department: string;
  subjects: string[];
}

export class User {
  constructor(
    public id: string,
    public name: string,
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

export class Faculty implements Faculty {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public cpassword: string,
    public subjects: string[],
    public dob?: string
  ) {}
}
