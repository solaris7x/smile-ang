import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty, User } from 'src/app/models/user';

export class Branch{
  constructor(
    public branchName:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  public createFaculty(faculty: Faculty){
    return this.httpClient.post<Faculty>("http://localhost:3030/addStaff", faculty);
  }

  public createBranches(branch:Branch){
    return this.httpClient.post<Branch>("http://localhost:3030/addBranch", branch);
  }

}

