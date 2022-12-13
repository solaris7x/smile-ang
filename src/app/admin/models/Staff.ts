export class Staff {
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
    public department: string,
    public dob?: string
  ) {}
}
