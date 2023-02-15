import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnomalieService {

  constructor(private http: HttpClient) { }

  postAnomalie(data : any){
    return this.http.post<any>("http://localhost:9092/anomalieManager", data);
  }

  getAllAnomalie(){
    return this.http.get<any>("http://localhost:9092/anomalieManager");
  }

  putAnomalie(data : any, id : number){
    return this.http.put<any>("http://localhost:9092/anomalieManager/"+id, data);
  }

  getAnomalie(id : number){
    return this.http.get<any>("http://localhost:9092/anomalieManager/"+id);
  }

  deleteAnomalie(id : number){
    return this.http.delete<any>("http://localhost:9092/anomalieManager/"+id);
  }
}
