export class StaffType {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public email: string,
    public phone: string,
    public experiance: string,
    public qualification: string,
    public designation: string,
    public password: string,
    public dob?: string
  ) {}
}

/* export class StaffType{
   id: string;
     firstName: string;
     lastName: string;
     gender: string;
     email: string;
     phone: string;
     experiance: string;
     qualification: string;
     designation: string;
     password: string;
     department: string;
     dob?: string;
} */
