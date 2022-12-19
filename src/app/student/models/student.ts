export interface StudentType {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: number;
  course?: string;
  dob?: string;
}
