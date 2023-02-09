import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor(private http: HttpClient) { }

  postRelease(data : any){
    return this.http.post<any>("http://localhost:3000/release/", data);
  }

  getAllRelease(){
    return this.http.get<any>("http://localhost:3000/release/");
  }

  putRelease(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/release/"+id, data);
  }

  getRelease(id : number){
    return this.http.get<any>("http://localhost:3000/release/"+id);
  }

  deleteRelease(id : number){
    return this.http.delete<any>("http://localhost:3000/release/"+id);
  }

  identifiantRelease(){
    return localStorage.getItem('id');
  }
}
