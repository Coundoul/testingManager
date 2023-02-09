import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteurService {

  constructor(private http: HttpClient) { }

  postTesteur(data : any){
    return this.http.post<any>("http://localhost:3000/testeurList/", data);
  }

  getAllTesteur(){
    return this.http.get<any>("http://localhost:3000/testeurList/");
  }

  putTesteur(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/testeurList/"+id, data);
  }

  deleteTesteur(id : number){
    return this.http.delete<any>("http://localhost:3000/testeurList/"+id);
  }
}
