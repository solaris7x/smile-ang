import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from 'src/app/models/user';
import { Observable } from 'rxjs';

export class Branch{
  constructor(
    public branchName:string
  ){}
}

export class Course{
  constructor(
    public courseName:string
  ){}
}


/* const baseUrl1='http://localhost:7878/api/add-branch';
const baseUrl2='http://localhost:7878/api/add-course'; */
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl='http://localhost:2020/admin/staff';

  constructor(private httpClient:HttpClient) { }

  getFaculty():Observable<Faculty[]>{
    console.log("test call");
    return this.httpClient.get<Faculty[]>(`${this.baseUrl}`);
  }

  public deleteFaculty(faculty: Faculty) {
    return this.httpClient.delete<Faculty>(`${this.baseUrl}` + "/"+ `${faculty.firstName}`);
  }

  public createFaculty(faculty: Faculty):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, faculty);
  }

  getBranch(){
    console.log("test call");
    return this.httpClient.get<Branch[]>('http://localhost:3030/Brancs')
  }

  public deleteBranch(branch: Branch) {
    return this.httpClient.delete<Branch>("http://localhost:3030" + "/"+ `${branch.branchName}`);
  } 

  public createBranches(branch:Branch){
    return this.httpClient.post("http://localhost:3030/addBranch", branch);
  }

  getCourse(){
    console.log("test call");
    return this.httpClient.get<Course[]>('http://localhost:3030/Cours')
  }

  public deleteCourse(course: Course) {
    return this.httpClient.delete<Course>("http://localhost:3030" + "/"+ `${course.courseName}`);
  } 

  public createCourses(course:Course){
    return this.httpClient.post("http://localhost:3030/addCourse", course);
  }

}

