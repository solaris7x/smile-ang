import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from 'src/app/admin/Faculty';
import { Observable, of } from 'rxjs';

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


/* const baseUrl1='http://localhost:8081/api/add-branch';
const baseUrl2='http://localhost:8081/api/add-course'; */
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl='http://localhost:8081/admin/staff';

  constructor(private httpClient:HttpClient) { }

  getFaculty():Observable<Faculty[]>{
    console.log("test call");
    const data = this.httpClient.get<Faculty[]>(this.baseUrl + "/admin/staff")
    console.log("Get staff worked ")
    return data 
  }

  public deleteFaculty(faculty: Faculty): Observable<any> {
    return this.httpClient.delete<Faculty>(this.baseUrl + "/"+ faculty.firstName);
  }

  createFaculty(faculty: Faculty): Observable<any>{
    console.log(faculty)
    return this.httpClient.post(this.baseUrl , faculty);
  }

  getBranch(){
    console.log("test call");
    return this.httpClient.get<Branch[]>(this.baseUrl+'/admin/branch')
  }

  public deleteBranch(branch: Branch) {
    return this.httpClient.delete<Branch>(this.baseUrl + "/"+ branch.branchName);
  } 

  public createBranches(branch:Branch){
    return this.httpClient.post<Branch>("http://localhost:3030/addBranch", branch);
  }

  getCourse(){
    console.log("test call");
    return this.httpClient.get<Course[]>(this.baseUrl+'/admin/course')
  }

  public deleteCourse(course: Course) {
    return this.httpClient.delete<Course>(this.baseUrl + "/"+ course.courseName);
  } 

  public createCourses(course:Course){
    return this.httpClient.post<Course>("http://localhost:3030/addCourse", course);
  }

}

