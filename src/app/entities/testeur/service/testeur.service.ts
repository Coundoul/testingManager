import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteurService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  postTesteur(data : any){
    return this.http.post<any>("http://localhost:9092/testeurManager", data);
  }

  getTesteur(id:number){
    return this.http.get<any>("http://localhost:9092/testeurManager/"+id);
  }

  getAllTesteur(){
    return this.http.get<any>("http://localhost:9092/testeurManager");
  }

  putTesteur(data : any, id : number){
    return this.http.put<any>("http://localhost:9092/testeurManager/"+id, data);
  }

  deleteTesteur(id : number){
    return this.http.delete<any>("http://localhost:9092/testeurManager/"+id);
  }
}
